
import streamlit as st
import requests

st.set_page_config(page_title="emma AI PoC", layout="wide")
st.title("💬 LLM Chat + Vector Search")

llm_url = "http://ollama-api:11434"
vector_db_url = "http://vector-db:6333"

query = st.text_input("Enter your question")

if query:
    with st.spinner("Calling LLM..."):
        try:
            # Simulated call to LLM (would be a POST to /api/generate or similar)
            response = requests.post(f"{llm_url}/api/generate", json={"prompt": query})
            data = response.json()
            st.success("LLM Response:")
            st.write(data.get("response", "No response"))
        except Exception as e:
            st.error(f"Error calling LLM: {e}")

    st.markdown("---")
    st.markdown("### Vector DB Lookup (simulated)")
    try:
        # Simulated GET (replace with actual vector DB query)
        resp = requests.get(f"{vector_db_url}/collections")
        st.json(resp.json())
    except Exception as e:
        st.error(f"Error querying vector DB: {e}")
