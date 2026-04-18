import { useState, useEffect } from "react";
import {
  ArrowRight,
  EyeOff,
  NavigationOff,
  LayoutTemplate,
  Smartphone,
  MousePointerClick,
  ShieldCheck,
  Zap,
} from "lucide-react";
import heroImg from "./assets/hero_spa_sage.png";
import "./App.css";

const Hero = () => (
  <section
    className="section reveal"
    style={{
      paddingTop: "100px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div style={{ maxWidth: "1000px" }}>
      <div className="badge">Based in Bern, Switzerland</div>
      <h1>
        Elevate your spa to <br />
        <span className="text-italic" style={{ color: "var(--primary)" }}>
          premium status.
        </span>
      </h1>
      <p style={{ marginTop: "32px", fontSize: "1.5rem", lineHeight: 1.4 }}>
        I redesign spa websites in Bern so visitors instantly{" "}
        <span style={{ color: "var(--text)", fontWeight: 600 }}>trust you</span>
        , feel relaxed, and actually book — instead of leaving.
      </p>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <a href="#audit" className="btn btn-primary">
          Get Free Homepage Audit{" "}
          <ArrowRight size={20} style={{ marginLeft: "12px" }} />
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--stone)",
              border: "2px solid white",
            }}
          ></div>
          <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            ✨ 25% off first project
          </span>
        </div>
      </div>
    </div>

    <div
      style={{
        marginTop: "80px",
        borderRadius: "40px",
        overflow: "hidden",
        height: "500px",
        width: "100%",
        position: "relative",
      }}
    >
      <img
        src={heroImg}
        alt="Minimalist Spa Design"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="glass"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          padding: "32px",
          borderRadius: "24px",
          maxWidth: "300px",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Bern Local</h3>
        <p style={{ fontSize: "1rem", margin: 0 }}>
          Specialized strategy for the local Bernese wellness market.
        </p>
      </div>
    </div>
  </section>
);

const ProblemBento = () => (
  <section className="section">
    <div style={{ marginBottom: "64px" }}>
      <h2 style={{ maxWidth: "700px" }}>
        Why your current website <br />
        is{" "}
        <span className="text-italic" style={{ color: "var(--secondary)" }}>
          losing you money.
        </span>
      </h2>
    </div>

    <div className="grid-bento">
      <div
        className="bento-card"
        style={{
          gridColumn: "span 8",
          background: "var(--primary)",
          color: "white",
        }}
      >
        <EyeOff
          size={40}
          style={{ marginBottom: "24px", color: "var(--secondary)" }}
        />
        <h3 style={{ color: "white", fontSize: "2rem", marginBottom: "16px" }}>
          Lack of Unique Identity
        </h3>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.2rem" }}>
          Most spa websites in Bern look the same. Visitors don't clearly see
          why they should choose you over the competition.
        </p>
      </div>

      <div className="bento-card" style={{ gridColumn: "span 4" }}>
        <Smartphone
          size={32}
          style={{ marginBottom: "24px", color: "var(--primary)" }}
        />
        <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
          Mobile Friction
        </h3>
        <p style={{ fontSize: "1rem" }}>
          {" "}
          Frustrating mobile experiences lose 60% of potential bookings.
        </p>
      </div>

      <div className="bento-card" style={{ gridColumn: "span 4" }}>
        <NavigationOff
          size={32}
          style={{ marginBottom: "24px", color: "var(--primary)" }}
        />
        <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
          Hidden Booking
        </h3>
        <p style={{ fontSize: "1rem" }}>
          Confusing navigation makes visitors leave before they find the 'Book
          Now' button.
        </p>
      </div>

      <div
        className="bento-card"
        style={{ gridColumn: "span 8", borderColor: "var(--secondary)" }}
      >
        <LayoutTemplate
          size={32}
          style={{ marginBottom: "24px", color: "var(--primary)" }}
        />
        <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
          Low Trust Design
        </h3>
        <p style={{ fontSize: "1.1rem" }}>
          If your design doesn't reflect a calm, premium experience, visitors
          won't trust you with their relaxation.
        </p>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section
    className="section"
    style={{
      background: "var(--primary)",
      borderRadius: "60px",
      color: "white",
    }}
  >
    <div className="grid-bento">
      <div style={{ gridColumn: "span 6" }}>
        <h2 style={{ color: "white" }}>
          The Solution: <br />
          <span className="text-italic" style={{ color: "var(--secondary)" }}>
            Strategic Redesign
          </span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "24px" }}>
          I help spa businesses in Bern turn their website into a client-booking
          engine by focusing on the "First Impression" economy.
        </p>
      </div>
      <div
        style={{
          gridColumn: "span 6",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {[
          {
            title: "Visit → Booking",
            text: "A friction-free journey from the first click to a confirmed appointment.",
          },
          {
            title: "First Impression",
            text: "Instant psychological trust established through premium, calm aesthetics.",
          },
          {
            title: "Mobile Optimized",
            text: "Flawless experience on every device, especially smartphones.",
          },
          {
            title: "Brand Alignment",
            text: "Design that actually reflects the soul of your physical spa.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              borderLeft: "2px solid var(--secondary)",
              paddingLeft: "20px",
            }}
          >
            <h4 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
              {item.title}
            </h4>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OutcomesBento = () => (
  <section className="section" style={{ paddingBottom: "0" }}>
    <div style={{ textAlign: "center", marginBottom: "64px" }}>
      <h2>
        What you actually{" "}
        <span className="text-italic" style={{ color: "var(--primary)" }}>
          gain.
        </span>
      </h2>
    </div>

    <div className="grid-bento">
      {[
        {
          icon: <MousePointerClick />,
          title: "More Bookings",
          text: "Your visitors don't hesitate — they act. Clear, persuasive CTAs.",
          size: "span 3",
        },
        {
          icon: <ShieldCheck />,
          title: "Instant Trust",
          text: "High-quality design reflects the quality of your services.",
          size: "span 3",
        },
        {
          icon: <Smartphone />,
          title: "Better Mobile",
          text: "Easy booking from the phone is where 80% of your clients are.",
          size: "span 3",
        },
        {
          icon: <Zap />,
          title: "Independence",
          text: "Less reliance on third-party booking platforms.",
          size: "span 3",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bento-card"
          style={{
            gridColumn: item.size,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ color: "var(--primary)", marginBottom: "24px" }}>
            {item.icon}
          </div>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "12px" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="section">
    <div className="grid-bento">
      <div style={{ gridColumn: "span 4" }}>
        <h2>
          How we grow <br />
          your <span className="text-italic">business.</span>
        </h2>
      </div>
      <div style={{ gridColumn: "span 8", display: "grid", gap: "48px" }}>
        {[
          {
            step: "01",
            title: "Apply & Send",
            text: "You send your website link for a manual review.",
          },
          {
            step: "02",
            title: "Personal Audit",
            text: "I personally review where you are losing clients.",
          },
          {
            step: "03",
            title: "Strategy Call",
            text: "You get clear ideas and a specific plan to improve.",
          },
          {
            step: "04",
            title: "Execution",
            text: "If you like the plan, we build it together (with 25% off).",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}
          >
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--stone)",
              }}
            >
              {item.step}
            </span>
            <div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "1.1rem", margin: 0 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Audit = () => (
  <section id="audit" className="section">
    <div
      className="bento-card"
      style={{
        background: "white",
        padding: "80px 5vw",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
      }}
    >
      <div>
        <div className="badge">Limited Slots in Bern</div>
        <h2>
          Ready for more <br />
          <span className="text-italic">bookings?</span>
        </h2>
        <p style={{ marginTop: "24px" }}>
          I’ll personally review your homepage and show you exactly where you're
          losing clients. Short, clear, and practical.
        </p>
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="text"
          placeholder="Full name"
          style={{
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid var(--stone)",
            background: "var(--bg)",
            outline: "none",
          }}
        />
        <input
          type="email"
          placeholder="Work email"
          style={{
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid var(--stone)",
            background: "var(--bg)",
            outline: "none",
          }}
        />
        <input
          type="url"
          placeholder="Website URL"
          style={{
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid var(--stone)",
            background: "var(--bg)",
            outline: "none",
          }}
        />
        <button
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "8px" }}
        >
          Request My Free Audit
        </button>
      </form>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section grid-bento">
    <div
      className="bento-card"
      style={{ gridColumn: "span 5", overflow: "hidden", padding: 0 }}
    >
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sahed&backgroundColor=d4d9c8"
        alt="Sahed"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div
      className="bento-card"
      style={{ gridColumn: "span 7", justifyContent: "center" }}
    >
      <h2 style={{ marginBottom: "24px" }}>
        Hi, I’m Sahed. <br />
        <span
          className="text-italic"
          style={{ fontSize: "1.5rem", fontWeight: 400 }}
        >
          Designer & Strategist
        </span>
      </h2>
      <p style={{ maxWidth: "none", fontSize: "1.2rem" }}>
        I focus on creating high-converting experiences for service-based
        businesses. My goal is simple: make your website your best employee.
        Based in Bern, I specialize in helping local spas transition to a
        premium digital presence.
      </p>
    </div>
  </section>
);

function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Hero />
      <ProblemBento />
      <Solution />
      <OutcomesBento />
      <Process />
      <Audit />
      <About />
    </div>
  );
}

export default App;
