<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kyandra Aldia — Portfolio</title>
    <meta name="description" content="Portfolio Kyandra Aldia Arka Purnomo, siswa XI RPL SMK Muhammadiyah 4 Yogyakarta.">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

    <div class="cursor-glow" id="cursorGlow"></div>

    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#beranda" class="nav-logo">
                <span class="logo-box">KA</span>
            </a>

            <ul class="nav-menu" id="navMenu">
                <li><a href="#beranda" class="nav-link active">Beranda</a></li>
                <li><a href="#tentang" class="nav-link">Tentang Saya</a></li>
                <li><a href="#keahlian" class="nav-link">Keahlian</a></li>
                <li><a href="#proyek" class="nav-link">Proyek</a></li>
                <li><a href="#pendidikan" class="nav-link">Pendidikan</a></li>
                <li><a href="#kontak" class="nav-link">Kontak</a></li>
            </ul>

            <button class="nav-toggle" id="navToggle" aria-label="Buka menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <main>
        @yield('content')
    </main>

    <button class="back-to-top" id="backToTop" aria-label="Kembali ke atas">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
    </button>

    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>
