@extends('layouts.app')

@section('content')

{{-- ===================== HERO / BERANDA ===================== --}}
<section id="beranda" class="hero">
    <div class="hero-bg">
        <div class="grid-lines"></div>
        <div class="glow-orb glow-orb-1"></div>
        <div class="glow-orb glow-orb-2"></div>
    </div>

    <div class="section-container hero-grid">
        <div class="hero-text">
            <p class="hero-eyebrow">console.log("halo dunia");</p>
            <h1 class="hero-title">
                Halo, Saya<br><span class="text-gradient">Kyandra Aldia</span>
            </h1>
            <p class="hero-subtitle" id="typedText"></p>
            <p class="hero-desc">
                Saya adalah siswa kelas XI RPL di SMK Muhammadiyah 4 Yogyakarta yang tertarik dengan dunia
                pemrograman, pengembangan website, desain UI/UX, dan berbagai proyek teknologi.
            </p>

            <div class="hero-actions">
                <a href="#proyek" class="btn btn-primary">Lihat Proyek Saya</a>
                <a href="#kontak" class="btn btn-outline">Hubungi Saya</a>
            </div>
        </div>

        <div class="hero-visual">
            <div class="profile-frame">
                <div class="profile-ring"></div>
                <div class="profile-photo">
                    <img src="{{ asset('images/profile.jpg') }}" alt="Foto profil Kyandra Aldia" onerror="this.style.display='none'; this.parentElement.classList.add('no-photo')">
                    <span class="photo-fallback">KA</span>
                </div>

                <span class="tech-chip chip-1">HTML</span>
                <span class="tech-chip chip-2">CSS</span>
                <span class="tech-chip chip-3">PHP</span>
                <span class="tech-chip chip-4">Laravel</span>
                <span class="tech-chip chip-5">JavaScript</span>
                <span class="tech-chip chip-6">MySQL</span>
            </div>
        </div>
    </div>

    <a href="#tentang" class="scroll-hint" aria-label="Scroll ke bawah">
        <span></span>
    </a>
</section>

{{-- ===================== TENTANG SAYA ===================== --}}
<section id="tentang" class="section">
    <div class="section-container">
        <div class="section-head reveal">
            <p class="section-tag">Tentang Saya</p>
            <h2 class="section-title">Mengenal Lebih Dekat</h2>
        </div>

        <div class="about-grid">
            <div class="about-text reveal">
                <p>
                    Halo! Nama saya Kyandra Aldia Arka Purnomo. Saya merupakan siswa berusia 16 tahun yang saat
                    ini bersekolah di SMK Muhammadiyah 4 Yogyakarta, jurusan Rekayasa Perangkat Lunak.
                </p>
                <p>
                    Saya tertarik mempelajari pemrograman, pengembangan website, desain antarmuka, database, dan
                    teknologi digital. Saya senang mencoba membuat berbagai proyek untuk meningkatkan kemampuan saya.
                </p>
            </div>

            <div class="about-cards reveal">
                <div class="info-card">
                    <span class="info-label">Nama</span>
                    <span class="info-value">Kyandra Aldia Arka Purnomo</span>
                </div>
                <div class="info-card">
                    <span class="info-label">Kelas</span>
                    <span class="info-value">XI RPL</span>
                </div>
                <div class="info-card">
                    <span class="info-label">Umur</span>
                    <span class="info-value">16 Tahun</span>
                </div>
                <div class="info-card">
                    <span class="info-label">Sekolah</span>
                    <span class="info-value">SMK Muhammadiyah 4 Yogyakarta</span>
                </div>
                <div class="info-card">
                    <span class="info-label">Jurusan</span>
                    <span class="info-value">Rekayasa Perangkat Lunak</span>
                </div>
                <div class="info-card">
                    <span class="info-label">Fokus</span>
                    <span class="info-value">Web Development & Programming</span>
                </div>
            </div>
        </div>
    </div>
</section>

{{-- ===================== KEAHLIAN ===================== --}}
<section id="keahlian" class="section section-alt">
    <div class="section-container">
        <div class="section-head reveal">
            <p class="section-tag">Keahlian Saya</p>
            <h2 class="section-title">Tools & Teknologi yang Saya Kuasai</h2>
        </div>

        <div class="skills-grid">
            @php
                $skills = [
                    ['name' => 'HTML', 'level' => 90],
                    ['name' => 'CSS', 'level' => 85],
                    ['name' => 'JavaScript', 'level' => 75],
                    ['name' => 'PHP', 'level' => 75],
                    ['name' => 'Laravel', 'level' => 70],
                    ['name' => 'MySQL', 'level' => 75],
                    ['name' => 'Git', 'level' => 65],
                    ['name' => 'GitHub', 'level' => 65],
                    ['name' => 'UI/UX Design', 'level' => 60],
                    ['name' => 'Responsive Web Design', 'level' => 80],
                ];
            @endphp

            @foreach ($skills as $skill)
                <div class="skill-card reveal">
                    <div class="skill-top">
                        <span class="skill-name">{{ $skill['name'] }}</span>
                        <span class="skill-percent">{{ $skill['level'] }}%</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill" data-level="{{ $skill['level'] }}"></div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>

{{-- ===================== PROYEK ===================== --}}
<section id="proyek" class="section">
    <div class="section-container">
        <div class="section-head reveal">
            <p class="section-tag">Proyek Saya</p>
            <h2 class="section-title">Beberapa Hal yang Sudah Saya Buat</h2>
        </div>

        <div class="project-grid">
            @php
                $projects = [
                    [
                        'name' => 'Website Sekolah',
                        'desc' => 'Website sekolah modern yang digunakan untuk menampilkan informasi sekolah, berita, program sekolah, fasilitas, dan informasi lainnya.',
                        'tech' => ['HTML', 'CSS', 'JavaScript', 'Laravel'],
                        'tag' => '01',
                    ],
                    [
                        'name' => 'PintarLand',
                        'desc' => 'Konsep platform edukasi interaktif yang dirancang untuk membantu anak-anak belajar melalui materi, kuis, dan permainan edukasi.',
                        'tech' => ['HTML', 'CSS', 'JavaScript', 'Unity'],
                        'tag' => '02',
                    ],
                    [
                        'name' => 'Sistem Informasi Perpustakaan',
                        'desc' => 'Sistem informasi perpustakaan untuk membantu pengelolaan data buku, anggota, peminjaman, pengembalian, dan data perpustakaan.',
                        'tech' => ['Laravel', 'PHP', 'MySQL'],
                        'tag' => '03',
                    ],
                    [
                        'name' => 'BUNBOSS',
                        'desc' => 'Website restoran burger dengan tampilan modern yang menampilkan menu, harga, informasi restoran, dan kontak.',
                        'tech' => ['HTML', 'CSS', 'JavaScript'],
                        'tag' => '04',
                    ],
                ];
            @endphp

            @foreach ($projects as $project)
                <article class="project-card reveal">
                    <div class="project-media">
                        <span class="project-tag">{{ $project['tag'] }}</span>
                    </div>
                    <div class="project-body">
                        <h3 class="project-name">{{ $project['name'] }}</h3>
                        <p class="project-desc">{{ $project['desc'] }}</p>

                        <div class="tech-tags">
                            @foreach ($project['tech'] as $t)
                                <span class="tech-tag">{{ $t }}</span>
                            @endforeach
                        </div>

                        <div class="project-actions">
                            <a href="#" class="btn-mini">Lihat Project</a>
                            <a href="#" class="btn-mini btn-mini-ghost">GitHub</a>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>
    </div>
</section>

{{-- ===================== PENDIDIKAN ===================== --}}
<section id="pendidikan" class="section section-alt">
    <div class="section-container">
        <div class="section-head reveal">
            <p class="section-tag">Pendidikan</p>
            <h2 class="section-title">Perjalanan Belajar Saya</h2>
        </div>

        <div class="timeline reveal">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-status">Sedang Menempuh Pendidikan</span>
                    <h3>SMK Muhammadiyah 4 Yogyakarta</h3>
                    <p>Jurusan Rekayasa Perangkat Lunak (RPL) — Kelas XI RPL</p>
                </div>
            </div>
        </div>
    </div>
</section>

{{-- ===================== PENGALAMAN & AKTIVITAS ===================== --}}
<section id="pengalaman" class="section">
    <div class="section-container">
        <div class="section-head reveal">
            <p class="section-tag">Pengalaman & Aktivitas</p>
            <h2 class="section-title">Apa yang Sedang Saya Pelajari</h2>
        </div>

        <div class="activity-grid">
            <div class="activity-card reveal">
                <h3>Pengembangan Website</h3>
                <p>Mempelajari dan membuat website menggunakan HTML, CSS, JavaScript, PHP, Laravel, dan MySQL.</p>
            </div>
            <div class="activity-card reveal">
                <h3>Proyek Pemrograman</h3>
                <p>Membuat berbagai proyek pemrograman sebagai latihan dan pengembangan kemampuan.</p>
            </div>
            <div class="activity-card reveal">
                <h3>Desain UI/UX</h3>
                <p>Mempelajari cara membuat tampilan website yang modern, sederhana, dan mudah digunakan.</p>
            </div>
            <div class="activity-card reveal">
                <h3>Eksperimen Teknologi</h3>
                <p>Mencoba berbagai teknologi dan tools untuk menambah pengalaman di bidang IT.</p>
            </div>
        </div>
    </div>
</section>

{{-- ===================== FUN FACT ===================== --}}
<section class="funfact reveal">
    <div class="section-container funfact-inner">
        <p class="section-tag">Fun Fact Tentang Saya</p>
        <h2 class="funfact-title">"Kadang Kiding Kudung 😎"</h2>
        <p class="funfact-desc">Kadang serius ngoding, kadang cari ide, kadang cuma kiding kudung.</p>
    </div>
</section>

{{-- ===================== KONTAK ===================== --}}
<section id="kontak" class="section">
    <div class="section-container">
        <div class="section-head reveal">
            <p class="section-tag">Mari Terhubung</p>
            <h2 class="section-title">Punya Ide atau Proyek?</h2>
            <p class="section-desc">
                Jika ingin berdiskusi, bekerja sama dalam sebuah proyek, atau sekadar menyapa, silakan hubungi saya.
            </p>
        </div>

        <div class="contact-grid">
            <form class="contact-form reveal" id="contactForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nama">Nama</label>
                        <input type="text" id="nama" name="nama" placeholder="Nama kamu" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="nama@email.com" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="subjek">Subjek</label>
                    <input type="text" id="subjek" name="subjek" placeholder="Tentang apa ini?" required>
                </div>
                <div class="form-group">
                    <label for="pesan">Pesan</label>
                    <textarea id="pesan" name="pesan" rows="5" placeholder="Tulis pesan kamu di sini..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Kirim Pesan</button>
            </form>

            <div class="contact-cards reveal">
                <a href="https://instagram.com/username" target="_blank" rel="noopener" class="contact-card">
                    <span class="contact-icon">IG</span>
                    <div>
                        <span class="contact-label">Instagram</span>
                        <span class="contact-value">@username</span>
                    </div>
                </a>
                <a href="https://github.com/username" target="_blank" rel="noopener" class="contact-card">
                    <span class="contact-icon">GH</span>
                    <div>
                        <span class="contact-label">GitHub</span>
                        <span class="contact-value">github.com/username</span>
                    </div>
                </a>
                <a href="https://wa.me/6280000000000" target="_blank" rel="noopener" class="contact-card">
                    <span class="contact-icon">WA</span>
                    <div>
                        <span class="contact-label">WhatsApp</span>
                        <span class="contact-value">+62 800-0000-0000</span>
                    </div>
                </a>
                <a href="mailto:kyandra@example.com" class="contact-card">
                    <span class="contact-icon">EM</span>
                    <div>
                        <span class="contact-label">Email</span>
                        <span class="contact-value">kyandra@example.com</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

{{-- ===================== FOOTER ===================== --}}
<footer class="footer">
    <div class="section-container footer-inner">
        <div class="footer-brand">
            <span class="logo-box">KA</span>
            <div>
                <p class="footer-name">Kyandra Aldia Arka Purnomo</p>
                <p class="footer-role">XI RPL • SMK Muhammadiyah 4 Yogyakarta</p>
            </div>
        </div>

        <div class="footer-social">
            <a href="https://instagram.com/username" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
            <a href="https://github.com/username" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
            <a href="https://wa.me/6280000000000" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
        </div>
    </div>
    <p class="footer-copy">© 2026 Kyandra Aldia Arka Purnomo. Semua Hak Dilindungi.</p>
</footer>

@endsection
