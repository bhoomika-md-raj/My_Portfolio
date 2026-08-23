/* ============================================================
   RENDER ENGINE — reads window content from content.js and
   draws every section. You shouldn't need to edit this file;
   change content.js instead.
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderHero() {
  $("#hero-name").textContent = PORTFOLIO.name;
  $("#hero-role").textContent = PORTFOLIO.role + " · " + PORTFOLIO.location;
  $("#hero-tagline").textContent = PORTFOLIO.tagline;

  const avatar = $("#avatar");
  if (PORTFOLIO.photo) {
    avatar.innerHTML = `<img src="${PORTFOLIO.photo}" alt="${PORTFOLIO.name}">`;
  } else {
    avatar.textContent = initials(PORTFOLIO.name);
  }

  $("#linkedin-btn").href = PORTFOLIO.linkedin;
  $("#github-btn").href = PORTFOLIO.github;
  $("#email-btn").href = `mailto:${PORTFOLIO.email}`;

  const resumeBtn = $("#resume-btn");
  if (PORTFOLIO.resumeUrl) {
    resumeBtn.href = PORTFOLIO.resumeUrl;
    resumeBtn.style.display = "inline-flex";
  } else {
    resumeBtn.style.display = "none";
  }

  const vitalsEl = $("#vitals");
  vitalsEl.innerHTML = PORTFOLIO.vitals.map(v => `
    <div class="vital">
      <div class="num">${v.value}</div>
      <div class="lbl">${v.label}</div>
      <div class="note">${v.note}</div>
    </div>`).join("");
}

function renderAbout() {
  $("#about-summary").textContent = PORTFOLIO.summary;
  $("#soft-skills").innerHTML = PORTFOLIO.softSkills.map(s => `<span class="pill">${s}</span>`).join("");

  $("#experience").innerHTML = PORTFOLIO.experience.map(e => `
    <div class="exp-card">
      <h4>${e.role}</h4>
      <div class="meta">${e.org} &nbsp;·&nbsp; ${e.period}</div>
      <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderWorks() {
  const grid = $("#works-grid");
  if (!PORTFOLIO.works || !PORTFOLIO.works.length) {
    grid.closest("section").style.display = "none";
    return;
  }
  grid.innerHTML = PORTFOLIO.works.map(w => `
    <div class="work-card">
      <div class="work-thumb">
        ${w.image ? `<img src="${w.image}" alt="${w.title}">` : `<span class="work-placeholder">＋</span>`}
      </div>
      <div class="work-title">${w.title}</div>
      <div class="work-category">${w.category || ""}</div>
    </div>`).join("");
}

function renderProjects() {
  const flagship = PORTFOLIO.projects.find(p => p.flagship);
  const rest = PORTFOLIO.projects.filter(p => !p.flagship);

  const flagshipEl = $("#flagship-project");
  if (flagship) {
    flagshipEl.innerHTML = `
      <span class="tag">Flagship Project</span>
      <h3>${flagship.name}</h3>
      <div class="meta">${flagship.period}</div>
      <p class="summary">${flagship.summary}</p>
      <div class="role"><b>My role — </b>${flagship.role}</div>
      <div class="tools">${flagship.tools.map(t => `<span>${t}</span>`).join("")}</div>
      ${flagship.extra ? `<div class="extra">${flagship.extra}</div>` : ""}
      ${flagship.link ? `<a class="project-link" style="color:#fff;margin-top:14px" href="${flagship.link}" target="_blank" rel="noopener">View project →</a>` : ""}
    `;
  } else {
    flagshipEl.style.display = "none";
  }

  $("#project-grid").innerHTML = rest.map(p => `
    <div class="project card">
      <h3>${p.name}</h3>
      <div class="meta">${p.period}</div>
      <p class="summary">${p.summary}</p>
      <div class="role"><b>My role — </b>${p.role}</div>
      <div class="tools">${p.tools.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ""}
    </div>`).join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = Object.entries(PORTFOLIO.skills).map(([group, items]) => `
    <div class="skill-group">
      <h4>${group}</h4>
      <div class="tools">${items.map(i => `<span>${i}</span>`).join("")}</div>
    </div>`).join("");
}

function renderEducation() {
  $("#education-list").innerHTML = PORTFOLIO.education.map(e => `
    <div class="edu-item">
      <div class="row">
        <h4>${e.degree}</h4>
        <span class="score">${e.score}</span>
      </div>
      <div class="inst">${e.institution}</div>
      <div class="board">${e.board}</div>
      <div class="period">${e.period}</div>
    </div>`).join("");
}

function renderCerts() {
  $("#certs-list").innerHTML = PORTFOLIO.certifications.map(c => `
    <div class="list-card">
      <h4>${c.name}</h4>
      ${c.issuer ? `<div class="issuer">${c.issuer}</div>` : ""}
      <div class="date">${c.date}</div>
    </div>`).join("");
}

function renderAchievements() {
  $("#achievements-list").innerHTML = PORTFOLIO.achievements.map((a, i) => `
    <div class="achievement-card">
      <div class="achievement-icon">🏆</div>
      <div class="achievement-body">
        <div class="achievement-index">Award ${String(i + 1).padStart(2, "0")}</div>
        <h4>${a.title}</h4>
        <div class="note">${a.note}</div>
      </div>
    </div>`).join("");

  $("#activities-list").innerHTML = PORTFOLIO.activities.map(a => `
    <div class="list-card">
      <h4>${a.title}</h4>
      <div class="note">${a.note}</div>
    </div>`).join("");
}

function renderLanguages() {
  const max = 3; // Native = full bar
  const levelScore = { "Native": 3, "Competent": 2.4, "Intermediate": 1.6, "Basic": 1 };
  $("#languages-list").innerHTML = PORTFOLIO.languages.map(l => `
    <div class="lang-row">
      <div class="name">${l.name}</div>
      <div class="lang-bar"><span style="width:${((levelScore[l.level] || 2) / max) * 100}%"></span></div>
      <div class="level">${l.level}</div>
    </div>`).join("");
}

function renderContact() {
  $("#footer-name").textContent = PORTFOLIO.name;
  $("#year").textContent = new Date().getFullYear();

  const icons = {
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L7.9 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c1 .3 2 .5 3 .6a2 2 0 011.7 2z"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  $("#contact-grid").innerHTML = `
    <a class="contact-card" href="mailto:${PORTFOLIO.email}">
      ${icons.mail}
      <div><div class="lbl">Email</div><div class="val">${PORTFOLIO.email}</div></div>
    </a>
    <a class="contact-card" href="${PORTFOLIO.linkedin}" target="_blank" rel="noopener">
      ${icons.linkedin}
      <div><div class="lbl">LinkedIn</div><div class="val">${PORTFOLIO.linkedin.replace("https://", "")}</div></div>
    </a>
    <a class="contact-card" href="${PORTFOLIO.github}" target="_blank" rel="noopener">
      ${icons.github}
      <div><div class="lbl">GitHub</div><div class="val">${PORTFOLIO.github.replace("https://", "")}</div></div>
    </a>
    ${PORTFOLIO.phone ? `
    <a class="contact-card" href="tel:${PORTFOLIO.phone}">
      ${icons.phone}
      <div><div class="lbl">Phone</div><div class="val">${PORTFOLIO.phone}</div></div>
    </a>` : ""}
    <div class="contact-card" style="cursor:default">
      ${icons.pin}
      <div><div class="lbl">Location</div><div class="val">${PORTFOLIO.location}</div></div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${PORTFOLIO.name} — Portfolio`;
  renderHero();
  renderAbout();
  renderWorks();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCerts();
  renderAchievements();
  renderLanguages();
  renderContact();
});
