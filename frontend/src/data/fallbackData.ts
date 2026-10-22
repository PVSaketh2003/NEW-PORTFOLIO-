import { Profile, Experience, Project, SkillCategory } from '../types';

export const initialProfile: Profile = {
  name: "P V SAIRAM SAKETH",
  title: "Computer Vision & Edge AI Engineer",
  subtitle: "UAV & Defense Systems | DeepStream & TensorRT Specialist",
  location: "Nagpur, Maharashtra, India",
  email: "pvsairamsaketh@gmail.com",
  phone: "+91 9359587816",
  linkedin: "https://linkedin.com/in/pvsaketh",
  github: "https://github.com/PVSaketh2003",
  portfolio: "https://portfolio.pvsairamsaketh.in",
  summary: "Computer Vision Engineer with 1+ year of experience designing and deploying real-time, production-grade AI systems for UAV, defense and industrial-safety applications. Currently engineering low-latency computer vision pipelines on NVIDIA Jetson Orin Nano for the CALM (Canister Launched Anti-Armoured Loiter Munition) program while delivering 4 concurrent commercial AI projects. Expertise in object detection (YOLO), model optimization (PyTorch to ONNX to TensorRT FP16), DeepStream and GStreamer video pipelines, multi-object tracking, face recognition and Edge AI deployment. Published researcher with a B.Tech in CSE (CGPA 9.33/10)."
};

export const initialExperiences: Experience[] = [
  {
    id: 1,
    role: "Executive – Computer Vision Engineer",
    company: "Solar Defence and Aerospace Limited",
    location: "Nagpur, India (On-site)",
    duration: "Jul 2025 – Present",
    division: "UAV Division & Industrial AI",
    highlights: [
      "CALM Project (Canister Launched Anti-Armoured Loiter Munition): Architected and deployed object detection, recognition and identification software for UAV surveillance systems, improving target-identification reliability under field conditions.",
      "Developing an infrared (IR) thermal object detection pipeline for accurate tank/armor detection, extending mission capability to low-visibility and night-time conditions.",
      "Optimized deep learning models by converting PyTorch (.pt) models to ONNX and TensorRT FP16 engines, cutting inference latency and increasing FPS for real-time onboard processing.",
      "Built end-to-end DeepStream and GStreamer pipelines covering video ingestion, preprocessing, inference, post-processing, encoding and live streaming to the Ground Control Station (GCS).",
      "Deployed production-ready edge AI applications on NVIDIA Jetson Orin Nano, enabling low-latency embedded vision for time-critical defense operations.",
      "Owned 4 concurrent commercial computer vision projects: PPE Detection, PDM 557 Fuze X-ray Defect Detection, Delay Plant Process Deviation Monitoring (10k images YOLO26x), and Face Recognition Head Count system."
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "YOLOv8", "TensorRT", "ONNX", "DeepStream SDK", "GStreamer", "NVIDIA Jetson Orin Nano", "Linux", "Edge AI", "Rust", "React JS"]
  },
  {
    id: 2,
    role: "MTS Intern",
    company: "Tessell",
    location: "Remote",
    duration: "6 months",
    division: "Cloud Infrastructure",
    highlights: [
      "Extracted machine types and availability zones from GCP through its API using the Go programming language.",
      "Implemented JSON validation schemas and used them to validate the entire JSON flow format on the backend.",
      "Performed error handling across the backend codebase and worked on workflows and cloud logs to pinpoint where code was breaking."
    ],
    technologies: ["Go", "GCP API", "JSON Schema", "Cloud Logs", "Microservices"]
  },
  {
    id: 3,
    role: "Data & Python Intern",
    company: "Rise 11 Technologies",
    location: "Remote",
    duration: "4 months",
    highlights: [
      "Designed test cases achieving 100% core-functionality coverage for the Zetaleap project, contributing to a seamless product launch.",
      "Applied Python and data analytics techniques to support product testing and content development."
    ],
    technologies: ["Python", "QA Testing", "Data Analytics", "Zetaleap"]
  },
  {
    id: 4,
    role: "Web Developer Trainer Intern",
    company: "Coding Raja Technologies",
    location: "Remote",
    duration: "3 months",
    highlights: [
      "Delivered training sessions on Pandas and SQL to student cohorts, improving learners' hands-on data-analysis proficiency.",
      "Guided students through Exploratory Data Analysis (EDA) projects and mentored them on real-world data workflows."
    ],
    technologies: ["Python", "Pandas", "SQL", "EDA", "Teaching"]
  },
  {
    id: 5,
    role: "Machine Learning Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    duration: "3 months",
    highlights: [
      "Built multiple supervised ML models: House Price Prediction (Linear Regression), Dogs vs. Cats Image Classification (SVM) and Customer Purchase Prediction (KNN).",
      "Received a formal Letter of Recommendation for outstanding performance and technical contribution."
    ],
    technologies: ["Scikit-learn", "SVM", "KNN", "Linear Regression", "NumPy", "Pandas"]
  }
];

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "CALM Loiter Munition UAV Computer Vision Pipeline",
    category: "UAV Defense",
    tagline: "Autonomous target detection, thermal IR tracking, and GCS low-latency streaming",
    description: [
      "Engineered mission-critical object detection, recognition and identification for UAV defense surveillance.",
      "Developed thermal IR object detection for accurate tank/armor tracking in zero-visibility conditions.",
      "Converted PyTorch models to ONNX and TensorRT FP16 engines on NVIDIA Jetson Orin Nano, cutting latency and doubling FPS.",
      "Constructed GStreamer & DeepStream pipelines for hardware-accelerated video ingestion, inference, and real-time streaming to Ground Control Stations."
    ],
    metrics: "Sub-15ms inference latency, Jetson Orin Nano FP16, DeepStream 6.x",
    technologies: ["NVIDIA Jetson Orin Nano", "TensorRT", "DeepStream SDK", "GStreamer", "PyTorch", "Thermal IR", "YOLOv8"],
    isFeatured: true
  },
  {
    id: 2,
    title: "VisionEye – Real-Time Foot-Traffic Analytics Platform",
    category: "Computer Vision",
    tagline: "Live edge foot-traffic counting, ByteTrack, 2D perspective mapping, and full-stack analytics",
    description: [
      "Engineered real-time people detection and multi-object tracking system using YOLO26n ONNX, ByteTrack and OpenCV.",
      "Enabled bidirectional IN/OUT foot-traffic counting, zone occupancy monitoring, and 2D bird's-eye perspective projection.",
      "Built full-stack analytics platform with React 18, Django REST Framework, Django Channels WebSockets, live MJPEG video streaming, and privacy-preserving masking.",
      "Automated CI/CD with GitHub Actions, Docker, and Nginx SSL/TLS."
    ],
    metrics: "30+ FPS real-time tracking, 2D Homography bird's eye view",
    technologies: ["React 18", "Django REST Framework", "ByteTrack", "YOLOv8/ONNX", "OpenCV", "WebSockets", "Docker"],
    liveUrl: "https://pvsairamsaketh.in",
    githubUrl: "https://github.com/PVSaketh2003",
    isFeatured: true
  },
  {
    id: 3,
    title: "Process Deviation Monitoring of Delay Plant",
    category: "Edge AI",
    tagline: "Plant safety FSM violation alerts, CIELAB chemical color trigger, and 10,000-image YOLO model",
    description: [
      "Collected and annotated 10,000 images from defense plant; trained 3 custom YOLO models (PPE, table, door open/close, fan on/off).",
      "Achieved mAP50 of 70% and mAP50-95 of 43% with automated hyperparameters.",
      "Implemented a Finite State Machine (FSM) to flag procedural safety violations.",
      "Engineered CIELAB color-space analysis to automatically trigger process events (adding IPA solution during exact brown tone transition)."
    ],
    metrics: "70% mAP50 on 10k defense plant dataset, FSM violation detection",
    technologies: ["YOLO", "CIELAB Color Space", "FastAPI", "React JS", "FSM", "OpenCV"],
    isFeatured: true
  },
  {
    id: 4,
    title: "PDM 557 Fuze X-ray Defect Detection",
    category: "Computer Vision",
    tagline: "Automated X-ray internal component defect classification for munitions assembly",
    description: [
      "Identifies component defects in defense munitions X-ray images using morphology filters, thresholding, and contour area analysis.",
      "Collected proprietary defense plant X-ray data and trained custom detection models.",
      "Built production application with Rust core and React JS UI for secure plant server deployment."
    ],
    metrics: "Sub-millimeter flaw detection, Rust + React plant deployment",
    technologies: ["Rust", "React JS", "OpenCV", "X-ray Image Analysis", "Thresholding"],
    isFeatured: false
  },
  {
    id: 5,
    title: "CCTV Face Recognition for Head Count & Access Control",
    category: "Computer Vision",
    tagline: "High-accuracy CCTV face verification solving duplicate-embedding in crowded frames",
    description: [
      "Benchmarked SCRFD, YuNet, RetinaFace, ArcFace, and AdaFace; architected SCRFD + ArcFace deployment.",
      "Solved duplicate-embedding challenges using an ROI-first pipeline: person detection -> interactive selection -> 5 FPS sampling -> top-50% facial box alignment.",
      "Stored normalized embeddings in .npy format with fast cosine similarity verification."
    ],
    metrics: "SCRFD + ArcFace state-of-the-art face verification, ROI-based sampling",
    technologies: ["SCRFD", "ArcFace", "OpenCV", "Python", "NumPy", "CCTV Analytics"],
    isFeatured: false
  },
  {
    id: 6,
    title: "Vehicle Insurance Fraud Detection (Published Research)",
    category: "Research",
    tagline: "Comparative machine learning research published at International Conference on Computational Intelligence",
    description: [
      "Built and evaluated ensemble Bagging Classifier against Multi-Layer Perceptron (MLP) for detecting fraudulent vehicle insurance claims.",
      "Demonstrated superior precision and recall using Bagging Classifier on imbalanced real-world insurance claim data.",
      "Peer-reviewed and published at the International Conference on Computational Intelligence (ICCI)."
    ],
    metrics: "Published Research Paper at IEEE/ICCI Conference",
    technologies: ["Python", "Scikit-learn", "Bagging Classifier", "MLP Neural Network", "Data Imbalance"],
    isFeatured: false
  }
];

export const initialSkills: SkillCategory[] = [
  {
    category: "Computer Vision & Deep Learning",
    skills: [
      { name: "Object Detection (YOLOv8/v11/YOLO26)", level: 95, highlight: true },
      { name: "Object Tracking (ByteTrack, DeepSORT)", level: 90, highlight: true },
      { name: "Face Recognition (SCRFD, ArcFace)", level: 90 },
      { name: "PyTorch & Deep Learning", level: 92, highlight: true },
      { name: "OpenCV & Image Processing", level: 95, highlight: true },
      { name: "Video Analytics & DeepStream SDK", level: 88, highlight: true },
      { name: "Thermal / Infrared Object Detection", level: 85 }
    ]
  },
  {
    category: "Edge AI & Hardware Optimization",
    skills: [
      { name: "NVIDIA Jetson Orin Nano / Xavier", level: 95, highlight: true },
      { name: "TensorRT FP16 / INT8 Optimization", level: 92, highlight: true },
      { name: "ONNX Runtime & Graph Surgery", level: 90, highlight: true },
      { name: "GStreamer Multimedia Pipelines", level: 88 },
      { name: "Embedded Linux & BSP Configuration", level: 85 },
      { name: "Low-Latency RTSP / WebRTC Streaming", level: 85 }
    ]
  },
  {
    category: "Software Engineering & Cloud DevOps",
    skills: [
      { name: "Python 3.x", level: 95, highlight: true },
      { name: "Django & Django REST Framework", level: 90, highlight: true },
      { name: "React 18 & TypeScript", level: 88, highlight: true },
      { name: "Docker & Containerization", level: 90, highlight: true },
      { name: "Kubernetes (k3s / k8s)", level: 85, highlight: true },
      { name: "CI/CD (GitHub Actions)", level: 88, highlight: true },
      { name: "AWS EC2, Networking & Ingress", level: 85 }
    ]
  },
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "C++ (Embedded / Vision)", level: 80 },
      { name: "Rust", level: 75 },
      { name: "Go (Golang)", level: 78 },
      { name: "SQL & PostgreSQL", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Scikit-Learn & ML Algorithms", level: 92 }
    ]
  }
];
