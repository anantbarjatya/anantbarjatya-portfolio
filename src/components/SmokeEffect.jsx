import { useEffect, useRef } from "react";

export default function SmokeEffect() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        let lastX = 0;
        let lastY = 0;
        let lastSpawn = 0;

        const createSmoke = (x, y) => {
            const smoke = document.createElement("div");

            const size = 22 + Math.random() * 35;

            smoke.style.position = "fixed";
            smoke.style.left = `${x}px`;
            smoke.style.top = `${y}px`;

            smoke.style.width = `${size}px`;
            smoke.style.height = `${size}px`;

            smoke.style.borderRadius = "50%";

            smoke.style.background = `
        radial-gradient(
          circle,
          rgba(190, 190, 190, 0.40) 0%,
          rgba(160, 160, 160, 0.30) 28%,
          rgba(130, 130, 130, 0.18) 48%,
          rgba(100, 100, 100, 0.08) 65%,
          transparent 78%
        )
      `;

            smoke.style.filter = "blur(5px)";
            smoke.style.pointerEvents = "none";
            smoke.style.zIndex = "999";
            smoke.style.transform =
                "translate(-50%, -50%) scale(0.3)";

            container.appendChild(smoke);

            const driftX =
                (Math.random() - 0.5) * 100;

            const driftY =
                -30 - Math.random() * 90;

            const duration =
                1000 + Math.random() * 900;

            const animation = smoke.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "translate(-50%, -50%) scale(0.3)",
                    },
                    {
                        opacity: 0.75,
                        transform:
                            "translate(-50%, -50%) scale(0.9)",
                    },
                    {
                        opacity: 0,
                        transform: `
              translate(
                calc(-50% + ${driftX}px),
                calc(-50% + ${driftY}px)
              )
              scale(2.5)
            `,
                    },
                ],
                {
                    duration,
                    easing: "ease-out",
                    fill: "forwards",
                }
            );

            animation.onfinish = () => {
                smoke.remove();
            };
        };

        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;

            const dx = x - lastX;
            const dy = y - lastY;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );

            if (distance < 2) return;

            const now = performance.now();

            if (now - lastSpawn < 12) return;

            lastSpawn = now;

            const count = Math.min(
                12,
                Math.max(3, Math.floor(distance / 7))
            );

            for (let i = 0; i < count; i++) {
                const progress = i / count;

                const px =
                    lastX +
                    dx * progress +
                    (Math.random() - 0.5) * 18;

                const py =
                    lastY +
                    dy * progress +
                    (Math.random() - 0.5) * 18;

                createSmoke(px, py);
            }

            lastX = x;
            lastY = y;
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            container.innerHTML = "";
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="
        fixed
        inset-0
        pointer-events-none
        overflow-hidden
      "
            style={{
                zIndex: 999,
            }}
        />
    );
}