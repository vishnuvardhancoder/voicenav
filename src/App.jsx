import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const useVoiceNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);

  // Store the previous route and current route in refs
  const previousRoute = useRef(null); // Previous route
  const currentRoute = useRef(location.pathname); // Current route

  // Track route changes and update refs
  useEffect(() => {
    previousRoute.current = currentRoute.current; // Store current route as previous
    currentRoute.current = location.pathname; // Update current route
  }, [location]);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in your browser");
      return;
    }

    if (recognitionRef.current) return; // Already listening

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log("Heard:", text);

      if (text.includes("home")) navigate("/");
      else if (text.includes("about")) navigate("/about");
      else if (text.includes("contact")) navigate("/contact");
      else if (text.includes("previous") || text.includes("go to previous")) {
        // Navigate to the previous route if it exists
        if (previousRoute.current) {
          navigate(previousRoute.current);
        } else {
          alert("No previous page found");
        }
      }
    };

    recognition.onend = () => {
      recognition.start(); // Restart listening if stopped
    };

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  return { startListening, listening };
};

const VoiceNavigationWrapper = () => {
  const { startListening, listening } = useVoiceNavigation();

  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 10 }}>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home startListening={startListening} listening={listening} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <VoiceNavigationWrapper />
  </Router>
);

export default App;
