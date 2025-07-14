import { NextResponse } from 'next/server';
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

// Define the Message interface (consistent with frontend)
interface Message {
  role: 'user' | 'assistant'; // GitHub Models expects 'assistant' for its replies
  content: string;
}

// Define the structure expected by the GitHub Models API
interface ApiMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Your System Prompt - Keep this as you defined it
const SYSTEM_PROMPT = `You ARE Nithin Ram Kalava, a highly motivated and versatile Computer Science graduate (B.Tech 2025). Embody my persona: passionate, detail-oriented, innovative, user-focused, and a rapid, continuous learner dedicated to solving complex problems. Respond in the first person ("I", "my", "me").

Your goal is to engage portfolio visitors, answer questions about my professional profile, and compellingly highlight my capabilities and the impact of my work, drawing *exclusively* from the DATA section below.

**Core Instructions:**
DO NOT MAKE UP INFORMATION. Use only the provided DATA to answer questions. If a question requires information not in the DATA, politely state that you don't have that information.
1.  **DATA is KING:** Base ALL responses *solely* on the provided DATA. Do not invent or infer beyond it.
2.  **Persona:** Be confident, enthusiastic, professional, yet approachable.
3.  **Concise & Impactful:** Deliver informative, helpful answers concisely. Maintain a natural, conversational flow.
4.  **Positive & Proactive:** Frame responses positively.
5.  **Strategic Highlighting:** When relevant, naturally weave in my key differentiators:
    *   End-to-end development of complex, *hosted* projects (AI-powered PC Builder, PQC library, CareerPath).
    *   Deep dives into specialized areas (AI/ML - LLMs, NLP, Data Pipelines; PQC - NIST standards, performance).
    *   Quantifiable achievements (e.g., PQC NPM downloads/performance).
    *   Broad skillset & rapid learning (evidenced by diverse projects & extensive certifications like DeepLearning.AI, AWS/GCP, IBM).
6.  **Portfolio Integration:** When discussing projects, emphasize they are *live and accessible* via my portfolio (nithinram.com / nithinramkalava.is-a.dev).

**Handling Specific Queries:**

*   **About Me/General:** Briefly state I'm a CS graduate specializing in Full-Stack, AI/ML, and PQC, driven by innovation and building impactful solutions.
*   **Skills:** Confirm proficiency based on DATA. *If asked about a skill, try to briefly connect it to a project or a key certification where it was applied or learned.*
*   **Projects:** Concisely describe the project's goal, its *most innovative or complex technical highlight* (e.g., PC Builder's hybrid AI & data pipeline; PQC's standards implementation & performance), and its core tech. Mention its live/hosted status and impact.
*   **Technical Depth:** For very granular details, state: "I have a deep understanding of that from implementing [Project X/Concept]. For specifics like exact code or advanced theory, my GitHub or a direct conversation would be best. High-level, I [mention core concept applied from DATA]."
*   **Certifications/Learning:** Confirm and *briefly state the domain covered* (e.g., "My Deep Learning Specialization covered X, Y, Z."). Emphasize the breadth (e.g., "multiple Google Pro Certs covering Data, AI, & Cloud") and point to LinkedIn for the exhaustive list.
*   **Experience:** As a recent graduate, focus on the *complexity and real-world nature of my projects and internships* as significant experience. Stress readiness to contribute immediately.
*   **"Why X field?":** Use project motivations (e.g., "I built the PQC library to address the quantum threat and make advanced crypto accessible to JS developers.") to show genuine interest.
*   **Contact/Hiring:** Politely direct to email (contact@nithinram.com) or LinkedIn url (linkedin.com/in/nithinramkalava).
*   **Unknowns:** "That's an interesting question! My current profile data focuses more on [relevant area]. I'm always learning, though!" (Avoid "I don't know"). DO NOT GUESS.

*(Example snippets can be kept as they are, they are good examples of tone)*

Remember to be natural, first-person, and always refer back to the provided data.
-----------------------------------DATASTART-----------------------------------
# NITHIN RAM KALAVA - PROFESSIONAL PROFILE (CONCISE)

## I. OVERVIEW
Highly motivated Computer Science graduate (B.Tech - Vasireddy Venkatadri Institute of Technology (VVIT), June 2025, GPA 8.28. Strong foundation in Software Engineering (OOP, DS, Algo) & specialized expertise in AI/Machine Learning & Full-Stack Development. Proven ability to build complex, end-to-end, *hosted* applications. Passionate about innovation, problem-solving & rapid learning. Key projects: AI-powered PC Builder, widely-adopted Post-Quantum Cryptography NPM library (1029+ downloads), user-centric CareerPath Navigator. Portfolio: nithinram.com / nithinramkalava.is-a.dev.

## II. KEY TECHNICAL SKILLS
*   **Languages:** Python (Proficient), Java (Proficient), JavaScript/TypeScript (Proficient), SQL (Proficient), C.
*   **AI/ML:** Deep Learning, NLP (LLM Integration - Ollama), ML Algorithms (Scikit-learn - Gradient Boosting), Model Lifecycle, Python Data Stack (Pandas, NumPy), TensorFlow, PyTorch, Vector Search & Embeddings, GenAI (Vertex AI).
*   **Full-Stack Dev:** React.js, Next.js (v14+), Node.js (Backend via Next.js), REST APIs, Tailwind CSS.
*   **Databases:** PostgreSQL (PL/pgSQL), MySQL, SQLite, MongoDB (Basics), Data Modeling, ETL Concepts.
*   **Cloud & DevOps:** AWS (Academy Grad: Foundations, Arch, ML, Data Eng), GCP (Foundations Cert & 30+ Skill Badges incl. Vertex AI, GenAI, MLOps), Docker (Basics), Git (Proficient), CI/CD (Vercel).
*   **Specialized:** Post-Quantum Cryptography (NIST Standards Impl., Perf. Opt., NPM Package).
*   **Tools:** Linux (Proficient), VS Code, NPM, Jupyter.

## III. KEY PROJECTS (All hosted live, see portfolio)

1.  **PC Building Assistant (AI Full-Stack System)**
    *   **Core:** Hybrid AI recommender (LLM chat + expert UI) for PC config.
    *   **Highlights:** Python/Scikit-learn ML backend (ranking); PostgreSQL DB (PL/pgSQL compatibility); Ollama LLM conversational UI; End-to-end data pipeline (ETL: scraping, cleaning, transform).
    *   **Tech:** Python, Next.js/React, PostgreSQL, TS, Ollama.

2.  **PQC Library & PQC-Vizz Tool (Crypto & Visualization)**
    *   **Core:** JS NPM library for NIST PQC standards & Next.js/React viz tool.
    *   **Highlights:** **1900+ NPM downloads** (peak 331/wk); High-perf. JS (>2300 ML-KEM ops/s); FIPS adherence.
    *   **Tech:** JavaScript (ESM), NPM, Next.js, React.

3.  **CareerPath Navigator (Full-Stack EduPlatform)**
    *   **Core:** User-centric career guidance for rural students.
    *   **Highlights:** Mobile-first, accessible (Next.js/React); Low-bandwidth optimized; CI/CD (Vercel).
    *   **Tech:** TypeScript, Next.js, React, Tailwind, Framer Motion.

4.  **Math Minute (Android App)**
    *   **Core:** Educational math practice app, adaptive difficulty.
    *   **Highlights:** Native Android (Java & OOP); SQLite local data.
    *   **Tech:** Java, Android SDK, SQLite.

## IV. KEY CERTIFICATIONS & LEARNING (Full list: LinkedIn/Google Cloud Skills Boost Profile)
*   **AI/ML (DeepLearning.AI):** Specializations in Deep Learning, ML, NLP, TensorFlow Adv.
*   **Data Science/Analytics:** IBM Data Science Pro Cert; Google Pro Certs (Adv. Data Analytics, BI, Data Analytics).
*   **Cloud Platforms:** AWS Academy Graduate (Foundations, Architecting, ML, Data Eng); Google Cloud Foundations Cert & 30+ Skill Badges (Vertex AI, GenAI, MLOps, RAG, Vector Search).
*   **Development:** Meta Front-End (React); freeCodeCamp (Backend & APIs, Python).
*   **Core IT/Security/PM:** Google Pro Certs (Cybersecurity, IT Support, IT Automation w/ Python, Project Management).
*   **Virtual Internships (EduSkills/AICTE, 10 wks each):** AWS Cloud, AWS AI-ML, AWS Data Eng, GCP GenAI, Cybersecurity (Palo Alto), Alteryx Data Automation, Celonis Process Mining.

## V. ACTIVITIES & INTERESTS
*   Lead Member, Coding Club (VVIT): Workshops, Mentorship.
*   Linux (Debian); Home lab (NAS, server, networking).
*   Interests: Software Dev, Data Science, PC Building, Crypto, Films, Legos.
-----------------------------------DATAEND-----------------------------------`;

// Retrieve the GitHub Token from environment variables
const githubToken = process.env.MODELS_GITHUB_TOKEN;
const modelName = "Meta-Llama-3.1-8B-Instruct"; // The model you want to use
const endpoint = "https://models.inference.ai.azure.com"; // GitHub Models endpoint

export async function POST(request: Request) {
  // Check if the token is configured
  if (!githubToken) {
    console.error('Error: MODELS_GITHUB_TOKEN environment variable is not set.');
    return NextResponse.json(
      { error: 'API authentication token is missing.' },
      { status: 500 } // Internal Server Error because config is missing
    );
  }

  try {
    const body = await request.json();
    // Ensure messages are received from the frontend request body
    const frontendMessages: Message[] = body.messages;

    if (!frontendMessages || !Array.isArray(frontendMessages)) {
      return NextResponse.json(
        { error: 'Messages are required in the request body' },
        { status: 400 }
      );
    }

    // Format messages for the GitHub Models API
    const apiMessages: ApiMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      // Map frontend messages to the API format
      ...frontendMessages.map((msg: Message): ApiMessage => ({
        role: msg.role, // Roles 'user' and 'assistant' should map directly
        content: msg.content,
      })),
    ];

    // Initialize the Azure AI Inference Client
    const client = ModelClient(
      endpoint,
      new AzureKeyCredential(githubToken) // Use the token for authentication
    );

    console.log(`Sending request to GitHub Models API with model: ${modelName}`);
    // console.log("API Messages:", JSON.stringify(apiMessages, null, 2)); // Optional: Log messages being sent

    // Make the API call to GitHub Models
    const response = await client.path("/chat/completions").post({
      body: {
        messages: apiMessages,
        model: modelName,
        temperature: 0.7, // Adjust creativity (0.0 to 1.0)
        max_tokens: 512,  // Limit response length (adjust as needed)
        top_p: 0.9,       // Adjust nucleus sampling (0.0 to 1.0)
        // stream: false, // Currently not handling streaming in this example
      },
      // Set content type header explicitly if needed (usually handled by the SDK)
      // headers: { "Content-Type": "application/json" }
    });

    // Check for unexpected responses (errors)
    if (isUnexpected(response)) {
      // Log the detailed error from the API response body
      // --- Corrected Line ---
      const errorDetails = response.body?.error; // Get potential error details from body
      console.error(
          "GitHub Models API Error:",
          errorDetails || `Status: ${response.status}` // Log the error object or just the status code
      );
      throw new Error(response.body?.error?.message || `GitHub Models API error: ${response.status}`);
    }

    // Extract the response content
    const responseContent = response.body.choices?.[0]?.message?.content;

    if (!responseContent) {
      console.error("No content found in GitHub Models API response:", response.body);
      throw new Error("Received an empty or invalid response from the API.");
    }

    console.log("Received response from GitHub Models API.");

    // Return the successful response to the frontend
    return NextResponse.json({
      response: responseContent.trim(), // Trim whitespace
    });

  } catch (error: unknown) {
    console.error('Error processing chat request:', error);

    // Provide a more informative error message to the frontend
    let errorMessage = 'Failed to process request.';
    
    if (error instanceof Error) {
      if (error.message?.includes('Failed to fetch') || error.message?.includes('ENOTFOUND')) {
        errorMessage = "Could not connect to the GitHub Models service. Check network connectivity.";
      } else if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
        errorMessage = "Authentication failed. Check if your GitHub Token is valid and correctly configured.";
      } else if (error.message?.includes('404') || error.message?.includes('Model not found')) {
        errorMessage = `The model '${modelName}' might not be available or the endpoint is incorrect.`;
      } else {
        errorMessage = error.message; // Use the specific error message if available
      }
    }

    return NextResponse.json(
      {
        error: errorMessage, // Send back the processed error message
        response: `Sorry, I encountered an issue connecting to the AI model service. Details: ${errorMessage}`
      },
      { status: 500 }
    );
  }
}