🤖 AI Meeting Agent

An AI-powered web application that converts unstructured meeting notes into clear, structured insights such as summaries, action items, and decisions.

🚀 Features

* 📝 Summarizes meeting notes
* ✅ Extracts action items
* ⚡ Identifies key decisions
* 🎯 Clean and simple user interface

🧠 Problem Statement

Meeting notes are often unstructured and difficult to analyze quickly. This project solves that by using AI to automatically extract meaningful insights, improving productivity and clarity for teams.

💡 Solution

Built an AI-powered backend service that:

* Accepts raw meeting notes
* Processes them using an LLM
* Returns structured, easy-to-read output

🛠 Tech Stack

* **Backend:** Node.js, Express
* **AI Integration:** OpenAI API
* **Frontend:** HTML, CSS, JavaScript
* **Tools:** Postman, Git

📦 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-meeting-agent.git
   ```

2. Navigate to the project folder:

   ```bash
   cd ai-meeting-agent
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your API key:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

5. Start the server:

   ```bash
   node server.js
   ```

6. Open `index.html` in your browser

---

🔌 API Endpoint

**POST /summarize**

### Request:

```json
{
  "text": "Meeting notes here"
}
```

### Response:

```json
{
  "summary": "...",
  "action_items": ["..."],
  "decisions": ["..."]
}
```

---

## 🎯 Example Use Case

Paste meeting notes into the UI → Instantly get:

* Clear summary
* Actionable next steps
* Key decisions

---


## 👨‍💻 Author

**Remy Babu**
Product Owner/ Senior BA exploring AI-powered solutions


