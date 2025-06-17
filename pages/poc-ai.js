export default function PocLanding() {
  return (
    <div style={{ padding: "3rem", maxWidth: "880px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem" }}>
        Build. Scale. Ship AI Infrastructure —
        <br />
        <span style={{ color: "#4f46e5" }}>without touching YAML.</span>
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "2.5rem" }}>
        Launch production-ready AI workloads in your cloud with full orchestration, autoscaling, and GPU support — all in one CLI.
      </p>

      <div style={{
        background: "#111",
        color: "#0f0",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "0.95rem",
        marginBottom: "2rem"
      }}>
        <p>emma@cloud:~$ emma apply -f emma-poc-ai-template</p>
        <p>✔ Validating emma.yaml...</p>
        <p>✔ Connecting to your cloud cluster...</p>
        <p>✔ Deploying ollama-api...</p>
        <p>✔ Deploying vector-db...</p>
        <p>✔ Deploying UI...</p>
        <p>✔ Autoscaler configured (CPU-based)</p>
        <p>✔ All systems operational</p>
      </div>

      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "2rem"
      }}>
        <img src="/thumbnail.jpg" alt="emma walkthrough preview" width="100%" />
        <div style={{
          padding: "0.75rem 1rem",
          background: "#f8f8f8",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#666"
        }}>
          ▶︎ Watch 1:47 CLI walkthrough (emma-demo.mp4)
        </div>
      </div>

      <div style={{
        marginBottom: "3rem",
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap"
      }}>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", lineHeight: 1.7 }}>
          <li>✅ Instant LLM deployment in your cloud</li>
          <li>✅ GPU autoscaling + Vector DB integration</li>
          <li>✅ GitOps-ready and secret-safe</li>
          <li>✅ Works with AWS, GCP, and on-prem</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <button style={{
          padding: "0.9rem 1.8rem",
          fontSize: "1.1rem",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Try the Stack →
        </button>
      </div>

      <div style={{
        textAlign: "center",
        paddingTop: "3rem",
        borderTop: "1px solid #eee",
        marginTop: "4rem"
      }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Ready to try emma on your stack?</h2>
        <button style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          background: "#4f46e5",
          color: "#fff",
          borderRadius: "8px",
          border: "none"
        }}>
          Book a Live Walkthrough →
        </button>
      </div>
    </div>
  );
}
