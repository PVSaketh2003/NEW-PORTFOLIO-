import { Profile, Experience, Internship, Project, SkillGroup } from '../types';

export const initialProfile: Profile = {
  name: "PV Sairam Saketh",
  title: "Computer Vision Engineer | Edge AI | Deep Learning | UAV & Defense Systems",
  subtitle: "Turning computer vision research into real-world AI systems",
  location: "Nagpur, Maharashtra, India",
  email: "pvsairamsaketh@gmail.com",
  phone: "+91 9359587816",
  linkedin: "https://linkedin.com/in/pvsaketh",
  github: "https://github.com/PVSaketh2003",
  portfolio: "https://portfolio.pvsairamsaketh.in",
  summary: "Computer Vision Engineer with 1.5 years of experience at Solar Industries India Limited (Solar Defence and Aerospace Limited), designing and deploying real-time, production-grade AI systems for UAV, defense, and industrial-safety applications. Currently engineering low-latency computer vision pipelines on NVIDIA Jetson Orin Nano for the CALM (Canister Launched Anti-Armoured Loiter Munition) program while delivering 4 concurrent commercial AI projects. Core expertise in object detection (YOLOv8/YOLO26), model optimization (PyTorch to ONNX to TensorRT FP16), DeepStream and GStreamer video pipelines, multi-object tracking (ByteTrack), face recognition (SCRFD + ArcFace), and embedded Edge AI deployment. Published researcher with a B.Tech in Computer Science Engineering (CGPA 9.33/10)."
};

export const initialCareerHighlights = [
  { label: "Solar Industries India Limited", value: "1.5 Years", detail: "Executive CV Engineer · UAV Division" },
  { label: "Commercial CV Projects", value: "4 Concurrent", detail: "PPE, Fuze, Process, Face Count" },
  { label: "Industrial Dataset Trained", value: "10,000 Images", detail: "Process-deviation monitoring (70% mAP50)" },
  { label: "Undergraduate Academics", value: "9.33 / 10", detail: "B.Tech CSE, SRM University" },
];

export const initialExperiences: Experience[] = [
  {
    id: 1,
    role: "Executive – Computer Vision Engineer",
    company: "Solar Industries India Limited (Solar Defence and Aerospace Limited)",
    location: "Nagpur, India | On-site",
    duration: "Jul 2025 – Present (1.5 Years)",
    division: "UAV Division & Industrial Automation",
    summary: "Architecting and deploying edge AI computer vision solutions for UAV defense surveillance while delivering concurrent commercial vision systems for plant safety and automated quality control.",
    highlights: [
      "CALM Loiter Munition UAV: Architected and deployed object detection, recognition, and identification software for UAV surveillance systems, improving target-identification reliability under field conditions.",
      "Infrared (IR) Thermal Vision: Developing an infrared thermal object detection pipeline for accurate tank and armor detection, extending UAV mission capability to low-visibility and night conditions.",
      "Edge Hardware Optimization: Quantized and converted PyTorch (.pt) models to ONNX and serialized TensorRT FP16 engines on NVIDIA Jetson Orin Nano, cutting inference latency and raising FPS for real-time onboard processing.",
      "Multimedia Streaming: Built end-to-end DeepStream and GStreamer pipelines covering video ingestion, hardware preprocessing, inference, post-processing, encoding, and live streaming to Ground Control Stations (GCS).",
      "PPE Detection (Chakhdoh Plant): Trained and deployed a safety compliance detection model monitoring mandatory protective gear during hazardous chemical composition mixing.",
      "PDM 557 Fuze X-ray Defect Detection: Built flaw-classification software for munitions X-ray imagery using morphological filters, adaptive thresholding, contour area analysis, and trained YOLO26x models; built with Rust and React JS for plant server deployment.",
      "Process Deviation Monitoring: Collected and annotated 10,000 defense plant images and trained 3 YOLO26x models (achieving 70% mAP50 and 43% mAP50-95); coupled detection with a Finite State Machine (FSM) and CIELAB color-space analysis to automate chemical process triggers.",
      "CCTV Face Recognition for Head Count: Benchmarked face detectors (YuNet, RetinaFace, SCRFD) and recognizers (SFace, ArcFace, AdaFace); selected SCRFD + ArcFace and resolved multi-person duplicate embeddings through an ROI-first sampling workflow at 5 FPS."
    ],
    technologies: [
      "Python", "PyTorch", "OpenCV", "YOLOv8", "YOLO26", "TensorRT FP16", 
      "ONNX", "DeepStream SDK", "GStreamer", "NVIDIA Jetson Orin Nano", 
      "Linux (Ubuntu 22.04)", "Rust", "React JS", "FastAPI", "FSM"
    ]
  }
];

export const initialInternships: Internship[] = [
  {
    id: 1,
    role: "MTS Intern",
    company: "Tessell",
    location: "Remote",
    duration: "6 Months",
    division: "Cloud Infrastructure",
    summary: "Extracted cloud infrastructure metadata from Google Cloud Platform and engineered backend validation pipelines.",
    highlights: [
      "Extracted machine types and availability zones from Google Cloud Platform (GCP) through its API using the Go programming language.",
      "Implemented robust JSON validation schemas and used them to validate the entire backend JSON flow format.",
      "Performed comprehensive error handling across the backend codebase and diagnosed workflows and cloud logs to pinpoint failure modes."
    ],
    technologies: ["Go (Golang)", "GCP API", "JSON Schema", "Cloud Logging", "Microservices"]
  },
  {
    id: 2,
    role: "Data & Python Intern",
    company: "Rise 11 Technologies",
    location: "Remote",
    duration: "4 Months",
    division: "Product Quality & Analytics",
    summary: "Delivered test automation and data analysis workflows for the Zetaleap product launch.",
    highlights: [
      "Designed test cases achieving 100% core-functionality test coverage for the Zetaleap release, enabling a seamless product launch.",
      "Applied Python and exploratory data analytics techniques to validate system behaviors and support content development."
    ],
    technologies: ["Python", "QA Automation", "Data Analysis", "Zetaleap"]
  },
  {
    id: 3,
    role: "Web Developer Trainer Intern",
    company: "Coding Raja Technologies",
    location: "Remote",
    duration: "3 Months",
    division: "Technical Mentorship",
    summary: "Delivered hands-on technical training on Python, Pandas, and SQL for student cohorts.",
    highlights: [
      "Delivered structured training sessions on Pandas and SQL to student cohorts, improving learners' hands-on data-analysis proficiency.",
      "Guided students through real-world Exploratory Data Analysis (EDA) projects and mentored them on analytical data workflows."
    ],
    technologies: ["Python", "Pandas", "SQL", "Exploratory Data Analysis (EDA)"]
  },
  {
    id: 4,
    role: "Machine Learning Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    duration: "3 Months",
    division: "Applied Machine Learning",
    summary: "Built and evaluated supervised machine learning models for prediction and classification benchmarks.",
    highlights: [
      "Implemented and evaluated multiple supervised ML models: House Price Prediction (Linear Regression), Dogs vs. Cats Image Classification (Support Vector Machines - SVM), and Customer Purchase Prediction (K-Nearest Neighbors - KNN).",
      "Awarded a formal Letter of Recommendation for outstanding technical performance and model delivery quality."
    ],
    technologies: ["Python", "Scikit-learn", "SVM", "KNN", "Linear Regression", "NumPy", "Pandas"],
    award: "Formal Letter of Recommendation for Outstanding Performance"
  }
];

export const initialSkillGroups: SkillGroup[] = [
  {
    category: "Computer Vision & Deep Learning",
    skills: [
      "Computer Vision",
      "Object Detection",
      "YOLOv8 / YOLO26",
      "Object Tracking (ByteTrack)",
      "Video Analytics",
      "Image Processing",
      "Face Detection (SCRFD)",
      "Face Recognition (ArcFace)",
      "PyTorch",
      "Keras / ANN / CNN",
      "OpenCV",
      "Finite State Machine (FSM)",
      "Vision-Language Models (VLMs)",
      "LangChain (Basics)"
    ]
  },
  {
    category: "Edge AI & Deployment",
    skills: [
      "NVIDIA Jetson Orin Nano",
      "TensorRT FP16 Optimization",
      "ONNX Runtime",
      "NVIDIA DeepStream SDK",
      "GStreamer Pipelines",
      "Real-Time Embedded Inference",
      "Low-Latency Video Streaming",
      "Docker & Containers",
      "CI/CD (GitHub Actions)"
    ]
  },
  {
    category: "Machine Learning & Data",
    skills: [
      "Scikit-learn",
      "Regression & Classification",
      "Random Forest Classifier",
      "Support Vector Machines (SVM)",
      "K-Nearest Neighbors (KNN)",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "NumPy & Pandas",
      "Matplotlib & Seaborn",
      "Exploratory Data Analysis (EDA)",
      "SQL Data Extraction"
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      "Python 3.x",
      "C++ (Embedded / Vision)",
      "Rust",
      "Go (Golang)",
      "SQL"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Ubuntu 22.04 LTS",
      "Embedded Linux",
      "Git & GitHub",
      "GitLab",
      "FastAPI & Django REST Framework",
      "React 18"
    ]
  }
];

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "VisionEye",
    category: "Personal Project · Featured Platform",
    tagline: "Real-Time Foot-Traffic Analytics & Computer Vision Platform",
    description: [
      "Engineered a real-time people detection and tracking platform using lightweight YOLO26n ONNX models paired with ByteTrack Kalman filter tracking.",
      "Enables bidirectional IN/OUT foot-traffic counting, real-time occupancy monitoring, and 2D planar perspective mapping to visualize floor traffic.",
      "Built a full-stack platform with React 18, Django REST Framework, Django Channels, and WebSockets featuring live video streaming, calibration overlays, and privacy video masking.",
      "Automated CI/CD with GitHub Actions, Docker containerization, cloud deployment with Nginx SSL/TLS, and cross-platform desktop application builds."
    ],
    metrics: "Real-time edge tracking, 2D perspective transformation, WebSocket telemetry",
    technologies: ["YOLO26n ONNX", "ByteTrack", "OpenCV", "React 18", "Django REST Framework", "Django Channels", "WebSockets", "Docker"],
    liveUrl: "https://pvsairamsaketh.in",
    githubUrl: "https://github.com/PVSaketh2003/In-out-Project-",
    isFeatured: true,
    architectureSteps: [
      "Video Ingestion (OpenCV)",
      "Edge Detection (YOLO ONNX)",
      "ByteTrack Identity Association",
      "Directional Crossing & 2D Mapping",
      "WebSocket Analytics Dashboard"
    ],
    modalDetails: {
      problem: "Facility operators require automated, accurate foot-traffic counts and spatial analytics without recording private identifiable footage or purchasing expensive proprietary counting sensors.",
      solution: "Engineered an edge-capable vision system pairing lightweight YOLO ONNX models with ByteTrack Kalman filter tracking, calculating directional tripwire crossings and 2D planar floor coordinates in real time.",
      architecture: [
        "Ingestion: Video streams ingested via OpenCV with hardware acceleration.",
        "Inference: YOLO26n serialized to ONNX for lightweight edge CPU/GPU execution.",
        "Tracking: ByteTrack preserves tracklet identity across temporary occlusions without computationally expensive re-ID.",
        "Spatial Logic: Perspective homography matrix transforms camera pixel coordinates into physical floor coordinates.",
        "Interface: Django Channels pushes real-time frame telemetry over WebSockets to a React analytics dashboard."
      ],
      challenges: [
        "Handling target ID switching when multiple individuals cross each other in dense bottlenecks.",
        "Maintaining responsive WebSocket streaming performance without excessive server CPU overhead."
      ],
      decisions: [
        "Selected ByteTrack over DeepSORT to eliminate the re-ID feature extraction step and maintain higher frame rates.",
        "Decoupled frontend rendering from frame ingestion via an asynchronous WebSocket broadcast."
      ],
      futureWork: "Extending multi-camera re-identification across overlapping surveillance zones."
    }
  },
  {
    id: 2,
    title: "Optimized ML Model Selection for Heart Disease Classification",
    category: "Independent Machine Learning Project",
    tagline: "Clinical dataset preprocessing, exploratory data analysis, and comparative ML model benchmarking",
    description: [
      "Cleaned and preprocessed clinical health records with outlier handling, label encoding, and missing-value imputation.",
      "Conducted exploratory data analysis (EDA) using Matplotlib and Seaborn to identify critical health-risk factors and correlation patterns.",
      "Benchmarked multiple supervised learning algorithms in Scikit-learn, identifying Random Forest Classifier as the top performer for disease risk prediction."
    ],
    metrics: "Comprehensive clinical EDA & Scikit-learn algorithm benchmarking",
    technologies: ["Python", "Scikit-learn", "Random Forest Classifier", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
    isFeatured: false
  },
  {
    id: 3,
    title: "Bank Loan Payment Status Prediction",
    category: "Group / Minor Project",
    tagline: "Credit repayment pattern analysis comparing Random Forest with associative rule mining",
    description: [
      "Performed data cleaning, preprocessing, exploratory analysis, and visualization on banking datasets to prepare high-quality model inputs.",
      "Identified Random Forest Classifier as the top-performing prediction model; benchmarked against associative FPG-Vertical mining to extract decision rules on complex borrower repayment trends."
    ],
    metrics: "Comparative classification & FPG-Vertical rule extraction",
    technologies: ["Python", "Scikit-learn", "Data Analysis", "Random Forest Classifier", "FPG-Vertical", "Pandas"],
    isFeatured: false
  },
  {
    id: 4,
    title: "Vehicle Insurance Fraud Detection using Bagging Classifier vs. MLP",
    category: "Published Research · Major Group Project",
    tagline: "Peer-reviewed research comparing Bagging Classifier vs. MLP on real-world claims data",
    description: [
      "Built and compared an ensemble Bagging Classifier against a Multi-Layer Perceptron (MLP) neural network for detecting fraudulent vehicle insurance claims.",
      "Identified the Bagging Classifier as the superior approach, demonstrating higher precision and recall on severely imbalanced insurance claim datasets.",
      "Presented and published findings at the International Conference on Computational Intelligence (ICCI) (Dept. of IT & CSBS, K. Ramakrishnan College of Engineering)."
    ],
    metrics: "Peer-Reviewed Conference Publication (ICCI)",
    technologies: ["Python", "Scikit-learn", "Bagging Classifier", "MLP Neural Network", "Imbalanced Data", "Ensemble Learning"],
    isFeatured: false
  }
];

export const initialResearch = {
  title: "Vehicle Insurance Fraud Detection using Bagging Classifier vs. MLP",
  venue: "International Conference on Computational Intelligence (ICCI)",
  institution: "Dept. of IT & CSBS, K. Ramakrishnan College of Engineering",
  description: "Investigated ensemble bagging methods compared against multi-layer perceptron neural networks to solve severe class imbalance in vehicular claim fraud prediction. The ensemble approach delivered significantly higher precision and recall for financial fraud mitigation.",
  topics: ["Ensemble Learning", "Imbalanced Classification", "Bagging Classifier", "Multi-Layer Perceptron"]
};

export const initialEducation = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "SRM University, Chennai",
    duration: "2021 – 2025",
    score: "CGPA: 9.33 / 10",
    detail: "Core coursework: Data Structures, Algorithms, Computer Vision, Operating Systems, Distributed Systems, Machine Learning."
  },
  {
    degree: "12th Grade (Higher Secondary)",
    institution: "Taywade College, Nagpur",
    duration: "2020 – 2021",
    score: "Percentage: 98.17%",
    detail: "Distinction with physics, chemistry, and mathematics focus."
  },
  {
    degree: "10th Grade (Secondary)",
    institution: "Bhawans Ashti, Nagpur",
    duration: "2018 – 2019",
    score: "Percentage: 93.8%",
    detail: "Comprehensive secondary education with academic distinction."
  }
];

export const initialCertifications = [
  {
    title: "Python for Computer Vision with OpenCV",
    issuer: "Udemy",
    focus: "Image processing, object tracking, color spaces, feature detection, and video analysis"
  },
  {
    title: "Exploratory Data Analysis with Python",
    issuer: "Great Learning",
    focus: "Statistical data analysis, feature engineering, data visualization, and correlation evaluation"
  },
  {
    title: "Letter of Recommendation for Outstanding Performance",
    issuer: "Prodigy Infotech",
    focus: "Recognized for high-quality machine learning model delivery and problem-solving"
  }
];
