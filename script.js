(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer:coarse)').matches;

  /* ---------- Splash Screen ---------- */
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) {
    const textWrapper = document.getElementById('splashTextWrapper');
    const s1 = "Bentar ya, sebenernya masih proses bikin";
    const s2 = "Tapi yaudah, ini hasil sementaranya";
    
    const animateSentence = (text, container) => {
      container.innerHTML = ''; // Clear previous text
      const div = document.createElement('div');
      div.className = 'splash-text';
      
      const chars = text.split('');
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'splash-char';
        span.style.animationDelay = `${i * 0.025}s`; // Faster stagger
        div.appendChild(span);
      });
      container.appendChild(div);
      
      // Return total animation time in ms (stagger delay + animation duration)
      return (chars.length * 25) + 300; 
    };

    window.addEventListener('load', () => {
      if (textWrapper) {
        textWrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        // Show first sentence
        const time1 = animateSentence(s1, textWrapper);
        
        setTimeout(() => {
          // Fade out first sentence
          textWrapper.style.opacity = '0';
          textWrapper.style.transform = 'translateY(-10px)';
          
          setTimeout(() => {
            // Reset position invisibly for second sentence
            textWrapper.style.transform = 'translateY(10px)';
            
            requestAnimationFrame(() => {
              textWrapper.style.opacity = '1';
              textWrapper.style.transform = 'translateY(0)';
              
              // Show second sentence
              const time2 = animateSentence(s2, textWrapper);
              
              setTimeout(() => {
                // Hide entire splash screen
                splashScreen.classList.add('hidden');
                setTimeout(() => splashScreen.remove(), 800);
              }, time2 + 700); // Wait for user to read the 2nd sentence
            });
          }, 300); // Match fade-out CSS duration
        }, time1 + 750); // Wait for user to read the 1st sentence
      }
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('siteHeader');
  const onScrollHeader = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const topNav = document.getElementById('topNav');
  navToggle.addEventListener('click', () => {
    const open = topNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  topNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      topNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal-up');
  revealEls.forEach(el => {
    const delay = el.getAttribute('data-delay') || 0;
    el.style.setProperty('--d', delay);
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Typewriter tagline ---------- */
  const typewriterEl = document.getElementById('typewriter');
  const phrases = ['siap belajar hal baru.', 'siap berkontribusi.', 'siap bertumbuh.'];
  if (typewriterEl && !reduceMotion) {
    let phraseIndex = 0, charIndex = 0, deleting = false;

    const tick = () => {
      const current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        typewriterEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        typewriterEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 55);
    };
    tick();
  } else if (typewriterEl) {
    typewriterEl.textContent = phrases[0];
  }

  /* ---------- Stat counters ---------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && statNumbers.length) {
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    statNumbers.forEach(el => statIo.observe(el));
  }

  /* ---------- Cursor glow ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && !isTouch && !reduceMotion) {
    window.addEventListener('pointermove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  /* ---------- Magnetic buttons ---------- */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---------- Project card tilt ---------- */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Journey path (signature scroll element) ---------- */
  const journeyPath = document.getElementById('journeyPath');
  const journeyFill = document.getElementById('journeyFill');
  const journeyMarker = document.getElementById('journeyMarker');
  const journeyNodes = document.querySelectorAll('.journey-node');
  const mobileProgress = document.getElementById('mobileProgress');

  let sectionOffsets = [];

  const measureJourney = () => {
    if (!journeyPath) return;
    const docHeight = document.documentElement.scrollHeight;
    journeyPath.style.height = docHeight + 'px';

    sectionOffsets = Array.from(journeyNodes).map(node => {
      const target = document.getElementById(node.getAttribute('data-target'));
      const top = target ? target.getBoundingClientRect().top + window.scrollY + 80 : 0;
      node.style.top = top + 'px';
      return { node, top };
    });
  };

  const updateJourney = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

    if (journeyPath) {
      const y = progress * document.documentElement.scrollHeight;
      journeyFill.style.height = y + 'px';
      journeyMarker.style.top = y + 'px';

      const activeLine = scrollTop + window.innerHeight / 2;
      sectionOffsets.forEach(({ node, top }) => {
        node.classList.toggle('active', activeLine >= top);
      });
    }

    if (mobileProgress) mobileProgress.style.width = (progress * 100) + '%';
  };

  window.addEventListener('load', () => { measureJourney(); updateJourney(); });
  window.addEventListener('resize', () => { measureJourney(); updateJourney(); });
  window.addEventListener('scroll', updateJourney, { passive: true });

  journeyNodes.forEach(node => {
    node.addEventListener('click', () => {
      const target = document.getElementById(node.getAttribute('data-target'));
      if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  // Recalculate once fonts/images settle (layout shift safeguard)
  setTimeout(() => { measureJourney(); updateJourney(); }, 600);

  /* ---------- Contact form (demo submit) ---------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const toast = document.getElementById('toast');

  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Placeholder saja — sambungkan ke layanan seperti Formspree/EmailJS
      // untuk membuat form ini benar-benar mengirim email.
      formNote.textContent = 'Ini contoh tampilan. Sambungkan formulir ini ke layanan pengirim pesan agar benar-benar berfungsi.';
      showToast('Pesan siap dikirim ✦ (mode demo)');
      form.reset();
    });
  }
})();
