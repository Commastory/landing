
# 🧠 emma AI Stack PoC Template

This template deploys a complete LLM-ready environment in your own cloud using **emma**.  
It includes:

- **Ollama** — lightweight LLM backend with GPU support
- **Qdrant** — high-performance vector database
- **Streamlit UI** — simple demo interface
- **Kubernetes Autoscaler** — for CPU-based scaling

---

## 🚀 Quick Start

```bash
# 1. Install emma CLI
curl -sL https://emma.ms/install.sh | bash

# 2. Deploy the full stack
emma apply -f https://github.com/emma-platform/emma-poc-ai-template
```

---

## 📦 Stack Overview

| Component   | Image               | Purpose                        |
|------------|---------------------|--------------------------------|
| Ollama     | `ollama/ollama`     | LLM API (e.g., llama2)         |
| Qdrant     | `qdrant/qdrant`     | Vector DB for embeddings       |
| UI         | `streamlit/streamlit` | Web interface for queries      |
| Autoscaler | HPA                 | Auto scale `ollama-api` pods   |

---

## 🔍 Endpoints

- `http://<your-domain>:11434` — Ollama API
- `http://<your-domain>:6333` — Vector DB (REST)
- `http://<your-domain>:8501` — Streamlit UI

---

## 📅 Need help?

Book a 1:1 walkthrough → [emma.ms](https://emma.ms)

