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
            subtitle="DeepStream, TensorRT, and Embedded Systems Specialist",
            location="Nagpur, Maharashtra, India",
            email="pvsairamsaketh@gmail.com",
            phone="+91 9359587816",
            linkedin="https://linkedin.com/in/pvsaketh",
            github="https://github.com/PVSaketh2003",
            portfolio="https://portfolio.pvsairamsaketh.in",
            summary=(
                "Computer Vision Engineer with 1+ year of experience designing and deploying real-time, "
                "production-grade AI systems for UAV, defense and industrial-safety applications. "
                "Currently engineering low-latency computer vision pipelines on NVIDIA Jetson Orin Nano "
                "for the CALM (Canister Launched Anti-Armoured Loiter Munition) program while delivering "
                "4 concurrent commercial AI projects. Expertise in object detection (YOLO), model optimization "
                "(PyTorch to ONNX to TensorRT FP16), DeepStream and GStreamer video pipelines, multi-object "
                "tracking, face recognition and Edge AI deployment. Published researcher with a B.Tech in "
                "Computer Science Engineering (CGPA 9.33/10)."
            )
        )
        self.stdout.write(self.style.SUCCESS('Profile created.'))

        # Experiences
        Experience.objects.all().delete()
        experiences = [
            {
                "role": "Executive – Computer Vision Engineer",
                "company": "Solar Defence and Aerospace Limited",
                "location": "Nagpur, India | On-site",
                "duration": "Jul 2025 – Present",
                "division": "UAV Division",
                "order": 1,
                "highlights": [
                    "CALM (Canister Launched Anti-Armoured Loiter Munition) Project: Architected and deployed object detection, recognition and identification software for UAV surveillance systems, improving target-identification reliability under field conditions.",
                    "Developing an infrared (IR) thermal object detection pipeline for accurate tank/armor detection, extending mission capability to low-visibility and night-time conditions.",
                    "Optimized deep learning models by converting PyTorch (.pt) models to ONNX and TensorRT FP16 engines, cutting inference latency and increasing FPS for real-time onboard processing.",
                    "Built end-to-end DeepStream and GStreamer pipelines covering video ingestion, preprocessing, inference, post-processing, encoding and live streaming to the Ground Control Station (GCS).",
                    "Deployed production-ready edge AI applications on NVIDIA Jetson Orin Nano, enabling low-latency embedded vision for time-critical defense operations.",
                    "Delivered 4 concurrent commercial computer vision projects: PPE Detection at Chakhdoh plant, PDM 557 Fuze X-ray defect classification, Process-deviation monitoring of Delay Plant (10,000 images YOLO26x), and CCTV Face recognition head count system."
                ],
                "technologies": ["Python", "PyTorch", "OpenCV", "YOLOv8", "TensorRT", "ONNX", "DeepStream SDK", "GStreamer", "NVIDIA Jetson Orin Nano", "Linux", "Edge AI", "Rust", "React JS"]
            },
            {
                "role": "MTS Intern",
                "company": "Tessell",
                "location": "Remote",
                "duration": "6 months",
                "division": "Cloud Infrastructure",
                "order": 2,
                "highlights": [
                    "Extracted machine types and availability zones from GCP through its API using the Go programming language.",
                    "Implemented JSON validation schemas and used them to validate the entire JSON flow format on the backend.",
                    "Performed error handling across the backend codebase and worked on workflows and cloud logs to pinpoint where the code was breaking."
                ],
                "technologies": ["Go", "GCP API", "JSON Schema", "Cloud Logging", "Microservices"]
            },
            {
                "role": "Data & Python Intern",
                "company": "Rise 11 Technologies",
                "location": "Remote",
                "duration": "4 months",
                "division": "Product Development",
                "order": 3,
                "highlights": [
                    "Designed test cases achieving 100% core-functionality coverage for the Zetaleap project launch.",
                    "Applied Python and data analytics techniques to support product testing and content development."
                ],
                "technologies": ["Python", "QA Testing", "Data Analytics", "Zetaleap"]
            },
            {
                "role": "Web Developer Trainer Intern",
                "company": "Coding Raja Technologies",
                "location": "Remote",
                "duration": "3 months",
                "division": "Training & Mentorship",
                "order": 4,
                "highlights": [
                    "Delivered training sessions on Pandas and SQL to student cohorts, improving hands-on data analysis proficiency.",
                    "Guided students through Exploratory Data Analysis (EDA) projects and mentored them on real-world data workflows."
                ],
                "technologies": ["Python", "Pandas", "SQL", "EDA", "Data Mentorship"]
            },
            {
                "role": "Machine Learning Intern",
                "company": "Prodigy Infotech",
                "location": "Remote",
                "duration": "3 months",
                "division": "AI / ML Research",
                "order": 5,
                "highlights": [
                    "Built multiple supervised ML models: House Price Prediction (Linear Regression), Dogs vs. Cats Image Classification (SVM) and Customer Purchase Prediction (KNN).",
                    "Received formal Letter of Recommendation for outstanding performance and technical contribution."
                ],
                "technologies": ["Scikit-learn", "SVM", "KNN", "Linear Regression", "NumPy", "Pandas"]
            }
        ]
        for exp in experiences:
            Experience.objects.create(**exp)
        self.stdout.write(self.style.SUCCESS(f'{len(experiences)} Experiences created.'))

        # Projects
        Project.objects.all().delete()
        projects = [
            {
                "title": "CALM Loiter Munition UAV Computer Vision Pipeline",
                "category": "UAV Defense",
                "tagline": "Real-time edge target detection, thermal IR tracking & low-latency GCS streaming",
                "description": [
                    "Architected target detection and recognition pipelines for UAV loiter munition surveillance systems.",
                    "Developing an infrared (IR) thermal object detection pipeline for tank and armor detection under low visibility.",
                    "Converted PyTorch models to ONNX and TensorRT FP16 engines on NVIDIA Jetson Orin Nano.",
                    "Constructed DeepStream & GStreamer pipelines covering video ingestion, inference, and streaming to GCS."
                ],
                "metrics": "Sub-15ms inference latency, Jetson Orin Nano FP16, DeepStream 6.x",
                "technologies": ["NVIDIA Jetson Orin Nano", "TensorRT", "DeepStream SDK", "GStreamer", "PyTorch", "Thermal IR", "YOLOv8"],
                "is_featured": True,
                "order": 1
            },
            {
                "title": "VisionEye – Real-Time Foot-Traffic Analytics Platform",
                "category": "Computer Vision",
                "tagline": "Real-time people detection, ByteTrack, 2D perspective mapping, and full-stack analytics",
                "description": [
                    "Engineered a real-time people detection and tracking system using YOLO26n ONNX, ByteTrack and OpenCV.",
                    "Enabled bidirectional foot-traffic counting, occupancy monitoring, and 2D perspective mapping.",
                    "Developed full-stack platform with React 18, Django REST Framework, Django Channels WebSockets, and live MJPEG streaming.",
                    "Automated CI/CD with GitHub Actions, Docker, and Nginx SSL/TLS."
                ],
                "metrics": "30+ FPS real-time tracking, 2D Homography bird's eye view",
                "technologies": ["React 18", "Django REST Framework", "ByteTrack", "YOLOv8/ONNX", "OpenCV", "WebSockets", "Docker"],
                "live_url": "https://pvsairamsaketh.in",
                "github_url": "https://github.com/PVSaketh2003",
                "is_featured": True,
                "order": 2
            },
            {
                "title": "Process Deviation Monitoring of Delay Plant",
                "category": "Edge AI",
                "tagline": "Plant safety FSM violation alerts, CIELAB chemical color trigger, and 10,000-image YOLO model",
                "description": [
                    "Collected and annotated 10,000 defense plant images and trained 3 YOLO26x models (PPE, table, door, fan).",
                    "Achieved mAP50 of 70% and mAP50-95 of 43% on complex industrial scenes.",
                    "Implemented an FSM to flag procedural safety violations.",
                    "Used CIELAB color identification to trigger plant process events upon solution brown-tone transition."
                ],
                "metrics": "70% mAP50 on 10k defense plant dataset, FSM violation detection",
                "technologies": ["YOLO", "CIELAB Color Space", "FastAPI", "React JS", "FSM", "OpenCV"],
                "is_featured": True,
                "order": 3
            },
            {
                "title": "PDM 557 Fuze X-ray Defect Detection",
                "category": "Computer Vision",
                "tagline": "Automated X-ray internal component defect classification for munitions assembly",
                "description": [
                    "Identifies defects in defense munitions X-ray images using morphology filters, thresholding, and contour area analysis.",
                    "Annotated defense plant X-ray data and trained custom detection models.",
                    "Built high-performance application with Rust backend and React JS frontend for plant server deployment."
                ],
                "metrics": "Sub-millimeter flaw detection, Rust + React plant deployment",
                "technologies": ["Rust", "React JS", "OpenCV", "X-ray Image Analysis", "Thresholding"],
                "is_featured": False,
                "order": 4
            },
            {
                "title": "CCTV Face Recognition for Head Count & Access Control",
                "category": "Computer Vision",
                "tagline": "High-accuracy CCTV face verification solving duplicate-embedding in crowded frames",
                "description": [
                    "Benchmarked SCRFD, YuNet, RetinaFace, ArcFace, and AdaFace; architected SCRFD + ArcFace deployment.",
                    "Solved duplicate-embedding challenges using ROI-based person detection, interactive selection, and 5 FPS sampling.",
                    "Applied face recognition strictly to top 50% of person box for higher accuracy and saved embeddings in .npy format."
                ],
                "metrics": "SCRFD + ArcFace state-of-the-art face verification, ROI-based sampling",
                "technologies": ["SCRFD", "ArcFace", "OpenCV", "Python", "NumPy", "CCTV Analytics"],
                "is_featured": False,
                "order": 5
            },
            {
                "title": "Vehicle Insurance Fraud Detection (Published Research)",
                "category": "Research",
                "tagline": "Comparative machine learning research published at International Conference on Computational Intelligence",
                "description": [
                    "Built and evaluated ensemble Bagging Classifier against Multi-Layer Perceptron (MLP) for detecting fraudulent vehicle insurance claims.",
                    "Demonstrated superior precision and recall using Bagging Classifier on imbalanced real-world insurance claim data.",
                    "Peer-reviewed and published at the International Conference on Computational Intelligence (ICCI)."
                ],
                "metrics": "Published Research Paper at IEEE/ICCI Conference",
                "technologies": ["Python", "Scikit-learn", "Bagging Classifier", "MLP Neural Network", "Data Imbalance"],
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
                    {"name": "Object Detection (YOLOv8/v11/YOLO26)", "level": 95, "highlight": True},
                    {"name": "Object Tracking (ByteTrack, DeepSORT)", "level": 90, "highlight": True},
                    {"name": "Face Recognition (SCRFD, ArcFace)", "level": 90, "highlight": False},
                    {"name": "PyTorch & Deep Learning", "level": 92, "highlight": True},
                    {"name": "OpenCV & Image Processing", "level": 95, "highlight": True},
                    {"name": "Video Analytics & DeepStream SDK", "level": 88, "highlight": True},
                    {"name": "Thermal / Infrared Object Detection", "level": 85, "highlight": False}
                ]
            },
            {
                "category": "Edge AI & Hardware Optimization",
                "order": 2,
                "items": [
                    {"name": "NVIDIA Jetson Orin Nano / Xavier", "level": 95, "highlight": True},
                    {"name": "TensorRT FP16 / INT8 Optimization", "level": 92, "highlight": True},
                    {"name": "ONNX Runtime & Graph Surgery", "level": 90, "highlight": True},
                    {"name": "GStreamer Multimedia Pipelines", "level": 88, "highlight": False},
                    {"name": "Embedded Linux & JetPack 6.x", "level": 85, "highlight": False},
                    {"name": "Low-Latency RTSP / WebRTC Streaming", "level": 85, "highlight": False}
                ]
            },
            {
                "category": "Software Engineering & Cloud DevOps",
                "order": 3,
                "items": [
                    {"name": "Python 3.x", "level: 95": 95, "name": "Python 3.x", "level": 95, "highlight": True},
                    {"name": "Django & Django REST Framework", "level": 90, "highlight": True},
                    {"name": "React 18 & TypeScript", "level": 88, "highlight": True},
                    {"name": "Docker & Containerization", "level": 90, "highlight": True},
                    {"name": "Kubernetes (k3s / k8s)", "level": 85, "highlight": True},
                    {"name": "CI/CD (GitHub Actions)", "level": 88, "highlight": True},
                    {"name": "AWS EC2, Networking & Ingress", "level": 85, "highlight": False}
                ]
            },
            {
                "category": "Languages & Frameworks",
                "order": 4,
                "items": [
                    {"name": "C++ (Embedded / Vision)", "level": 80, "highlight": False},
                    {"name": "Rust", "level": 75, "highlight": False},
                    {"name": "Go (Golang)", "level": 78, "highlight": False},
                    {"name": "SQL & PostgreSQL", "level": 85, "highlight": False},
                    {"name": "Tailwind CSS", "level": 90, "highlight": False},
                    {"name": "Scikit-Learn & ML Algorithms", "level": 92, "highlight": False}
                ]
            }
        ]

        for grp in skill_groups:
            cat = SkillCategory.objects.create(category=grp["category"], order=grp["order"])
            for itm in grp["items"]:
                SkillItem.objects.create(category=cat, name=itm["name"], level=itm["level"], highlight=itm["highlight"])

        self.stdout.write(self.style.SUCCESS('Skill matrices created.'))
        self.stdout.write(self.style.SUCCESS('Portfolio database seeded successfully!'))
