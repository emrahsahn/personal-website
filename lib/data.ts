export interface EducationItem {
  degree: { tr: string; en: string };
  university: { tr: string; en: string };
  period: { tr: string; en: string };
  level: { tr: string; en: string };
  gpa?: string;
  scholarship?: { tr: string; en: string };
  status?: { tr: string; en: string };
  thesis?: { tr: string; en: string };
  coursework?: { tr: string[]; en: string[] };
}

export interface SpokenLanguageItem {
  name: { tr: string; en: string };
  level: { tr: string; en: string };
  tag: string;
}

export const spokenLanguages: SpokenLanguageItem[] = [
  {
    name: { tr: "Türkçe", en: "Turkish" },
    level: { tr: "Anadil", en: "Native" },
    tag: "Native",
  },
  {
    name: { tr: "İngilizce", en: "English" },
    level: {
      tr: "B2 (Okuma) • B1 (Dinleme, Konuşma, Yazma)",
      en: "B2 (Reading) • B1 (Listening, Speaking, Writing)",
    },
    tag: "B2 / B1",
  },
  {
    name: { tr: "Almanca", en: "German" },
    level: { tr: "A1 (Temel)", en: "A1 (Elementary)" },
    tag: "A1",
  },
];

export const educations: EducationItem[] = [
  {
    degree: {
      tr: "Bilgisayar Mühendisliği",
      en: "Computer Engineering",
    },
    university: {
      tr: "Kocaeli Üniversitesi",
      en: "Kocaeli University",
    },
    period: {
      tr: "Temmuz 2026 – Devam Ediyor",
      en: "Jul 2026 – Present",
    },
    level: {
      tr: "Yüksek Lisans",
      en: "M.Sc. (In Progress)",
    },
    status: {
      tr: "Kabul Alındı",
      en: "Admitted",
    },
  },
  {
    degree: {
      tr: "Yazılım Mühendisliği",
      en: "Software Engineering",
    },
    university: {
      tr: "Kocaeli Sağlık ve Teknoloji Üniversitesi",
      en: "Kocaeli University of Health and Technology",
    },
    period: {
      tr: "2022 – 2026",
      en: "2022 – 2026",
    },
    level: {
      tr: "Lisans",
      en: "B.Sc.",
    },
    gpa: "GPA: 3.53 / 4.0",
    scholarship: {
      tr: "Tam Burslu",
      en: "Full Scholarship",
    },
    thesis: {
      tr: "TÜBİTAK 2209 Destekli Tez",
      en: "TÜBİTAK 2209 Supported Thesis",
    },
    coursework: {
      tr: [
        "Yapay Zeka & ML",
        "Nesne Yönelimli Programlama (OOP)",
        "Veri Yapıları & Algoritmalar",
        "Bilgisayarlı Görü",
        "Veritabanı Yönetimi (DBMS)",
      ],
      en: [
        "Artificial Intelligence & ML",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Computer Vision",
        "Database Management Systems",
      ],
    },
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: { tr: string[]; en: string[] };
}

export const experiences: ExperienceItem[] = [
  {
    company: "The Leapers",
    role: "Intern",
    period: "Feb 2026 – May 2026",
    location: "London, England (Remote)",
    highlights: {
      tr: [
        "Hybrid Agent Platform projesinin başlangıç aşamasında yer aldım.",
        "Müşteri taleplerini otonom biçimde analiz edip doğru çözüm yoluna yönlendiren çok katmanlı karar verme pipeline'ları tasarladım.",
      ],
      en: [
        "Contributed to the early stage of the Hybrid Agent Platform project.",
        "Designed multi-layer decision pipelines that autonomously analyze customer requests and route them to the right solution path.",
      ],
    },
  },
  {
    company: "Havelsan",
    role: "Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Ankara, Turkey",
    highlights: {
      tr: [
        "Toksisite, doğruluk, çoklu dil desteği ve BLEU/ROUGE metrikleri kapsamında 5+ modern AI modelini değerlendiren LLM test altyapısı geliştirdim.",
        "Proje yöneticisi olarak ekipler arası koordinasyonu üstlendim; otomatize test fonksiyonları ile manuel kalite kontrol süresini %40 kısalttım.",
      ],
      en: [
        "Built an LLM evaluation framework assessing 5+ modern AI models across toxicity, fairness, multilingual support, and BLEU/ROUGE metrics.",
        "Led cross-team coordination as project manager and reduced manual QA time by ~40% through automated test functions.",
      ],
    },
  },
  {
    company: "Solvent Yazılım",
    role: "Volunteer Intern",
    period: "May 2025 – Jun 2025",
    location: "Gebze / Kocaeli, Turkey",
    highlights: {
      tr: [
        "Text-to-Speech ve Speech-to-Text sistemlerine yönelik NLP model geliştirme projesinde yer aldım.",
        "500+ ham ses transkripsiyonundan yapılandırılmış veri çıkararak eğitim veri setlerinin giriş kalitesini artırdım.",
      ],
      en: [
        "Worked on NLP model development for Text-to-Speech and Speech-to-Text systems.",
        "Improved training data quality by extracting structured data from 500+ raw audio transcriptions.",
      ],
    },
  },
  {
    company: "Hamle Teknoloji",
    role: "Intern",
    period: "Jul 2024 – Aug 2024",
    location: "Gebze / Kocaeli, Turkey",
    highlights: {
      tr: [
        "10.000+ görüntülük veri seti üzerinde derin öğrenme tabanlı görüntü sınıflandırma modeli geliştirdim; doğruluk %92'ye ulaştı.",
        "Python ve Pandas ile EDA ve ön işleme pipeline'ları kurarak veri gürültüsünü yaklaşık %30 azalttım.",
      ],
      en: [
        "Developed a deep learning image classification model on a 10,000+ image dataset, reaching 92% validation accuracy.",
        "Built EDA and preprocessing pipelines with Python and Pandas, reducing data noise by approximately 30%.",
      ],
    },
  },
];

export interface ProjectItem {
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  technologies: string[];
  github?: string;
  link?: string;
  period?: string;
}

export const projects: ProjectItem[] = [
  {
    title: {
      tr: "Zorlu Hava Koşullarında Görüntü İyileştirme (Bitirme Tezi)",
      en: "Image Enhancement in Challenging Weather Conditions (Graduation Thesis)",
    },
    description: {
      tr: "İHA ve otonom sistemler için sis, yağmur ve düşük ışık koşullarını gideren hibrit görüntü restorasyon pipeline'ı (UnifiedPipeline - 21.26–27.81 dB PSNR). Kural tabanlı hava tespit modülü ve Gradio arayüzü ile YOLOv8 tespit performansını doğrudan artıran görev odaklı mimari.",
      en: "Hybrid image restoration pipeline (UnifiedPipeline) correcting fog, rain, and low-light quality loss for UAV and autonomous systems, combining a rule-based weather detector with HVI-CIDNet, FFA-Net, and DDN restoration models (21.26–27.81 dB PSNR). Delivered via Gradio interface with task-driven YOLOv8 detection integration.",
    },
    technologies: [
      "Python",
      "C++",
      "PyTorch",
      "OpenCV",
      "Gradio",
      "HVI-CIDNet",
      "FFA-Net",
      "DDN",
      "YOLOv8",
      "Docker",
      "Git",
    ],
    period: "Oct 2025 – Jun 2026",
  },
  {
    title: {
      tr: "TÜBİTAK 2209 - Veri Analitiği & Karar Destek Sistemi",
      en: "TÜBİTAK 2209 - Data Analytics & Intelligent Decision Support System",
    },
    description: {
      tr: "Ham EKG sinyallerinin dalgacık dönüşümü (wavelet) ile gürültüden arındırılması ve çok kanallı zaman serisi verilerinin modüler OOP sınıflarıyla Pandas DataFrame'lerine dönüştürülmesi. Kalp anomalilerini tespit eden TensorFlow derin öğrenme modelleri (TÜBİTAK onaylı).",
      en: "Processed and denoised raw ECG signals (PTB Diagnostic ECG database) using wavelet transforms, then built modular OOP classes to consolidate multi-channel time-series data into Pandas DataFrames. Designed TensorFlow deep learning models to detect cardiac abnormalities (funded by TÜBİTAK 2209).",
    },
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "SQL",
      "OOP",
      "Data Visualization",
    ],
    period: "Jun 2024 – Jun 2025",
  },
  {
    title: {
      tr: "Kişisel Harcama Takip & Bütçe Analitiği",
      en: "Personal Expense Tracking & Budget Analytics System",
    },
    description: {
      tr: "Harcama CRUD, filtreleme, kategori raporlama ve bütçe aşım karar mantığı sunan Spring Boot REST API ve Next.js dashboard. JUnit testleri ve Jakarta Validation ile yüksek kod kalitesi ve veri bütünlüğü.",
      en: "Built a Spring Boot REST API for expense CRUD, filtering, and category reporting, with budget limit/overspend decision logic and a Next.js dashboard. Ensured code quality and data integrity with JUnit tests and Jakarta Validation.",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "H2",
      "REST API",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JUnit",
    ],
    period: "Feb 2026 – Apr 2026",
    github: "https://github.com/emrahsahn/Harcama-Takip",
  },
  {
    title: {
      tr: "Meme Kanseri Sınıflandırma Sistemi",
      en: "Machine Learning-Based Breast Cancer Classification System",
    },
    description: {
      tr: "Tıbbi sınıflandırma görevi için veri temizleme ve öznitelik mühendisliği gerçekleştirildi; Python ve C++ ile modeller geliştirilerek hata matrisi ve AUC/ROC eğrileriyle karşılaştırmalı doğrulandı.",
      en: "Cleaned data and engineered features for a medical classification task, then developed and compared models in Python and C++, validating performance with confusion matrices and AUC/ROC curves.",
    },
    technologies: [
      "Python",
      "C++",
      "Scikit-learn",
      "Data Preprocessing",
      "Machine Learning",
    ],
    github: "https://github.com/emrahsahn/Breast-Cancer-Classification",
  },
  {
    title: {
      tr: "Lord of Polymorphism",
      en: "Lord of Polymorphism",
    },
    description: {
      tr: "Nesne yönelimli programlama, kalıtım, soyutlama ve polimorfizm konseptlerini derinlemesine uygulayan oyun mimarisi.",
      en: "A comprehensive game project applying object-oriented programming, inheritance, abstraction, and polymorphism principles.",
    },
    technologies: ["C++", "Java", "OOP", "Polymorphism", "Game Development"],
    github: "https://github.com/emrahsahn/lord-of-polymorphism",
    link: "https://lords-of-the-polywarphism-game.vercel.app",
  },
  {
    title: {
      tr: "LLM Değerlendirme & Benchmarking Sistemi",
      en: "LLM Evaluation & Benchmarking System",
    },
    description: {
      tr: "Havelsan stajında geliştirilen; toksisite, doğruluk, çoklu dil desteği ve BLEU/ROUGE metrikleri ile 5+ modern AI modelini değerlendiren kapsamlı LLM test altyapısı.",
      en: "Built a comprehensive LLM testing and benchmarking framework evaluating 5+ modern AI models across toxicity, fairness, multilingual support, and BLEU/ROUGE metrics at Havelsan.",
    },
    technologies: ["Python", "LLMs", "LangChain", "BLEU", "ROUGE", "NLP"],
    period: "Jul 2025 – Aug 2025",
  },
  {
    title: {
      tr: "Kurban Yönetim Sistemi",
      en: "Livestock Management System",
    },
    description: {
      tr: "Kurbanlık hayvan kayıt, takip ve yönetim süreçlerini uçtan uca dijitalleştiren TypeScript tabanlı modern web uygulaması.",
      en: "TypeScript-based modern web application that digitizes sacrifice livestock registration, tracking, and management workflows end-to-end.",
    },
    technologies: ["TypeScript", "JavaScript", "Next.js", "React", "Tailwind CSS"],
    period: "2026",
    github: "https://github.com/emrahsahn/Sacrifice-Livestock-Tracker",
  },
  {
    title: {
      tr: "Proje Yönetimi için Agent Sistemi",
      en: "Agent System for Projects",
    },
    description: {
      tr: "Yazılım projelerinde görev planlama, karar ağaçları ve otonom iş akışı otomasyonu için tasarlanmış AI agent tabanlı yönetim sistemi.",
      en: "AI agent-based management system designed for task planning, decision trees, and workflow automation in software projects.",
    },
    technologies: ["Python", "JavaScript", "LangChain", "AI Agents", "REST API"],
    period: "2026",
    github: "https://github.com/emrahsahn/Agent-System-for-Projects",
  },
  {
    title: {
      tr: "Akıllı Çöp Ayrıştırma Sistemi",
      en: "Smart Waste Sorting System",
    },
    description: {
      tr: "Atık türlerini bilgisayarlı görü ve derin öğrenme ile anlık sınıflandırarak geri dönüşüm verimliliğini artıran yapay zeka sistemi.",
      en: "AI-powered system that classifies waste types in real-time using computer vision and deep learning to increase recycling efficiency.",
    },
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Deep Learning",
      "OpenCV",
    ],
    github: "https://github.com/emrahsahn/akilli-cop-ayristirma-sistemi",
  },
  {
    title: {
      tr: "AI Destekli Görüntü Sınıflandırma",
      en: "AI-Powered Image Classification",
    },
    description: {
      tr: "Veri analizi ve derin öğrenme teknikleriyle geliştirilen yüksek doğruluklu görüntü sınıflandırma modeli.",
      en: "High-accuracy image classification model developed using data analytics and deep learning techniques.",
    },
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github:
      "https://github.com/emrahsahn/Yapay-Zeka-Destekli-Goruntu-Siniflandirma-Projesi",
  },
  {
    title: {
      tr: "Ensemble Learning Deneyleri",
      en: "Ensemble Learning Experiments",
    },
    description: {
      tr: "Kendi oluşturulan veri setlerinde çeşitli ensemble learning algoritmalarının uygulanması ve performans karşılaştırması.",
      en: "Application and comparison of various ensemble learning algorithms on custom-built datasets.",
    },
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    period: "2026",
    github: "https://github.com/emrahsahn/Ensemble-Learning",
  },
  {
    title: {
      tr: "E-Ticaret Web Sitesi",
      en: "E-Commerce Website",
    },
    description: {
      tr: "Ürün kataloğu, dinamik sepet yönetimi ve modern duyarlı kullanıcı arayüzü sunan web uygulaması.",
      en: "Full-featured e-commerce web application with product catalog, cart management, and responsive user interface.",
    },
    technologies: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Web Development"],
    github: "https://github.com/emrahsahn/E-Commerce-Website",
  },
  {
    title: {
      tr: "SQL Veri Ambarı Projesi",
      en: "SQL Data Warehouse Project",
    },
    description: {
      tr: "Veri modelleme, ETL süreçleri ve analitik raporlama sorguları için tasarlanmış kapsamlı SQL tabanlı veri ambarı projesi.",
      en: "SQL-based data warehouse project designed for dimensional data modeling, ETL processes, and analytical queries.",
    },
    technologies: ["SQL", "Data Modeling", "ETL", "Database Design"],
    period: "2026",
    github: "https://github.com/emrahsahn/sql_data_warehouse_project",
  },
];

export const skillCategories = [
  {
    key: "languages",
    skills: ["C++", "Java", "Python", "TypeScript", "JavaScript", "C#", "SQL"],
  },
  {
    key: "ai",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Computer Vision",
      "Deep Learning",
      "NLP",
      "Vector Databases",
    ],
  },
  {
    key: "backend_web",
    skills: [
      "FastAPI",
      "Spring Boot",
      "REST API",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    key: "data",
    skills: [
      "Pandas",
      "NumPy",
      "Data Analytics",
      "EDA",
      "Data Visualization",
      "SQL",
    ],
  },
  {
    key: "tools",
    skills: [
      "Git",
      "Docker",
      "JUnit",
      "Gradio",
      "Linux",
      "VS Code",
      "Jupyter",
    ],
  },
];

export const coreHighlights = [
  "C++ & Java (OOP)",
  "Python & AI Agents",
  "LangChain & LangGraph",
  "PyTorch & OpenCV",
  "TypeScript & Next.js",
  "Spring Boot & FastAPI",
  "SQL & Data Analytics",
];

