document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     THEME TOGGLE
     ===================================================== */
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const footerThemeToggle = document.getElementById('footer-theme-toggle');

  const THEME_KEY = 'yunda-clone-theme';

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeToggle.innerHTML = 'Light version ↗';
      footerThemeToggle.innerHTML = '← See the light version';
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeToggle.innerHTML = 'Dark version ↗';
      footerThemeToggle.innerHTML = '← See the dark version';
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

  themeToggle.addEventListener('click', toggleTheme);
  footerThemeToggle.addEventListener('click', toggleTheme);

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
     FILTER BUTTONS
     ===================================================== */
  const filterBtns = document.querySelectorAll('.filter-pills button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

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
           resultData = {
             status: 200,
             rows_returned: 3,
             data: [
               { id: 1, name: "AI Trip Planner", stack: "Next.js" },
               { id: 2, name: "Seribu Cerita", stack: "Next.js, Express" },
               { id: 3, name: "UPFotoStudio", stack: "Laravel" }
             ]
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
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollTotal) * 100;
      progressBar.style.width = `${scrollProgress}%`;
    });
  }

  /* =====================================================
     GLOWING TIMELINE
     ===================================================== */
  const timelineGlow = document.getElementById('timeline-glow');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineWrapper = document.querySelector('.timeline-wrapper');

  if (timelineGlow && timelineWrapper) {
    window.addEventListener('scroll', () => {
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
    });
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
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Responsif & smooth saat hover
      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Pass coordinates to CSS for Spotlight effect
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      // Calculate rotation (max 15 degrees for more pronounced effect)
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      // Smooth reset
      card.style.transition = 'transform 0.5s ease-out, box-shadow 0.3s ease';
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    });
  });

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

    const animateTags = () => {
      ctx.clearRect(0, 0, size, size);
      const ax = -mouseY * maxSpeed;
      const ay = mouseX * maxSpeed;
      rotateX(ax);
      rotateY(ay);
      tagObjects.sort((a, b) => b.z - a.z);
      tagObjects.forEach(t => t.draw());
      requestAnimationFrame(animateTags);
    };

    animateTags();
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
          printToTerminal('1. AI Trip Planner | 2. Mental Health App | 3. CMS Dashboard');
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
          if (typeof window.toggleChisatoTheme === 'function') window.toggleChisatoTheme();
          printToTerminal('Lycoris mode activated! 🌸', true);
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
  const magneticElements = document.querySelectorAll('.btn-solid, .btn-outline, .btn-outline-glass, .theme-toggle, .nav-links a, .endpoint-btn, .footer-link');
  
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
     CUSTOM CURSOR LOGIC
     ===================================================== */
  const cursor = document.getElementById('custom-cursor');

  if (cursor) {
    // Only activate on devices with fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      let mouseX = -100, mouseY = -100;
      let cursorX = -100, cursorY = -100;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(animateCursor);
      };
      animateCursor();

      const hoverElements = document.querySelectorAll('a, button, input, [role="button"], .scratch-container canvas');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hovering');
        });
      });
    }
  }

  /* =====================================================
     MOBILE TERMINAL BUBBLE
     ===================================================== */
  const mobileBubble = document.getElementById('mobile-terminal-bubble');
  if (mobileBubble) {
    mobileBubble.addEventListener('click', () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;
      
      // Show when user scrolls past 30% of the page, remains visible until the very bottom
      if (maxScroll > 0) {
        if (scrollY > maxScroll * 0.3) {
          mobileBubble.classList.add('visible');
        } else {
          mobileBubble.classList.remove('visible');
        }
      }
    }, {passive: true});
  }

});
