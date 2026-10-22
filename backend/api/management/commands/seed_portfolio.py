from django.core.management.base import BaseCommand
from api.models import Profile, Experience, Project, SkillCategory, SkillItem

class Command(BaseCommand):
    help = 'Seeds database with real portfolio data from PV Sairam Saketh resume'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding portfolio data...')

        # Profile
        Profile.objects.all().delete()
        Profile.objects.create(
            name="PV Sairam Saketh",
            title="Computer Vision Engineer | Edge AI | Deep Learning | UAV & Defense Systems",
            subtitle="Turning computer vision research into real-world AI systems",
            location="Nagpur, Maharashtra, India",
            email="pvsairamsaketh@gmail.com",
            phone="+91 9359587816",
            linkedin="https://linkedin.com/in/pvsaketh",
            github="https://github.com/PVSaketh2003",
            portfolio="https://portfolio.pvsairamsaketh.in",
            summary=(
                "Computer Vision Engineer with 1.5 years of experience across Solar Industries India Limited "
                "and Solar Defence and Aerospace Limited. From July 2025 to July 2026, researched and "
                "engineered deep learning models for Infrared (IR) thermal vehicle detection on the CALM "
                "Loiter Munition UAV program. From August 2026 to present, leading 4 commercial computer "
                "vision projects for plant automation, safety, and defect inspection across Solar Industries "
                "manufacturing facilities. Core expertise in object detection (YOLOv8/YOLO26), TensorRT FP16 "
                "quantization, DeepStream video pipelines, multi-object tracking (ByteTrack), facial biometrics "
                "(SCRFD + ArcFace), and embedded Edge AI deployment."
            )
        )
        self.stdout.write(self.style.SUCCESS('Profile created.'))

        # Experiences - Commercial Automation (Aug 2026 - Present) & Defense UAV (Jul 2025 - Jul 2026)
        Experience.objects.all().delete()
        experiences = [
            {
                "role": "Executive – Computer Vision Engineer",
                "company": "Solar Industries India Limited (Commercial Division)",
                "location": "Nagpur, India | On-site",
                "duration": "Aug 2026 – Present",
                "division": "Commercial Side · Industrial Plant Automation & Safety",
                "order": 1,
                "highlights": [
                    "Process Deviation for Defence Plant: Collected, annotated, and augmented 10,000 defense plant images; trained 3 custom YOLO26x models (achieving 70% mAP50 and 43% mAP50-95), coupling visual inference with a deterministic Finite State Machine (FSM) and CIELAB color-space Delta-E analysis to automate chemical process transition triggers.",
                    "Facial Recognition for Head Count Project (Chakhdoh Plant): Conducted rigorous benchmarks across face detectors (YuNet, RetinaFace, SCRFD) and feature extractors (SFace, ArcFace, AdaFace); architected an edge biometric system combining SCRFD with ArcFace 512-D embeddings and designed an ROI-first spatial sampling workflow operating at 5 FPS to eliminate duplicate identities.",
                    "PPEs Detection (Chakhdoh Plant): Engineered and deployed an end-to-end real-time safety compliance monitoring pipeline detecting safety helmets, high-visibility vests, safety goggles, and protective gloves during hazardous chemical operations, running TensorRT FP16 models at 30+ FPS.",
                    "PDM 557 Fuze for PYRO Plant: Architected munitions X-ray flaw classification software combining morphological digital filters, adaptive thresholding, contour profiling, and custom YOLO26x models; built plant workstation software with a high-performance Rust backend and React JS inspection dashboard."
                ],
                "technologies": [
                    "Python", "PyTorch", "OpenCV", "YOLOv8", "YOLO26x", "TensorRT FP16", 
                    "Rust", "React JS", "Finite State Machine (FSM)", "CIELAB Color Space", 
                    "SCRFD", "ArcFace", "GStreamer", "NVIDIA Jetson", "FastAPI"
                ]
            },
            {
                "role": "Computer Vision Engineer – UAV Defense Systems",
                "company": "Solar Defence and Aerospace Limited (Solar Industries India Limited)",
                "location": "Nagpur, India | On-site",
                "duration": "Jul 2025 – Jul 2026 (1 Year)",
                "division": "Defense UAV Division · Loiter Munition Program",
                "order": 2,
                "highlights": [
                    "CALM Loiter Munition UAV: Researched and created a deep learning computer vision model (prototype/pre-deployment) for Infrared (IR) thermal detection of vehicles and cars under low-visibility and night conditions for the CALM (Canister Launched Anti-Armoured Loiter Munition) program.",
                    "Embedded Hardware Acceleration: Quantized PyTorch deep learning models to ONNX and serialized TensorRT FP16 engines on NVIDIA Jetson Orin Nano, evaluating inference latency and FPS for edge UAV mission constraints.",
                    "Multimedia Streaming Architecture: Designed DeepStream SDK and GStreamer video ingestion, preprocessing, inference, and encoding pipelines for live streaming video telemetry feeds to Ground Control Stations (GCS)."
                ],
                "technologies": [
                    "Python", "PyTorch", "NVIDIA Jetson Orin Nano", "TensorRT FP16", 
                    "ONNX", "DeepStream SDK", "GStreamer", "Infrared (IR) Thermal Vision", 
                    "YOLOv8", "OpenCV", "Linux (Ubuntu 22.04)"
                ]
            }
        ]
        for exp in experiences:
            Experience.objects.create(**exp)
        self.stdout.write(self.style.SUCCESS(f'{len(experiences)} Experiences created.'))

        # Projects - Commercial Computer Vision Systems, Flagship Platform, and Published Research
        Project.objects.all().delete()
        projects = [
            {
                "title": "Process Deviation for Defence Plant",
                "category": "Computer Vision",
                "tagline": "Automated chemical manufacturing monitoring using custom deep learning models, Finite State Machines (FSM), and CIELAB color-space analysis",
                "description": [
                    "Curated, labeled, and augmented a high-resolution industrial defense manufacturing dataset of 10,000+ domain-specific plant images under challenging industrial scene geometries.",
                    "Trained 3 specialized deep learning models (YOLO26x) achieving 70% mAP@50 and 43% mAP@50-95 for precision object detection and state tracking.",
                    "Integrated model inference with a deterministic Finite State Machine (FSM) and CIELAB color-space delta-E analysis to verify critical chemical process transition triggers.",
                    "Replaced error-prone manual inspections with automated visual telemetry, drastically reducing production defects and preventing hazardous chemical process deviations."
                ],
                "metrics": "10,000 Annotated Images · 70% mAP@50 · Automated FSM Process Triggers",
                "technologies": ["Python", "PyTorch", "YOLO26x", "Finite State Machine (FSM)", "CIELAB Color Space", "OpenCV", "Industrial Automation"],
                "is_featured": False,
                "order": 1
            },
            {
                "title": "Facial Recognition for Head Count Project for Chakhdoh Plant",
                "category": "Edge AI",
                "tagline": "Scalable real-time CCTV edge biometric face recognition and automated workforce attendance tracking at 5 FPS",
                "description": [
                    "Conducted extensive quantitative benchmarking across modern face detectors (YuNet, RetinaFace, SCRFD) and deep face recognition architectures (SFace, ArcFace, AdaFace).",
                    "Architected a dual-stage edge biometric pipeline combining ultra-lightweight SCRFD face localization with ArcFace deep angular margin loss embeddings.",
                    "Eliminated multi-person duplicate embeddings and identity collisions in dense crowds by designing a novel Region-of-Interest (ROI-first) spatial sampling workflow operating smoothly at 5 FPS.",
                    "Integrated with centralized database infrastructure for real-time headcount reconciliation, automated attendance tracking, and restricted facility access verification at Chakhdoh Plant."
                ],
                "metrics": "Sub-50ms Biometric Ingestion · Zero Duplicate Embeddings · Dense Crowd Scalability",
                "technologies": ["Python", "SCRFD", "ArcFace", "OpenCV", "PyTorch", "ByteTrack", "Vector Embeddings", "NVIDIA Jetson", "Biometrics"],
                "is_featured": False,
                "order": 2
            },
            {
                "title": "PPEs detection for Chakhdoh Plant",
                "category": "Computer Vision",
                "tagline": "Real-time safety compliance detection monitoring mandatory protective gear during hazardous chemical operations",
                "description": [
                    "Engineered an end-to-end Computer Vision PPE compliance pipeline detecting safety helmets, high-visibility vests, safety goggles, and protective gloves in real time across hazardous chemical composition mixing zones (Chakhdoh Plant).",
                    "Ingested multi-camera RTSP video streams using OpenCV and GStreamer, implementing background filtering and spatial ROI zoning to eliminate false positives in dynamic plant environments.",
                    "Optimized PyTorch deep learning models to ONNX and serialized TensorRT FP16 engines on NVIDIA edge hardware, achieving steady 30+ FPS real-time inference with sub-40ms latency.",
                    "Developed automated safety violation event triggers, audit image logging, and alert reporting pipelines, drastically reducing plant inspection overhead and enforcing OSHA safety compliance."
                ],
                "metrics": "30+ FPS Real-Time Inference · Sub-40ms Latency · Multi-Class PPE Tracking",
                "technologies": ["Python", "PyTorch", "YOLOv8", "TensorRT FP16", "OpenCV", "GStreamer", "NVIDIA Jetson", "Edge AI", "RTSP"],
                "is_featured": False,
                "order": 3
            },
            {
                "title": "PDM 557 Fuze for PYRO Plant",
                "category": "Computer Vision",
                "tagline": "Munitions X-ray flaw classification and surface defect detection using deep vision models, morphological filters, and Rust/React stack",
                "description": [
                    "Architected an automated non-destructive evaluation (NDE) vision pipeline for munitions X-ray inspection on defense assembly lines for the PDM 557 Fuze program at PYRO Plant.",
                    "Implemented advanced digital image processing algorithms, including morphological filtering, adaptive thresholding, and contour area profiling to isolate micro-structural anomalies.",
                    "Trained and fine-tuned custom YOLO26x deep neural networks to accurately classify manufacturing flaws and structural integrity defects with high recall.",
                    "Built and deployed a full-stack production plant workstation using high-performance Rust backend services and a modern React JS visual operator inspection dashboard."
                ],
                "metrics": "High-Precision Defense Munitions Inspection · Micro-defect Localization · Rust/React Stack",
                "technologies": ["Rust", "React JS", "Python", "YOLO26x", "OpenCV", "Morphological Filtering", "Adaptive Thresholding", "Defense Systems"],
                "is_featured": False,
            },
            {
                "title": "VisionEye",
                "category": "Full Stack",
                "tagline": "Real-Time Foot-Traffic Analytics, 2D Planar Homography, and Low-Latency Edge Vision Platform",
                "description": [
                    "Engineered a real-time people detection and tracking platform using lightweight YOLO26n ONNX models paired with ByteTrack Kalman filter tracking.",
                    "Enables bidirectional IN/OUT foot-traffic counting, real-time occupancy monitoring, and 2D planar perspective mapping to visualize floor traffic.",
                    "Built a full-stack platform with React 18, Django REST Framework, Django Channels, and WebSockets featuring live video streaming, calibration overlays, and privacy video masking.",
                    "Automated CI/CD with GitHub Actions, Docker containerization, cloud deployment with Nginx SSL/TLS, and cross-platform desktop application builds."
                ],
                "metrics": "Real-time edge tracking, 2D perspective transformation, WebSocket telemetry",
                "technologies": ["YOLO26n ONNX", "ByteTrack", "OpenCV", "React 18", "Django REST Framework", "Django Channels", "WebSockets", "Docker"],
                "github_url": "https://github.com/PVSaketh2003/In-out-Project-",
                "is_featured": True,
                "order": 5
            },
            {
                "title": "Vehicle Insurance Fraud Detection using Bagging Classifier vs. MLP",
                "category": "Research",
                "tagline": "Peer-reviewed research comparing Bagging Classifier vs. MLP on real-world claims data",
                "description": [
                    "Built and compared an ensemble Bagging Classifier against a Multi-Layer Perceptron (MLP) neural network for detecting fraudulent vehicle insurance claims.",
                    "Identified the Bagging Classifier as the superior approach, demonstrating higher precision and recall on severely imbalanced insurance claim datasets.",
                    "Presented and published findings at the International Conference on Computational Intelligence (ICCI) (Dept. of IT & CSBS, K. Ramakrishnan College of Engineering)."
                ],
                "metrics": "Peer-Reviewed Conference Publication (ICCI)",
                "technologies": ["Python", "Scikit-learn", "Bagging Classifier", "MLP Neural Network", "Imbalanced Data", "Ensemble Learning"],
                "is_featured": False,
                "order": 6
            }
        ]
        for proj in projects:
            Project.objects.create(**proj)
        self.stdout.write(self.style.SUCCESS(f'{len(projects)} Projects created.'))

        # Skills
        SkillCategory.objects.all().delete()
        skill_groups = [
            {
                "category": "Computer Vision & Deep Learning",
                "order": 1,
                "items": [
                    "Computer Vision", "Object Detection", "YOLOv8 / YOLO26", "Object Tracking (ByteTrack)",
                    "Video Analytics", "Image Processing", "Face Detection (SCRFD)", "Face Recognition (ArcFace)",
                    "PyTorch", "Keras / ANN / CNN", "OpenCV", "Finite State Machine (FSM)", "VLMs", "LangChain (Basics)"
                ]
            },
            {
                "category": "Edge AI & Deployment",
                "order": 2,
                "items": [
                    "NVIDIA Jetson Orin Nano", "TensorRT FP16 Optimization", "ONNX Runtime",
                    "NVIDIA DeepStream SDK", "GStreamer Pipelines", "Real-Time Embedded Inference",
                    "Low-Latency Video Streaming", "Docker & Containers", "CI/CD (GitHub Actions)"
                ]
            },
            {
                "category": "Machine Learning & Data",
                "order": 3,
                "items": [
                    "Scikit-learn", "Regression & Classification", "Random Forest Classifier",
                    "Support Vector Machines (SVM)", "K-Nearest Neighbors (KNN)", "Model Evaluation",
                    "Hyperparameter Tuning", "NumPy & Pandas", "Matplotlib & Seaborn",
                    "Exploratory Data Analysis (EDA)", "SQL Data Extraction"
                ]
            },
            {
                "category": "Programming Languages",
                "order": 4,
                "items": ["Python 3.x", "C++ (Embedded / Vision)", "Rust", "Go (Golang)", "SQL"]
            },
            {
                "category": "Tools & Platforms",
                "order": 5,
                "items": ["Ubuntu 22.04 LTS", "Embedded Linux", "Git & GitHub", "GitLab", "FastAPI & Django REST Framework", "React 18"]
            }
        ]

        for grp in skill_groups:
            cat = SkillCategory.objects.create(category=grp["category"], order=grp["order"])
            for itm in grp["items"]:
                SkillItem.objects.create(category=cat, name=itm, level=90, highlight=True)

        self.stdout.write(self.style.SUCCESS('Skill matrices created.'))
        self.stdout.write(self.style.SUCCESS('Portfolio database seeded successfully!'))
