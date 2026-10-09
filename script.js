document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     LANGUAGE SYSTEM (i18n) - DEFAULT ENGLISH (EN)
     ===================================================== */
  const LANG_KEY = 'portfolio_lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'en'; // Default English as requested
  let currentProjectFilter = 'All';

  const i18nData = {
    en: {
      lang: "en",
      nav: {
        work: "Work",
        about: "About",
        playground: "Playground",
        contact: "Contact",
        talk: "Let's talk",
        themeDark: "Dark version ↗",
        themeLight: "Light version ↗"
      },
      hero: {
        badge: '<span class="pulse-dot"></span> OPEN TO COLLABORATIONS',
        title: 'Building software<br>that feels <span class="highlight">intelligent.</span>',
        subtitle: "I'm Ilfath Ubaydillah Mudzaki, a developer crafting solutions from AI models and Data Mining to Mobile Apps and Web Systems.",
        btnWork: "See my work ↗",
        btnContact: "Get in touch",
        mockupText: 'Fast, responsive & modern software <span style="color:#0ea5e9;">without hassle.</span>',
        mockupBtn: "Start a project →",
        statShipped: "projects shipped"
      },
      stats: {
        projects: "Projects shipped",
        tech: "Technologies used",
        ai: "AI Models built",
        mr: "Mixed Reality App"
      },
      work: {
        eyebrow: "SELECTED WORK",
        title: "Featured Projects",
        filters: {
          all: "All",
          webapp: "Web App",
          mobile: "Mobile App",
          aiml: "AI & Machine Learning",
          enterprise: "Enterprise System",
          realtime: "Real-Time System"
        },
        emptyMsg: 'No projects found in category "<strong>{category}</strong>".',
        resetFilter: "View All Projects",
        caseStudyBtn: "Case Study ↗",
        viewCodeBtn: "View Code ↗",
        liveDemoBtn: "Live Demo ↗",
        internalBtn: "Internal Project"
      },
      about: {
        eyebrow: "ABOUT",
        title: "An adaptive developer exploring intelligent systems.",
        p1: "I am passionate about solving complex problems through technology. My journey involves building diverse projects across multiple domains—from developing AI classification models and Mixed Reality applications to crafting mobile and web systems.",
        p2: "Currently, my focus is on expanding my knowledge in Data Mining and Artificial Intelligence, aiming to create software that not only functions well but also provides intelligent insights.",
        toolbox: "TOOLBOX"
      },
      exp: {
        eyebrow: "EXPERIENCE",
        title: "My Journey",
        item1: {
          date: "2024 - Present",
          role: "Freelance Full-Stack Developer",
          desc: "Building high-performance AI integrations, custom dashboards, and modern landing pages for various international clients."
        },
        item2: {
          date: "2025 - 2026",
          role: "Fullstack Developer Website and Mobile - Internship at BBWS Brantas Surabaya",
          desc: "Developing a website and mobile application for BBWS Brantas Surabaya, focusing on data management and visualization."
        },
        item3: {
          date: "2024 - 2025",
          role: "Cloud Computing - Bangkit Academy (MSIB)",
          desc: "Participated in the Cloud Computing learning path at Bangkit Academy, gaining hands-on experience with cloud technologies and solutions."
        }
      },
      playground: {
        eyebrow: "PLAYGROUND",
        title: "Interactive API Sandbox",
        subtitle: "Test out the mock backend API. Click an endpoint to fetch data.",
        gameTitle: "Mini Game Break",
        gameSubtitle: "Take a break and play Flappy Dev. Spacebar or click to jump.",
        gameStart: "Play Game",
        gameScore: "Score",
        gameBest: "Best"
      },
      roi: {
        eyebrow: "ESTIMATE YOUR PROJECT",
        title: "What do you want to build?",
        subtitle: "Move the slider to see estimated timeline and recommended tech stack.",
        estTime: "Est. Time",
        recStack: "Recommended Stack"
      },
      contact: {
        title: "Let's build something great.",
        subtitle: "Have a project in mind or just want to say hi? I'm always open to interesting work and collaborations.",
        emailBtn: "Send me an email ↗"
      },
      footer: {
        themeDark: "🌙 Dark Mode",
        themeLight: "☀️ Light Mode"
      },
      modal: {
        rolePrefix: "ROLE:",
        problem: "⚠️ The Problem & Constraint",
        solution: "💡 Technical Solution",
        highlights: "Key Engineering Highlights",
        repoBtn: "View Repository ↗",
        demoBtn: "Visit Live Demo ↗",
        closeBtn: "Close"
      },
      stt: {
        tooltip: "Back to top"
      }
    },
    id: {
      lang: "id",
      nav: {
        work: "Karya",
        about: "Tentang",
        playground: "Playground",
        contact: "Kontak",
        talk: "Ajak Ngobrol",
        themeDark: "Mode Gelap",
        themeLight: "Mode Terang"
      },
      hero: {
        badge: '<span class="pulse-dot"></span> OPEN FOR COLLABORATION',
        title: 'Membangun software<br>yang beneran <span class="highlight">cerdas & intuitif.</span>',
        subtitle: "Halo! Saya Ilfath Ubaydillah Mudzaki — software developer yang merancang solusi cerdas, mulai dari AI & Data Mining, aplikasi mobile, sampai arsitektur web modern.",
        btnWork: "Lihat Karya ↗",
        btnContact: "Ajak Ngobrol",
        mockupText: 'Website modern, cepat & responsif, <span style="color:#0ea5e9;">rapi dan siap pakai</span> tanpa ribet.',
        mockupBtn: "Mulai Kolaborasi →",
        statShipped: "proyek tuntas"
      },
      stats: {
        projects: "Proyek tuntas",
        tech: "Teknologi aktif",
        ai: "Model AI dirilis",
        mr: "App Mixed Reality"
      },
      work: {
        eyebrow: "PORTOFOLIO TERPILIH",
        title: "Karya & Proyek Unggulan",
        filters: {
          all: "Semua",
          webapp: "Web App",
          mobile: "Mobile App",
          aiml: "AI & Machine Learning",
          enterprise: "Sistem Enterprise",
          realtime: "Real-Time System"
        },
        emptyMsg: 'Belum ada proyek di kategori "<strong>{category}</strong>".',
        resetFilter: "Lihat Semua Proyek",
        caseStudyBtn: "Bedah Studi Kasus ↗",
        viewCodeBtn: "Lihat Source Code ↗",
        liveDemoBtn: "Coba Demo Langsung ↗",
        internalBtn: "Proyek Internal"
      },
      about: {
        eyebrow: "TENTANG SAYA",
        title: "Developer adaptif yang mendalami kecerdasan komputasi & sistem modern.",
        p1: "Saya selalu antusias memecahkan problem rumit lewat teknologi. Eksplorasi saya mencakup banyak hal—mulai dari melatih model klasifikasi AI, bereksperimen dengan Mixed Reality, sampai mengembangkan aplikasi web & mobile skala produksi yang tangguh.",
        p2: "Saat ini, saya lagi fokus memperdalam keahlian di bidang Data Mining dan Artificial Intelligence (AI) untuk menghadirkan software yang nggak cuma kencang dan stabil, tapi juga ngasih insight berharga bagi penggunanya.",
        toolbox: "STACK & TOOLS ANDALAN"
      },
      exp: {
        eyebrow: "PENGALAMAN",
        title: "Jejak Karir & Pengalaman",
        item1: {
          date: "2024 - Sekarang",
          role: "Freelance Full-Stack Developer",
          desc: "Membangun integrasi AI performa tinggi, dashboard analitik kustom, dan web interaktif yang modern untuk berbagai klien."
        },
        item2: {
          date: "2025 - 2026",
          role: "Fullstack Web & Mobile Developer — Magang di BBWS Brantas Surabaya",
          desc: "Mengembangkan ekosistem web dan mobile untuk operasional BBWS Brantas Surabaya, berfokus pada visualisasi data dan monitoring pintu air secara real-time."
        },
        item3: {
          date: "2024 - 2025",
          role: "Cloud Computing Cohort — Bangkit Academy (MSIB)",
          desc: "Mendalami arsitektur cloud terstandarisasi Google Cloud Platform (GCP), manajemen deployment backend skala besar, dan best practices DevOps modern."
        }
      },
      playground: {
        eyebrow: "PLAYGROUND",
        title: "Sandbox API Interaktif",
        subtitle: "Coba simulasi mock backend API di bawah ini. Klik endpoint buat langsung cek format respons datanya.",
        gameTitle: "Rehat Sejenak & Main Game",
        gameSubtitle: "Lepas penat sebentar bareng Flappy Dev. Tekan Spasi atau klik layar buat bikin karakter melompat.",
        gameStart: "Mulai Main",
        gameScore: "Skor",
        gameBest: "Skor Terbaik"
      },
      roi: {
        eyebrow: "ESTIMASI PROYEK",
        title: "Mau bikin proyek apa kali ini?",
        subtitle: "Tarik slider untuk melihat perkiraan durasi pengerjaan dan rekomendasi stack teknologi yang paling pas.",
        estTime: "Perkiraan Waktu",
        recStack: "Rekomendasi Stack"
      },
      contact: {
        title: "Yuk, bikin karya keren bareng.",
        subtitle: "Punya ide proyek menarik atau sekadar pengen nyapa dan ngobrol santai? Pintu saya selalu terbuka buat diskusi.",
        emailBtn: "Kirim Email ke Saya ↗"
      },
      footer: {
        themeDark: "🌙 Ganti ke Mode Gelap",
        themeLight: "☀️ Ganti ke Mode Terang"
      },
      modal: {
        rolePrefix: "PERAN:",
        problem: "⚠️ Masalah & Tantangan Utama",
        solution: "💡 Solusi Teknis yang Diterapkan",
        highlights: "Sorotan Arsitektur & Rekayasa",
        repoBtn: "Buka Repository ↗",
        demoBtn: "Coba Demo Langsung ↗",
        closeBtn: "Tutup"
      },
      stt: {
        tooltip: "Kembali ke atas"
      }
    }
  };

  /* =====================================================
     THEME TOGGLE (SUN / MOON ICON ONLY)
     ===================================================== */
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const footerThemeToggle = document.getElementById('footer-theme-toggle');

  const THEME_KEY = 'yunda-clone-theme';

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    if (isDark) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      if (themeToggle) {
        themeToggle.setAttribute('aria-label', currentLang === 'id' ? 'Ganti ke Mode Terang' : 'Switch to Light Mode');
        themeToggle.setAttribute('title', currentLang === 'id' ? 'Ganti ke Mode Terang' : 'Switch to Light Mode');
      }
      if (footerThemeToggle) {
        footerThemeToggle.innerHTML = i18nData[currentLang].footer.themeLight;
      }
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      if (themeToggle) {
        themeToggle.setAttribute('aria-label', currentLang === 'id' ? 'Ganti ke Mode Gelap' : 'Switch to Dark Mode');
        themeToggle.setAttribute('title', currentLang === 'id' ? 'Ganti ke Mode Gelap' : 'Switch to Dark Mode');
      }
      if (footerThemeToggle) {
        footerThemeToggle.innerHTML = i18nData[currentLang].footer.themeDark;
      }
    }
    localStorage.setItem(THEME_KEY, theme);
  };

  const getSavedTheme = () => {
    return localStorage.getItem(THEME_KEY) || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };

  applyTheme(getSavedTheme());

  const toggleTheme = () => {
    const current = body.classList.contains('dark-theme') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (footerThemeToggle) footerThemeToggle.addEventListener('click', toggleTheme);

  /* =====================================================
     LANGUAGE SWITCHER (EN / ID) - DEFAULT ENGLISH
     ===================================================== */
  const langToggleBtn = document.getElementById('lang-toggle');
  const langBadgeEn = document.getElementById('lang-badge-en');
  const langBadgeId = document.getElementById('lang-badge-id');
  const sttTooltip = document.getElementById('stt-tooltip');

  const setLanguage = (lang, triggerScrambleFx = false) => {
    currentLang = lang === 'id' ? 'id' : 'en';
    localStorage.setItem(LANG_KEY, currentLang);
    document.documentElement.lang = currentLang;

    // Toggle badge active class
    if (langBadgeEn && langBadgeId) {
      if (currentLang === 'en') {
        langBadgeEn.classList.add('active');
        langBadgeId.classList.remove('active');
      } else {
        langBadgeId.classList.add('active');
        langBadgeEn.classList.remove('active');
      }
    }

    // Synchronize Theme Toggle aria and footer text
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', currentTheme === 'dark'
        ? (currentLang === 'id' ? 'Ganti ke Mode Terang' : 'Switch to Light Mode')
        : (currentLang === 'id' ? 'Ganti ke Mode Gelap' : 'Switch to Dark Mode'));
      themeToggle.setAttribute('title', currentTheme === 'dark'
        ? (currentLang === 'id' ? 'Ganti ke Mode Terang' : 'Switch to Light Mode')
        : (currentLang === 'id' ? 'Ganti ke Mode Gelap' : 'Switch to Dark Mode'));
    }
    if (footerThemeToggle) {
      footerThemeToggle.innerHTML = currentTheme === 'dark'
        ? i18nData[currentLang].footer.themeLight
        : i18nData[currentLang].footer.themeDark;
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const path = el.getAttribute('data-i18n');
      if (!path) return;
      const keys = path.split('.');
      let val = i18nData[currentLang];
      for (const k of keys) {
        if (val && typeof val === 'object' && k in val) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }

      if (typeof val === 'string') {
        if (el.classList.contains('scramble-text')) {
          el.setAttribute('data-text', val);
          if (triggerScrambleFx && typeof TextScramble !== 'undefined') {
            const fx = new TextScramble(el);
            fx.setText(val);
          } else {
            el.textContent = val;
          }
        } else if (val.includes('<') && val.includes('>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    if (sttTooltip) {
      sttTooltip.textContent = i18nData[currentLang].stt.tooltip;
    }

    if (typeof renderProjects === 'function') {
      renderProjects(currentProjectFilter);
    }
  };

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'id' : 'en';
      setLanguage(nextLang, true);
    });
  }

  /* =====================================================
     SCROLL TO TOP BUTTON
     ===================================================== */
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  if (scrollToTopBtn) {
    const handleScrollTopVisibility = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY > 350) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible', 'at-bottom');
      }

      // Detect if user has scrolled down to the bottom area
      if (scrollY + windowHeight >= docHeight - 250) {
        scrollToTopBtn.classList.add('at-bottom');
      } else {
        scrollToTopBtn.classList.remove('at-bottom');
      }
    };

    window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });
    handleScrollTopVisibility();

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* =====================================================
     NAVBAR SCROLL
     ===================================================== */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* =====================================================
     MOBILE MENU
     ===================================================== */
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileBtn.addEventListener('click', () => {
    const isFlex = navLinks.style.display === 'flex';
    navLinks.style.display = isFlex ? 'none' : 'flex';
    if (!isFlex) {
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'var(--bg-nav)';
      navLinks.style.flexDirection = 'column';
      navLinks.style.padding = '2rem';
      navLinks.style.borderBottom = '1px solid var(--border-color)';
    } else {
      navLinks.style = '';
    }
  });

  /* =====================================================
     PROJECTS & FILTERING
     ===================================================== */
  const escapeHtml = (text) => {
    if (text === null || text === undefined) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const initProjectCardEffects = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.onmouseenter = () => {
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
      };

      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const isOverActionArea = Boolean(e.target.closest('.card-footer, .btn-case-study, .link-btn'));

        if (isOverActionArea) {
          card.style.transition = 'transform 0.25s ease-out, box-shadow 0.3s ease';
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02)';
        } else {
          card.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
          const rotateX = ((y - centerY) / centerY) * -12;
          const rotateY = ((x - centerX) / centerX) * 12;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }
      };
      
      card.onmouseleave = () => {
        card.style.transition = 'transform 0.5s ease-out, box-shadow 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      };
    });
  };

  const projectGrid = document.getElementById('project-grid');

  const renderProjects = (filter = 'All') => {
    if (!projectGrid) return;

    const data = (typeof window.projectsData !== 'undefined' && Array.isArray(window.projectsData))
      ? window.projectsData
      : [];

    const activeFilter = (filter || 'All').trim().toLowerCase();
    const normalizeFilter = str => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const activeNorm = normalizeFilter(activeFilter);

    const filtered = activeFilter === 'all'
      ? data
      : data.filter(project => {
          const cats = Array.isArray(project.category) ? project.category : [project.category].filter(Boolean);
          return cats.some(c => {
            const cLower = c.trim().toLowerCase();
            return cLower === activeFilter || normalizeFilter(cLower) === activeNorm;
          });
        });

    const isIndo = currentLang === 'id';

    if (filtered.length === 0) {
      const emptyMsg = isIndo
        ? `Belum ada proyek di kategori "<strong>${escapeHtml(filter)}</strong>".`
        : `No projects found in category "<strong>${escapeHtml(filter)}</strong>".`;
      const resetBtnLabel = isIndo ? 'Lihat Semua Proyek' : 'View All Projects';

      projectGrid.innerHTML = `
        <div class="empty-projects-state">
          <div class="empty-icon">📁</div>
          <p>${emptyMsg}</p>
          <button type="button" class="btn-outline reset-filter-btn" style="margin-top: 1rem; cursor: pointer; display: inline-block;">${resetBtnLabel}</button>
        </div>
      `;
      const resetBtn = projectGrid.querySelector('.reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const allBtn = document.querySelector('.filter-pills button[data-filter="All"]');
          if (allBtn) allBtn.click();
        });
      }
      return;
    }

    const caseStudyLabel = isIndo ? 'Studi Kasus ↗' : 'Case Study ↗';
    const viewCodeLabel = isIndo ? 'Lihat Kode ↗' : 'View Code ↗';
    const liveDemoLabel = isIndo ? 'Demo Langsung ↗' : 'Live Demo ↗';
    const internalLabel = isIndo ? 'Proyek Internal' : 'Internal Project';

    projectGrid.innerHTML = filtered.map((project, idx) => {
      const delay = (idx % 3) * 0.1;
      const bgClass = project.bgClass || 'bg-blue';
      const currentBadge = (isIndo && project.badge_id) ? project.badge_id : project.badge;
      const badgeHtml = currentBadge 
        ? `<div class="badge role-badge"><span class="badge-role-dot"></span><span>${escapeHtml(currentBadge)}</span></div>` 
        : '';

      const thumbUrl = project.image || (Array.isArray(project.images) && project.images.length > 0 ? project.images[0] : null);
      const visualHtml = thumbUrl
        ? `
            <div class="card-thumb-bg" style="background-image: url('${escapeHtml(thumbUrl)}');"></div>
            <img src="${escapeHtml(thumbUrl)}" alt="${escapeHtml(project.title)}" class="project-thumb" loading="lazy">
          `
        : `<div class="mockup-img"><div class="mockup-header"><span class="m-dot"></span><span class="m-dot"></span><span class="m-dot"></span></div><div class="mockup-body-lines"><span></span><span></span><span></span></div></div>`;

      const hasThumbClass = thumbUrl ? 'has-thumb' : '';

      const tagsHtml = (project.tags || [])
        .map(tag => `<span>${escapeHtml(tag)}</span>`)
        .join('');

      const hasDetails = Boolean(project.details);
      const cardClass = `project-card reveal-up is-visible ${hasDetails ? 'has-details' : ''}`;

      let linksHtml = '';
      if (hasDetails) {
        linksHtml += `<button type="button" class="btn-case-study" data-project-id="${escapeHtml(project.id)}" title="${isIndo ? 'Baca studi kasus teknis' : 'Read detailed case study'}">${caseStudyLabel}</button>`;
      }
      if (project.githubUrl) {
        linksHtml += `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn ${hasDetails ? 'text-muted' : ''}">${viewCodeLabel}</a>`;
      }
      if (project.liveUrl) {
        linksHtml += `<a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn live-link">${liveDemoLabel}</a>`;
      }
      if (!hasDetails && !project.githubUrl && !project.liveUrl) {
        linksHtml += `<span class="link-btn text-muted">${internalLabel}</span>`;
      }

      const categoryAttr = Array.isArray(project.category) 
        ? project.category.join(', ') 
        : (project.category || '');

      const currentDescription = (isIndo && project.description_id) ? project.description_id : project.description;

      return `
        <div class="${cardClass}" data-project-id="${escapeHtml(project.id)}" data-category="${escapeHtml(categoryAttr)}" style="transition-delay: ${delay}s;">
          <div class="card-image ${escapeHtml(bgClass)} ${hasThumbClass}">
            ${badgeHtml}
            ${visualHtml}
          </div>
          <div class="card-content">
            <div class="meta">${escapeHtml(project.meta || '')}</div>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(currentDescription || '')}</p>
            <div class="tags">
              ${tagsHtml}
            </div>
            <div class="card-footer">
              ${linksHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Dynamically detect image aspect ratio to format card thumbnails gracefully (mobile vs desktop vs square logo)
    projectGrid.querySelectorAll('.project-thumb').forEach(img => {
      const applyRatio = () => {
        if (!img.naturalWidth || !img.naturalHeight) return;
        const ratio = img.naturalWidth / img.naturalHeight;
        const parent = img.closest('.card-image');
        if (!parent) return;
        parent.classList.remove('is-portrait', 'is-square', 'is-landscape');
        if (ratio < 0.9) {
          parent.classList.add('is-portrait');
        } else if (ratio < 1.25) {
          parent.classList.add('is-square');
        } else {
          parent.classList.add('is-landscape');
        }
      };

      if (img.complete && img.naturalWidth > 0) {
        applyRatio();
      } else {
        img.addEventListener('load', applyRatio, { once: true });
      }
    });

    initProjectCardEffects();
  };

  /* =====================================================
     PROJECT CASE STUDY MODAL LOGIC
     ===================================================== */
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const modalCloseBtn = document.getElementById('pm-close-btn');
  const pmBadge = document.getElementById('pm-badge');
  const pmMeta = document.getElementById('pm-meta');
  const pmContent = document.getElementById('pm-content');

  const closeProjectModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openProjectModal = (projectId) => {
    if (!modalOverlay || !pmContent) return;
    const data = (typeof window.projectsData !== 'undefined' && Array.isArray(window.projectsData))
      ? window.projectsData
      : [];
    const project = data.find(p => p.id === projectId);
    if (!project) return;

    const details = project.details || {};

    const isIndo = currentLang === 'id';
    const rolePrefix = isIndo ? 'PERAN:' : 'ROLE:';
    const currentBadge = (isIndo && project.badge_id) ? project.badge_id : project.badge;

    if (pmBadge) {
      pmBadge.innerHTML = `<span class="badge-role-dot"></span><span>${rolePrefix} ${escapeHtml(currentBadge || (isIndo ? 'PENGEMBANG' : 'DEVELOPER'))}</span>`;
    }
    if (pmMeta) pmMeta.textContent = project.meta || '';

    const tagsHtml = (project.tags || [])
      .map(tag => `<span>${escapeHtml(tag)}</span>`)
      .join('');

    let metricsHtml = '';
    if (details.metrics && Array.isArray(details.metrics) && details.metrics.length > 0) {
      metricsHtml = `
        <div class="pm-metrics-grid">
          ${details.metrics.map(m => `
            <div class="pm-metric-card">
              <div class="label">${escapeHtml(m.label)}</div>
              <div class="val">${escapeHtml(m.value)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    const problemText = isIndo && details.problem_id ? details.problem_id : details.problem;
    const solutionText = isIndo && details.solution_id ? details.solution_id : details.solution;

    let splitHtml = '';
    if (problemText || solutionText) {
      const problemTitle = isIndo ? '⚠️ Masalah & Tantangan Teknis' : '⚠️ The Problem & Constraint';
      const solutionTitle = isIndo ? '💡 Solusi Teknis' : '💡 Technical Solution';
      splitHtml = `
        <div class="pm-split-grid">
          ${problemText ? `
            <div class="pm-block problem">
              <div class="pm-block-header">
                <span>${problemTitle}</span>
              </div>
              <p>${escapeHtml(problemText)}</p>
            </div>
          ` : ''}
          ${solutionText ? `
            <div class="pm-block solution">
              <div class="pm-block-header">
                <span>${solutionTitle}</span>
              </div>
              <p>${escapeHtml(solutionText)}</p>
            </div>
          ` : ''}
        </div>
      `;
    }

    const highlightsList = isIndo && Array.isArray(details.highlights_id) ? details.highlights_id : (details.highlights || []);

    let highlightsHtml = '';
    if (highlightsList && highlightsList.length > 0) {
      const highlightsHeading = isIndo ? 'Sorotan Rekayasa Utama' : 'Key Engineering Highlights';
      highlightsHtml = `
        <div class="pm-highlights-section">
          <h3>${highlightsHeading}</h3>
          <ul class="pm-highlights-list">
            ${highlightsList.map(h => `
              <li>
                <span class="bullet">✦</span>
                <span>${escapeHtml(h)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    let actionButtonsHtml = '';
    if (project.githubUrl) {
      const repoLabel = isIndo ? 'Lihat Repositori ↗' : 'View Repository ↗';
      actionButtonsHtml += `
        <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-solid" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">
          ${repoLabel}
        </a>
      `;
    }
    if (project.liveUrl) {
      const demoLabel = isIndo ? 'Kunjungi Demo Langsung ↗' : 'Visit Live Demo ↗';
      actionButtonsHtml += `
        <a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">
          ${demoLabel}
        </a>
      `;
    }
    const closeLabel = isIndo ? 'Tutup' : 'Close';
    actionButtonsHtml += `
      <button type="button" class="btn-outline pm-modal-dismiss-btn" style="padding: 0.6rem 1.25rem; font-size: 0.85rem; margin-left: auto;">
        ${closeLabel}
      </button>
    `;

    const images = (Array.isArray(project.images) && project.images.length > 0)
      ? project.images
      : (project.image ? [project.image] : []);

    let sliderHtml = '';
    if (images.length === 1) {
      sliderHtml = `
        <div class="pm-slider-wrapper">
          <div class="pm-slide">
            <div class="pm-slide-bg" style="background-image: url('${escapeHtml(images[0])}');"></div>
            <img src="${escapeHtml(images[0])}" alt="${escapeHtml(project.title)}" class="pm-slide-img" loading="lazy" title="Click to open full image">
            <a href="${escapeHtml(images[0])}" target="_blank" rel="noopener noreferrer" class="pm-slide-zoom-hint" title="Buka gambar resolusi penuh di tab baru">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
              <span>Full View ↗</span>
            </a>
          </div>
        </div>
      `;
    } else if (images.length > 1) {
      sliderHtml = `
        <div class="pm-slider-wrapper" id="pm-slider-wrapper">
          <div class="pm-slider-track" id="pm-slider-track">
            ${images.map((img, idx) => `
              <div class="pm-slide">
                <div class="pm-slide-bg" style="background-image: url('${escapeHtml(img)}');"></div>
                <img src="${escapeHtml(img)}" alt="${escapeHtml(project.title)} - Preview ${idx + 1}" class="pm-slide-img" loading="lazy" title="Click to open full image">
                <a href="${escapeHtml(img)}" target="_blank" rel="noopener noreferrer" class="pm-slide-zoom-hint" title="Buka gambar resolusi penuh di tab baru">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                  <span>Full View ↗</span>
                </a>
              </div>
            `).join('')}
          </div>
          <div class="pm-slider-counter" id="pm-slider-counter">1 / ${images.length}</div>
          <button type="button" class="pm-slider-btn pm-prev" id="pm-slider-prev" aria-label="Previous image">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button type="button" class="pm-slider-btn pm-next" id="pm-slider-next" aria-label="Next image">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <div class="pm-slider-dots" id="pm-slider-dots">
            ${images.map((_, idx) => `
              <button type="button" class="pm-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
            `).join('')}
          </div>
        </div>
      `;
    }

    const summaryText = isIndo && (details.summary_id || project.description_id) 
      ? (details.summary_id || project.description_id) 
      : (details.summary || project.description || '');

    pmContent.innerHTML = `
      <div class="pm-title-section">
        <h2 id="pm-title">${escapeHtml(project.title)}</h2>
        <div class="tags" style="margin-bottom: 1rem;">
          ${tagsHtml}
        </div>
        ${sliderHtml}
        <p class="pm-summary">${escapeHtml(summaryText)}</p>
      </div>

      ${metricsHtml}
      ${splitHtml}
      ${highlightsHtml}

      <div class="pm-modal-actions">
        ${actionButtonsHtml}
      </div>
    `;

    // Interactive slider controller with mouse drag & touch swipe
    let wasSlideDragged = false;
    if (images.length > 1) {
      let currentSlide = 0;
      const track = document.getElementById('pm-slider-track');
      const counter = document.getElementById('pm-slider-counter');
      const prevBtn = document.getElementById('pm-slider-prev');
      const nextBtn = document.getElementById('pm-slider-next');
      const dots = document.querySelectorAll('#pm-slider-dots .pm-dot');
      const sliderWrap = document.getElementById('pm-slider-wrapper');
      const totalImages = images.length;

      let isDragging = false;
      let startX = 0;
      let dragDist = 0;
      let activePointerId = null;

      if (sliderWrap) {
        sliderWrap.classList.add('is-draggable');
      }

      const updateSlide = (newIndex) => {
        currentSlide = (newIndex + totalImages) % totalImages;
        if (track) {
          track.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
          track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        if (counter) {
          counter.textContent = `${currentSlide + 1} / ${totalImages}`;
        }
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentSlide);
        });
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateSlide(currentSlide - 1);
        });
        prevBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateSlide(currentSlide + 1);
        });
        nextBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
      }

      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          if (!isNaN(idx)) updateSlide(idx);
        });
        dot.addEventListener('pointerdown', (e) => e.stopPropagation());
      });

      // Pointer Dragging (unified for Mouse, Trackpad, and Touch)
      if (sliderWrap) {
        const onPointerDown = (e) => {
          if (e.button !== undefined && e.button !== 0) return;
          if (e.target.closest('.pm-slider-btn, .pm-dot, .pm-slide-zoom-hint')) return;

          isDragging = true;
          wasSlideDragged = false;
          startX = e.clientX;
          dragDist = 0;
          activePointerId = e.pointerId;

          if (track) {
            track.style.transition = 'none';
          }
          sliderWrap.classList.add('is-dragging');

          try {
            sliderWrap.setPointerCapture(e.pointerId);
          } catch (_) {}
        };

        const onPointerMove = (e) => {
          if (!isDragging) return;
          const currentX = e.clientX;
          dragDist = currentX - startX;

          if (Math.abs(dragDist) > 6) {
            wasSlideDragged = true;
          }

          const width = sliderWrap.offsetWidth || 500;
          let effectiveDist = dragDist;
          if ((currentSlide === 0 && dragDist > 0) || (currentSlide === totalImages - 1 && dragDist < 0)) {
            effectiveDist = dragDist * 0.35;
          }

          const offsetPercent = (effectiveDist / width) * 100;
          const currentPercent = -currentSlide * 100;
          if (track) {
            track.style.transform = `translateX(${currentPercent + offsetPercent}%)`;
          }
        };

        const onPointerUp = (e) => {
          if (!isDragging) return;
          isDragging = false;
          sliderWrap.classList.remove('is-dragging');

          try {
            if (activePointerId !== null) sliderWrap.releasePointerCapture(activePointerId);
          } catch (_) {}

          if (track) {
            track.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
          }

          const width = sliderWrap.offsetWidth || 500;
          const threshold = Math.min(width * 0.15, 60);

          if (dragDist < -threshold) {
            updateSlide(currentSlide + 1);
          } else if (dragDist > threshold) {
            updateSlide(currentSlide - 1);
          } else {
            updateSlide(currentSlide);
          }

          if (Math.abs(dragDist) > 8) {
            setTimeout(() => { wasSlideDragged = false; }, 100);
          } else {
            wasSlideDragged = false;
          }
        };

        sliderWrap.addEventListener('pointerdown', onPointerDown);
        sliderWrap.addEventListener('pointermove', onPointerMove);
        sliderWrap.addEventListener('pointerup', onPointerUp);
        sliderWrap.addEventListener('pointercancel', onPointerUp);
        sliderWrap.addEventListener('dragstart', (e) => e.preventDefault());
      }
    }

    // Allow clicking on slide images to open in full resolution (ignoring if user dragged)
    pmContent.querySelectorAll('.pm-slide-img').forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        if (wasSlideDragged) return;
        if (img.src) window.open(img.src, '_blank');
      });
    });

    const dismissBtn = pmContent.querySelector('.pm-modal-dismiss-btn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', closeProjectModal);
    }

    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (!modalOverlay || !modalOverlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      const prevBtn = document.getElementById('pm-slider-prev');
      if (prevBtn) prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      const nextBtn = document.getElementById('pm-slider-next');
      if (nextBtn) nextBtn.click();
    }
  });

  if (projectGrid) {
    projectGrid.addEventListener('click', (e) => {
      const caseStudyBtn = e.target.closest('.btn-case-study');
      if (caseStudyBtn) {
        e.preventDefault();
        const pId = caseStudyBtn.getAttribute('data-project-id');
        if (pId) openProjectModal(pId);
        return;
      }

      const card = e.target.closest('.project-card.has-details');
      if (card) {
        if (e.target.closest('a')) return;
        if (e.target.closest('.card-image') || e.target.closest('h3')) {
          e.preventDefault();
          const pId = card.getAttribute('data-project-id');
          if (pId) openProjectModal(pId);
        }
      }
    });
  }

  const filterBtns = document.querySelectorAll('.filter-pills button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProjectFilter = btn.getAttribute('data-filter') || btn.textContent.trim();
      renderProjects(currentProjectFilter);
    });
  });

  // Initialize Language (Default English) and render initial projects
  setLanguage(currentLang, false);

  /* =====================================================
     API SANDBOX
     ===================================================== */
  const mockData = {
    profile: {
      status: 200,
      data: {
        name: "Ilfath Ubaydillah Mudzaki",
        role: "Full-Stack Developer",
        location: "Surabaya, Indonesia",
        status: "Open to Collaborations",
        passion: ["Clean Code", "AI Integration", "System Architecture"]
      }
    },
    skills: {
      status: 200,
      data: {
        backend: ["Laravel", "PHP", "Node.js", "Golang"],
        frontend: ["Next.js", "React", "Vue.js", "Tailwind CSS"],
        database: ["PostgreSQL", "MySQL", "Redis"],
        tools: ["Git", "Docker", "REST APIs", "Figma"]
      }
    },
    health: {
      status: 200,
      data: {
        status: "healthy",
        uptime: "14d 5h 20m",
        database: "connected (2ms ping)",
        memory_usage: "45%",
        active_connections: 128
      }
    },
    hire: {
      status: 201,
      data: {
        message: "Thanks for reaching out!",
        action: "I will get back to you within 24 hours.",
        contactEmail: "contact.ilfath@gmail.com"
      }
    }
  };

  const endpointBtns = document.querySelectorAll('.endpoint-btn');
  const jsonOutput = document.getElementById('json-output');

  // Regex-based syntax highlighting for JSON
  const syntaxHighlight = (json) => {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
                match = match.replace(/"/g, ''); // remove quotes from keys for a cleaner look
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        if (cls === 'key') {
          return '<span class="' + cls + '">"' + match.replace(/:$/, '') + '"</span>:';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  };

  const typeWriter = (htmlContent, element) => {
    // 1. Fade out current content
    element.style.opacity = '0';
    
    setTimeout(() => {
      // 2. Show loading state & fade in
      element.innerHTML = '<span style="color:#8b949e">Fetching data...</span>';
      element.style.opacity = '1';
      
      setTimeout(() => {
        // 3. Fade out loading state
        element.style.opacity = '0';
        
        setTimeout(() => {
          // 4. Inject final data & fade in
          element.innerHTML = htmlContent;
          element.style.opacity = '1';
        }, 200);
      }, 500); // 500ms fake network delay
    }, 200); // match CSS transition duration
  };

  if (jsonOutput) {
    let clickCount = 0;
    let rateLimitTimer = null;
    const RATE_LIMIT_MAX = 3;
    const RATE_LIMIT_WINDOW = 5000;

    if (endpointBtns.length > 0) {
      endpointBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Rate Limit Logic
          clickCount++;
          if (!rateLimitTimer) {
            rateLimitTimer = setTimeout(() => {
              clickCount = 0;
              rateLimitTimer = null;
            }, RATE_LIMIT_WINDOW);
          }

          if (clickCount > RATE_LIMIT_MAX) {
            const errorData = {
              status: 429,
              error: "Too Many Requests",
              message: "Rate limit exceeded! Slow down, cowboy 🤠",
              headers: {
                "X-RateLimit-Limit": RATE_LIMIT_MAX,
                "X-RateLimit-Remaining": 0,
                "Retry-After": 5
              }
            };
            typeWriter(syntaxHighlight(errorData), jsonOutput);
            return;
          }

          // Prevent click if currently animating
          if (jsonOutput.style.opacity === '0') return;

          endpointBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const endpoint = btn.getAttribute('data-endpoint');
          const data = mockData[endpoint];
          
          const formatted = syntaxHighlight(data);
          typeWriter(formatted, jsonOutput);
        });
      });

      // Initialize the first tab
      const initData = mockData['profile'];
      jsonOutput.innerHTML = syntaxHighlight(initData);
      jsonOutput.style.opacity = '1';
    }

    // SQL Simulator logic
    const sqlInput = document.getElementById('sql-input');
    const sqlSubmit = document.getElementById('sql-submit');
    if (sqlInput && sqlSubmit) {
      const executeSQL = () => {
        const query = sqlInput.value.trim().toLowerCase();
        let resultData;

        if (query.includes('from projects') || query.includes('from work')) {
           const pData = (typeof window.projectsData !== 'undefined' && Array.isArray(window.projectsData))
             ? window.projectsData.map(p => ({
                 id: p.id,
                 name: p.title,
                 role: p.badge,
                 category: Array.isArray(p.category) ? p.category.join(', ') : p.category,
                 stack: (p.tags || []).join(', ')
               }))
             : [
                 { id: 1, name: "AI Model (Skripsi)", stack: "Python, AI" },
                 { id: 2, name: "Lokantara AR", stack: "HTML, AR/MR" },
                 { id: 3, name: "Hoax Classification", stack: "Python, Data Mining" }
               ];
           resultData = {
             status: 200,
             rows_returned: pData.length,
             data: pData
           };
        } else if (query.includes('from skills')) {
           resultData = mockData.skills;
        } else if (query.includes('from profile')) {
           resultData = mockData.profile;
        } else if (query.includes('drop ') || query.includes('delete ') || query.includes('update ') || query.includes('insert ')) {
           resultData = {
             status: 403,
             error: "Forbidden",
             message: "Write operations are not allowed in the sandbox."
           };
        } else if (query === '') {
           return;
        } else {
           resultData = {
             status: 404,
             error: "Not Found",
             message: "Table not found or syntax error. Try 'SELECT * FROM projects'"
           };
        }
        
        // Ensure endpoint buttons don't stay active if they run a SQL query
        endpointBtns.forEach(b => b.classList.remove('active'));
        
        typeWriter(syntaxHighlight(resultData), jsonOutput);
      };

      sqlSubmit.addEventListener('click', executeSQL);
      sqlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') executeSQL();
      });
    }
  }

  /* =====================================================
     LOCAL TIME GREETING (Surabaya)
     ===================================================== */
  const timeBadge = document.getElementById('local-time');
  if (timeBadge) {
    const updateTime = () => {
      // Get time in Surabaya
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false };
      const formatter = new Intl.DateTimeFormat('id-ID', options);
      const timeParts = formatter.formatToParts(new Date());
      
      let hourStr = '00';
      let minuteStr = '00';
      timeParts.forEach(part => {
        if (part.type === 'hour') hourStr = part.value;
        if (part.type === 'minute') minuteStr = part.value;
      });
      
      const hour = parseInt(hourStr, 10);
      let greeting = "sedang produktif coding.";
      
      if (hour >= 5 && hour < 12) {
        greeting = "sedang ngopi & coding.";
      } else if (hour >= 12 && hour < 15) {
        greeting = "sedang produktif coding.";
      } else if (hour >= 15 && hour < 19) {
        greeting = "menyelesaikan task hari ini.";
      } else {
        greeting = "mungkin masih melek.";
      }
      
      timeBadge.innerHTML = `🕒 ${hourStr}:${minuteStr} di Surabaya — Ilfath ${greeting}`;
    };
    
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
  }

  /* =====================================================
     SCROLL PROGRESS BAR
     ===================================================== */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    let isScrollingProgress = false;
    window.addEventListener('scroll', () => {
      if (!isScrollingProgress) {
        window.requestAnimationFrame(() => {
          const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = (window.scrollY / scrollTotal) * 100;
          progressBar.style.width = `${scrollProgress}%`;
          isScrollingProgress = false;
        });
        isScrollingProgress = true;
      }
    }, { passive: true });
  }

  /* =====================================================
     GLOWING TIMELINE
     ===================================================== */
  const timelineGlow = document.getElementById('timeline-glow');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineWrapper = document.querySelector('.timeline-wrapper');

  if (timelineGlow && timelineWrapper) {
    let isScrollingTimeline = false;
    window.addEventListener('scroll', () => {
      if (!isScrollingTimeline) {
        window.requestAnimationFrame(() => {
          const rect = timelineWrapper.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          
          if (rect.top < viewportCenter) {
            let progress = viewportCenter - rect.top;
            let percentage = (progress / rect.height) * 100;
            percentage = Math.max(0, Math.min(percentage, 100));
            
            timelineGlow.style.height = `${percentage}%`;
            
            timelineItems.forEach(item => {
              const itemRect = item.getBoundingClientRect();
              if (itemRect.top < viewportCenter + 50) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          } else {
            timelineGlow.style.height = '0%';
            timelineItems.forEach(item => item.classList.remove('active'));
          }
          isScrollingTimeline = false;
        });
        isScrollingTimeline = true;
      }
    }, { passive: true });
  }

  /* =====================================================
     REVEAL ON SCROLL
     ===================================================== */
  const revealElements = document.querySelectorAll('.reveal-up');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealElements.forEach(el => revealObserver.observe(el));

  /* =====================================================
     3D MAGNETIC HOVER ON PROJECT CARDS
     ===================================================== */
  initProjectCardEffects();

  /* =====================================================
     ROI CALCULATOR
     ===================================================== */
  const roiSlider = document.getElementById('roi-slider');
  const calcTime = document.getElementById('calc-time');
  const calcStack = document.getElementById('calc-stack');
  
  if (roiSlider && calcTime && calcStack) {
    const roiData = {
      1: { time: '1 - 2 Weeks', stack: 'WordPress / HTML / CSS' },
      2: { time: '1 - 2 Months', stack: 'Next.js + Laravel + MySQL' },
      3: { time: '3+ Months', stack: 'Next.js + Node + Python AI' }
    };
    
    let currentZone = 1;
    let isDragging = false;
    let animationFrame;
    
    // Animate slider value smoothly
    const animateSliderTo = (targetVal) => {
      cancelAnimationFrame(animationFrame);
      const startVal = parseFloat(roiSlider.value);
      const diff = targetVal - startVal;
      if (Math.abs(diff) < 0.01) return;
      
      const frames = 15;
      let frame = 0;
      
      const step = () => {
        if (isDragging) return; // Stop if user starts dragging again
        frame++;
        roiSlider.value = startVal + (diff * (frame / frames));
        roiSlider.dispatchEvent(new Event('input')); // trigger text update
        if (frame < frames) {
          animationFrame = requestAnimationFrame(step);
        } else {
          roiSlider.value = targetVal;
        }
      };
      animationFrame = requestAnimationFrame(step);
    };

    roiSlider.addEventListener('mousedown', () => isDragging = true);
    roiSlider.addEventListener('touchstart', () => isDragging = true, {passive: true});
    
    window.addEventListener('mouseup', () => {
      if(isDragging) {
        isDragging = false;
        animateSliderTo(Math.round(parseFloat(roiSlider.value)));
      }
    });
    window.addEventListener('touchend', () => {
      if(isDragging) {
        isDragging = false;
        animateSliderTo(Math.round(parseFloat(roiSlider.value)));
      }
    });

    // Update text smoothly when crossing boundaries
    roiSlider.addEventListener('input', (e) => {
      const floatVal = parseFloat(e.target.value);
      const val = Math.round(floatVal);
      
      if (val !== currentZone) {
        currentZone = val;
        
        calcTime.style.opacity = 0;
        calcStack.style.opacity = 0;
        
        setTimeout(() => {
          calcTime.innerText = roiData[val].time;
          calcStack.innerText = roiData[val].stack;
          calcTime.style.opacity = 1;
          calcStack.style.opacity = 1;
        }, 150);
      }
    });

    // Make labels clickable
    const labels = document.querySelectorAll('.slider-labels span');
    labels.forEach((label, index) => {
      label.style.cursor = 'pointer';
      label.addEventListener('click', () => {
        isDragging = false;
        animateSliderTo(index + 1);
      });
    });
  }

  /* =====================================================
     WEB AUDIO API (SOUND EFFECTS)
     ===================================================== */
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx;
  
  const initAudio = () => {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  };

  const playClickSound = () => {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  };

  const playTypeSound = () => {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150 + Math.random() * 50, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.02);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.02);
  };

  document.querySelectorAll('button, a.btn-solid, a.btn-outline, a.btn-outline-glass').forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playClickSound();
    });
  });

  /* =====================================================
     3D SKILL CLOUD (Custom Vanilla JS)
     ===================================================== */
  const canvas = document.getElementById('skill-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const tags = [
      { text: 'Laravel', color: '#ff2d20' },
      { text: 'PHP', color: '#474a8a' },
      { text: 'React', color: '#61dafb' },
      { text: 'Next.js', color: '#888888' },
      { text: 'TypeScript', color: '#3178c6' },
      { text: 'Node.js', color: '#68a063' },
      { text: 'PostgreSQL', color: '#336791' },
      { text: 'MySQL', color: '#4479a1' },
      { text: 'Flutter', color: '#02569b' },
      { text: 'Dart', color: '#0175c2' },
      { text: 'Vue.js', color: '#41b883' },
      { text: 'Go', color: '#00add8' },
      { text: 'Tailwind', color: '#38bdf8' }
    ];

    let radius = 220;
    let maxSpeed = 0.02;
    let mouseX = 0;
    let mouseY = 0;
    let size = canvas.width; // assuming square canvas

    class Tag {
      constructor(text, color, x, y, z) {
        this.text = text;
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
      }
      project() {
        const scale = size / (size + this.z);
        const x2d = (this.x * scale) + size / 2;
        const y2d = (this.y * scale) + size / 2;
        return { x: x2d, y: y2d, scale };
      }
      draw() {
        const p = this.project();
        ctx.globalAlpha = Math.max(0.1, p.scale - 0.2);
        
        // If dark theme, maybe make text lighter, else use original color
        const isDark = document.body.classList.contains('dark-theme');
        ctx.fillStyle = isDark && this.color === '#000000' ? '#ffffff' : this.color;
        
        const fontSize = Math.max(12, 28 * p.scale);
        ctx.font = `bold ${fontSize}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, p.x, p.y);
      }
    }

    let tagObjects = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < tags.length; i++) {
      const y = 1 - (i / (tags.length - 1)) * 2; 
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      tagObjects.push(new Tag(tags[i].text, tags[i].color, x * radius, y * radius, z * radius));
    }

    const rotateX = (angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      tagObjects.forEach(t => {
        const y1 = t.y * cos - t.z * sin;
        const z1 = t.z * cos + t.y * sin;
        t.y = y1;
        t.z = z1;
      });
    };

    const rotateY = (angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      tagObjects.forEach(t => {
        const x1 = t.x * cos - t.z * sin;
        const z1 = t.z * cos + t.x * sin;
        t.x = x1;
        t.z = z1;
      });
    };

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      mouseY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    });
    canvas.addEventListener('mouseleave', () => {
      mouseX = 0.5;
      mouseY = 0.5;
    });

    mouseX = 0.5;
    mouseY = 0.5;

    let isSkillCloudVisible = false;
    const animateTags = () => {
      if (!isSkillCloudVisible) return;
      ctx.clearRect(0, 0, size, size);
      const ax = -mouseY * maxSpeed;
      const ay = mouseX * maxSpeed;
      rotateX(ax);
      rotateY(ay);
      tagObjects.sort((a, b) => b.z - a.z);
      tagObjects.forEach(t => t.draw());
      requestAnimationFrame(animateTags);
    };

    // Optimization: Only animate when visible to save mobile resources
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isSkillCloudVisible = entry.isIntersecting;
        if (isSkillCloudVisible) {
          requestAnimationFrame(animateTags);
        }
      });
    }, { threshold: 0 });
    
    skillObserver.observe(canvas);
  }

  /* =====================================================
     MATRIX RAIN
     ===================================================== */
  const matrixCanvas = document.getElementById('matrix-canvas');
  const mCtx = matrixCanvas ? matrixCanvas.getContext('2d') : null;
  let matrixInterval;
  
  if (matrixCanvas && mCtx) {
    const resizeMatrix = () => {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeMatrix);
    resizeMatrix();

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const matrixArr = letters.split('');
    const fontSize = 16;
    let columns = matrixCanvas.width / fontSize;
    let drops = [];
    for(let x = 0; x < columns; x++) drops[x] = 1;

    const drawMatrix = () => {
      mCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      mCtx.fillStyle = '#0F0';
      mCtx.font = fontSize + 'px monospace';
      for(let i = 0; i < drops.length; i++) {
        const text = matrixArr[Math.floor(Math.random() * matrixArr.length)];
        mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        if(drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    window.startMatrix = () => {
      matrixCanvas.classList.add('active');
      if (!matrixInterval) matrixInterval = setInterval(drawMatrix, 33);
      setTimeout(() => { stopMatrix(); }, 10000); // Stop after 10s
    };
    window.stopMatrix = () => {
      matrixCanvas.classList.remove('active');
      clearInterval(matrixInterval);
      matrixInterval = null;
      setTimeout(() => { mCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height); }, 1000);
    };
  }

  /* =====================================================
     KONAMI CODE
     ===================================================== */
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        initAudio();
        if(window.startMatrix) window.startMatrix();
        alert('Easter Egg Unlocked: Matrix Mode!');
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  /* =====================================================
     TEXT SCRAMBLE EFFECT
     ===================================================== */
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="text-muted">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  const scrambleElements = document.querySelectorAll('.scramble-text');
  if (scrambleElements.length > 0) {
    const scrambleObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.getAttribute('data-text');
          if (text) {
            const fx = new TextScramble(el);
            fx.setText(text);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    
    scrambleElements.forEach(el => scrambleObserver.observe(el));
  }

  /* =====================================================
     SECRET TERMINAL (Cmd + K) & DRAGGABLE
     ===================================================== */
  const terminalOverlay = document.getElementById('secret-terminal');
  const terminalInput = document.getElementById('st-input');
  const terminalOutput = document.getElementById('st-output');
  const terminalClose = document.getElementById('st-close');
  const terminalBody = document.getElementById('st-body');
  const terminalWindow = document.querySelector('.st-window');
  const terminalHeader = document.querySelector('.st-header');

  if (terminalOverlay && terminalWindow && terminalHeader) {
    const toggleTerminal = () => {
      terminalOverlay.classList.toggle('is-open');
      if (terminalOverlay.classList.contains('is-open')) {
        setTimeout(() => terminalInput.focus(), 100);
      }
    };

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === 'Escape' && terminalOverlay.classList.contains('is-open')) {
        toggleTerminal();
      }
    });

    if(terminalClose) {
      terminalClose.addEventListener('click', toggleTerminal);
    }
    
    terminalOverlay.addEventListener('click', (e) => {
      if (e.target === terminalOverlay) toggleTerminal();
    });

    // Draggable Logic
    let isDraggingTerminal = false;
    let dragStartX, dragStartY;
    let initialLeft, initialTop;

    terminalHeader.addEventListener('mousedown', (e) => {
      isDraggingTerminal = true;
      terminalWindow.classList.add('dragging');
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      
      const rect = terminalWindow.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      
      terminalWindow.style.position = 'absolute';
      terminalWindow.style.left = `${initialLeft}px`;
      terminalWindow.style.top = `${initialTop}px`;
      terminalWindow.style.transform = 'none';
      terminalWindow.style.margin = '0';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingTerminal) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      terminalWindow.style.left = `${initialLeft + dx}px`;
      terminalWindow.style.top = `${initialTop + dy}px`;
    });

    window.addEventListener('mouseup', () => {
      if (isDraggingTerminal) {
        isDraggingTerminal = false;
        terminalWindow.classList.remove('dragging');
      }
    });

    const printToTerminal = (text, isHtml = false) => {
      const div = document.createElement('div');
      if (isHtml) {
        div.innerHTML = text;
      } else {
        div.innerText = text;
      }
      terminalOutput.appendChild(div);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    let gameActive = false;
    let gameNumber = 0;

    const processCommand = (cmd) => {
      printToTerminal(`ilfath@dev:~$ ${cmd}`);
      
      const args = cmd.toLowerCase().trim().split(' ');
      const mainCmd = args[0];
      
      if (gameActive) {
        const guess = parseInt(mainCmd);
        if (isNaN(guess)) {
          if (mainCmd === 'exit') {
             gameActive = false;
             printToTerminal('Exiting game.');
          } else {
             printToTerminal('Please enter a valid number, or type "exit".');
          }
          return;
        }
        if (guess === gameNumber) {
          printToTerminal('🎉 Correct! You guessed the number.', true);
          gameActive = false;
        } else if (guess < gameNumber) {
          printToTerminal('Too low! Try a higher number.');
        } else {
          printToTerminal('Too high! Try a lower number.');
        }
        return;
      }
      
      switch(mainCmd) {
        case 'help':
          printToTerminal('Available commands: <span style="color:#79c0ff;font-weight:bold">whoami</span>, <span style="color:#79c0ff;font-weight:bold">skills</span>, <span style="color:#79c0ff;font-weight:bold">projects</span>, <span style="color:#79c0ff;font-weight:bold">hire</span>, <span style="color:#79c0ff;font-weight:bold">clear</span>, <span style="color:#79c0ff;font-weight:bold">matrix</span>, <span style="color:#79c0ff;font-weight:bold">play tetris</span>, <span style="color:#79c0ff;font-weight:bold">chisato</span>, <span style="color:#79c0ff;font-weight:bold">sudo</span>, <span style="color:#79c0ff;font-weight:bold">exit</span>', true);
          break;
        case 'whoami':
          printToTerminal('Ilfath Ubaydillah Mudzaki. Full-Stack Developer driven by clean architecture and AI.');
          break;
        case 'skills':
          printToTerminal('Laravel, PHP, Next.js, Node.js, Golang, PostgreSQL, MySQL.');
          break;
        case 'projects':
          if (typeof window.projectsData !== 'undefined' && Array.isArray(window.projectsData)) {
            const list = window.projectsData.map((p, idx) => `${idx + 1}. ${p.title} [Role: ${p.badge} | ${Array.isArray(p.category) ? p.category.join(', ') : p.category}]`).join(' | ');
            printToTerminal(list);
          } else {
            printToTerminal('1. AI Model (Skripsi) | 2. Lokantara AR | 3. Hoax Classification');
          }
          break;
        case 'hire':
          printToTerminal('Great choice. Preparing email client...', true);
          setTimeout(() => { window.location.href = 'mailto:contact.ilfath@gmail.com'; }, 1000);
          break;
        case 'clear':
          terminalOutput.innerHTML = '';
          break;
        case 'exit':
          toggleTerminal();
          break;
        case 'matrix':
          if (window.startMatrix) {
            printToTerminal('Initiating Matrix protocol...', true);
            window.startMatrix();
          }
          break;
        case 'play':
          if (args[1] === 'tetris') {
             if (typeof window.startTetris === 'function') window.startTetris();
          } else {
            gameActive = true;
            gameNumber = Math.floor(Math.random() * 10) + 1;
            printToTerminal('Mini Game: I am thinking of a number between 1 and 10. Type your guess!');
          }
          break;
        case 'chisato':
          if (typeof window.toggleChisatoTheme === 'function') {
            window.toggleChisatoTheme();
            if (document.body.classList.contains('lycoris-theme')) {
              printToTerminal('Lycoris mode enabled! 🌸', true);
            } else {
              printToTerminal('Lycoris mode disabled.', true);
            }
          }
          break;
        case 'sudo':
          if (args.join(' ') === 'sudo rm -rf /') {
            printToTerminal('<span style="color:#ff5f56;font-weight:bold">CRITICAL ERROR:</span> Access denied. Nice try! Tapi ini web portofolio, bukan server sungguhan 😂', true);
          } else {
            printToTerminal(`sudo: ${args[1] || ''}: command not found`);
          }
          break;
        case '':
          break;
        default:
          printToTerminal(`Command not found: ${mainCmd}. Type 'help' for a list of commands.`);
      }
    };

    if(terminalInput) {
      terminalInput.addEventListener('keydown', (e) => {
        if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Enter') {
           playTypeSound();
        }
        if (e.key === 'Enter') {
          const cmd = terminalInput.value;
          processCommand(cmd);
          terminalInput.value = '';
        }
      });
    }
  }

  /* =====================================================
     MAGNETIC BUTTON EFFECT
     ===================================================== */
  const magneticElements = document.querySelectorAll('.btn-solid, .btn-outline, .btn-outline-glass, .theme-toggle, .nav-links a, .endpoint-btn, .footer-link, .lang-toggle, .scroll-to-top');
  
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      
      // Calculate mouse position relative to center of element
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;
      
      // Magnetic pull strength (lower is weaker)
      const pull = 0.4; 
      
      el.style.transform = `translate(${x * pull}px, ${y * pull}px)`;
      // Add slight transition for smooth following
      el.style.transition = 'transform 0.1s ease-out';
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = `translate(0px, 0px)`;
      // Snap back smoothly
      el.style.transition = 'transform 0.5s ease-out';
    });
  });

  /* =====================================================
     AMBIENT ANIMATIONS (F1 & PACMAN)
     ===================================================== */
  const f1Car = document.getElementById('f1-car');
  const pacman = document.getElementById('pacman-container');
  
  if (f1Car && pacman) {
    const triggerF1 = () => {
      f1Car.classList.add('drive');
      setTimeout(() => f1Car.classList.remove('drive'), 3500);
      setTimeout(triggerF1, Math.random() * 20000 + 15000); // 15-35s
    };
    
    const triggerPacman = () => {
      pacman.style.top = `${Math.random() * 60 + 10}vh`;
      pacman.classList.add('roam');
      setTimeout(() => pacman.classList.remove('roam'), 10500);
      setTimeout(triggerPacman, Math.random() * 30000 + 20000); // 20-50s
    };
    
    setTimeout(triggerF1, 5000);
    setTimeout(triggerPacman, 15000);
  }

  /* =====================================================
     SAKURA EFFECT (For Lycoris Mode)
     ===================================================== */
  const sakuraCanvas = document.getElementById('matrix-canvas');
  const sCtx = sakuraCanvas ? sakuraCanvas.getContext('2d') : null;
  let sakuraInterval;
  let petals = [];

  const initSakura = () => {
    petals = [];
    for (let i = 0; i < 60; i++) {
      petals.push({
        x: Math.random() * sakuraCanvas.width,
        y: Math.random() * sakuraCanvas.height - sakuraCanvas.height, // start off-screen
        r: Math.random() * 4 + 2,
        vx: Math.random() * 1.5 - 0.5,
        vy: Math.random() * 2 + 1.5
      });
    }
  };

  const drawSakura = () => {
    sCtx.clearRect(0, 0, sakuraCanvas.width, sakuraCanvas.height);
    sCtx.fillStyle = 'rgba(255, 183, 197, 0.8)'; // Sakura pink
    sCtx.beginPath();
    for (let i = 0; i < petals.length; i++) {
      let p = petals[i];
      sCtx.moveTo(p.x, p.y);
      sCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    sCtx.fill();
    updateSakura();
  };

  const updateSakura = () => {
    for (let i = 0; i < petals.length; i++) {
      let p = petals[i];
      p.y += p.vy;
      p.x += p.vx;
      
      // Add slight sway
      p.x += Math.sin(p.y / 50) * 0.5;

      if (p.y > sakuraCanvas.height) {
        p.y = -10;
        p.x = Math.random() * sakuraCanvas.width;
      }
    }
  };

  window.startSakura = () => {
    sakuraCanvas.classList.add('active');
    initSakura();
    if (!sakuraInterval) sakuraInterval = setInterval(drawSakura, 33);
  };
  window.stopSakura = () => {
    sakuraCanvas.classList.remove('active');
    clearInterval(sakuraInterval);
    sakuraInterval = null;
    setTimeout(() => { sCtx.clearRect(0, 0, sakuraCanvas.width, sakuraCanvas.height); }, 1000);
  };

  /* =====================================================
     CHISATO THEME (LYCORIS RECOIL)
     ===================================================== */
  const chisatoWidget = document.getElementById('chisato-widget');
  window.toggleChisatoTheme = () => {
    document.body.classList.toggle('lycoris-theme');
    if (document.body.classList.contains('lycoris-theme')) {
      if(chisatoWidget) chisatoWidget.classList.add('show');
      if(window.startSakura) window.startSakura();
    } else {
      if(chisatoWidget) chisatoWidget.classList.remove('show');
      if(window.stopSakura) window.stopSakura();
    }
  };

  /* =====================================================
     TETRIS MINIGAME
     ===================================================== */
  const tetrisCanvas = document.getElementById('tetris');
  const tetrisCtx = tetrisCanvas ? tetrisCanvas.getContext('2d') : null;
  const tetrisScoreEl = document.getElementById('tetris-score');
  let tetrisReq;
  let tetrisActive = false;

  const COLS = 10, ROWS = 20, BLOCK_SIZE = 20;
  let board = [], score = 0;
  
  const SHAPES = [
    [],
    [[1,1,1,1]], // I
    [[1,1],[1,1]], // O
    [[0,1,0],[1,1,1]], // T
    [[1,0,0],[1,1,1]], // L
    [[0,0,1],[1,1,1]], // J
    [[1,1,0],[0,1,1]], // S
    [[0,1,1],[1,1,0]]  // Z
  ];
  const COLORS = [null, '#00ffff', '#ffff00', '#aa00ff', '#ff8800', '#0000ff', '#00ff00', '#ff0000'];
  
  let piece = null;
  let dropCounter = 0;
  let dropInterval = 1000;
  let lastTime = 0;
  
  const initBoard = () => {
    board = Array.from({length: ROWS}, () => Array(COLS).fill(0));
    score = 0;
    if(tetrisScoreEl) tetrisScoreEl.innerText = `Score: ${score}`;
  };
  
  const collide = (board, piece) => {
    const m = piece.matrix;
    const o = piece.pos;
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (m[y][x] !== 0 && (board[y + o.y] && board[y + o.y][x + o.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
  };

  const createPiece = () => {
    const typeId = Math.floor(Math.random() * 7) + 1;
    const shape = SHAPES[typeId];
    piece = {
      matrix: shape,
      pos: {x: Math.floor(COLS/2) - Math.floor(shape[0].length/2), y: 0},
      type: typeId
    };
    if (collide(board, piece)) {
      initBoard();
    }
  };
  
  const drawMatrix = (matrix, offset) => {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          tetrisCtx.fillStyle = COLORS[value];
          tetrisCtx.fillRect((x + offset.x) * BLOCK_SIZE, (y + offset.y) * BLOCK_SIZE, BLOCK_SIZE-1, BLOCK_SIZE-1);
        }
      });
    });
  };
  
  const drawTetris = () => {
    if(!tetrisCtx) return;
    tetrisCtx.fillStyle = '#000';
    tetrisCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
    drawMatrix(board, {x:0, y:0});
    if (piece) {
       const coloredMatrix = piece.matrix.map(row => row.map(v => v ? piece.type : 0));
       drawMatrix(coloredMatrix, piece.pos);
    }
  };
  
  const merge = (board, piece) => {
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          board[y + piece.pos.y][x + piece.pos.x] = piece.type;
        }
      });
    });
  };
  
  const rotate = (matrix, dir=1) => {
    for (let y = 0; y < matrix.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
      }
    }
    if (dir > 0) {
      matrix.forEach(row => row.reverse());
    } else {
      matrix.reverse();
    }
  };

  const pieceMove = (offset) => {
    piece.pos.x += offset;
    if (collide(board, piece)) {
      piece.pos.x -= offset;
    }
  };

  const pieceRotate = () => {
    const pos = piece.pos.x;
    let offset = 1;
    rotate(piece.matrix);
    while (collide(board, piece)) {
      piece.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > piece.matrix[0].length) {
        rotate(piece.matrix, -1);
        piece.pos.x = pos;
        return;
      }
    }
  };

  const arenaSweep = () => {
    let rowCount = 1;
    outer: for (let y = board.length -1; y >= 0; --y) {
      for (let x = 0; x < board[y].length; ++x) {
        if (board[y][x] === 0) continue outer;
      }
      const row = board.splice(y, 1)[0].fill(0);
      board.unshift(row);
      ++y;
      score += rowCount * 10;
      rowCount *= 2;
    }
    if(tetrisScoreEl) tetrisScoreEl.innerText = `Score: ${score}`;
  };

  const pieceDrop = () => {
    piece.pos.y++;
    if (collide(board, piece)) {
      piece.pos.y--;
      merge(board, piece);
      createPiece();
      arenaSweep();
    }
    dropCounter = 0;
  };
  
  const updateTetris = (time = 0) => {
    if (!tetrisActive) return;
    const deltaTime = time - lastTime;
    lastTime = time;
    
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      pieceDrop();
    }
    drawTetris();
    tetrisReq = requestAnimationFrame(updateTetris);
  };
  
  window.startTetris = () => {
    document.getElementById('st-output').style.display = 'none';
    document.getElementById('tetris-container').style.display = 'block';
    tetrisActive = true;
    initBoard();
    createPiece();
    updateTetris();
  };
  
  window.stopTetris = () => {
    tetrisActive = false;
    cancelAnimationFrame(tetrisReq);
    document.getElementById('tetris-container').style.display = 'none';
    document.getElementById('st-output').style.display = 'block';
  };
  
  document.addEventListener('keydown', e => {
    if (!tetrisActive) return;
    if (e.key === 'ArrowLeft') pieceMove(-1);
    else if (e.key === 'ArrowRight') pieceMove(1);
    else if (e.key === 'ArrowDown') pieceDrop();
    else if (e.key === 'ArrowUp') pieceRotate();
    else if (e.key.toLowerCase() === 'q') window.stopTetris();
    
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault(); // Prevent scrolling
    }
  });

  /* =====================================================
     MINI GAME (FLAPPY DEV)
     ===================================================== */
  const flappyCanvas = document.getElementById('flappy-canvas');
  if (flappyCanvas) {
    const ctx = flappyCanvas.getContext('2d');
    const overlay = document.getElementById('flappy-overlay');
    const startBtn = document.getElementById('flappy-start-btn');
    const scoreText = document.getElementById('flappy-score-text');
    const titleText = document.getElementById('flappy-title');
    const bestScoreText = document.getElementById('flappy-best-score-text');
    
    let audioCtx = null;
    const playSound = (type) => {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      const now = audioCtx.currentTime;
      if (type === 'jump') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'score') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.setValueAtTime(1200, now + 0.05);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'hit') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    };

    let bestScore = localStorage.getItem('flappyBestScore') || 0;
    if (bestScoreText) bestScoreText.innerText = `Best Score: ${bestScore}`;

    const resizeCanvas = () => {
      const container = flappyCanvas.parentElement;
      flappyCanvas.width = container.offsetWidth || 400;
      flappyCanvas.height = container.offsetHeight || 500;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let bird = { x: 50, y: 150, w: 24, h: 24, velocity: 0, gravity: 0.35, jump: -6.5 };
    let pipes = [];
    let frame = 0;
    let score = 0;
    let isPlaying = false;
    let gameLoopReq;

    const resetGame = () => {
      bird.y = flappyCanvas.height / 2;
      bird.velocity = 0;
      pipes = [];
      frame = 0;
      score = 0;
      isPlaying = true;
      overlay.style.display = 'none';
      gameLoop();
    };

    const gameOver = () => {
      isPlaying = false;
      playSound('hit');
      cancelAnimationFrame(gameLoopReq);
      
      if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('flappyBestScore', bestScore);
      }
      
      overlay.style.display = 'flex';
      titleText.innerText = "Game Over!";
      scoreText.innerText = `Final Score: ${score}`;
      if (bestScoreText) bestScoreText.innerText = `Best Score: ${bestScore}`;
      startBtn.innerText = "Play Again";
    };

    const jump = (e) => {
      if (e.type !== 'keydown') e.preventDefault();
      if (!isPlaying) return;
      playSound('jump');
      bird.velocity = bird.jump;
    };

    flappyCanvas.addEventListener('mousedown', jump);
    flappyCanvas.addEventListener('touchstart', jump, {passive: false});
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && isPlaying) {
        e.preventDefault();
        jump(e);
      }
    });

    startBtn.addEventListener('click', resetGame);

    const gameLoop = () => {
      if (!isPlaying) return;
      
      ctx.clearRect(0, 0, flappyCanvas.width, flappyCanvas.height);
      
      // Update bird
      bird.velocity += bird.gravity;
      bird.y += bird.velocity;
      
      // Draw bird
      ctx.fillStyle = '#facc15';
      ctx.fillRect(bird.x, bird.y, bird.w, bird.h);
      ctx.fillStyle = 'black'; // Eye
      ctx.fillRect(bird.x + 16, bird.y + 4, 4, 4);
      
      // Floor/Ceil collision
      if (bird.y + bird.h >= flappyCanvas.height || bird.y <= 0) {
        gameOver();
      }

      // Add pipes every 90 frames
      if (frame % 90 === 0) {
        const gap = 140;
        const pipeWidth = 60;
        const minHeight = 50;
        const maxHeight = flappyCanvas.height - gap - minHeight;
        const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        
        pipes.push({
          x: flappyCanvas.width,
          w: pipeWidth,
          top: topHeight,
          bottom: topHeight + gap,
          passed: false
        });
      }

      // Draw and update pipes
      ctx.fillStyle = '#22c55e';
      for (let i = 0; i < pipes.length; i++) {
        let p = pipes[i];
        p.x -= 3; // Speed
        
        ctx.fillRect(p.x, 0, p.w, p.top);
        ctx.fillRect(p.x, p.bottom, p.w, flappyCanvas.height - p.bottom);
        
        // Pipe collision
        if (bird.x < p.x + p.w && bird.x + bird.w > p.x) {
          if (bird.y < p.top || bird.y + bird.h > p.bottom) {
            gameOver();
          }
        }
        
        // Score check
        if (p.x + p.w < bird.x && !p.passed) {
          playSound('score');
          score++;
          p.passed = true;
        }
      }
      
      pipes = pipes.filter(p => p.x + p.w > 0);
      
      // Draw score
      ctx.fillStyle = 'white';
      ctx.font = 'bold 36px Inter, sans-serif';
      ctx.fillText(score, flappyCanvas.width / 2 - 10, 60);

      frame++;
      gameLoopReq = requestAnimationFrame(gameLoop);
    };
    
    // Draw initial bird
    ctx.fillStyle = '#facc15';
    ctx.fillRect(bird.x, bird.y, bird.w, bird.h);
  }

  /* =====================================================
     CUSTOM CURSOR LOGIC (TRAILING RING + INSTANT CENTER DOT)
     ===================================================== */
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');

  if (cursor || cursorDot) {
    // Only activate on devices with fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      let mouseX = -100, mouseY = -100;
      let cursorX = -100, cursorY = -100;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot) {
          cursorDot.style.left = `${mouseX}px`;
          cursorDot.style.top = `${mouseY}px`;
        }
      });

      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        if (cursor) {
          cursor.style.left = `${cursorX}px`;
          cursor.style.top = `${cursorY}px`;
        }
        
        requestAnimationFrame(animateCursor);
      };
      animateCursor();

      document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, input, [role="button"], .scratch-container canvas, .pm-close-btn, .btn-case-study, .link-btn, .project-card.has-details .card-image, .project-card.has-details h3, .pm-slider-btn, .pm-dot, .pm-slide-img, .pm-slide-zoom-hint, .pm-slider-wrapper.is-draggable')) {
          if (cursor) cursor.classList.add('hovering');
          if (cursorDot) cursorDot.classList.add('hovering');
        } else {
          if (cursor) cursor.classList.remove('hovering');
          if (cursorDot) cursorDot.classList.remove('hovering');
        }
      });
    }
  }

  /* =====================================================
     TERMINAL CHAT BUTTON
     ===================================================== */
  const terminalBtn = document.getElementById('terminal-chat-btn');
  if (terminalBtn) {
    terminalBtn.addEventListener('click', () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
    });
  }

});
