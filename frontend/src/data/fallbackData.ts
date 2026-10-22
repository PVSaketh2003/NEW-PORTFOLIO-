import { Profile, Experience, Internship, Project, SkillGroup } from '../types';

export const initialProfile: Profile = {
  name: "PV Sairam Saketh",
  title: "Computer Vision Engineer | Edge AI | Deep Learning | Industrial & Defense Systems",
  subtitle: "Turning computer vision research into real-world AI systems",
  location: "Nagpur, Maharashtra, India",
  email: "pvsairamsaketh@gmail.com",
  phone: "+91 9359587816",
  linkedin: "https://linkedin.com/in/pvsaketh",
  github: "https://github.com/PVSaketh2003",
  portfolio: "https://portfolio.pvsairamsaketh.in",
  summary: "Computer Vision Engineer with 1.5 years of experience across Solar Industries India Limited and Solar Defence and Aerospace Limited. From July 2025 to July 2026, researched and engineered deep learning models for Infrared (IR) thermal vehicle detection on the CALM Loiter Munition UAV program. From August 2026 to present, leading 4 commercial computer vision projects for plant automation, safety, and defect inspection across Solar Industries manufacturing facilities. Core expertise in object detection (YOLOv8/YOLO26), TensorRT FP16 quantization, DeepStream video pipelines, multi-object tracking (ByteTrack), facial biometrics (SCRFD + ArcFace), and embedded Edge AI deployment."
};

export const initialCareerHighlights = [
  { label: "Solar Industries India Limited", value: "1.5 Years", detail: "Commercial Division & Solar Defence & Aerospace" },
  { label: "Commercial CV Projects", value: "4 Production", detail: "Process Deviation · Facial Recognition · PPEs Detection · PDM 557 Fuze" },
  { label: "Industrial Dataset Trained", value: "10,000 Images", detail: "Process-deviation monitoring (70% mAP50)" },
  { label: "Undergraduate Academics", value: "9.33 / 10", detail: "B.Tech CSE, SRM University" },
];

export const initialExperiences: Experience[] = [
  {
    id: 1,
    role: "Executive – Computer Vision Engineer",
    company: "Solar Industries India Limited (Commercial Division)",
    location: "Nagpur, India | On-site",
    duration: "Aug 2026 – Present",
    division: "Commercial Side · Industrial Plant Automation & Safety",
    summary: "Engineering and deploying 4 commercial production-grade computer vision systems across industrial manufacturing and defense plants, delivering automated process deviation detection, biometric headcount recognition, PPE safety compliance, and munitions X-ray defect inspection.",
    highlights: [
      "Process Deviation for Defence Plant: Collected, annotated, and augmented 10,000 defense plant images; trained 3 custom YOLO26x models (achieving 70% mAP50 and 43% mAP50-95), coupling visual inference with a deterministic Finite State Machine (FSM) and CIELAB color-space Delta-E analysis to automate chemical process transition triggers.",
      "Facial Recognition for Head Count Project (Chakhdoh Plant): Conducted rigorous benchmarks across face detectors (YuNet, RetinaFace, SCRFD) and feature extractors (SFace, ArcFace, AdaFace); architected an edge biometric system combining SCRFD with ArcFace 512-D embeddings and designed an ROI-first spatial sampling workflow operating at 5 FPS to eliminate duplicate identities.",
      "PPEs Detection (Chakhdoh Plant): Engineered and deployed an end-to-end real-time safety compliance monitoring pipeline detecting safety helmets, high-visibility vests, safety goggles, and protective gloves during hazardous chemical operations, running TensorRT FP16 models at 30+ FPS.",
      "PDM 557 Fuze for PYRO Plant: Architected munitions X-ray flaw classification software combining morphological digital filters, adaptive thresholding, contour profiling, and custom YOLO26x models; built plant workstation software with a high-performance Rust backend and React JS inspection dashboard."
    ],
    technologies: [
      "Python", "PyTorch", "OpenCV", "YOLOv8", "YOLO26x", "TensorRT FP16", 
      "Rust", "React JS", "Finite State Machine (FSM)", "CIELAB Color Space", 
      "SCRFD", "ArcFace", "GStreamer", "NVIDIA Jetson", "FastAPI"
    ]
  },
  {
    id: 2,
    role: "Computer Vision Engineer – UAV Defense Systems",
    company: "Solar Defence and Aerospace Limited (Solar Industries India Limited)",
    location: "Nagpur, India | On-site",
    duration: "Jul 2025 – Jul 2026 (1 Year)",
    division: "Defense UAV Division · Loiter Munition Program",
    summary: "Researched and engineered embedded computer vision architectures for aerial surveillance and loiter munition payloads, focusing on Infrared (IR) thermal vehicle detection and low-latency edge deployment.",
    highlights: [
      "CALM Loiter Munition UAV: Researched and created a deep learning computer vision model (prototype/pre-deployment) for Infrared (IR) thermal detection of vehicles and cars under low-visibility and night conditions for the CALM (Canister Launched Anti-Armoured Loiter Munition) program.",
      "Embedded Hardware Acceleration: Quantized PyTorch deep learning models to ONNX and serialized TensorRT FP16 engines on NVIDIA Jetson Orin Nano, evaluating inference latency and FPS for edge UAV mission constraints.",
      "Multimedia Streaming Architecture: Designed DeepStream SDK and GStreamer video ingestion, preprocessing, inference, and encoding pipelines for live streaming video telemetry feeds to Ground Control Stations (GCS)."
    ],
    technologies: [
      "Python", "PyTorch", "NVIDIA Jetson Orin Nano", "TensorRT FP16", 
      "ONNX", "DeepStream SDK", "GStreamer", "Infrared (IR) Thermal Vision", 
      "YOLOv8", "OpenCV", "Linux (Ubuntu 22.04)"
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
    title: "Process Deviation for Defence Plant",
    category: "Commercial Project · Process Automation",
    tagline: "Automated chemical manufacturing monitoring using custom deep learning models, Finite State Machines (FSM), and CIELAB color-space analysis",
    description: [
      "Curated, labeled, and augmented a high-resolution industrial defense manufacturing dataset of 10,000+ domain-specific plant images under challenging industrial scene geometries.",
      "Trained 3 specialized deep learning models (YOLO26x) achieving 70% mAP@50 and 43% mAP@50-95 for precision object detection and state tracking.",
      "Integrated model inference with a deterministic Finite State Machine (FSM) and CIELAB color-space delta-E analysis to verify critical chemical process transition triggers.",
      "Replaced error-prone manual inspections with automated visual telemetry, drastically reducing production defects and preventing hazardous chemical process deviations."
    ],
    metrics: "10,000 Annotated Images · 70% mAP@50 · Automated FSM Process Triggers",
    technologies: ["Python", "PyTorch", "YOLO26x", "Finite State Machine (FSM)", "CIELAB Color Space", "OpenCV", "Industrial Automation"],
    isFeatured: false,
    architectureSteps: [
      "10k Image Dataset Annotation",
      "YOLO26x Multi-Model Training",
      "CIELAB Color-Space Delta-E Verification",
      "Deterministic FSM State Transition",
      "Automated Process Interlock Signal"
    ],
    modalDetails: {
      problem: "Chemical composition processing in delay element manufacturing requires exact sequential timing and color transformations. Manual human monitoring resulted in occasional process deviations, generating costly batch waste and safety hazards.",
      solution: "Engineered an autonomous computer vision inspection pipeline pairing 3 custom YOLO26x models with a Finite State Machine (FSM) and CIELAB colorimetric analysis to track and validate every manufacturing stage in real time.",
      architecture: [
        "Dataset Engineering: Annotated 10,000 high-resolution industrial images with extensive color-jitter and perspective augmentations.",
        "Deep Learning: Trained 3 YOLO26x architectures with custom anchor priors optimized for industrial components, achieving 70% mAP@50.",
        "Color Analysis: Converted RGB frames to CIELAB color space to calculate Delta-E chromatic shifts for precise chemical phase transitions.",
        "Logic Controller: Deterministic FSM mapped valid sequential manufacturing steps; any out-of-order transition immediately triggers a process interlock.",
        "Telemetry: Industrial SCADA integration over Modbus TCP for automated line control."
      ],
      challenges: [
        "Subtle color transitions between chemical states that appeared identical under standard RGB color representations.",
        "Environmental dust and vapor accumulation on optical camera enclosures."
      ],
      decisions: [
        "Selected CIELAB Delta-E over HSV/RGB to match human perceptual color differences independently of ambient luminance changes.",
        "Enforced a strict FSM transition grammar to reject transient model misclassifications."
      ],
      futureWork: "Deploying multi-spectral NIR cameras for non-visible thermal reaction monitoring."
    }
  },
  {
    id: 2,
    title: "Facial Recognition for Head Count Project for Chakhdoh Plant",
    category: "Commercial Project · Biometrics & Edge AI",
    tagline: "Scalable real-time CCTV edge biometric face recognition and automated workforce attendance tracking at 5 FPS",
    description: [
      "Conducted extensive quantitative benchmarking across modern face detectors (YuNet, RetinaFace, SCRFD) and deep face recognition architectures (SFace, ArcFace, AdaFace).",
      "Architected a dual-stage edge biometric pipeline combining ultra-lightweight SCRFD face localization with ArcFace deep angular margin loss embeddings.",
      "Eliminated multi-person duplicate embeddings and identity collisions in dense crowds by designing a novel Region-of-Interest (ROI-first) spatial sampling workflow operating smoothly at 5 FPS.",
      "Integrated with centralized database infrastructure for real-time headcount reconciliation, automated attendance tracking, and restricted facility access verification at Chakhdoh Plant."
    ],
    metrics: "Sub-50ms Biometric Ingestion · Zero Duplicate Embeddings · Dense Crowd Scalability",
    technologies: ["Python", "SCRFD", "ArcFace", "OpenCV", "PyTorch", "ByteTrack", "Vector Embeddings", "NVIDIA Jetson", "Biometrics"],
    isFeatured: false,
    architectureSteps: [
      "CCTV RTSP Frame Acquisition",
      "SCRFD Lightweight Face Localization",
      "ROI-First Spatial Sampling Filter",
      "ArcFace 512-D Embedding Extraction",
      "Cosine Similarity & Headcount Reconciliation"
    ],
    modalDetails: {
      problem: "Chakhdoh facility checkpoints suffered from queue bottlenecks and duplicate attendance logs when dense groups of workers passed through surveillance choke points simultaneously.",
      solution: "Developed an edge-accelerated biometric pipeline pairing SCRFD face detection with ArcFace 512-dimensional angular margin embeddings, governed by an ROI-first sampling workflow that prevents duplicate vector extractions.",
      architecture: [
        "Acquisition: Industrial IP cameras streaming H.264 video at 1080p over RTSP.",
        "Detection: SCRFD (Sample and Computation Redistribution) face detector locates faces down to 20x20 pixels with high precision.",
        "Spatial ROI Filtering: Tracks personnel bounding boxes and only triggers face embedding extraction once a subject enters the optimal optical focus zone.",
        "Feature Extraction: ArcFace model generates 512-dimensional normalized feature vectors via TensorRT FP16 execution.",
        "Reconciliation: High-speed cosine distance matching against pre-enrolled employee database with sub-5ms lookup latency."
      ],
      challenges: [
        "Multiple workers walking shoulder-to-shoulder generating redundant embeddings and identity flickers.",
        "Extreme side-profile angles and motion blur during fast walking."
      ],
      decisions: [
        "Selected SCRFD over RetinaFace for 3x faster inference on embedded Jetson edge hardware.",
        "Implemented pose-angle filtering (yaw/pitch thresholding) to discard extreme non-frontal frames before feature extraction."
      ],
      futureWork: "Implementing 3D passive liveness detection to prevent anti-spoofing print attacks."
    }
  },
  {
    id: 3,
    title: "PPEs detection for Chakhdoh Plant",
    category: "Commercial Project · Industrial Safety",
    tagline: "Real-time safety compliance detection monitoring mandatory protective gear during hazardous chemical operations",
    description: [
      "Engineered an end-to-end Computer Vision PPE compliance pipeline detecting safety helmets, high-visibility vests, safety goggles, and protective gloves in real time across hazardous chemical composition mixing zones (Chakhdoh Plant).",
      "Ingested multi-camera RTSP video streams using OpenCV and GStreamer, implementing background filtering and spatial ROI zoning to eliminate false positives in dynamic plant environments.",
      "Optimized PyTorch deep learning models to ONNX and serialized TensorRT FP16 engines on NVIDIA edge hardware, achieving steady 30+ FPS real-time inference with sub-40ms latency.",
      "Developed automated safety violation event triggers, audit image logging, and alert reporting pipelines, drastically reducing plant inspection overhead and enforcing OSHA safety compliance."
    ],
    metrics: "30+ FPS Real-Time Inference · Sub-40ms Latency · Multi-Class PPE Tracking",
    technologies: ["Python", "PyTorch", "YOLOv8", "TensorRT FP16", "OpenCV", "GStreamer", "NVIDIA Jetson", "Edge AI", "RTSP"],
    isFeatured: false,
    architectureSteps: [
      "Multi-RTSP Camera Ingestion",
      "Spatial ROI Geometry Filtering",
      "TensorRT FP16 Multi-Class Inference",
      "Temporal Violation Smoothing",
      "Safety Alert & Audit Logging"
    ],
    modalDetails: {
      problem: "Plant operators in hazardous chemical composition mixing zones at Chakhdoh Plant faced severe safety risks if personnel entered without mandatory PPE (helmets, vests, goggles, gloves). Manual compliance inspections were intermittent and prone to human oversight.",
      solution: "Engineered a high-throughput edge AI computer vision pipeline streaming multi-camera RTSP feeds directly into TensorRT-accelerated YOLO models with temporal smoothing to eliminate false alarms and generate real-time safety alerts.",
      architecture: [
        "Ingestion: Multi-channel RTSP video streams captured via hardware-accelerated GStreamer pipelines.",
        "Preprocessing: Dynamic perspective cropping and spatial ROI zoning isolating hazardous equipment perimeters.",
        "Inference: Quantized YOLOv8 PyTorch models exported to ONNX and serialized to TensorRT FP16 engines for sub-40ms edge processing.",
        "Post-processing: Temporal persistence filtering requiring 3 consecutive non-compliant frames before flagging violations.",
        "Alerting: Automated event triggers with timestamped visual audit frames dispatched to plant safety managers."
      ],
      challenges: [
        "Extreme lighting reflections off chemical stainless steel storage tanks causing specular false positives.",
        "Heavy occlusions when technicians worked behind industrial mixers and pipes."
      ],
      decisions: [
        "Employed FP16 TensorRT quantization to maximize frame rates on NVIDIA edge devices without compromising detection accuracy.",
        "Integrated ROI spatial zoning to restrict inference focus to designated safety-critical boundaries."
      ],
      futureWork: "Integrating edge audio alert sirens directly triggered over MQTT upon persistent safety infractions."
    }
  },
  {
    id: 4,
    title: "PDM 557 Fuze for PYRO Plant",
    category: "Commercial Project · Defense QA & Defect Inspection",
    tagline: "Munitions X-ray flaw classification and surface defect detection using deep vision models, morphological filters, and Rust/React stack",
    description: [
      "Architected an automated non-destructive evaluation (NDE) vision pipeline for munitions X-ray inspection on defense assembly lines for the PDM 557 Fuze program at PYRO Plant.",
      "Implemented advanced digital image processing algorithms, including morphological filtering, adaptive thresholding, and contour area profiling to isolate micro-structural anomalies.",
      "Trained and fine-tuned custom YOLO26x deep neural networks to accurately classify manufacturing flaws and structural integrity defects with high recall.",
      "Built and deployed a full-stack production plant workstation using high-performance Rust backend services and a modern React JS visual operator inspection dashboard."
    ],
    metrics: "High-Precision Defense Munitions Inspection · Micro-defect Localization · Rust/React Stack",
    technologies: ["Rust", "React JS", "Python", "YOLO26x", "OpenCV", "Morphological Filtering", "Adaptive Thresholding", "Defense Systems"],
    isFeatured: false,
    architectureSteps: [
      "Digital Radiography (X-Ray) Ingestion",
      "Morphological Filtering & Contrast Equalization",
      "YOLO26x Deep Flaw Localization",
      "Contour Area & Anomaly Profiling",
      "Rust Server & React Operator Dashboard"
    ],
    modalDetails: {
      problem: "Munitions fuze inspection at PYRO Plant requires 100% defect-free manufacturing assurance. Traditional manual X-ray inspection is fatiguing, slow, and susceptible to missed internal voids or micro-cracks in high-tempo defense production.",
      solution: "Built an autonomous X-ray inspection workstation integrating morphological digital image processing with custom YOLO26x deep learning models, powered by a high-throughput Rust backend and React operator dashboard.",
      architecture: [
        "Radiography Ingestion: High-bit-depth digital X-ray radiographs captured from industrial non-destructive testing equipment.",
        "Image Enhancement: CLAHE (Contrast Limited Adaptive Histogram Equalization) and morphological opening/closing filters amplify structural edge boundaries.",
        "Anomaly Detection: Custom YOLO26x models trained on specialized munitions defect classes identify voids, misalignments, and assembly cracks.",
        "Geometric Profiling: Adaptive thresholding calculates precise contour area, aspect ratios, and volumetric deficit estimates.",
        "Software Workstation: High-performance Rust server coordinates image pipelines with sub-millisecond overhead, pushing inspection results to a React dashboard."
      ],
      challenges: [
        "Low contrast differences between dense metallic casings and internal explosive composition boundaries.",
        "Strict zero-tolerance requirements for false negatives on defense-critical armaments."
      ],
      decisions: [
        "Chose Rust for the plant server daemon to guarantee memory safety, zero-cost abstractions, and predictable latency during automated line testing.",
        "Combined classical computer vision morphology with deep learning to provide redundant verification on anomalous artifacts."
      ],
      futureWork: "Integrating 3D Computed Tomography (CT) volumetric slice reconstruction for multi-axis defect inspection."
    }
  },
  {
    id: 5,
    title: "VisionEye",
    category: "Featured Computer Vision Platform",
    tagline: "Real-Time Foot-Traffic Analytics, 2D Planar Homography, and Low-Latency Edge Vision Platform",
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
    id: 6,
    title: "Vehicle Insurance Fraud Detection using Bagging Classifier vs. MLP",
    category: "Published Research · ICCI Conference",
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
