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
                "Computer Vision Engineer with 1.5 years of experience at Solar Industries India Limited "
                "(Solar Defence and Aerospace Limited), designing and deploying real-time, production-grade "
                "AI systems for UAV, defense, and industrial-safety applications. Currently engineering "
                "low-latency computer vision pipelines on NVIDIA Jetson Orin Nano for the CALM (Canister "
                "Launched Anti-Armoured Loiter Munition) program while delivering 4 concurrent commercial "
                "AI projects. Core expertise in object detection (YOLOv8/YOLO26), model optimization "
                "(PyTorch to ONNX to TensorRT FP16), DeepStream and GStreamer video pipelines, multi-object "
                "tracking (ByteTrack), face recognition (SCRFD + ArcFace), and embedded Edge AI deployment. "
                "Published researcher with a B.Tech in Computer Science Engineering (CGPA 9.33/10)."
            )
        )
        self.stdout.write(self.style.SUCCESS('Profile created.'))

        # Experiences - Full-time professional experience at Solar Industries India Limited (1.5 Years)
        Experience.objects.all().delete()
        experiences = [
            {
                "role": "Executive – Computer Vision Engineer",
                "company": "Solar Industries India Limited (Solar Defence and Aerospace Limited)",
                "location": "Nagpur, India | On-site",
                "duration": "Jul 2025 – Present (1.5 Years)",
                "division": "UAV Division & Industrial Automation",
                "order": 1,
                "highlights": [
                    "CALM Loiter Munition UAV: Architected and deployed object detection, recognition and identification software for UAV surveillance systems, improving target-identification reliability under field conditions.",
                    "Infrared (IR) Thermal Vision: Developing an infrared thermal object detection pipeline for accurate tank and armor detection, extending mission capability to low-visibility and night-time conditions.",
                    "Hardware Acceleration: Quantized and converted PyTorch (.pt) models to ONNX and serialized TensorRT FP16 engines on NVIDIA Jetson Orin Nano, cutting inference latency and raising FPS for real-time onboard processing.",
                    "Multimedia Streaming: Built end-to-end DeepStream and GStreamer multimedia pipelines covering video ingestion, preprocessing, inference, post-processing, encoding and live streaming to the Ground Control Station (GCS).",
                    "PPE Detection (Chakhdoh Plant): Trained and deployed a safety compliance detection model monitoring mandatory protective gear during hazardous chemical composition mixing.",
                    "PDM 557 Fuze X-ray Defect Detection: Built flaw-classification software for munitions X-ray imagery using filters, thresholding, area analysis, and trained YOLO26x models with a Rust and React plant server deployment.",
                    "Process Deviation of Delay Plant: Collected and annotated 10,000 defense plant images and trained 3 YOLO26x models (achieving 70% mAP50 and 43% mAP50-95); coupled detection with a Finite State Machine (FSM) and CIELAB color-space analysis to automate chemical process triggers.",
                    "CCTV Face Recognition for Head Count: Benchmarked face detectors (YuNet, RetinaFace, SCRFD) and recognizers (SFace, ArcFace, AdaFace); selected SCRFD + ArcFace and resolved multi-person duplicate embeddings through an ROI-first sampling workflow at 5 FPS."
                ],
                "technologies": [
                    "Python", "PyTorch", "OpenCV", "YOLOv8", "YOLO26", "TensorRT FP16", 
                    "ONNX", "DeepStream SDK", "GStreamer", "NVIDIA Jetson Orin Nano", 
                    "Linux (Ubuntu 22.04)", "Rust", "React JS", "FastAPI", "FSM"
                ]
            }
        ]
        for exp in experiences:
            Experience.objects.create(**exp)
        self.stdout.write(self.style.SUCCESS(f'{len(experiences)} Experiences created.'))

        # Projects - Strictly the 4 projects explicitly documented in resume PROJECTS section
        Project.objects.all().delete()
        projects = [
            {
                "title": "VisionEye",
                "category": "Computer Vision",
                "tagline": "Real-Time Foot-Traffic Analytics & Computer Vision Platform",
                "description": [
                    "Engineered a real-time people detection and tracking platform using lightweight YOLO26n ONNX models paired with ByteTrack Kalman filter tracking.",
                    "Enables bidirectional IN/OUT foot-traffic counting, real-time occupancy monitoring, and 2D planar perspective mapping to visualize floor traffic.",
                    "Built a full-stack platform with React 18, Django REST Framework, Django Channels, and WebSockets featuring live video streaming, calibration overlays, and privacy video masking.",
                    "Automated CI/CD with GitHub Actions, Docker containerization, cloud deployment with Nginx SSL/TLS, and cross-platform desktop application builds."
                ],
                "metrics": "Real-time edge tracking, 2D perspective transformation, WebSocket telemetry",
                "technologies": ["YOLO26n ONNX", "ByteTrack", "OpenCV", "React 18", "Django REST Framework", "Django Channels", "WebSockets", "Docker"],
                "live_url": "https://pvsairamsaketh.in",
                "github_url": "https://github.com/PVSaketh2003/In-out-Project-",
                "is_featured": True,
                "order": 1
            },
            {
                "title": "Optimized ML Model Selection for Heart Disease Classification",
                "category": "Edge AI",
                "tagline": "Clinical dataset preprocessing, exploratory data analysis, and comparative ML model benchmarking",
                "description": [
                    "Cleaned and preprocessed clinical health records with outlier handling, label encoding, and missing-value imputation.",
                    "Conducted exploratory data analysis (EDA) using Matplotlib and Seaborn to identify critical health-risk factors and correlation patterns.",
                    "Benchmarked multiple supervised learning algorithms in Scikit-learn, identifying Random Forest Classifier as the top performer for disease risk prediction."
                ],
                "metrics": "Clinical EDA & Scikit-learn algorithm benchmarking",
                "technologies": ["Python", "Scikit-learn", "Random Forest Classifier", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
                "is_featured": False,
                "order": 2
            },
            {
                "title": "Bank Loan Payment Status Prediction",
                "category": "Full Stack",
                "tagline": "Credit repayment pattern analysis comparing Random Forest with associative rule mining",
                "description": [
                    "Performed data cleaning, preprocessing, exploratory analysis, and visualization on banking datasets to prepare high-quality model inputs.",
                    "Identified Random Forest Classifier as the top-performing prediction model; benchmarked against associative FPG-Vertical mining to extract decision rules on complex borrower repayment trends."
                ],
                "metrics": "Comparative classification & FPG-Vertical rule extraction",
                "technologies": ["Python", "Scikit-learn", "Data Analysis", "Random Forest Classifier", "FPG-Vertical", "Pandas"],
                "is_featured": False,
                "order": 3
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
                "order": 4
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
