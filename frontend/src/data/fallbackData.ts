import { Profile, Experience, Project, SkillGroup } from '../types';

export const initialProfile: Profile = {
  name: "Sairam Saketh",
  title: "Computer Vision Engineer · Edge AI",
  subtitle: "Building practical AI systems from vision models to edge deployment",
  location: "Nagpur, Maharashtra, India",
  email: "pvsairamsaketh@gmail.com",
  phone: "+91 9359587816",
  linkedin: "https://linkedin.com/in/pvsaketh",
  github: "https://github.com/PVSaketh2003",
  portfolio: "https://portfolio.pvsairamsaketh.in",
  summary: "I'm a Computer Vision Engineer working across deep learning, real-time video analytics, embedded inference, and industrial AI. I build end-to-end systems that connect computer vision models with practical software and hardware deployments."
};

export const initialCareerHighlights = [
  { label: "Professional Experience", value: "1+ Year", detail: "Defense UAV & Industrial AI" },
  { label: "Commercial CV Systems", value: "4 Projects", detail: "PPE, Fuze, Process, Face Count" },
  { label: "Industrial Dataset Trained", value: "10,000 Imgs", detail: "Delay plant deviation models" },
  { label: "Undergraduate Academics", value: "9.33 / 10", detail: "B.Tech CSE, SRM University" },
];

export const initialExperiences: Experience[] = [
  {
    id: 1,
    role: "Executive – Computer Vision Engineer",
    company: "Solar Defence and Aerospace Limited",
    location: "Nagpur, India (On-site)",
    duration: "Jul 2025 – Present",
    division: "UAV Division & Industrial Automation",
    summary: "Leading edge AI computer vision pipeline engineering for UAV surveillance while delivering concurrent commercial vision systems for plant safety and quality control.",
    highlights: [
      "UAV & Edge AI: Architected real-time object detection and identification software for UAV surveillance platforms under dynamic field conditions.",
      "Thermal Vision: Engineered an infrared (IR) thermal object detection pipeline for tank and armor detection in low-visibility and night conditions.",
      "Hardware Acceleration: Converted PyTorch models to ONNX and serialized TensorRT FP16 engines on NVIDIA Jetson Orin Nano, cutting inference latency for real-time operation.",
      "Streaming Architecture: Built end-to-end DeepStream and GStreamer multimedia pipelines covering hardware video ingestion, preprocessing, inference, and low-latency streaming to Ground Control Stations.",
      "Plant Safety & Compliance: Deployed a PPE detection system at the Chakhdoh plant to monitor mandatory safety equipment during chemical composition mixing.",
      "Quality Inspection: Built the PDM 557 Fuze X-ray defect detection system using morphological filtering, thresholding, and trained YOLO26x models with a Rust and React plant server deployment.",
      "Process Deviation: Trained 3 YOLO26x models on 10,000 plant images (achieving 70% mAP50 and 43% mAP50-95); coupled detection with a Finite State Machine (FSM) and CIELAB color-space analysis for chemical process control.",
      "Access & Head Counting: Benchmarked face detectors and recognizers (SCRFD + ArcFace selected); solved multi-person duplicate embedding using an ROI-first sampling workflow."
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "YOLOv8", "TensorRT", "ONNX", "DeepStream SDK", "GStreamer", "NVIDIA Jetson Orin Nano", "Linux", "Rust", "React"]
  },
  {
    id: 2,
    role: "MTS Intern",
    company: "Tessell",
    location: "Remote",
    duration: "6 Months",
    division: "Cloud Infrastructure",
    summary: "Worked on cloud resource ingestion, API integration, and backend error isolation.",
    highlights: [
      "Extracted machine types and availability zones from Google Cloud Platform (GCP) APIs using Go.",
      "Implemented JSON validation schemas to ensure payload integrity across backend data pipelines.",
      "Conducted root-cause error handling across microservices and diagnosed distributed cloud logs."
    ],
    technologies: ["Go (Golang)", "GCP API", "JSON Schema", "Cloud Logging", "Microservices"]
  },
  {
    id: 3,
    role: "Data & Python Intern",
    company: "Rise 11 Technologies",
    location: "Remote",
    duration: "4 Months",
    division: "Product Testing",
    summary: "Delivered test automation and analytical support for the Zetaleap product launch.",
    highlights: [
      "Designed test suites achieving 100% core-functionality test coverage for the Zetaleap release.",
      "Applied Python and data analytics workflows to validate system behavior prior to customer onboarding."
    ],
    technologies: ["Python", "QA Automation", "Data Analysis", "Zetaleap"]
  },
  {
    id: 4,
    role: "Web Developer Trainer Intern",
    company: "Coding Raja Technologies",
    location: "Remote",
    duration: "3 Months",
    division: "Technical Mentorship",
    summary: "Trained students in data manipulation and exploratory data analysis.",
    highlights: [
      "Delivered structured technical sessions on Pandas, SQL, and data wrangling fundamentals.",
      "Guided student cohorts through practical exploratory data analysis projects."
    ],
    technologies: ["Python", "Pandas", "SQL", "Exploratory Data Analysis"]
  },
  {
    id: 5,
    role: "Machine Learning Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    duration: "3 Months",
    division: "Machine Learning",
    summary: "Built and evaluated supervised learning models for predictive analytics.",
    highlights: [
      "Implemented regression and classification models (Linear Regression, SVM, KNN) for housing and customer purchase prediction.",
      "Awarded a formal Letter of Recommendation for technical performance and work quality."
    ],
    technologies: ["Python", "Scikit-learn", "SVM", "KNN", "Pandas", "NumPy"]
  }
];

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "VisionEye: Real-Time Foot-Traffic Analytics",
    category: "Featured System",
    tagline: "Computer vision platform for people detection, tracking, entry/exit counting, and spatial perspective mapping",
    description: [
      "Engineered real-time people detection and multi-object tracking using YOLO26n ONNX and ByteTrack for accurate foot-traffic counts.",
      "Implemented bidirectional entry/exit counting logic, zone occupancy tracking, and 2D perspective bird's-eye projection.",
      "Built a full-stack platform featuring React 18, Django REST Framework, Django Channels WebSockets for live video streaming, and Docker deployment."
    ],
    metrics: "Real-time edge tracking, 2D perspective transformation, WebSocket telemetry",
    technologies: ["YOLO26n ONNX", "ByteTrack", "OpenCV", "React", "Django REST Framework", "Django Channels", "WebSockets", "Docker"],
    liveUrl: "https://pvsairamsaketh.in",
    githubUrl: "https://github.com/PVSaketh2003/In-out-Project-",
    isFeatured: true,
    architectureSteps: [
      "Video Input (RTSP / USB Camera)",
      "Object Detection (YOLO26n ONNX)",
      "Multi-Object Tracking (ByteTrack)",
      "Entry / Exit & Spatial Logic",
      "WebSocket Analytics Dashboard"
    ],
    modalDetails: {
      problem: "Facility operators require automated, accurate foot-traffic intelligence without recording identifiable personal footage or requiring costly specialized counting sensors.",
      solution: "Engineered an edge-capable vision system that pairs lightweight YOLO ONNX models with ByteTrack Kalman filter tracking, calculating directional tripwire crossings and 2D planar floor positions in real time.",
      architecture: [
        "Ingestion: Video streams ingested via OpenCV and hardware-accelerated decode.",
        "Inference: YOLO26n serialized to ONNX for lightweight edge CPU/GPU execution.",
        "Tracking: ByteTrack preserves tracklet identity across temporary occlusions.",
        "Spatial Logic: Perspective homography matrix maps pixel coordinates into physical floor coordinates.",
        "Interface: Django Channels pushes frame metadata over WebSockets to a React analytics dashboard."
      ],
      challenges: [
        "Handling target ID switching when multiple individuals cross each other in dense bottlenecks.",
        "Maintaining responsive WebSocket streaming performance without excessive server CPU overhead."
      ],
      decisions: [
        "Selected ByteTrack over DeepSORT to eliminate the re-ID feature extraction step and maintain higher frame rates.",
        "Decoupled frontend rendering from frame ingestion via an asynchronous message queue."
      ],
      futureWork: "Extending multi-camera re-identification across overlapping surveillance zones."
    }
  },
  {
    id: 2,
    title: "Industrial Process-Deviation Monitoring",
    category: "Commercial Vision",
    tagline: "Automated plant safety compliance and state-machine violation detection across 10,000 images",
    description: [
      "Trained 3 YOLO26x detection models on 10,000 defense plant images, achieving 70% mAP50 and 43% mAP50-95.",
      "Designed a Finite State Machine (FSM) to detect procedural safety violations (door open/closed, fan status, workbench safety).",
      "Engineered CIELAB color-space analysis to automatically trigger process events when chemical solutions reach specific color thresholds."
    ],
    metrics: "70% mAP50 on 10k plant dataset, FSM state verification",
    technologies: ["YOLO26x", "CIELAB Color Space", "FastAPI", "React", "OpenCV", "FSM"],
    isFeatured: true,
    architectureSteps: [
      "Plant Camera Ingestion",
      "Multi-Class Detection (YOLO26x)",
      "FSM State Verification",
      "CIELAB Color Trigger",
      "Alert Notification"
    ]
  },
  {
    id: 3,
    title: "CCTV Face Recognition for Head Count",
    category: "Commercial Vision",
    tagline: "Reliable CCTV face verification solving duplicate-embedding challenges in crowded areas",
    description: [
      "Benchmarked face detectors (YuNet, RetinaFace, SCRFD) and recognizers (SFace, ArcFace, AdaFace); architected SCRFD + ArcFace deployment.",
      "Solved duplicate-embedding errors using an ROI-first workflow: person detection, interactive selection, 5 FPS sampling, and facial alignment.",
      "Applied face recognition strictly to the top 50% of the detected person bounding box to eliminate spurious matches."
    ],
    metrics: "SCRFD + ArcFace benchmarking, ROI-based normalized embedding",
    technologies: ["SCRFD", "ArcFace", "Python", "OpenCV", "NumPy", "CCTV Analytics"],
    isFeatured: true,
    architectureSteps: [
      "CCTV Frame Ingestion",
      "Person Detection & Top-50% ROI",
      "SCRFD Facial Alignment",
      "ArcFace 512D Embedding",
      "Cosine Similarity Verification"
    ]
  },
  {
    id: 4,
    title: "PDM 557 Fuze X-ray Defect Detection",
    category: "Quality Inspection",
    tagline: "Automated internal component flaw classification for defense munitions assembly",
    description: [
      "Detects component anomalies in X-ray fuze imagery using morphological filters, adaptive thresholding, and contour area calculation.",
      "Collected and annotated specialized defense plant X-ray datasets; trained experimental YOLO26x models.",
      "Constructed a high-throughput desktop application with a Rust backend core and React frontend for local plant server deployment."
    ],
    metrics: "Sub-millimeter flaw isolation, Rust + React execution",
    technologies: ["Rust", "React", "OpenCV", "X-ray Image Analysis", "Adaptive Thresholding"],
    isFeatured: false
  },
  {
    id: 5,
    title: "Vehicle Insurance Fraud Detection",
    category: "Published Research",
    tagline: "Peer-reviewed research comparing Bagging Classifier vs. MLP on real-world claims data",
    description: [
      "Developed and evaluated ensemble Bagging Classifiers against Multi-Layer Perceptrons for detecting fraudulent automobile insurance claims.",
      "Demonstrated superior classification metrics and recall on severely imbalanced insurance datasets.",
      "Presented and published findings at the International Conference on Computational Intelligence (ICCI)."
    ],
    metrics: "Peer-Reviewed Conference Publication (ICCI)",
    technologies: ["Python", "Scikit-learn", "Bagging Classifier", "MLP Neural Network", "Data Imbalance"],
    isFeatured: false
  },
  {
    id: 6,
    title: "Heart Disease Risk Classification",
    category: "Machine Learning",
    tagline: "Clinical dataset preprocessing, exploratory data analysis, and model benchmarking",
    description: [
      "Cleaned and preprocessed clinical health records with outlier handling, label encoding, and missing-value imputation.",
      "Conducted exploratory data analysis with Matplotlib and Seaborn to identify high-significance risk factors.",
      "Benchmarked multiple algorithms in Scikit-learn, determining Random Forest as the strongest generalizer."
    ],
    metrics: "Comparative ML benchmarking, clinical EDA",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Matplotlib", "Seaborn"],
    isFeatured: false
  },
  {
    id: 7,
    title: "Bank Loan Payment Status Prediction",
    category: "Data Analytics",
    tagline: "Credit repayment pattern analysis comparing Random Forest with associative rule mining",
    description: [
      "Preprocessed and analyzed financial credit datasets to prepare feature matrices for repayment risk assessment.",
      "Benchmarked Random Forest against associative FPG-Vertical mining to extract decision rules on complex borrower repayment trends."
    ],
    metrics: "Risk prediction benchmarking, rule extraction",
    technologies: ["Python", "Scikit-learn", "FPG-Vertical", "Pandas", "NumPy"],
    isFeatured: false
  }
];

export const initialSkillGroups: SkillGroup[] = [
  {
    category: "Computer Vision & Deep Learning",
    skills: [
      "OpenCV",
      "YOLOv8 / YOLO26",
      "ByteTrack Tracking",
      "SCRFD Face Detection",
      "ArcFace Recognition",
      "PyTorch",
      "Keras",
      "CNN Architectures",
      "Thermal / IR Object Detection",
      "Image Processing",
      "Video Analytics",
      "Finite State Machines (FSM)"
    ]
  },
  {
    category: "Edge AI & Deployment",
    skills: [
      "NVIDIA Jetson Orin Nano",
      "TensorRT FP16 / INT8",
      "ONNX Runtime",
      "NVIDIA DeepStream SDK",
      "GStreamer Pipelines",
      "Real-Time Inference",
      "RTSP Streaming",
      "Docker & Containers",
      "GitHub Actions CI/CD",
      "Kubernetes (k3s)"
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      "Python 3.x",
      "C++ (Embedded / Vision)",
      "Rust",
      "Go (Golang)",
      "SQL",
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    category: "Machine Learning & Data",
    skills: [
      "Scikit-learn",
      "Classification & Regression",
      "Random Forest",
      "Support Vector Machines (SVM)",
      "K-Nearest Neighbors (KNN)",
      "NumPy",
      "Pandas",
      "Matplotlib & Seaborn",
      "Exploratory Data Analysis (EDA)"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Linux / Ubuntu LTS",
      "Git & GitHub",
      "GitLab",
      "Nginx",
      "PostgreSQL",
      "Django & Django REST Framework",
      "React 18"
    ]
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
