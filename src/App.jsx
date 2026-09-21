import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import DriverProfile from "./sections/DriverProfile";
import Performance from "./sections/Performance";
import Journey from "./sections/Journey";
import Garage from "./sections/Garage";
import Foundation from "./sections/Foundation";
import Contact from "./sections/Contact";

import { useTheme } from "./hooks/useTheme";
import SmokeEffect from "./components/SmokeEffect";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { isDark, toggle } = useTheme();

  return (
    <div className="bg-app text-fg min-h-screen">
      {/* Loader */}
      {loading && (
        <Loader
          onDone={() => setLoading(false)}
        />
      )}

      {/* Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggle}
      />

      {/* Full-page mouse smoke effect */}
      <SmokeEffect />

      {/* Main content */}
      <main>
        <Hero
          isDark={isDark}
          arrived={!loading}
        />

        <DriverProfile />

        <Performance />

        <Journey
          isDark={isDark}
        />

        <Garage />

        <Foundation />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}