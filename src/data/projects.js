export const projects = [
  {
    id: "fitfuel-planner",
    title: "FitFuel Planner",
    description: "AI-powered nutrition assistant that analyzes food products using barcode scanning, ingredient evaluation, allergen detection, nutrition insights, healthier alternatives, and personalized meal planning.",
    longDescription: "FitFuel Planner is a comprehensive AI-driven health and wellness application. By combining the Open Food Facts API with Google's Gemini AI, the platform acts as an intelligent nutritionist. Users can scan product barcodes or search ingredients to get an in-depth health analysis, allergen highlights, and custom meal recommendations tailored to their body index and health goals.",
    image: "/images/fitfuel.png",
    featured: true,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Open Food Facts API"],
    categories: ["Full Stack", "React", "AI", "JavaScript"],
    features: [
      "Barcode Scanner: Fast product barcode detection for quick lookup.",
      "AI Ingredient Analyzer: Automated ingredient checking using Google Gemini AI.",
      "Nutrition Analysis: Grading ingredients and overall product health score.",
      "Allergen Detection: Visual warnings for user-configured allergens.",
      "Smart Recommendations: Proposes healthier alternatives dynamically.",
      "AI Nutrition Coach: Interactive assistant for dietary questions.",
      "Personalized Meal Planning: Generates balanced meals based on profile.",
      "Healthy Alternatives: Instantly suggests cleaner replacements."
    ],
    githubLink: "https://github.com/souravrana06/fitfuel-planner",
    liveLink: "https://fitfuel-planner.vercel.app/"
  },
  {
    id: "medical-chatbot",
    title: "AI-Powered Medical Chatbot",
    description: "Medical chatbot providing evidence-based healthcare information using textbook-based datasets and AI models.",
    longDescription: "An advanced LLM-powered assistant trained/fine-tuned on medical reference literature. It parses user queries to explain symptoms, suggest medical guidelines, extract context from uploaded PDF reports, and deliver reliable medical knowledge queries while providing clear disclaimers that it doesn't replace professional medical advice.",
    image: "/images/medical_chatbot.png",
    featured: false,
    techStack: ["Python", "Hugging Face", "LLMs", "LangChain", "Vector DB"],
    categories: ["Machine Learning", "AI"],
    features: [
      "Medical Knowledge Base: Indexed dataset of reputable medical textbooks.",
      "AI Query Engine: Semantic search and generation utilizing Hugging Face Transformers.",
      "PDF Processing: Ability to parse clinical papers or test reports.",
      "Healthcare Information: Accurate, readable information on symptoms and treatments."
    ],
    githubLink: "https://github.com/souravrana06/medical-chatbot",
    liveLink: "https://medical-chatbot-demo.vercel.app/"
  },
  {
    id: "class-scheduler",
    title: "Automatic Class Scheduler",
    description: "Web-based class scheduling and reminder platform for students and faculty.",
    longDescription: "A smart scheduling coordinator designed to prevent class conflicts for university students and teachers. It allows interactive timetable drag-and-drop, automates the generation of optimized schedules, and dispatches automated notifications and reminders before sessions start.",
    image: "/images/class_scheduler.png",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage", "Service Workers"],
    categories: ["JavaScript"],
    features: [
      "Schedule Management: Visual interface to map classrooms, subjects, and hours.",
      "Timetable Generation: Algorithmic scheduling minimizing overlaps.",
      "Automated Reminders: Browser push notifications via Service Workers."
    ],
    githubLink: "https://github.com/souravrana06/automatic-class-scheduler",
    liveLink: "https://class-scheduler-demo.vercel.app/"
  }
];
