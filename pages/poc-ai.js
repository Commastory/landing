export default function PocLanding() {
  return (
    <div style={{ padding: "3rem", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🚀 Deploy a full-stack AI infrastructure in your cloud
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#555", marginBottom: "2rem" }}>
        No DevOps. No YAML. Just compute.
      </p>

      <div style={{ background: "#000", color: "#0f0", padding: "1rem", borderRadius: "6px", marginBottom: "2rem", fontFamily: "monospace" }}>
        <p>$ emma apply -f emma-poc-ai-template</p>
        <p>✔ Validating emma.yaml...</p>
        <p>✔ Connecting to your cloud cluster...</p>
        <p>✔ Deploying ollama-api...</p>
        <p>✔ Deploying vector-db...</p>
        <p>✔ Deploying UI...</p>
        <p>✔ Autoscaler configured (CPU-based)</p>
        <p>✔ All systems operational</p>
      </div>

      <video controls width="100%" style={{ borderRadius: "8px", marginBottom: "2rem" }}>
        <source src="/emma-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{ marginBottom: "1.5rem" }}>
        <button style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", borderRadius: "6px", background: "#000", color: "#fff", border: "none", cursor: "pointer" }}>
          Try the Stack
        </button>
      </div>

      <div style={{ marginBottom: "2rem", color: "#888" }}>
        You’ll need emma CLI and access to your cloud (AWS, GCP, etc.).
      </div>

      <div style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Want help launching your PoC?</h2>
        <p style={{ marginBottom: "1rem" }}>Schedule a 1:1 walkthrough with the emma team — we'll show you how to customize and deploy this stack in your own environment.</p>
        <button style={{ padding: "0.5rem 1rem", borderRadius: "4px", border: "1px solid #333", background: "#fff", cursor: "pointer" }}>
          Book a Demo
        </button>
      </div>
    </div>
  );
}
