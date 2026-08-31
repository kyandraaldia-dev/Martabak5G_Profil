document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       NAVBAR — hamburger menu untuk HP
       ============================================================ */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    /* ============================================================
       NAVBAR — highlight menu aktif sesuai section yang terlihat
       ============================================================ */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNav = () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };
    window.addEventListener('scroll', highlightNav);
    highlightNav();

    /* ============================================================
       TYPING ANIMATION — bagian hero
       ============================================================ */
    const typedEl = document.getElementById('typedText');
    const typedStrings = [
        'Siswa XI RPL',
        'Programmer Pemula',
        'Web Developer'
    ];

    if (typedEl) {
        let stringIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const type = () => {
            const current = typedStrings[stringIndex];

            if (!deleting) {
                typedEl.textContent = current.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(type, 1400);
                    return;
                }
            } else {
                typedEl.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    deleting = false;
                    stringIndex = (stringIndex + 1) % typedStrings.length;
                }
            }

            setTimeout(type, deleting ? 40 : 80);
        };

        type();
    }

    /* ============================================================
       SCROLL REVEAL — fade + slide up untuk elemen .reveal
       ============================================================ */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ============================================================
       SKILL PROGRESS BAR — animasi mengisi saat terlihat
       ============================================================ */
    const progressBars = document.querySelectorAll('.progress-fill');

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                bar.style.width = `${level}%`;
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.4 });

    progressBars.forEach(bar => progressObserver.observe(bar));

    /* ============================================================
       BACK TO TOP
       ============================================================ */
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ============================================================
       CURSOR GLOW — mengikuti mouse (desktop saja)
       ============================================================ */
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    }

    /* ============================================================
       NAVBAR BACKGROUND — sedikit lebih gelap saat scroll
       ============================================================ */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.style.background = window.scrollY > 40
                ? 'rgba(8, 12, 18, 0.85)'
                : 'rgba(8, 12, 18, 0.55)';
        });
    }

    /* ============================================================
       FORM KONTAK — validasi sederhana + notifikasi
       ============================================================ */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Terkirim ✓';
            submitBtn.style.opacity = '0.75';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                contactForm.reset();
            }, 2000);

            // Catatan: form ini masih front-end saja.
            // Untuk kirim data sungguhan, buat route POST di web.php
            // yang mengirim email lewat Mail::send() atau menyimpan ke database.
        });
    }

});
