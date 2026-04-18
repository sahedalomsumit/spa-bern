import { useState } from "react";
import AppEn from "./AppEn";
import AppDe from "./AppDe";
import AppIt from "./AppIt";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const CurrentApp = {
    en: AppEn,
    de: AppDe,
    it: AppIt,
  }[lang];

  const flags = {
    en: "https://flagcdn.com/gb.svg",
    de: "https://flagcdn.com/de.svg",
    it: "https://flagcdn.com/it.svg",
  };

  return (
    <>
      <CurrentApp />

      <div
        style={{
          position: "fixed",
          bottom: "40px",
          left: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          zIndex: 9999,
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="glass"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                padding: "8px",
                gap: "4px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                border: "1px solid var(--stone)"
              }}
            >
              {[
                { id: "en", label: "English" },
                { id: "de", label: "Deutsch" },
                { id: "it", label: "Italiano" },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    setLang(l.id);
                    setIsOpen(false);
                  }}
                  style={{
                    background: lang === l.id ? "var(--primary)" : "transparent",
                    color: lang === l.id ? "white" : "var(--text)",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: lang === l.id ? 600 : 500,
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--sans)",
                    fontSize: "0.95rem",
                    transition: "all 0.2s"
                  }}
                >
                  <img src={flags[l.id]} alt="" style={{ width: "20px", height: "15px", objectFit: "cover", borderRadius: "2px", boxShadow: "0 1px 2px rgba(0,0,0,0.15)", flexShrink: 0 }} />
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="glass"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1.5px solid var(--stone)",
            cursor: "pointer",
            color: "var(--text)",
            boxShadow: "var(--shadow-sm)",
            fontSize: "1.5rem",
          }}
          aria-label="Change Language"
        >
          <img src={flags[lang]} alt="" style={{ width: "26px", height: "18px", objectFit: "cover", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)", flexShrink: 0 }} />
        </motion.button>
      </div>
    </>
  );
}
