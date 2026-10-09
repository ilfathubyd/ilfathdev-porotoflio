/**
 * Portfolio Projects Data
 * 
 * Schema:
 * - id             : Unique string identifier (e.g. "sdip-teknik-mesin-untag")
 * - title          : Project name
 * - category       : Filter categories (["Web App", "Mobile App", "AI & Machine Learning", "Enterprise System", "Real-Time System"])
 * - badge          : User role in English
 * - badge_id       : User role in Indonesian
 * - bgClass        : Header card background class ("bg-blue" | "bg-gray" | "bg-pink" | "bg-purple" | "bg-emerald" | "bg-amber")
 * - image          : Thumbnail path or null
 * - images         : Array of screenshot paths for the detail modal slider
 * - meta           : Subtitle metadata
 * - description    : Summary for homepage card (English)
 * - description_id : Summary for homepage card (Indonesian - Santai tapi Formal)
 * - tags           : Array of tech stack tags
 * - githubUrl      : GitHub repository link or null
 * - liveUrl        : Live deployment link or null
 * - details        : Technical case study details (EN + ID)
 */

const projectsData = [
  {
    id: "sdip-teknik-mesin-untag",
    title: "Sistem Dokumentasi & Informasi Prodi Teknik Mesin - UNTAG Surabaya",
    category: ["Web App", "Enterprise System"],
    badge: "Lead Fullstack Developer",
    badge_id: "Lead Fullstack Developer",
    bgClass: "bg-blue",
    image: "assets/work/sdip/1.png",
    images: [
      "assets/work/sdip/1.png",
      "assets/work/sdip/2.png"
    ],
    meta: "Client: Prodi Teknik Mesin UNTAG • 2024",
    description: "An integrated web platform designed to digitize LKPS instruments for LAM Teknik/BAN-PT accreditation, centralize faculty Tridharma records, and monitor department performance metrics in real time.",
    description_id: "Platform web terpadu untuk digitalisasi instrumen LKPS akreditasi LAM Teknik/BAN-PT, rekap arsip Tridharma dosen, dan monitoring kinerja jurusan secara real-time.",
    tags: ["Laravel 12", "PHP 8.3", "Livewire", "Tailwind CSS", "Laravel Reverb", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/ilfathubyd/laravel-academic-portal-core",
    liveUrl: null,
    details: {
      summary: "A comprehensive academic documentation and accreditation management system developed for the Mechanical Engineering Department at UNTAG Surabaya, centralizing Tridharma records, OBE curriculum alignment, and multi-tier verification workflows.",
      summary_id: "Sistem dokumentasi akademik dan manajemen akreditasi untuk Prodi Teknik Mesin UNTAG Surabaya, memusatkan arsip Tridharma dosen, pemetaan kurikulum OBE, serta alur verifikasi berkas multi-level.",
      problem: "Preparation for national accreditation (LAM Teknik / BAN-PT) and LKPS data compilation relied on fragmented spreadsheets and manual physical files, causing redundant paperwork, unverified lecturer submissions, and high audit preparation lead times.",
      problem_id: "Penyusunan berkas akreditasi (LAM Teknik/BAN-PT) dan instrumen LKPS dulunya masih mengandalkan spreadsheet terpisah dan arsip fisik, rawan selip, serta butuh waktu lama saat persiapan audit.",
      solution: "Architected a centralized Laravel 12 & Livewire application featuring multi-role RBAC (Super Admin, TU, Dosen), dynamic approval pipelines, automated accreditation-ready PDF generation, and real-time notifications powered by Laravel Reverb WebSockets.",
      solution_id: "Merancang arsitektur aplikasi berbasis Laravel 12 & Livewire dengan kontrol akses multi-role (Super Admin, TU, Dosen), alur approval dinamis, generate laporan PDF otomatis, dan notifikasi instan berbasis WebSocket Reverb.",
      highlights: [
        "Built a multi-tier approval & verification engine enabling Dosen to submit Tridharma portfolios and administrative staff (TU/Admin) to review, request revisions, or approve records",
        "Engineered real-time notification broadcasting using Laravel Reverb (WebSockets) for instant alert triggers on document validation and status changes",
        "Implemented automated tabular LKPS reporting with PDF generation (DomPDF) and bulk ZIP archive downloads for physical evidence attachments",
        "Integrated Outcome-Based Education (OBE) curriculum mapping, CPL tracking, and interactive Chart.js analytics for department performance metrics"
      ],
      highlights_id: [
        "Membangun alur persetujuan berjenjang: dosen submit portofolio Tridharma, staf TU/Admin me-review, meminta revisi, atau langsung menyetujui berkas",
        "Menerapkan broadcast notifikasi real-time via Laravel Reverb (WebSockets) untuk memberi sinyal instan saat dokumen divalidasi",
        "Menyediakan fitur generate laporan LKPS otomatis berformat PDF (DomPDF) dan bulk download berkas bukti fisik dalam format ZIP",
        "Mengintegrasikan pemetaan kurikulum OBE, pelacakan capaian CPL, serta dashboard visualisasi performa jurusan dengan Chart.js"
      ],
      metrics: [
        { label: "Role", value: "Lead Fullstack Developer" },
        { label: "Architecture", value: "Laravel 12 + Livewire" },
        { label: "Realtime Engine", value: "WebSocket (Reverb)" },
        { label: "Target Domain", value: "Akreditasi LAM Teknik" }
      ]
    }
  },
  {
    id: "esports-tournament-broadcast-suite",
    title: "Esports Broadcast Production Suite (MOBA-CAST)",
    category: ["Web App", "Real-Time System"],
    badge: "Real-Time Systems Developer",
    badge_id: "Real-Time Systems Developer",
    bgClass: "bg-purple",
    image: "assets/work/mobacast/1.png",
    images: [
      "assets/work/mobacast/1.png",
      "assets/work/mobacast/2.png",
      "assets/work/mobacast/3.png"
    ],
    meta: "Esports Broadcast Suite • 2024",
    description: "An end-to-end real-time esports broadcast system featuring a competitive MOBA Draft Pick (Pick/Ban) engine, live in-game HUD, caster tactical map telestrator, and post-match MVP showcases synced via low-latency WebSockets.",
    description_id: "Sistem broadcast esports real-time lengkap dengan engine Draft Pick (Pick/Ban) turnamen, in-game HUD, telestrator taktis, dan spotlight MVP via WebSockets latensi rendah.",
    tags: ["JavaScript (ES6+)", "Node.js", "WebSockets", "OBS / vMix Integration", "Broadcast Graphics", "Real-Time Sync"],
    githubUrl: "https://github.com/ilfathubyd",
    liveUrl: null,
    details: {
      summary: "A professional esports production suite built for live tournament streaming. The system unifies multi-scene broadcast graphics—including competitive Pick & Ban draft phases, caster tactical telestrators, in-game kill/gold counters, and post-match MVP screens—controllable in real time across multiple operator devices.",
      summary_id: "Suite produksi broadcast turnamen esports profesional untuk kebutuhan live streaming. Sistem ini menyatukan berbagai scene grafis—mulai dari fase draft pick/ban, peta taktis interaktif caster, HUD kill/gold ingame, hingga layar MVP pasca tanding—yang bisa dikontrol real-time dari berbagai perangkat operator.",
      problem: "Traditional broadcast overlays often rely on bloated browser sources that introduce CPU spikes and frame drops on streaming rigs (OBS/vMix). Furthermore, production crews face coordination bottlenecks when synchronizing multi-seat operations (admin controller, analyst desk, and streaming PC) during fast-paced live tournaments.",
      problem_id: "Overlay broadcast konvensional seringkali berat di browser source sehingga memicu lonjakan CPU dan frame drop pada streaming rig (OBS/vMix). Selain itu, sinkronisasi antar operator admin, meja analis, dan PC streaming sering rawan delay di tengah turnamen yang bertempo cepat.",
      solution: "Engineered a zero-framework, hardware-accelerated overlay architecture powered by a lightweight Node.js WebSocket relay bridge. Implemented an event-intercepting sync layer that replicates state across multi-operator admin dashboards with sub-16ms latency and an offline-first localStorage fallback, locking smooth 60 FPS renders under heavy encoder loads.",
      solution_id: "Merancang arsitektur grafis overlay berbasis hardware-accelerated tanpa framework berat, ditopang oleh bridge WebSocket Node.js yang ringan. Sinkronisasi state antar-dashboard berlangsung sub-16ms dengan fallback offline di localStorage, mengunci performa mulus di 60 FPS.",
      highlights: [
        "Real-Time Cross-Device Relay: Custom WebSocket bridge that synchronizes admin control panels, caster stations, and OBS browser sources instantaneously with zero configuration.",
        "Comprehensive Multi-Module Suite: Modular scenes for MOBA Draft Pick (timers, emblems, spells), Tactical Map Telestrator, In-Game HUD, Pre-Match Lineups, and Post-Match MVP summaries.",
        "Zero-Drop Encoder Performance: Built entirely with vanilla JS and GPU-accelerated CSS (translate3d/will-change), ensuring flawless 60 FPS video capture without encoder frame drops.",
        "Dual-Mode Resilience: Transparent state management with automated localStorage fallback ensuring broadcast continuity even during local network dropouts."
      ],
      highlights_id: [
        "Relay Multi-Device Real-Time: Sinkronisasi instan antara dashboard admin, meja caster, dan browser source OBS tanpa perlu konfigurasi rumit",
        "Paket Scene Lengkap: Modul terpisah untuk Draft Pick MOBA (timer, spell, emblem), telestrator peta taktis, in-game HUD, susunan tim, hingga sorotan MVP",
        "Performa Tanpa Frame Drop: Dibuat murni menggunakan Vanilla JS dan akselerasi GPU (translate3d), menjamin tangkapan video tetap 60 FPS tanpa membebani encoder OBS",
        "Resistensi Mode Offline: Manajemen state otomatis dengan fallback ke localStorage agar tampilan broadcast tetap aman saat jaringan sempat drop"
      ],
      metrics: [
        { label: "Role", value: "Real-Time Systems Developer" },
        { label: "Sync Latency", value: "< 16ms Real-Time" },
        { label: "Render Target", value: "Locked 60 FPS" },
        { label: "Scenes Supported", value: "5+ Broadcast Modules" }
      ]
    }
  },
  {
    id: "fitamora-samsung-sft",
    title: "Fitamora - AI Posture Detection & Corrective Exercise Mobile App",
    category: ["Mobile App", "AI & Machine Learning"],
    badge: "Project Manager & Mobile Dev",
    badge_id: "Project Manager & Mobile Dev",
    bgClass: "bg-amber",
    image: "assets/work/fitamora/4.png",
    images: [
      "assets/work/fitamora/1.png",
      "assets/work/fitamora/2.png",
      "assets/work/fitamora/3.png",
      "assets/work/fitamora/4.png"
    ],
    meta: "Samsung Solve for Tomorrow (Top 10) • 2025",
    description: "An AI-driven mobile health application awarded Top 10 Finalist in Samsung Solve for Tomorrow 2025, delivering real-time posture analysis, biomechanical feedback, and personalized exercise regimens.",
    description_id: "Aplikasi mobile kesehatan berbasis AI (Top 10 Finalis Samsung Solve for Tomorrow 2025) dengan analisis postur tubuh real-time, koreksi biomekanika, dan program latihan fisioterapi personal.",
    tags: [
      "Flutter",
      "Dart",
      "MediaPipe",
      "TensorFlow Lite",
      "Kotlin Native",
      "Flutter TTS",
      "Project Management",
      "Agile / Scrum"
    ],
    githubUrl: "https://github.com/Jianyao17/flutter_fitamora",
    liveUrl: null,
    details: {
      summary: "Recognized as a Top 10 Finalist in the national Samsung Solve for Tomorrow (SFT) 2025 competition, Fitamora is an intelligent mobile physiotherapy and posture correction platform. Acted as Project Manager orchestrating sprint backlogs and competition pitches, while contributing hands-on to Flutter mobile development and camera-ML bridging.",
      summary_id: "Fitamora adalah platform fisioterapi dan koreksi postur tubuh cerdas yang sukses menembus Top 10 Finalis nasional Samsung Solve for Tomorrow (SFT) 2025. Berperan sebagai Project Manager sekaligus turun langsung mengembangkan aplikasi Flutter dan bridging kamera ke model machine learning.",
      problem: "Sedentary lifestyle habits cause prevalent posture disorders (such as Forward Head Kyphosis and Anterior Pelvic Tilt). Most people lack access to affordable physical therapists and receive zero real-time postural feedback during independent home workouts.",
      problem_id: "Gaya hidup sedentari memicu tingginya gangguan postur (seperti leher bungkuk dan kemiringan panggul). Terapi fisik relatif mahal dan kebanyakan orang tidak mendapat panduan koreksi langsung saat latihan mandiri di rumah.",
      solution: "Spearheaded the design and development of an on-device computer vision solution combining native Android MediaPipe pose landmarking, custom TensorFlow Lite models, real-time Text-to-Speech audio feedback, and phased exercise regimens.",
      solution_id: "Merancang solusi computer vision on-device menggabungkan MediaPipe pose landmarking di Android native, model klasifikasi TensorFlow Lite, audio feedback Text-to-Speech (TTS) bahasa Indonesia, dan program latihan bertahap.",
      highlights: [
        "Led product roadmap, agile sprint execution, and pitching strategy, successfully steering the team to become a Top 10 Finalist in Samsung Solve for Tomorrow 2025 nationwide",
        "Managed cross-functional collaboration between AI/ML engineers, mobile developers, and UI/UX designers under strict competition deadlines",
        "Contributed to Flutter mobile client development, implementing workout flow navigation, user onboarding, and reactive state management",
        "Facilitated integration of native Android Kotlin Platform Channels for high-performance camera streaming and MediaPipe 33-point pose landmark processing",
        "Engineered real-time workout assistance featuring live skeleton rigging overlays, rep counting, and dynamic Indonesian Text-to-Speech (TTS) auditory cues",
        "Structured a comprehensive database for posture classification (Forward Head, Anterior Pelvic Tilt) mapped to progressive corrective exercise routines"
      ],
      highlights_id: [
        "Memimpin roadmap produk, eksekusi sprint agile, dan strategi pitching hingga sukses membawa tim menjadi Top 10 Finalis nasional Samsung Solve for Tomorrow 2025",
        "Mengorkestrasi kolaborasi tim lintas disiplin antara AI/ML engineer, mobile developer, dan desainer UI/UX di bawah tenggat kompetisi yang ketat",
        "Mengembangkan aplikasi mobile Flutter: navigasi alur latihan, orientasi pengguna, dan manajemen state yang responsif",
        "Mengintegrasikan Kotlin Platform Channel di Android native untuk streaming frame kamera performa tinggi dan estimasi 33 titik pose MediaPipe",
        "Menerapkan asisten latihan cerdas: deteksi rangka tubuh real-time, penghitung repetisi otomatis, dan instruksi suara (TTS) berbahasa Indonesia",
        "Menyusun database klasifikasi gangguan postur yang terhubung langsung dengan variasi latihan perbaikan fisik yang terarah"
      ],
      metrics: [
        { label: "Role", value: "Project Manager & Mobile Dev" },
        { label: "Achievement", value: "Top 10 Finalist SFT 2025" },
        { label: "Core Tech", value: "Flutter + MediaPipe + TFLite" }
      ]
    }
  },
  {
    id: "simrapel-bbws-brantas",
    title: "Simrapel Brantas - Smart Meeting Management & Dynamic QR Attendance Ecosystem",
    category: ["Mobile App", "Web App", "Enterprise System", "Real-Time System"],
    badge: "Solution Architect & Fullstack Dev",
    badge_id: "Solution Architect & Fullstack Dev",
    bgClass: "bg-blue",
    image: "assets/work/simrapel/11.png",
    images: [
      "assets/work/simrapel/11.png",
      "assets/work/simrapel/12.png",
      "assets/work/simrapel/13.png",
      "assets/work/simrapel/21.png",
      "assets/work/simrapel/22.png",
      "assets/work/simrapel/23.png",
    ],
    meta: "Client: BBWS Brantas (Kementerian PUPR) • 2024",
    description: "An integrated enterprise meeting governance and smart attendance ecosystem for BBWS Brantas (Kementerian PUPR), featuring dynamic QR verification, hardware device binding, and multi-role web-mobile synchronization.",
    description_id: "Ekosistem tata kelola rapat dan absensi cerdas untuk BBWS Brantas (Kementerian PUPR) dengan verifikasi QR dinamis, device binding perangkat, serta sinkronisasi web dan mobile.",
    tags: [
      "Flutter",
      "Dart",
      "Laravel 12",
      "PHP 8.4",
      "RESTful API",
      "WebSockets",
      "Device Binding",
      "Camera & Face Scan",
      "Solution Architecture",
      "Requirement Engineering"
    ],
    githubUrl: null,
    liveUrl: null,
    details: {
      summary: "Developed for Balai Besar Wilayah Sungai (BBWS) Brantas - Kementerian PUPR, Simrapel Brantas is a fullstack enterprise platform that digitizes end-to-end meeting workflows, room scheduling, and attendance verification. Acted as Solution Architect & Fullstack Developer, translating governmental operational bureaucracy and anti-fraud attendance requirements into a unified Laravel web portal and cross-platform Flutter mobile client.",
      summary_id: "Dikembangkan untuk Balai Besar Wilayah Sungai (BBWS) Brantas - Kementerian PUPR, Simrapel Brantas adalah ekosistem fullstack enterprise yang mendigitalkan seluruh alur rapat, penjadwalan ruangan, hingga verifikasi kehadiran. Berperan sebagai Solution Architect & Fullstack Developer, menerjemahkan regulasi kedinasan menjadi aplikasi web Laravel dan aplikasi mobile Flutter.",
      problem: "Conventional meeting administration in public institutions faced significant friction: paper-based sign-in sheets prone to manipulation ('joki absen'), chaotic room booking conflicts across branches, lack of real-time attendance telemetry for PICs, and unorganized, unsecure distribution of confidential meeting materials.",
      problem_id: "Administrasi rapat konvensional di instansi pemerintah menghadapi banyak celah: lembar absensi kertas rawan titip absen/joki, bentrok ruangan antar-bidang, PIC kesulitan memantau kehadiran secara langsung, dan pembagian materi rahasia belum aman.",
      solution: "Engineered a secure, synchronized fullstack solution combining a centralized Laravel web administration portal and a Flutter mobile app. Implemented anti-fraud security mechanisms including dynamic time-sensitive QR code generation, camera face-scan verification, unique hardware device binding (device fingerprinting), and time-limited signed URLs for document distribution.",
      solution_id: "Membangun sistem terintegrasi antara portal web admin Laravel dan aplikasi mobile Flutter. Dilengkapi fitur anti-manipulasi seperti QR code dinamis yang berganti periodik, verifikasi foto wajah via kamera, kuncian ID perangkat unik (device fingerprinting), dan link materi dengan masa berlaku terbatas (signed URL).",
      highlights: [
        "Analyzed operational workflows and translated administrative requirements into end-to-end software architecture, database schemas, and intuitive UI/UX for Admin, PIC, Employee, and Guest roles",
        "Developed cross-platform mobile client with Flutter & Dart, implementing camera face capture, dynamic QR scanner, device info extraction, and real-time meeting tracking",
        "Architected secure backend services & RESTful APIs using Laravel 12 with Sanctum authentication, WebSocket event broadcasting, and custom device-binding middleware (`device.valid`) to eliminate attendance fraud",
        "Engineered dynamic QR token display systems and guest check-in portals allowing external stakeholders to self-register without exposing internal accounts",
        "Implemented room scheduling & branch management algorithms preventing room booking clashes and automating PIC approval pipelines",
        "Built automated export engines (Excel/CSV) and signed URL download security for seamless distribution of meeting materials and instant attendance reporting"
      ],
      highlights_id: [
        "Menganalisis alur kerja operasional dan merancang arsitektur sistem, skema database, serta UI/UX intuitif untuk role Admin, PIC, Pegawai, dan Tamu",
        "Mengembangkan aplikasi Flutter mobile: pemindaian QR dinamis, verifikasi foto kehadiran, deteksi info perangkat, dan timeline rapat real-time",
        "Membangun backend RESTful API dengan Laravel 12, otentikasi Sanctum, event WebSocket, dan middleware proteksi perangkat (`device.valid`) untuk mencegah joki absen",
        "Menyediakan display token QR dinamis dan portal registrasi mandiri untuk tamu luar instansi tanpa perlu membuat akun internal",
        "Menerapkan algoritma penjadwalan ruangan otomatis guna mencegah bentrok jadwal penggunaan aula dan ruang rapat antar-bidang",
        "Membangun fitur rekap kehadiran otomatis (Excel/CSV) serta pengamanan distribusi berkas materi rapat dengan URL bertanda tangan digital"
      ],
      metrics: [
        { label: "Role", value: "Solution Architect & Fullstack Dev" },
        { label: "Institution", value: "BBWS Brantas (Kementerian PUPR)" },
        { label: "Tech Stack", value: "Flutter + Laravel 12 + WebSockets" }
      ]
    }
  },
  {
    id: "sport-pose-tcnn-classifier",
    title: "AI Sport Movement Classifier - Pose Estimation & Temporal CNN Ecosystem",
    category: ["AI & Machine Learning"],
    badge: "AI & Machine Learning Engineer",
    badge_id: "AI & Machine Learning Engineer",
    bgClass: "bg-purple",
    image: "assets/work/tcnn-pose/1.png",
    images: [
      "assets/work/tcnn-pose/1.png",
      "assets/work/tcnn-pose/2.png",
      "assets/work/tcnn-pose/3.png",
      "assets/work/tcnn-pose/4.png",
      "assets/work/tcnn-pose/5.png",
      "assets/work/tcnn-pose/6.png",
    ],
    meta: "Undergraduate Thesis • Untag Surabaya (2026)",
    description: "A lightweight computer vision and spatiotemporal deep learning pipeline classifying bodyweight exercises (Arm Raise, Lunge, Squat) using MediaPipe 3D pose extraction and Residual Temporal Convolutional Neural Networks.",
    description_id: "Pipeline computer vision dan deep learning spatiotemporal untuk klasifikasi gerakan olahraga (Arm Raise, Lunge, Squat) menggunakan estimasi pose 3D MediaPipe dan Residual Temporal CNN.",
    tags: [
      "Python",
      "TensorFlow / Keras",
      "MediaPipe (BlazePose)",
      "OpenCV",
      "Temporal CNN (TCNN)",
      "Time-Series Classification",
      "NumPy & SciPy",
      "Computer Vision",
      "Deep Learning Architecture"
    ],
    githubUrl: null,
    liveUrl: null,
    details: {
      summary: "Developed as an undergraduate thesis at Universitas 17 Agustus 1945 Surabaya, this project delivers an end-to-end computer vision and sequence modeling framework for automated Human Activity Recognition (HAR). Acting as the primary Machine Learning Researcher & AI Engineer, designed a lightweight spatiotemporal classification pipeline converting in-the-wild video feeds into 3D joint landmark sequences, classifying exercise routines into Arm Raise, Lunge, and Squat using a custom Residual Temporal Convolutional Neural Network (TCNN).",
      summary_id: "Tugas akhir di Teknik Informatika UNTAG Surabaya berupa kerangka kerja Human Activity Recognition (HAR) otomatis berbasis computer vision. Berperan sebagai Peneliti Utama & AI Engineer, merancang pipeline klasifikasi spatiotemporal ringan yang mampu membaca rekaman video bebas, mengekstrak sekuens koordinat sendi 3D, dan mengklasifikasikan gerakan menjadi Arm Raise, Lunge, atau Squat memakai Residual Temporal CNN (TCNN).",
      problem: "Vision-based physical activity monitoring in-the-wild suffers from significant real-world noise: background clutter, high execution speed variability across subjects, limb occlusions, and severe computational latency in conventional sequential architectures like LSTMs/RNNs, alongside risks of data leakage during evaluation.",
      problem_id: "Pengenalan gerakan fisik dari video di lingkungan nyata terganggu oleh latar belakang yang ramai, variasi kecepatan gerak tiap individu, bagian tubuh yang tertutup (oklusi), serta lambatnya proses komputasi pada model sekuensial konvensional seperti LSTM/RNN.",
      solution: "Engineered a robust, non-invasive end-to-end machine learning pipeline. Utilized MediaPipe BlazePose to track 12 anatomical keypoints (48 spatiotemporal features per frame), applied Hip-Center Normalization for translation invariance, Last Good Frame imputation for occlusion recovery, and Uniform Temporal Resampling to standardize video sequences to 60 frames. Designed a Residual TCNN model trained with subject-aware splitting, data augmentation (spatiotemporal jittering, rotation, flipping), and regularization (L2, Dropout, Label Smoothing).",
      solution_id: "Membangun pipeline machine learning non-invasif: MediaPipe BlazePose melacak 12 titik sendi kunci (48 fitur per frame), normalisasi Mid-Hip Anchor untuk kestabilan posisi, imputasi frame terakhir untuk sendi terhalang, dan Uniform Temporal Resampling ke 60 frame. Model Residual TCNN dilatih dengan subject-aware splitting dan augmentasi data yang ketat.",
      highlights: [
        "Extracted 3D spatial coordinates and visibility scores from 12 major kinematic joints using MediaPipe BlazePose, minimizing computational overhead and background interference",
        "Engineered mathematical preprocessing pipelines including Mid-Hip Anchor Normalization (translation-invariance), LOCF fallback imputation for occluded joints, and Uniform Temporal Resampling (SciPy 1D interpolation) to fixed 60×48 tensor matrices",
        "Designed an extensive data augmentation pipeline (Horizontal Flip, 6-knot Temporal Jitter, Spatial Jitter, and Random 2D Rotation), scaling training data from 900 to 4,500 samples",
        "Architected a deep Residual TCNN leveraging stacked 1D Dilated Convolutions, Batch Normalization, and 1×1 Conv shortcut skip-connections to model long-term temporal dependencies without vanishing gradients",
        "Implemented strict Subject-Aware Splitting across 1,200 hybrid video samples (primary recordings + Kinetics-700/in-the-wild) to guarantee unbiased zero-data-leakage evaluation",
        "Achieved 93.89% overall test accuracy on unseen subjects (96.67% Lunge, 95.00% Arm Raise, 90.00% Squat) with a balanced Macro F1-Score of 0.9392 and stable 10.42 FPS end-to-end inference throughput"
      ],
      highlights_id: [
        "Mengekstrak koordinat ruang 3D dan skor visibilitas dari 12 sendi utama dengan MediaPipe BlazePose, menepis gangguan visual pada background",
        "Merancang pra-pemrosesan matematis: normalisasi Mid-Hip Anchor (invarian translasi), imputasi LOCF untuk sendi tertutup, dan resampling temporal seragam (SciPy 1D) ke matriks 60×48",
        "Membangun augmentasi data spatiotemporal (flip horizontal, jitter temporal 6-knot, rotasi 2D acak), melipatgandakan data latih dari 900 menjadi 4.500 sampel",
        "Merancang arsitektur Residual TCNN dengan tumpukan 1D Dilated Convolutions, Batch Normalization, dan skip-connection 1×1 untuk menangkap dependensi waktu jangka panjang tanpa vanishing gradient",
        "Menerapkan Subject-Aware Splitting pada 1.200 sampel video untuk menjamin evaluasi pengujian benar-benar objektif tanpa kebocoran data (data leakage)",
        "Mencapai akurasi uji 93.89% pada subjek baru (96.67% Lunge, 95.00% Arm Raise, 90.00% Squat) dengan Macro F1-Score 0.9392 dan kecepatan inferensi 10.42 FPS"
      ],
      metrics: [
        { label: "Role", value: "AI / ML Researcher & Engineer" },
        { label: "Overall Accuracy", value: "93.89% (Test Set)" },
        { label: "Macro F1-Score", value: "0.9392" },
        { label: "Architecture", value: "MediaPipe + Residual TCNN" }
      ]
    }
  },
  {
    id: "biovibes-schoolmap",
    title: "BioVibes - Gamified Outdoor Biology Learning & Real-Time School Map App",
    category: ["Mobile App", "Real-Time System"],
    badge: "Fullstack Developer & System Analyst",
    badge_id: "Fullstack Developer & System Analyst",
    bgClass: "bg-emerald",
    image: "assets/work/schoolmap/1.jpeg",
    images: [
      "assets/work/schoolmap/1.jpeg",
      "assets/work/schoolmap/2.jpeg",
      "assets/work/schoolmap/3.jpeg",
      "assets/work/schoolmap/4.jpeg"
    ],
    meta: "EdTech Field Study & Geo-Location • 2024",
    description: "A gamified outdoor biology exploration app transforming school grounds into interactive learning zones through real-time GPS proximity tracking, QR checkpoint quests, and a live teacher monitoring dashboard.",
    description_id: "Aplikasi eksplorasi biologi luar ruangan berkonsep gamifikasi: menyulap area sekolah jadi arena belajar interaktif lewat radar GPS real-time, pos QR interaktif, dan pantauan langsung guru.",
    tags: [
      "Fullstack Development",
      "Requirement Analysis",
      "Android (Kotlin)",
      "Google Maps API",
      "Firebase Realtime Database",
      "ML Kit Barcode Scanner",
      "Sensor Fusion (Compass/Radar)",
      "System Architecture",
      "Geofencing & Proximity"
    ],
    githubUrl: null, 
    liveUrl: null,
    details: {
      summary: "BioVibes is an interactive outdoor learning platform that turns biology field exploration into an engaging scavenger-hunt experience. Acted as Fullstack Developer and Requirement Analyst, conducting user interviews with educators and students to map out pedagogical workflows, architecting real-time cloud-to-client data sync, and engineering both the gamified student app and the teacher admin monitoring console.",
      summary_id: "BioVibes adalah platform edukasi interaktif yang mengubah praktikum biologi luar kelas menjadi pengalaman berburu pos petualangan yang seru. Berperan sebagai Fullstack Developer & Analis Sistem: mewawancarai guru dan siswa untuk merumuskan alur belajar, merancang sinkronisasi data cloud real-time, serta membangun aplikasi Android siswa dan panel kontrol guru.",
      problem: "Traditional outdoor biology lessons in schools suffer from low student engagement, lack of structured guidance, and difficulty for teachers to monitor multiple student groups scattered across campus grounds simultaneously, leading to bottlenecks and lost students during field tasks.",
      problem_id: "Praktikum biologi di luar kelas konvensional sering bikin siswa kurang fokus, arahan tugas mudah hilang, dan guru kesulitan mengawasi puluhan siswa yang berpencar di area sekolah yang luas.",
      solution: "Bridged educational pedagogy with mobile technology by architecting a fullstack solution: dynamic staggered routing to prevent team crowding, a 10-meter sensor-based proximity radar with auto-reveal fail-safes, instant QR checkpoint scanning with interactive quizzes, and a live teacher tracking dashboard powered by Firebase Realtime Database.",
      solution_id: "Menggabungkan metode belajar aktif dengan teknologi mobile: rute bertahap agar kelompok tidak menumpuk di satu tempat, radar jarak 10 meter dengan sensor kompas, pemindaian pos QR berisi kuis interaktif, dan peta pemantauan langsung untuk guru berbasis Firebase Realtime Database.",
      highlights: [
        "Conducted extensive user requirement analysis and field observations with biology teachers and students to define functional specifications, user journeys, and gamified quiz mechanics",
        "Architected the fullstack system design, database schemas, and real-time state synchronization using Firebase Realtime Database across student devices and the teacher panel",
        "Engineered the student Android application in Kotlin using Google Maps SDK and hardware sensor fusion (accelerometer, magnetometer, rotation vector) for live compass radar navigation",
        "Developed a robust proximity detection engine with a 10-meter geofenced activation radius and an automated 5-minute hint reveal timer to assist struggling teams",
        "Built the comprehensive Teacher Admin Panel featuring live real-time map tracking of all teams, checkpoint/quiz CRUD management, and instant broadcast push notifications",
        "Implemented QR code scanner integration via Google ML Kit and local/cloud progress persistence, allowing teams to seamlessly resume sessions if disconnected"
      ],
      highlights_id: [
        "Melakukan analisis kebutuhan pengguna bersama guru dan siswa untuk menyusun skenario perjalanan pos, kuis bertingkat, dan aturan gamifikasi",
        "Merancang arsitektur sistem dan sinkronisasi data real-time dengan Firebase Realtime Database antara perangkat siswa dan panel monitor guru",
        "Mengembangkan aplikasi Android siswa dengan Kotlin, Google Maps SDK, dan sensor fusion (akselerometer & kompas) untuk navigasi radar arah pos",
        "Membangun sistem deteksi radius geofence 10 meter dan timer bantuan otomatis 5 menit untuk membantu tim yang kesulitan mencari titik pos",
        "Membuat Panel Admin Guru untuk memantau pergerakan lokasi semua kelompok di peta secara live, manajemen pos/soal kuis, dan kirim broadcast darurat",
        "Mengintegrasikan scanner barcode via Google ML Kit serta penyimpanan progress lokal dan cloud, sehingga aman jika koneksi internet sempat drop"
      ],
      metrics: [
        { label: "Role", value: "Fullstack Developer & System Analyst" },
        { label: "Domain", value: "EdTech & Gamified Geo-Tracking" },
        { label: "Core Tech", value: "Kotlin + Google Maps + Firebase" }
      ]
    }
  }
];

if (typeof window !== "undefined") {
  window.projectsData = projectsData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
