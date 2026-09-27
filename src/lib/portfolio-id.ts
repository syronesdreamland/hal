import {
  Award,
  Brain,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Leaf,
  Network,
  School,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import {
  certifications,
  experience,
  profile,
  projects,
} from "@/lib/portfolio";

/* ── Profile (Indonesian) ── */
export const profileId: typeof profile = {
  name: "Alif Muhammad Aditya",
  shortName: "Alif",
  title: "Backend Developer",
  location: "Pekanbaru, Indonesia",
  university: "Universitas Islam Riau",
  email: "alifadityaat@gmail.com",
  linkedin: "https://www.linkedin.com/in/aalifadityaa/",
  github: "https://github.com/syronesdreamland",
  summary:
    "Mahasiswa Teknik Informatika tingkat akhir, lulusan Bangkit Academy 2024, dengan spesialisasi backend development dan cloud computing. Saya membangun sistem produksi: platform ternak di domain sendiri, pipeline LLM dengan framework evaluasi, dan bot commerce Telegram yang berjalan 24/7.",
  focus: ["API Backend", "Cloud Computing", "Integrasi AI", "System Design"],
  typing: [
    "Backend Developer.",
    "Sistem cloud di GCP & AWS.",
    "Orkestrasi LLM dengan fallback safety.",
    "Otomasi yang berjalan 24/7.",
  ],
};

/* ── Projects (Indonesian) ── */
export const projectsId: typeof projects = [
  {
    slug: "nutrigraph-ai",
    title: "NutriGraph AI",
    type: "Sistem Tugas Akhir",
    role: "Full-Stack & AI Engineer",
    period: "2025 - 2026",
    summary:
      "Sistem rekomendasi nutrisi klinis untuk demografi Indonesia yang dibangun di atas computer vision, Graph RAG knowledge base, dan perbandingan multi-LLM — deployed end-to-end di Cloud Run.",
    outcome:
      "Indonesia menghadapi beban ganda malnutrisi (21,6% stunting, 19,5 juta pasien diabetes) dan aplikasi yang ada tidak bisa memetakan makanan lokal ke kondisi klinis. Saya membangun sistem tugas akhir lengkap yang melakukannya: foto makanan → pengenalan CV → penalaran klinis Graph RAG → rekomendasi multi-LLM dengan framework evaluasi yang mengukur kualitas jawaban.",
    tags: ["Next.js 14", "FastAPI", "Neo4j", "Graph RAG", "RAGAS", "Docker"],
    tone: "teal",
    icon: Brain,
    preview: "/previews/nutrigraph.png",
    details: [
      "Knowledge graph dengan 251 node dan 792 relasi di Neo4j — memodelkan bahan, nutrien, kondisi medis, reaksi kimia, dan sumber dataset untuk makanan Indonesia.",
      "Database klinis terkurasi berisi 42 bahan lokal (bayam, tempe, ayam, salmon, dll.) dengan nilai makro dan klinis per-100g, masing-masing bisa dilacak ke sumber datasetnya.",
      "Pipeline generasi multi-LLM yang menjalankan 3 model paralel — DeepSeek dan Qwen via OpenRouter, Llama 3.3 via Groq Direct — dengan status kegagalan eksplisit yang tidak pernah mengarang konten klinis.",
      "Framework evaluasi dengan Official RAGAS (faithfulness, answer relevance) atas benchmark klinis 15 pertanyaan plus LLM-as-a-Judge custom terpisah, dimigrasi ke Qwen di OpenRouter seharga USD 0,00004247 per panggilan judge.",
      "Pengenalan computer vision via Qwen2.5-VL dengan verifikasi kemiripan visual CLIP (openai/clip-vit-base-patch32) mencapai similarity 0,965 pada foto makanan asli, ditopang cache similarity berversi.",
      "Arsitektur tiga service (frontend Next.js, Express gateway, FastAPI AI engine) dengan cache Redis (graph provenance TTL 300s), PWA yang berskor Lighthouse 100, dan 104 tes Python lulus saat deploy.",
    ],
    metrics: [
      { label: "Knowledge graph", value: "251 node / 792 relasi" },
      { label: "Database klinis", value: "42 bahan" },
      { label: "Provider LLM", value: "3 paralel" },
      { label: "Suite tes", value: "104 lulus" },
    ],
  },
  {
    slug: "ternak-monitor",
    title: "Ternak Monitor",
    type: "Platform Ternak Produksi",
    role: "Full-Stack Developer",
    period: "2026",
    summary:
      "Platform manajemen peternakan terintegrasi untuk PT Duta Agri Nusantara yang berjalan di domain sendiri — mencakup catatan ternak, kesehatan, bobot, reproduksi, pakan, penjualan, dan keuangan harian untuk operasi 200 ekor sapi.",
    outcome:
      "Peternakan kecil mencatat semuanya di spreadsheet dan kehilangan uang karena event kesehatan terlewat dan margin yang tidak terbaca. Saya membangun sistem penggantinya: satu platform tempat staf mencatat operasi harian dan pemilik menerima ringkasan AI — live di ptdutaagrinusantara.com dengan katalog sapi publik untuk pelanggan.",
    tags: ["React 19", "Express", "PostgreSQL", "Supabase", "JWT", "Gemini API"],
    tone: "teal",
    icon: Database,
    href: "https://ptdutaagrinusantara.com",
    preview: "/previews/ternak-monitor.png",
    details: [
      "Core manajemen ternak berukuran untuk operasi 200 ekor sapi: catatan individu per hewan mencakup event kesehatan, progres bobot, siklus reproduksi, konsumsi pakan, penjualan, dan entri keuangan harian.",
      "Role-based access control dengan autentikasi JWT — owner, staf, dan pelanggan melihat permukaan berbeda, diproteksi di lapisan API Express dengan PostgreSQL/Supabase sebagai datastore.",
      "Pipeline laporan mengekspor catatan operasional ke PDF dan XLSX agar pemilik bisa menyerahkan dokumen rapi ke auditor, dokter hewan, atau pembeli alih-alih spreadsheet mentah.",
      "Owner Daily Brief bertenaga Gemini yang otomatis merangkum kondisi herd, transaksi terbaru, dan anomali menjadi satu laporan pagi yang mudah dibaca.",
      "Katalog sapi publik untuk pelanggan tanpa login, mengubah data internal peternakan menjadi kanal penjualan di domain perusahaan.",
      "Deploy full-stack di Vercel dengan backend Supabase, endpoint health-check, dan backup snapshot Supabase otomatis harian.",
    ],
    metrics: [
      { label: "Skala", value: "200 ekor sapi" },
      { label: "Domain", value: "ptdutaagrinusantara.com" },
      { label: "Laporan", value: "PDF + XLSX" },
      { label: "Brief", value: "Ringkasan harian AI" },
    ],
  },
  {
    slug: "sipeka",
    title: "SIPEKA",
    type: "Prototipe Kerja Praktek",
    role: "Full-Stack Developer",
    period: "2026",
    summary:
      "Portal manajemen ekstrakurikuler untuk sekolah — control room multi-pengguna yang mencakup direktori ekskul, agenda, registrasi siswa, berita prestasi, dan dashboard pembina.",
    outcome:
      "Program ekstrakurikuler sekolah berjalan lewat grup WhatsApp dan formulir kertas: pembina tidak bisa melihat kapasitas, siswa kelewat jendela registrasi, dan kepala sekolah tidak punya oversight. SIPEKA memusatkan alur itu menjadi satu aplikasi yang bisa diaudit dengan dashboard berbasis role untuk admin, pembina, guru, dan wali kelas.",
    tags: ["React", "TypeScript", "Vite", "Multi-user", "Dashboard"],
    tone: "blue",
    icon: School,
    href: "https://sipeka-delta.vercel.app",
    preview: "/previews/sipeka.png",
    details: [
      "Sistem multi-role untuk admin, pembina, guru, dan wali kelas — setiap role mendapat tampilan dashboard dan set izin berbeda.",
      "Direktori ekstrakurikuler dengan pencarian, filtering, dan perbandingan kapasitas berdampingan agar siswa memilih program yang masih buka, bukan yang penuh.",
      "Tracking kapasitas live per program — mis. Basket 35/40 (88%), Pramuka 62/80 (78%), Robotik & IoT 24/32 (75%) — tampil sekilas di panel operasional.",
      "Manajemen agenda dan antrean registrasi dengan prioritas kegiatan terdekat dan penanganan status registrasi untuk pembina.",
      "Newsroom prestasi bergaya arsip berita sekolah, membuat prestasi siswa bisa diaudit dan ditampilkan publik.",
      "Dibangun dengan React + TypeScript + Vite sebagai prototipe Kerja Praktek, live multi-pengguna di Vercel.",
    ],
    metrics: [
      { label: "Role", value: "4 tipe pengguna" },
      { label: "Modul", value: "5 modul inti" },
      { label: "Status", value: "Prototipe live" },
    ],
  },
  {
    slug: "nmr-cp",
    title: "NMR Corporate Profile",
    type: "Website Korporat Klien",
    role: "Developer",
    period: "2026",
    summary:
      "Website korporat bilingual untuk PT Nur Mutiara Riau — perusahaan pengelolaan hutan lestari dan kredit karbon di Riau — dengan pengalih bahasa Indonesia/Inggris.",
    outcome:
      "Perusahaan kehutanan perlu menampilkan angka dampak, layanan, dan kanal kemitraan ke pemangku kepentingan Indonesia dan internasional. Saya membangun profil korporat yang melakukannya dalam dua bahasa, menstrukturkan layanan pengelolaan hutan, perdagangan karbon, pemberdayaan masyarakat, dan riset perusahaan menjadi kehadiran web yang kredibel.",
    tags: ["Corporate Site", "Bilingual", "TypeScript", "Landing"],
    tone: "teal",
    icon: Leaf,
    href: "https://nmr-cp.vercel.app",
    preview: "/previews/nmr-cp.png",
    details: [
      "Tombol bilingual IDN/ENG di seluruh situs untuk mitra pasar karbon internasional.",
      "Band statistik dampak menampilkan skala operasi: 38.564 hektar dikelola, 1,2 juta+ ton CO₂, 15+ komunitas dilibatkan, 25+ mitra.",
      "Struktur empat layanan: perdagangan karbon, pengelolaan hutan, pemberdayaan masyarakat, serta riset & inovasi, masing-masing dengan kartu berikon.",
      "Bagian misi/visi bergaya selang-seling dan CTA kemitraan yang mengarahkan calon mitra ke tim kontak.",
      "Design system bertema alam: hero fotografi hutan, palet hijau pekat, dan kartu layanan rounded.",
    ],
    metrics: [
      { label: "Bahasa", value: "IDN + ENG" },
      { label: "Data dampak", value: "38.564 Ha" },
      { label: "Layanan", value: "4 pilar" },
    ],
  },
  {
    slug: "cybermath-academy",
    title: "CyberMath Academy",
    type: "Pelacak Belajar Mandiri",
    role: "Creator & Developer",
    period: "2026",
    summary:
      "Pelacak belajar terstruktur yang mencakup cybersecurity, matematika, penetration testing, AWS cloud, web security, dan machine learning — sepuluh jalur kurikulum dalam satu dashboard progres.",
    outcome:
      "Belajar security otodidak gagal tanpa struktur terukur. Saya membangun tracker yang saya pakai sendiri: sepuluh jalur kurikulum dengan progres per item sehingga setiap lab, kursus, dan set latihan terhitung.",
    tags: ["Cybersecurity", "Web Security", "Cloud", "Machine Learning", "Mathematics"],
    tone: "violet",
    icon: ShieldCheck,
    href: "https://cybermath-masterpiece-one.vercel.app",
    preview: "/previews/cybermath.png",
    details: [
      "Sepuluh jalur belajar termasuk rencana cybersecurity 90 hari berisi 315 item, matematika Professor Dave (193 item), dan jalur pentest problem-first 54 item.",
      "Integrasi lab industri: academy PortSwigger Web Security untuk SQL injection, authentication, dan access control.",
      "Kurikulum cloud dan ML: Dicoding AWS Cloud fundamentals, Dicoding Machine Learning untuk pemula, dan jalur latihan Kaggle Learn.",
      "Persistensi progres per path dengan persentase penyelesaian tampil di header untuk tracking sekilas.",
    ],
    metrics: [
      { label: "Jalur", value: "10 track" },
      { label: "Jalur terbesar", value: "315 item" },
      { label: "Status", value: "Live di Vercel" },
    ],
  },
  {
    slug: "go-linktree",
    title: "go — digital lifestyle",
    type: "Landing Commerce",
    role: "Developer & Operator",
    period: "2026",
    summary:
      "Link-in-bio storefront self-hosted untuk brand digital lifestyle goyank: kanal Telegram, pemesanan WhatsApp, dan bot pesanan otomatis 24/7 dalam satu halaman glassmorphism.",
    outcome:
      "Brand goyank butuh satu titik masuk yang mengarahkan pelanggan ke funnel pembelian tanpa forward manual. Saya membangun landing yang menghubungkan kanal, WhatsApp fast-response, dan bot pesanan otomatis — live self-hosted di Vercel.",
    tags: ["Landing Page", "Telegram", "Commerce", "Automation"],
    tone: "blue",
    icon: Network,
    href: "https://goyank-linktree.vercel.app",
    preview: "/previews/goyank-bot.png",
    details: [
      "Landing glassmorphism konsisten dengan identitas brand goyank (background doodle, brand blue).",
      "Tiga jalur konversi: kanal Telegram untuk promo, WhatsApp untuk respons cepat, dan bot pesanan 24/7 untuk checkout otomatis.",
      "Deploy self-hosted di Vercel sebagai lapisan pintu masuk infrastruktur commerce goyank yang ditopang bot Telegram.",
    ],
    metrics: [
      { label: "Status", value: "Live di Vercel" },
      { label: "Peran", value: "Pintu masuk funnel" },
      { label: "Bot", value: "Pesanan 24/7" },
    ],
  },
  {
    slug: "gotanny",
    title: "GoTanny",
    type: "Proyek Capstone",
    role: "Full Stack & AI Engineer",
    period: "Sep 2025 - Jan 2026",
    summary:
      "Platform web cerdas untuk deteksi penyakit tanaman dengan konsultasi perawatan berbasis AI, dibangun sebagai capstone semester 7.",
    outcome:
      "Petani butuh panduan perawatan meski jalur AI utama gagal. Saya merekayasa backend hibrida tempat Groq Llama 3.3 Versatile menjadi mesin konsultasi dengan fallback otomatis ke Llama 3.1, plus microservice auth terpisah — source tersedia di GitHub.",
    tags: ["React", "Node.js", "Python", "Firebase", "Groq", "Llama 3.3"],
    tone: "teal",
    icon: Brain,
    href: "https://github.com/syronesdreamland/GoTanny",
    details: [
      "Mengarsiteki frontend React dan backend hibrida yang menggabungkan service LLM Python dengan microservice Node.js.",
      "Mengintegrasikan Groq Llama 3.3 Versatile sebagai mesin konsultasi dengan fallback otomatis ke Llama 3.1 demi stabilitas layanan.",
      "Membangun microservice Node.js khusus untuk fitur keamanan akun dan pemulihan kata sandi via email.",
      "Memakai Firebase Authentication dan Firestore Database untuk manajemen data pengguna yang aman dan real-time.",
    ],
    metrics: [
      { label: "AI", value: "Llama 3.3 → 3.1" },
      { label: "Domain", value: "AgriTech" },
      { label: "Sumber", value: "Di GitHub" },
    ],
  },
  {
    slug: "diabesafe",
    title: "DiabeSafe",
    type: "Capstone Bangkit Academy",
    role: "Backend Developer",
    period: "Jan 2024",
    summary:
      "Aplikasi kesehatan mobile untuk deteksi dini risiko diabetes, melayani aplikasi Android dengan REST API aman dan integrasi prediksi ML.",
    outcome:
      "Tim Android butuh satu endpoint prediksi yang andal dengan alur data pengguna yang bersih. Saya memegang seluruh sisi server: skema database, RESTful API aman, dan integrasi model ML .h5 yang menopang setiap prediksi aplikasi.",
    tags: ["Python", "REST API", "ML Model", "Cloud", ".h5"],
    tone: "blue",
    icon: Server,
    href: profile.linkedin,
    details: [
      "Memegang desain sisi server: skema database, RESTful API aman, dan alur prediksi ML.",
      "Mengintegrasikan model machine learning .h5 ke endpoint prediksi backend.",
      "Berkolaborasi lintas tanggung jawab mobile, machine learning, dan cloud dalam tim capstone.",
    ],
    metrics: [
      { label: "Track", value: "Cloud" },
      { label: "Produk", value: "HealthTech" },
      { label: "Output", value: "API prediksi" },
    ],
  },
  {
    slug: "nusaco",
    title: "NUSACO",
    type: "Prototipe Marketplace",
    role: "Project Manager",
    period: "Sep - Des 2023",
    summary:
      "Ekosistem digital bilingual yang menjembatani eksportir lokal dengan importir global: marketplace, hub edukasi ekspor-impor, dan forum komunitas.",
    outcome:
      "Eksportir kecil kehilangan margin karena ongkos kirim dan tidak punya infrastruktur belajar. Saya memimpin konsep di mana eksportir dengan negara tujuan sama menggabungkan kargo menjadi satu pengiriman, plus hub edukasi dan forum komunitas — meraih Best Project of Class 2022.",
    tags: ["TypeScript", "DFD", "ERD", "Product Planning", "Team Lead"],
    tone: "amber",
    icon: Network,
    href: profile.linkedin,
    details: [
      "Mendefinisikan alur inti marketplace dengan fitur edukasi dan komunitas.",
      "Memimpin blueprint sistem: DFD Level 1 & 2, Context Diagram, ERD, dan Use Case Diagram.",
      "Menginisiasi konsep konsolidasi pengiriman gabungan untuk meminimalkan biaya logistik eksportir.",
    ],
    metrics: [
      { label: "Penghargaan", value: "Proyek terbaik" },
      { label: "Peran", value: "PM" },
      { label: "Cakupan", value: "Marketplace" },
    ],
  },
];

/* ── Experience (Indonesian) ── */
export const experienceId: typeof experience = [
  {
    slug: "telegram-commerce-bots",
    title: "Telegram Commerce Bots",
    type: "Otomasi Produksi",
    role: "Backend Developer & Operator",
    period: "2025 - 2026",
    summary:
      "Sepasang bot storefront Telegram produksi yang memproses pembayaran QRIS, katalog produk, dan pengiriman barang digital untuk pelanggan nyata.",
    outcome:
      "Jualan produk digital di Telegram berarti menangani pesanan, pembayaran, dan pengiriman tanpa kehilangan uang karena kesalahan manual. Saya membangun dan mengoperasikan dua bot independen yang menjalankan loop penuh — pesanan, pembayaran QRIS, pengiriman otomatis, log transaksi, dan backup harian — sebagai service systemd.",
    tags: ["Python", "aiogram", "SQLite", "QRIS", "systemd", "Automation"],
    tone: "blue",
    icon: Terminal,
    details: [
      "Implementasi alur pembelian end-to-end: browse katalog, buat pesanan, bayar QRIS, dan pengiriman barang otomatis.",
      "Mengelola katalog produk dan data supplier dengan penyimpanan SQLite persisten dan riwayat transaksi.",
      "Mengoperasikan kedua bot 24/7 sebagai service systemd dengan rutinitas backup database otomatis.",
      "Menangani transaksi pelanggan nyata end-to-end dengan tooling admin untuk fulfillment dan support.",
    ],
    metrics: [
      { label: "Bot", value: "2 di produksi" },
      { label: "Pembayaran", value: "Integrasi QRIS" },
      { label: "Uptime", value: "systemd 24/7" },
    ],
  },
  {
    slug: "ai-ops-automation",
    title: "AI Ops Automation",
    type: "Infrastruktur & Otomasi",
    role: "Systems Engineer",
    period: "2025 - 2026",
    summary:
      "Infrastruktur otomasi privat yang menghubungkan mesin VPS dan Windows: pipeline browser automation, agent terjadwal, loop monitoring, dan orkestrasi multi-mesin.",
    outcome:
      "Operasi riset dan konten berulang membuang waktu kalau dikerjakan manual. Saya membangun infrastruktur yang menjalankannya otonom: pipeline browser via CDP, jembatan Tailscale SSH ke Windows dengan otomasi PowerShell, dan job terjadwal dengan penanganan kegagalan.",
    tags: ["Python", "CDP", "SSH", "Cron", "Linux", "Windows"],
    tone: "violet",
    icon: Cloud,
    details: [
      "Membangun pipeline browser automation via Chrome DevTools Protocol untuk pengumpulan data dan eksekusi workflow.",
      "Merekayasa jembatan VPS-ke-Windows lewat Tailscale SSH dengan otomasi PowerShell untuk workflow hibrida.",
      "Menjadwalkan pipeline monitoring dan konten otonom dengan penanganan kegagalan dan persistensi state.",
      "Menjaga observability lewat logging terstruktur, health check, dan backup otomatis.",
    ],
    metrics: [
      { label: "Cakupan", value: "Multi-mesin" },
      { label: "Inti", value: "CDP + SSH" },
      { label: "Mode", value: "Terjadwal 24/7" },
    ],
  },
  {
    slug: "retyan-computer",
    title: "Retyan Computer",
    type: "Pengalaman Magang",
    role: "IT Support Intern",
    period: "Okt 2021 - Jan 2024",
    summary:
      "Magang technical support yang mencakup perawatan hardware komputer, instalasi OS, troubleshooting, dan instalasi CCTV selama 2+ tahun.",
    outcome:
      "Masalah pelanggan nyata tanpa jawaban buku teks — saya mendiagnosis masalah hardware dan software dalam kondisi service selama lebih dari dua tahun, dan di situlah insting infrastruktur saya berasal.",
    tags: ["Troubleshooting", "Hardware", "CCTV", "PC Building", "Support"],
    tone: "violet",
    icon: ShieldCheck,
    href: profile.linkedin,
    details: [
      "Menangani troubleshooting hardware dan software untuk masalah pelanggan sehari-hari.",
      "Mendukung instalasi CCTV dan setup sistem.",
      "Memperkuat komunikasi praktis saat menjelaskan masalah teknis dengan jelas.",
    ],
    metrics: [
      { label: "Area", value: "IT support" },
      { label: "Kerja", value: "Hands-on" },
      { label: "Skill", value: "Diagnostik" },
    ],
  },
];

/* ── Certifications (Indonesian) ── */
const certDetailId: Record<string, string> = {
  "bangkit-academy-cloud-computing":
    "Jalur belajar Cloud Computing dengan kolaborasi capstone dan pelatihan kesiapan profesional, diselesaikan sebagai anggota kohort Backend Developer.",
  "ccna-cisco-introduction-to-networks":
    "Fundamental jaringan: arsitektur jaringan, dasar routing dan switching, pengalamatan IP, dan fondasi keamanan jaringan.",
  "menjadi-google-cloud-engineer":
    "Jalur cloud engineering yang mencakup Compute Engine, Kubernetes Engine, networking, storage, dan deployment di Google Cloud Platform.",
  "belajar-penerapan-machine-learning-gcp":
    "Machine learning terapan di Google Cloud: workflow ML, deployment model, dan integrasi layanan AI.",
  "belajar-dasar-ai":
    "Fundamental kecerdasan buatan: konsep machine learning, natural language processing, dan dasar computer vision.",
  "belajar-data-science-microsoft-fabric":
    "Workflow data science di Microsoft Fabric: ingest data, transformasi, analitik, dan visualisasi.",
  "belajar-javascript-dasar":
    "Fundamental JavaScript: sintaks ES6+, manipulasi DOM, pemrograman asinkron, dan tooling modern.",
  "belajar-membuat-aplikasi-back-end-gcp":
    "Fundamental aplikasi backend dengan Google Cloud: konstruksi RESTful API, autentikasi, dan integrasi cloud storage.",
  "google-cloud-terraform":
    "Infrastructure as Code di Google Cloud: kursus Getting Started with Terraform dan Build Infrastructure with Terraform.",
  "google-cloud-infrastructure":
    "Rangkaian kursus Essential Google Cloud Infrastructure: Foundation, Core Services, Elastic Scaling and Automation, plus Preparing for Associate Cloud Engineer.",
  "google-cloud-networking-security":
    "Build a Secure Google Cloud Network, Develop your Google Cloud Network, dan Implement Load Balancing on Compute Engine.",
  "google-cloud-computing-foundations":
    "Rangkaian foundations empat bagian: Cloud Computing Fundamentals, Infrastructure, Networking & Security, dan Data, ML, and AI in Google Cloud.",
  "google-cloud-fundamentals-kubernetes":
    "Google Cloud Fundamentals: Core Infrastructure, Getting Started with Google Kubernetes Engine, dan Set Up an App Dev Environment.",
  "dicoding-programming-foundations":
    "Rangkaian fundamental pemrograman: Programming Logic 101, C, Java, Data 101, dasar pemrograman web, dan jalur karier Software Developer.",
  "google-python-git-github":
    "Fondasi pemrograman dan source control lewat Crash Course on Python dan Introduction to Git and GitHub.",
};

export const certificationsId = certifications.map((certification) => ({
  ...certification,
  detail: certDetailId[certification.slug] ?? certification.detail,
}));

/* Icon re-exports untuk pemakaian internal */
export { Award, Brain, Cloud, Code2, Database, GraduationCap, Leaf, Network, School, Server, ShieldCheck, Terminal };
