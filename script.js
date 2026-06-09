const ASSETS = {
  introVideo: {
    webm: "./assets/video/logo-intro.webm",
    mp4: "./assets/video/logo-intro.mp4",
  },
  heroVideo: {
    mp4: "./assets/video/hero-bg.mp4?v=20260609-12",
    mobile: "./assets/video/mobile-mv-bg.mp4?v=20260609-09",
    poster: "./assets/img/hero-poster.jpg",
  },
  mobileFooterVideo: {
    mp4: "./assets/video/mobile-mv-bg.mp4?v=20260609-09",
  },
};

const NAV_ITEMS = [
  { index: "Indx.01", label: "HOME", text: "Home", href: "#home", nav: "home" },
  { index: "Indx.02", label: "PH0T0", text: "Photo", href: "#photo", nav: "photo" },
  { index: "Indx.03", label: "UPDAT3", text: "Updates", href: "#updates", nav: "updates" },
  { index: "Indx.04", label: "MU5IC", text: "Music", href: "#music", nav: "music" },
  { index: "Indx.05", label: "C0NTACT", text: "Contact", href: "#contact", nav: "contact" },
  { index: "Indx.06", label: "VIDEO5", text: "Videos", href: "https://space.bilibili.com/3493089568098826?spm_id_from=333.1007.0.0", nav: "videos" },
  { index: "Indx.07", label: "ST0RE", text: "Store", href: "#", nav: "store" },
];

const SOCIAL_LINKS = [
  { platform: "spotify", label: "Spotify", meta: "STREAM", href: "#" },
  { platform: "youtube", label: "YouTube", meta: "VIDEO", href: "https://www.youtube.com/@SlowErosionCN" },
  { platform: "netease", label: "NetEase", meta: "网易云音乐", href: "https://music.163.com/#/artist?id=124932936" },
  { platform: "xiaohongshu", label: "RED", meta: "小红书", href: "https://www.xiaohongshu.com/user/profile/63be08f700000000260070ca?xsec_token=ABTiA3ri5X8CJ06IO77DzhbUDaIrMtMRmbvbZVZW4DcPY=&xsec_source=pc_search" },
  { platform: "bilibili", label: "Bilibili", meta: "CN VIDEO", href: "https://space.bilibili.com/3493089568098826?spm_id_from=333.1007.0.0" },
  { platform: "instagram", label: "Instagram", meta: "IMAGE FEED", href: "https://www.instagram.com/slowerosionofficial/" },
  { platform: "tiktok", label: "TikTok", meta: "SHORT SIGNAL", href: "https://www.tiktok.com/@slowerosion1" },
  { platform: "x", label: "X", meta: "TWITTER", href: "https://x.com/Onyxirius325" },
  { platform: "douyin", label: "Douyin", meta: "抖音", href: "https://www.douyin.com/user/MS4wLjABAAAA67oeAsfaIwGmXSrnkXuysAewPLZM_lIFz_p1G5k06hVfGUxuECSw_bzhdpqfoSoM?from_tab_name=main" },
  { platform: "wechat", label: "WeChat", meta: "DIRECT WINDOW", href: "#wechat" },
  { platform: "email", label: "Email", meta: "MAILTO", href: "mailto:SlowErosion@outlook.com" },
];

const SOCIAL_ICONS = {
  spotify: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M7.2 9.4c3.4-1 6.6-.7 9.7 1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M7.8 12.3c2.7-.7 5.4-.5 7.9.8" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/><path d="M8.4 15c1.9-.4 3.9-.3 5.8.6" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.4c.2-1.4 1.1-2.2 2.5-2.4 3.8-.4 8.2-.4 12 0 1.4.2 2.3 1 2.5 2.4.4 2.8.4 6.4 0 9.2-.2 1.4-1.1 2.2-2.5 2.4-3.8.4-8.2.4-12 0-1.4-.2-2.3-1-2.5-2.4-.4-2.8-.4-6.4 0-9.2Z"/><path d="m10 8.7 5.4 3.3-5.4 3.3Z" fill="#060606"/></svg>`,
  netease: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a8.2 8.2 0 1 0-7.8-5.7c1.2 3.5 4.2 5.7 7.8 5.7Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M13.6 4.1c-1.2 3.2-3.4 4.2-5.3 5.8-1.5 1.3-1.9 3.6-.8 5.2 1.5 2.1 4.7 1.8 6.2.1 1.6-1.8.8-4.3-.9-5.2 2.4.1 4.1 1.7 4.4 3.8.3 2.2-1.1 4.7-3.7 5.7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  xiaohongshu: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 9h10M7 13h10M9 17h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/></svg>`,
  bilibili: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 5.2 5.6 3.4M16.6 5.2l1.8-1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="3.5" y="6" width="17" height="13.5" rx="2.4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.2 11.4v2.1M15.8 11.4v2.1M10 16h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16.8" cy="7.4" r="1.1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 3v11.1c0 3-2.2 5-5 5-2.4 0-4.3-1.6-4.3-3.8 0-2.3 1.9-3.9 4.4-3.9.5 0 1 .1 1.4.2v-3c-.5-.1-1-.2-1.5-.2-4 0-7.2 2.8-7.2 6.9 0 3.9 3.2 6.7 7.3 6.7 4.4 0 7.8-3.1 7.8-7.9V8.7c1.3 1.2 2.7 1.9 4.6 2.1V7.6c-2.3-.4-3.9-1.9-4.6-4.6Z"/></svg>`,
  douyin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.4 4h2.5c.4 2.1 1.7 3.6 3.9 3.9v2.5c-1.4-.1-2.7-.5-3.9-1.3v5.6a4.8 4.8 0 1 1-4.8-4.8c.3 0 .5 0 .8.1v2.6a2.3 2.3 0 1 0 1.5 2.1V4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  wechat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.2 5.2c-4.1 0-7.4 2.6-7.4 5.9 0 1.8 1 3.4 2.6 4.5l-.6 2.1 2.5-1.2c.9.3 1.9.5 2.9.5 4.1 0 7.4-2.6 7.4-5.9s-3.3-5.9-7.4-5.9Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14.9 10.2c3.5.4 6.2 2.7 6.2 5.6 0 1.5-.8 2.9-2.1 3.9l.5 1.8-2.2-1c-.8.3-1.7.4-2.6.4-2.2 0-4.2-.8-5.4-2.1" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/><circle cx="7.7" cy="10.5" r=".7"/><circle cx="12.3" cy="10.5" r=".7"/></svg>`,
  email: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="1.4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4.2 7 7.8 6.2L19.8 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.49-6.932Zm-1.29 19.494h2.039L6.486 3.24H4.298L17.61 20.647Z" fill="currentColor"/></svg>`,
};

const randomGlyphs = "01_/-+<>[]{}#%@EROSION";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

renderNavigation();
renderSocialLinks();
markRevealTargets();
setupPreloader();
setupDecodeObservers();
setupScrollState();
setupMobileMenu();
setupCursor();
setupMagneticLinks();
setupClock();
setupGlitchPulse();
setupVideoFallback();
setupMobileFooterVideo();
setupPhotoCarousel();
setupContactConsole();
setupThemeMode();
setupBioLangToggle();
setupLightbox();

function renderNavigation() {
  const desktopNav = document.querySelector("#desktopNav");
  const mobileNav = document.querySelector("#mobileNav");

  for (const item of NAV_ITEMS) {
    const node = createNavItem(item);
    desktopNav?.append(node);
    mobileNav?.append(createNavItem(item));
  }
}

function createNavItem(item) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.className = `nav-link${item.nav === "home" ? " is-active" : ""}`;
  anchor.href = item.href;
  if (/^https?:/.test(item.href)) { anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; }
  anchor.dataset.nav = item.nav;
  anchor.dataset.magnetic = "";
  anchor.setAttribute("aria-label", item.text);
  anchor.innerHTML = `
    <span class="nav-link__index">${item.index}</span>
    <span class="nav-logo-rail" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="nav-link__label" aria-hidden="true">${renderSegmentedLabel(item.label)}</span>
    <span class="sr-only">${item.text}</span>
    <span class="nav-link__arrow" aria-hidden="true"></span>
  `;
  li.append(anchor);
  return li;
}

function renderSegmentedLabel(label) {
  return label
    .split("")
    .map((char) => {
      const safeChar = char === " " ? "&nbsp;" : char;
      return `<span class="nav-glyph" data-char="${char}">${safeChar}</span>`;
    })
    .join("");
}

function renderSocialLinks() {
  const socialGrid = document.querySelector("#socialGrid");
  if (!socialGrid) return;

  SOCIAL_LINKS.forEach((item, index) => {
    const li = document.createElement("li");
    const coord = `0${index + 1}/${item.platform.toUpperCase()}`;
    const external = /^https?:/.test(item.href) ? ' target="_blank" rel="noopener noreferrer"' : "";
    li.innerHTML = `
      <a
        class="social-link"
        href="${item.href}"
        data-platform="${item.platform}"
        data-coord="${coord}"
        data-magnetic
        aria-label="${item.label}"${external}
      >
        <span class="social-link__icon">${SOCIAL_ICONS[item.platform] || ""}</span>
        <span class="social-link__label">
          <strong data-decode="${item.label}">${item.label}</strong>
          <span>${item.meta}</span>
        </span>
      </a>
    `;
    socialGrid.append(li);
  });
}

function markRevealTargets() {
  document
    .querySelectorAll(".about__header, .about__bio, .about__image-panel, .keyword-strip li, .release__meta, .release__cover, .footer__top, .social-grid")
    .forEach((element) => {
      element.dataset.reveal = "";
    });
}

function setupPreloader() {
  const preloader = document.querySelector("#preloader");
  const percent = document.querySelector("#loadPercent");
  const bar = document.querySelector("#loadBar");
  const fallback = preloader?.querySelector(".preloader__fallback");

  if (!preloader || reduceMotion || sessionStorage.getItem("slow-erosion-intro-seen") === "true") {
    preloader?.classList.add("is-hidden");
    document.body.classList.add("is-loaded");
    return;
  }

  fallback?.setAttribute("data-text", fallback.textContent.trim());
  maybeAttachIntroVideo();

  let value = 0;
  const duration = 2300;
  const started = performance.now();

  const tick = (now) => {
    const progress = clamp((now - started) / duration);
    value = Math.floor(progress * 100);
    if (percent) percent.textContent = String(value).padStart(2, "0");
    if (bar) bar.style.width = `${value}%`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      sessionStorage.setItem("slow-erosion-intro-seen", "true");
      preloader.classList.add("is-exiting");
      window.setTimeout(() => {
        preloader.classList.add("is-hidden");
        document.body.classList.add("is-loaded");
        decodeAllVisibleText();
      }, 720);
    }
  };

  requestAnimationFrame(tick);
}

async function maybeAttachIntroVideo() {
  const video = document.querySelector("#introVideo");
  if (!video || window.location.protocol === "file:") return;

  const sources = [
    { src: ASSETS.introVideo.webm, type: "video/webm" },
    { src: ASSETS.introVideo.mp4, type: "video/mp4" },
  ];

  for (const source of sources) {
    try {
      const response = await fetch(source.src, { method: "HEAD" });
      if (!response.ok) continue;
      const node = document.createElement("source");
      node.src = source.src;
      node.type = source.type;
      video.append(node);
      video.classList.remove("is-empty");
      video.play().catch(() => undefined);
      break;
    } catch {
      break;
    }
  }
}

function setupDecodeObservers() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

  const decodeObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        decodeElement(entry.target);
        decodeObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.32 },
  );

  document.querySelectorAll("[data-decode]").forEach((element) => decodeObserver.observe(element));
}

function decodeAllVisibleText() {
  document.querySelectorAll(".hero [data-decode]").forEach((element, index) => {
    window.setTimeout(() => decodeElement(element), index * 45);
  });
}

function decodeElement(element) {
  if (reduceMotion || element.dataset.decoded === "true") return;

  const original = element.dataset.decode || element.textContent;
  const isLong = original.length > 90;
  let frame = 0;
  const total = isLong ? 34 : 18;
  element.dataset.decoded = "true";

  const interval = window.setInterval(() => {
    const settled = Math.floor((frame / total) * original.length);
    const next = original
      .split("")
      .map((char, index) => {
        if (char === " " || char === "\n") return char;
        if (index < settled) return char;
        return randomGlyphs[Math.floor(Math.random() * randomGlyphs.length)];
      })
      .join("");

    element.textContent = next;
    frame += 1;

    if (frame > total) {
      window.clearInterval(interval);
      element.textContent = original;
      if (element.classList.contains("glitch-title")) {
        element.dataset.text = original;
      }
    }
  }, isLong ? 28 : 34);
}

function setupScrollState() {
  const root = document.documentElement;
  const corrosion = document.querySelector(".corrosion");
  const sections = document.querySelectorAll("[data-section]");
  const navLinks = document.querySelectorAll(".nav-link");
  let ticking = false;

  const update = () => {
    ticking = false;

    if (corrosion) {
      const rect = corrosion.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = clamp((-rect.top) / Math.max(travel, 1));
      root.style.setProperty("--corrode", progress.toFixed(4));
    }

    let current = "home";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.42 && rect.bottom >= window.innerHeight * 0.28) {
        current = section.id || "home";
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === `#${current}`);
    });
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobileMenu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    menu.setAttribute("aria-hidden", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menu.setAttribute("aria-hidden", String(!isOpen));

    if (isOpen) {
      menu.querySelectorAll("[data-decode]").forEach((element, index) => {
        element.dataset.decoded = "false";
        window.setTimeout(() => decodeElement(element), index * 80);
      });
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupCursor() {
  if (reduceMotion || isCoarsePointer) return;

  const ring = document.querySelector(".cursor:not(.cursor--dot)");
  const dot = document.querySelector(".cursor--dot");
  if (!ring || !dot) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  const loop = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);

  document.addEventListener("pointerover", (event) => {
    if (event.target.closest("a, button, [data-magnetic]")) {
      document.body.classList.add("is-hovering");
    }
  });

  document.addEventListener("pointerout", (event) => {
    if (event.target.closest("a, button, [data-magnetic]")) {
      document.body.classList.remove("is-hovering");
    }
  });
}

function setupMagneticLinks() {
  if (reduceMotion || isCoarsePointer) return;

  document.addEventListener("pointermove", (event) => {
    const target = event.target.closest("[data-magnetic]");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate3d(${x * 0.08}px, ${y * 0.12}px, 0)`;
  });

  document.addEventListener("pointerout", (event) => {
    const target = event.target.closest("[data-magnetic]");
    if (!target) return;
    target.style.transform = "";
  });
}

function setupClock() {
  const clock = document.querySelector("#systemClock");
  if (!clock) return;

  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const update = () => {
    clock.textContent = `${formatter.format(new Date()).replace(",", "")} CST`;
  };

  update();
  window.setInterval(update, 1000);
}

function setupGlitchPulse() {
  if (reduceMotion) return;
  const targets = [...document.querySelectorAll(".glitch-title")];
  if (!targets.length) return;

  window.setInterval(() => {
    const target = targets[Math.floor(Math.random() * targets.length)];
    if (!target) return;
    target.classList.add("is-glitching");
    window.setTimeout(() => target.classList.remove("is-glitching"), 520);
  }, 4600);
}

function setupVideoFallback() {
  const video = document.querySelector("#heroVideo");
  if (!video) return;

  const mq = window.matchMedia("(max-width: 900px)");

  const applySource = (isMobile) => {
    const src = isMobile ? ASSETS.heroVideo.mobile : ASSETS.heroVideo.mp4;
    const source = video.querySelector("source");
    if (source) {
      if (source.src.endsWith(src)) return;
      source.src = src;
    } else {
      const s = document.createElement("source");
      s.src = src;
      s.type = "video/mp4";
      video.append(s);
    }
    video.load();
    video.play().catch(() => {});
  };

  applySource(mq.matches);
  mq.addEventListener("change", (e) => applySource(e.matches));

  video.addEventListener("error", () => {
    video.style.display = "none";
    document.querySelector(".hero")?.classList.add("hero--poster-only");
  });
}

function setupMobileFooterVideo() {
  const video = document.querySelector("#mobileFooterVideo");
  if (!video || reduceMotion) return;

  const query = window.matchMedia("(max-width: 900px)");

  const loadSource = () => {
    if (video.dataset.loaded) return;

    const source = document.createElement("source");
    source.src = ASSETS.mobileFooterVideo.mp4;
    source.type = "video/mp4";
    video.append(source);
    video.dataset.loaded = "true";
    video.load();
  };

  const syncVideo = () => {
    if (query.matches) {
      loadSource();
      video.play?.().catch(() => undefined);
      return;
    }

    video.pause?.();
  };

  syncVideo();

  if (query.addEventListener) {
    query.addEventListener("change", syncVideo);
  } else {
    query.addListener?.(syncVideo);
  }
}

function setupPhotoCarousel() {
  const carousel = document.querySelector("#photoCarousel");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(".photo-slide")];
  const dotsHost = carousel.querySelector("#photoDots");
  const indexLabel = carousel.querySelector("#photoIndex");
  const totalLabel = carousel.querySelector("#photoTotal");
  if (slides.length < 2) return;

  let active = 0;
  let timer = null;
  const interval = 7000;

  if (totalLabel) totalLabel.textContent = String(slides.length).padStart(2, "0");

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "photo-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Live photo ${i + 1}`);
    dot.addEventListener("click", () => {
      goTo(i);
      restart();
    });
    dotsHost?.append(dot);
    return dot;
  });

  const goTo = (next) => {
    active = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === active));
    dots.forEach((dot, i) => dot.setAttribute("aria-selected", String(i === active)));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
    if (indexLabel) indexLabel.textContent = String(active + 1).padStart(2, "0");
  };

  const restart = () => {
    if (reduceMotion) return;
    window.clearInterval(timer);
    timer = window.setInterval(() => goTo(active + 1), interval);
  };

  goTo(0);
  restart();

  // prev / next buttons
  carousel.querySelector("#photoPrev")?.addEventListener("click", () => { goTo(active - 1); restart(); });
  carousel.querySelector("#photoNext")?.addEventListener("click", () => { goTo(active + 1); restart(); });

  // keyboard arrows when carousel is focused/hovered
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  { goTo(active - 1); restart(); }
    if (e.key === "ArrowRight") { goTo(active + 1); restart(); }
  });

  // touch / pointer swipe
  let touchStartX = 0;
  const viewport = carousel.querySelector(".photo-carousel__viewport");
  viewport?.addEventListener("pointerdown", (e) => { touchStartX = e.clientX; });
  viewport?.addEventListener("pointerup", (e) => {
    const dx = e.clientX - touchStartX;
    if (Math.abs(dx) < 36) return;
    goTo(dx < 0 ? active + 1 : active - 1);
    restart();
  });

  carousel.addEventListener("pointerenter", () => window.clearInterval(timer));
  carousel.addEventListener("pointerleave", restart);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearInterval(timer);
    else restart();
  });
}

function setupContactConsole() {
  const wechatWindow = document.querySelector("#wechatWindow");
  const storeWindow = document.querySelector("#storeWindow");
  const messageForm = document.querySelector("#messageForm");
  const messageStatus = document.querySelector("#messageStatus");

  const openWechat = () => {
    if (!wechatWindow) return;
    wechatWindow.classList.add("is-open");
    wechatWindow.setAttribute("aria-hidden", "false");
    wechatWindow.querySelector("[data-close-wechat]")?.focus();
  };

  const closeWechat = () => {
    if (!wechatWindow) return;
    wechatWindow.classList.remove("is-open");
    wechatWindow.setAttribute("aria-hidden", "true");
  };

  const openStore = () => {
    if (!storeWindow) return;
    storeWindow.classList.add("is-open");
    storeWindow.setAttribute("aria-hidden", "false");
    storeWindow.querySelector("[data-close-store]")?.focus();
  };

  const closeStore = () => {
    if (!storeWindow) return;
    storeWindow.classList.remove("is-open");
    storeWindow.setAttribute("aria-hidden", "true");
  };

  document.addEventListener("click", (event) => {
    const wechatTrigger = event.target.closest("[data-open-wechat], .social-link[data-platform='wechat']");
    if (wechatTrigger) {
      event.preventDefault();
      openWechat();
      return;
    }

    const storeTrigger = event.target.closest("[data-nav='store']");
    if (storeTrigger) {
      event.preventDefault();
      openStore();
      return;
    }

    if (event.target.closest("[data-close-wechat]") || event.target === wechatWindow) {
      closeWechat();
    }

    if (event.target.closest("[data-close-store]") || event.target === storeWindow) {
      closeStore();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeWechat();
      closeStore();
    }
  });

  messageForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(messageForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      page: window.location.href,
    };

    if (!payload.message) {
      if (messageStatus) messageStatus.textContent = "MESSAGE FIELD REQUIRED.";
      return;
    }

    if (messageStatus) messageStatus.textContent = "SENDING TO BACKSTAGE...";

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Message endpoint failed");
      messageForm.reset();
      if (messageStatus) messageStatus.textContent = "MESSAGE SAVED.";
    } catch {
      const fallback = JSON.parse(localStorage.getItem("slow-erosion-message-drafts") || "[]");
      fallback.push({ ...payload, createdAt: new Date().toISOString() });
      localStorage.setItem("slow-erosion-message-drafts", JSON.stringify(fallback.slice(-20)));
      if (messageStatus) messageStatus.textContent = "LOCAL DRAFT SAVED. BACKSTAGE OFFLINE.";
    }
  });
}

function setupThemeMode() {
  const toggle = document.querySelector("#modeToggle");
  const label = toggle?.querySelector(".mode-toggle__label");
  const storedTheme = localStorage.getItem("slow-erosion-theme");
  const initialTheme = storedTheme === "day" ? "day" : "night";

  applyTheme(initialTheme);

  toggle?.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "day" ? "night" : "day";
    applyTheme(nextTheme);
    localStorage.setItem("slow-erosion-theme", nextTheme);
  });

  function applyTheme(theme) {
    document.body.dataset.theme = theme;
    if (label) label.textContent = theme === "day" ? "DAY" : "NIGHT";
    toggle?.setAttribute("aria-label", theme === "day" ? "Switch to night mode" : "Switch to day mode");
    const moon = toggle?.querySelector(".mode-icon--moon");
    const sun = toggle?.querySelector(".mode-icon--sun");
    if (moon) moon.style.display = theme === "day" ? "none" : "";
    if (sun) sun.style.display = theme === "day" ? "" : "none";
  }
}

function setupBioLangToggle() {
  const btn = document.getElementById("bioLangToggle");
  const cn = document.querySelector(".about__bio-cn");
  const en = document.querySelector(".about__bio-en");
  if (!btn || !cn || !en) return;

  let lang = "zh";
  let busy = false;

  btn.addEventListener("click", () => {
    if (busy) return;
    busy = true;

    const current = lang === "zh" ? cn : en;
    const next = lang === "zh" ? en : cn;
    lang = lang === "zh" ? "en" : "zh";

    const labelCurrent = btn.querySelector(".bio-lang-btn__current");
    const labelOther = btn.querySelector(".bio-lang-btn__other");

    current.classList.add("is-leaving");

    setTimeout(() => {
      current.classList.add("is-hidden");
      current.classList.remove("is-leaving");

      next.style.opacity = "0";
      next.style.transform = "translateY(0.6rem)";
      next.classList.remove("is-hidden");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.style.transition = "opacity 320ms ease, transform 320ms ease";
          next.style.opacity = "";
          next.style.transform = "";
          setTimeout(() => {
            next.style.transition = "";
            busy = false;
          }, 320);
        });
      });

      labelCurrent.textContent = lang === "zh" ? "中文" : "ENG";
      labelOther.textContent = lang === "zh" ? "ENG" : "中文";
    }, 280);

    labelCurrent.textContent = lang === "zh" ? "中文" : "ENG";
    labelOther.textContent = lang === "zh" ? "ENG" : "中文";
  });

  btn.querySelector(".bio-lang-btn__current").textContent = "中文";
  btn.querySelector(".bio-lang-btn__other").textContent = "ENG";
}

function setupLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbClose = document.getElementById("lightboxClose");
  const lbPrev = document.getElementById("lightboxPrev");
  const lbNext = document.getElementById("lightboxNext");
  const lbIndex = document.getElementById("lightboxIndex");
  const lbCaption = document.getElementById("lightboxCaption");
  if (!lb) return;

  let images = [];
  let current = 0;

  function buildImageList() {
    images = [];
    document.querySelectorAll(".photo-card img, .photo-slide img").forEach(img => {
      const src = img.src;
      const webpSource = img.closest("picture")?.querySelector("source[type='image/webp']")?.srcset;
      const alt = img.alt || "";
      const caption = img.closest("figcaption")
        ? Array.from(img.closest("figure")?.querySelectorAll("figcaption span") || []).map(s => s.textContent).join(" — ")
        : alt;
      if (src && !images.some(i => i.src === src)) {
        images.push({ src: webpSource || src, alt, caption });
      }
    });
  }

  function open(index) {
    buildImageList();
    current = ((index % images.length) + images.length) % images.length;
    show(current);
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }

  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function show(index) {
    const item = images[index];
    if (!item) return;
    lbImg.classList.add("is-loading");
    lbImg.onload = () => lbImg.classList.remove("is-loading");
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
    lbCaption.textContent = item.caption;
    lbPrev.style.display = images.length < 2 ? "none" : "";
    lbNext.style.display = images.length < 2 ? "none" : "";
  }

  document.addEventListener("click", e => {
    const card = e.target.closest(".photo-card, .photo-slide");
    if (!card) return;
    buildImageList();
    const img = card.querySelector("img");
    const idx = images.findIndex(i => i.alt === img?.alt || i.src.includes(img?.src?.split("/").pop()?.split("?")[0]));
    open(idx >= 0 ? idx : 0);
  });

  lbClose.addEventListener("click", close);
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  lbPrev.addEventListener("click", () => { current = (current - 1 + images.length) % images.length; show(current); });
  lbNext.addEventListener("click", () => { current = (current + 1) % images.length; show(current); });

  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") { current = (current - 1 + images.length) % images.length; show(current); }
    if (e.key === "ArrowRight") { current = (current + 1) % images.length; show(current); }
  });

  let touchStartX = 0;
  lb.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 48) {
      current = dx < 0 ? (current + 1) % images.length : (current - 1 + images.length) % images.length;
      show(current);
    }
  });
}
