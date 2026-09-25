/* ═══════════════════════════════════════════════════════
   YugenK — Gallery Portfolio
   Main JavaScript (Full Rewrite — Gallery Design)
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════════════════
   1. LANGUAGE TOGGLE
   Supports: data-i18n, data-lang-show="en|ja"
   Persists selection in localStorage
   Auto-detects browser language on first visit
════════════════════════════════════════════════════════ */
(function initLanguage() {

  /* ── i18n string table ── */
  const i18n = {
    en: {
      nav_works:              'Works',
      nav_recognition:        'Recognition',
      nav_artist:             'The Artist',
      nav_support:            'Support',
      nav_connect:            'Connect',
      hero_label:             'Supercar Drawings / Since age 7',
      hero_statement:         'Machines, drawn by hand.',
      hero_cta_works:         'View Works',
      hero_cta_ig:            'Follow on Instagram',
      works_label:            'Works',
      works_title:            'Selected Drawings',
      filter_all:             'All',
      filter_pencil:          'Pencil / Ink',
      filter_color:           'Color',
      filter_travel:          'Moments',
      spec_media:             'Media',
      spec_size:              'Size',
      spec_year:              'Year',
      spec_age:               'Age at creation',
      placeholder_new:        'New work\ncoming soon',
      recog_label:            'Recognition',
      recog_title:            'Places & Moments',
      stat_works:             'Original Works',
      stat_started:           'Age started drawing cars',
      stat_showrooms:         'Showroom presentations',
      artist_label:           'The Artist',
      artist_title:           'Why I Draw Cars',
      artist_managed:         'Managed by his parents · All commissions handled by family',
      support_label:          'Support',
      support_title:          'Join the Journey',
      support_sub:            "You don't have to buy anything. Following along is the greatest support of all.",
      support_follow_title:   'Follow',
      support_follow_body:    "Follow on Instagram to see new works as they're posted. Free, and the most direct way to support.",
      support_follow_btn:     'Follow @yugenk_art',
      support_commission_title: 'Commission',
      support_commission_body:  'Request an original drawing of your car or favourite model. Currently accepting a limited number of commissions. Typical turnaround: 4–8 weeks.',
      support_commission_btn:   'Enquire via Instagram DM',
      support_prints_title:   'Prints & Support',
      support_prints_body:    'High-quality prints of selected works. Proceeds go directly toward art supplies, gallery visits, and future exhibitions.',
      support_prints_btn:     'Contact for Prints',
      support_note:           'All proceeds support art materials, showroom and gallery visits, and international exhibition travel. All communication managed by his parents.',
      connect_label:          'Connect',
      connect_title:          'Get in Touch',
      qr_scan:                'Scan to follow on Instagram',
      connect_ig_title:       'Instagram DM',
      connect_ig_sub:         'Fastest response',
      connect_mail_title:     'Email',
      connect_managed:        'Replies within a few days · Family-managed',
    },
    ja: {
      nav_works:              'Works',
      nav_recognition:        'Recognition',
      nav_artist:             'The Artist',
      nav_support:            'Support',
      nav_connect:            'Connect',
      hero_label:             'スーパーカーの絵 / 7歳から',
      hero_statement:         'マシンを、手で描く。',
      hero_cta_works:         '作品を見る',
      hero_cta_ig:            'Instagramをフォロー',
      works_label:            'Works',
      works_title:            '作品一覧',
      filter_all:             'すべて',
      filter_pencil:          '鉛筆・インク',
      filter_color:           'カラー',
      filter_travel:          'Moments',
      spec_media:             '画材',
      spec_size:              'サイズ',
      spec_year:              '制作年',
      spec_age:               '制作時の年齢',
      placeholder_new:        '新作\n制作中',
      recog_label:            'Recognition',
      recog_title:            '展示・訪問実績',
      stat_works:             'オリジナル作品数',
      stat_started:           '車を描き始めた年齢',
      stat_showrooms:         'ショールーム展示',
      artist_label:           'The Artist',
      artist_title:           'なぜ車を描くのか',
      artist_managed:         '保護者が管理・対応 · コミッションはすべて家族が担当',
      support_label:          'Support',
      support_title:          'いっしょに見届けてほしい',
      support_sub:            '購入しなくてもかまいません。見守っていただけるだけで、最大の応援です。',
      support_follow_title:   'フォロー',
      support_follow_body:    'Instagramをフォローして、新作をリアルタイムでご覧ください。無料でできる一番の応援です。',
      support_follow_btn:     '@yugenk_art をフォロー',
      support_commission_title: 'コミッション',
      support_commission_body:  'あなたのクルマや好きな車種のオリジナル作品を依頼できます。現在、限定数のみ受付中。納期目安：4〜8週間。',
      support_commission_btn:   'Instagram DM でお問い合わせ',
      support_prints_title:   'プリント・支援',
      support_prints_body:    '選抜作品の高品質プリント販売。収益は画材・ギャラリー訪問・将来の展示活動に充てられます。',
      support_prints_btn:     'プリントについて問い合わせ',
      support_note:           '収益はすべて画材・ショールーム訪問・海外展示への渡航費に使われます。お問い合わせはすべて保護者が対応します。',
      connect_label:          'Connect',
      connect_title:          'お問い合わせ',
      qr_scan:                'スキャンしてInstagramをフォロー',
      connect_ig_title:       'Instagram DM',
      connect_ig_sub:         '最も速く返信できます',
      connect_mail_title:     'メール',
      connect_managed:        '保護者が管理 · 数日以内にご返信します',
    }
  };

  /* ── Determine initial language ── */
  function detectLang() {
    const saved = localStorage.getItem('yugenk_lang');
    if (saved === 'en' || saved === 'ja') return saved;
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browserLang.startsWith('ja') ? 'ja' : 'en';
  }

  let currentLang = detectLang();

  /* ── Apply language ── */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('yugenk_lang', lang);

    /* Update lang-btn active state */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    /* Update <html lang> */
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';

    /* Apply data-i18n strings */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const str = i18n[lang][key];
      if (str !== undefined) {
        /* Preserve child elements (e.g. icons) — only update text nodes */
        if (el.childElementCount === 0) {
          el.textContent = str;
        } else {
          /* find last text node and update, or replace only text nodes */
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
              node.textContent = ' ' + str;
            }
          });
          /* fallback: if no text nodes found, set the whole thing */
          const hasTextNode = Array.from(el.childNodes).some(
            n => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
          );
          if (!hasTextNode) el.textContent = str;
        }
      }
    });

    /* Show/hide data-lang-show blocks */
    document.querySelectorAll('[data-lang-show]').forEach(el => {
      const show = el.dataset.langShow === lang;
      el.hidden = !show;
    });

    /* Support section: show correct card body text */
    document.querySelectorAll('.support-card-body').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('.support-card-body--ja').forEach(el => {
      el.style.display = lang === 'ja' ? '' : 'none';
    });

    /* Support subtitle */
    const supportSub = document.querySelector('.section-sub:not(.section-sub--ja)');
    const supportSubJa = document.querySelector('.section-sub--ja');
    if (supportSub)   supportSub.style.display   = lang === 'en' ? '' : 'none';
    if (supportSubJa) supportSubJa.style.display = lang === 'ja' ? '' : 'none';
  }

  /* ── Wire up toggle buttons ── */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  /* ── Initial apply ── */
  applyLanguage(currentLang);

  /* Expose for other modules */
  window.YugenK = window.YugenK || {};
  window.YugenK.getLang = () => currentLang;
})();


/* ════════════════════════════════════════════════════════
   2. SCROLL-BASED NAV
   Adds .scrolled to #site-nav when scrollY > 10
════════════════════════════════════════════════════════ */
(function initScrollNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); /* run once on load */
})();


/* ════════════════════════════════════════════════════════
   3. GALLERY FILTER
   .filter-btn[data-filter] → .work-card[data-category]
════════════════════════════════════════════════════════ */
(function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.work-card');

  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      /* Update button active state */
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      /* Show / hide cards */
      cards.forEach((card, i) => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('hidden');
          /* Staggered fade-in */
          card.style.opacity   = '0';
          card.style.transform = 'translateY(12px)';
          card.style.transition = 'opacity 0.35s ease ' + (i * 0.05) + 's, transform 0.35s ease ' + (i * 0.05) + 's';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.style.opacity   = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.classList.add('hidden');
          card.style.opacity   = '';
          card.style.transform = '';
          card.style.transition = '';
        }
      });
    });
  });
})();


/* ════════════════════════════════════════════════════════
   4. LIGHTBOX
   Opens on .work-zoom click.
   Reads data-* from parent .work-card.
   Supports keyboard (Esc/Arrow) + touch swipe.
════════════════════════════════════════════════════════ */
(function initLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const backdrop  = document.getElementById('lb-backdrop');
  const closeBtn  = document.getElementById('lbClose');
  const prevBtn   = document.getElementById('lbPrev');
  const nextBtn   = document.getElementById('lbNext');
  const imgEl     = document.getElementById('lbImg');
  const titleEl   = document.getElementById('lbTitle');
  const specsEl   = document.getElementById('lbSpecs');
  const epEl      = document.getElementById('lbEp');
  if (!lightbox) return;

  let currentIdx = 0;

  function getVisibleCards() {
    return Array.from(document.querySelectorAll('.work-card:not(.hidden):not(.work-card--placeholder)'));
  }

  function openAt(idx) {
    const cards = getVisibleCards();
    if (!cards[idx]) return;
    currentIdx = idx;
    const card = cards[idx];

    /* Populate image */
    const imgSrc = card.querySelector('img') ? card.querySelector('img').src : '';
    const imgAlt = card.querySelector('img') ? card.querySelector('img').alt : '';
    imgEl.src = imgSrc;
    imgEl.alt = imgAlt;

    /* Title */
    titleEl.textContent = card.dataset.title || '';

    /* Specs list */
    const lang = (window.YugenK && window.YugenK.getLang) ? window.YugenK.getLang() : 'en';
    const labels = {
      en: { media: 'Media', size: 'Size', year: 'Year', age: 'Age at creation' },
      ja: { media: '画材', size: 'サイズ', year: '制作年', age: '制作時の年齢' }
    };
    const L = labels[lang] || labels.en;

    specsEl.innerHTML = '';
    const specs = [
      { key: L.media, val: card.dataset.media, age: false },
      { key: L.size,  val: card.dataset.size,  age: false },
      { key: L.year,  val: card.dataset.year,  age: false },
      { key: L.age,   val: card.dataset.age,   age: true  }
    ];
    specs.forEach(s => {
      if (!s.val || s.val === '—') return;
      const li = document.createElement('li');
      li.innerHTML =
        '<span class="sk">' + escHtml(s.key) + '<' + '/span>' +
        '<span class="sv' + (s.age ? ' sv-age' : '') + '">' + escHtml(s.val) + '<' + '/span>';
      specsEl.appendChild(li);
    });

    /* Episode text */
    const ep = lang === 'ja' ? (card.dataset.epJa || card.dataset.epEn) : (card.dataset.epEn || '');
    epEl.textContent = ep || '';

    /* Show nav buttons only when >1 card */
    const showNav = cards.length > 1;
    prevBtn.style.display = showNav ? 'flex' : 'none';
    nextBtn.style.display = showNav ? 'flex' : 'none';

    /* Open */
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    /* Focus close button for accessibility */
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  function navigate(dir) {
    const cards = getVisibleCards();
    currentIdx = (currentIdx + dir + cards.length) % cards.length;
    openAt(currentIdx);
  }

  /* ── Open on .work-zoom click ── */
  document.addEventListener('click', e => {
    const zoomBtn = e.target.closest('.work-zoom');
    if (!zoomBtn) return;
    e.stopPropagation();
    const card  = zoomBtn.closest('.work-card');
    const cards = getVisibleCards();
    const idx   = cards.indexOf(card);
    openAt(idx >= 0 ? idx : 0);
  });

  /* ── Also open on card image click ── */
  document.addEventListener('click', e => {
    const card = e.target.closest('.work-card:not(.work-card--placeholder)');
    if (!card) return;
    if (e.target.closest('.work-zoom')) return;
    if (e.target.closest('.work-meta')) return;
    const cards = getVisibleCards();
    const idx   = cards.indexOf(card);
    openAt(idx >= 0 ? idx : 0);
  });

  /* ── Controls ── */
  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click',  () => navigate(-1));
  nextBtn.addEventListener('click',  () => navigate(1));

  document.addEventListener('keydown', e => {
    if (lightbox.hasAttribute('hidden')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  /* ── Touch swipe ── */
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  });

  /* Helper */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();


/* ════════════════════════════════════════════════════════
   5. COUNTER ANIMATION
   .stat-num[data-target] → animates 0 → target
   Fires via IntersectionObserver when block enters view
════════════════════════════════════════════════════════ */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;

    const duration = 1400; /* ms */
    const startTime = performance.now();

    function tick(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Ease out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target; /* ensure exact final value */
    }

    requestAnimationFrame(tick);
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.4, rootMargin: '0px 0px -60px 0px' });

  counters.forEach(el => obs.observe(el));
})();


/* ════════════════════════════════════════════════════════
   6. QR CODE GENERATION
   Targets #qrcode, uses qrcode library from CDN
════════════════════════════════════════════════════════ */
(function initQRCode() {
  const container = document.getElementById('qrcode');
  if (!container) return;

  function generate() {
    if (typeof QRCode === 'undefined') {
      /* Retry after short delay if CDN hasn't loaded yet */
      setTimeout(generate, 400);
      return;
    }
    /* Clear any previous content */
    container.innerHTML = '';
    /* eslint-disable no-new */
    new QRCode(container, {
      text:           'https://www.instagram.com/yugenk_art/',
      width:          220,
      height:         220,
      colorDark:      '#14161A',
      colorLight:     '#FFFFFF',
      correctLevel:   QRCode.CorrectLevel.H
    });
  }

  /* Wait for DOM + CDN */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generate);
  } else {
    generate();
  }
})();


/* ════════════════════════════════════════════════════════
   7. SCROLL REVEAL — fade-up
   .fade-up → .visible  via IntersectionObserver
════════════════════════════════════════════════════════ */
(function initScrollReveal() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, {
    threshold:  0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  els.forEach(el => obs.observe(el));
})();


/* ════════════════════════════════════════════════════════
   8. COPYRIGHT YEAR
════════════════════════════════════════════════════════ */
(function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
