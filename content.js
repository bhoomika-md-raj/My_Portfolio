/* ============================================================
   PORTFOLIO CONTENT — edit this file only.
   You never need to touch index.html, style.css, or app.js.

   Rules for editing safely:
   - Keep the quotes "like this" around every piece of text.
   - Keep the commas between items.
   - To add a new project/certificate/etc., copy an existing
     { ... } block, paste it above the closing ], and edit it.
   - To remove one, delete its whole { ... } block (and the
     comma that follows it, if it was the last one).
   - Leave a value as "" (empty quotes) if you don't have it yet.
   ============================================================ */

const PORTFOLIO = {

  // ---------- TOP OF PAGE ----------
  name: "Bhoomika M D",
  role: "Information Science & Engineering Graduate",
  location: "Shivamogga, Karnataka, India",
  tagline: "Information Science & Engineering graduate building practical, data-driven solutions across AI/ML, web development, and analytics.",

  // Put a direct image URL here to show a real photo instead of your initials.
  photo: "images/profile.png",

  // Put a link to your resume PDF here (e.g. a Google Drive or GitHub link) to show a "Download Resume" button. Leave "" to hide it.
  resumeUrl: "",

  // ---------- CONTACT ----------
  email: "bhoomikabhoomika6386@gmail.com",
  phone: "7019723113",
  linkedin: "https://linkedin.com/in/bhoomika-md",
  github: "https://github.com/bhoomika-md",

  // ---------- ABOUT ----------
  summary: "Motivated and detail-oriented Information Science and Engineering graduate with Honours and a strong academic record. Hands-on experience building AI-driven and data-centric solutions through academic projects and internship training — passionate about continuous learning and using technology to build practical, impactful solutions.",

  // Quick-read stats shown as a "vitals" strip near the top.
  vitals: [
    { label: "CGPA", value: "9.40", note: "B.E. ISE, VTU" },
    { label: "Awards", value: "3", note: "Best Outgoing Student & 2× Class Topper" },
    { label: "Certifications", value: "6", note: "NPTEL · Intel DIYA · NxtWave" },
    { label: "Projects", value: "3", note: "AI/ML, web, and data analytics builds" }
  ],

  // ---------- MY WORKS (posters, designs, Canva/graphic work) ----------
  // Add one block per design. "image" should point to a file in an
  // "images" folder next to index.html (e.g. "images/poster1.jpg"),
  // or a direct image URL. Leave image: "" to show an empty placeholder
  // until you add the file.
  works: [
    { title: "AyuSense — KSCST Poster Presentation", category: "Research Poster", image: "images/ayusense-kscst-poster.jpg" },
    { title: "AyuSense — Project Exhibition Poster", category: "Project Poster", image: "images/ayusense-exhibition-poster.jpg" },
    { title: "Tourism Promotion Through Innovative Approaches I", category: "Design Poster", image: "images/tourism-promotion-poster-1.jpg" },
    { title: "Tourism Promotion Through Innovative Approaches II", category: "Design Poster", image: "images/tourism-promotion-poster-2.jpg" }
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      org: "QSpiders (PySpiders), Basavanagudi",
      role: "Python with Data Science Intern",
      period: "Jan 2026 – May 2026",
      points: [
        "Hands-on training in Python programming, data analytics, machine learning, data visualization and data preprocessing.",
        "Worked on real-world datasets, analytical assignments, dashboard development and predictive modeling projects."
      ]
    }
  ],

  // ---------- PROJECTS ----------
  // Set flagship: true on your one main project — it gets the large featured card.
  projects: [
    {
      flagship: true,
      name: "AyuSense — Smart Healthcare Monitoring System",
      period: "Mar 2025 – Dec 2025",
      summary: "A multi-modal AI health analysis system that reads skin images, chest X-rays, CT scans, ECG signals and blood reports through five dedicated deep-learning and machine-learning models, unifying them into one early-detection platform. Currently being rebuilt from a research prototype into a cross-platform product with a Flutter front end and a FastAPI inference backend.",
      role: "Developed the ML/DL models; handled preprocessing, evaluation, integration, debugging and documentation.",
      tools: ["Python", "TensorFlow", "Keras", "CNN", "1D-CNN", "MobileNetV2", "ResNet50", "Random Forest", "XGBoost", "Streamlit", "FastAPI", "Flutter"],
      extra: "Published in IJSREM, Vol. 9, Issue 12 (Dec 2025) · Selected for funding by the Karnataka State Council for Science & Technology · Shortlisted for poster presentation",
      link: ""
    },
    {
      flagship: false,
      name: "Smart Data Analytics & Machine Learning System",
      period: "Jan 2026 – May 2026",
      summary: "A Flask platform that automates data cleaning, exploratory data analysis and visualization, then takes users through classification, regression and feature engineering to build predictive models.",
      role: "Built the end-to-end workflow, from preprocessing through model evaluation.",
      tools: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "SmartEDA"],
      link: ""
    },
    {
      flagship: false,
      name: "E-Learning Management System (EL-HUB)",
      period: "Sep 2024 – Dec 2024",
      summary: "A web platform for course creation, user authentication, student registration, content upload and performance tracking, built with a four-person team.",
      role: "Designed and implemented the front-end features and database connectivity.",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      link: ""
    }
  ],

  // ---------- SKILLS ----------
  skills: {
    "Programming": ["C", "Python", "Java"],
    "AI, ML & Data": ["Machine Learning", "Deep Learning", "Data Science", "Data Visualization (Tableau, Power BI)"],
    "Web & Database": ["HTML", "MySQL", "DBMS", "Web Development"],
    "Tools & Frameworks": ["Excel", "Streamlit", "Flask", "FastAPI", "Python libraries"]
  },

  softSkills: [
    "Problem solving",
    "Analytical thinking",
    "Communication",
    "Collaboration",
    "Fast relationship-building",
    "Adapts quickly to new situations"
  ],

  // ---------- EDUCATION ----------
  education: [
    { degree: "B.E. Information Science & Engineering (Honours)", institution: "JNN College of Engineering, Shivamogga", board: "Visvesvaraya Technological University", period: "2022 – 2026", score: "9.40 CGPA" },
    { degree: "Class 12 (PCMB)", institution: "BGS Gurukula Independent PU College, Bhadravathi", board: "Karnataka Board of Pre-University Education", period: "2021 – 2022", score: "94.17%" },
    { degree: "Class 10", institution: "Eshwaramma High School, Bhadravathi", board: "Karnataka Secondary Education Examination Board", period: "2019 – 2020", score: "90.4%" }
  ],

  // ---------- CERTIFICATIONS ----------
  certifications: [
    { name: "Data Structures and Algorithms using Java", issuer: "NPTEL", date: "Oct 2024" },
    { name: "Cloud Computing and Distributed Systems", issuer: "NPTEL Swayam", date: "Mar 2025" },
    { name: "Foundation of Cloud, IoT and Edge ML", issuer: "NPTEL Swayam", date: "Apr 2025" },
    { name: "DIYA 2025 Intel Program — Data Analytics Workshop", issuer: "DIYA Foundation (sponsored by Intel)", date: "Mar 2025" },
    { name: "Generative AI Workshop", issuer: "NxtWave", date: "Feb 2025" },
    { name: "Machine Learning and Deep Learning — Fundamentals & Applications", issuer: "", date: "Oct 2025" }
  ],

  // ---------- ACHIEVEMENTS ----------
  achievements: [
    { title: "Best Outgoing Student Award, 2025–26", note: "Department of Information Science & Engineering, JNNCE" },
    { title: "Class Topper — 5th & 6th Semesters (2024–25)", note: "Highest academic performance in the department" },
    { title: "AyuSense selected for state funding", note: "Karnataka State Council for Science & Technology; shortlisted for poster presentation" }
  ],

  // ---------- CO-CURRICULAR ----------
  activities: [
    { title: "NSS Volunteer", note: "Red Cross Society Blood Donation Camp, JNNCE" },
    { title: "Coordinator, INSIGHT Forum", note: "Department of Information Science & Engineering" },
    { title: "Coordinator, YUGMA TECHFEST", note: "State-level 24-hour hackathon, Department of ISE, JNNCE" }
  ],

  // ---------- LANGUAGES ----------
  languages: [
    { name: "Kannada", level: "Native" },
    { name: "English", level: "Competent" },
    { name: "Hindi", level: "Intermediate" }
  ]

};
