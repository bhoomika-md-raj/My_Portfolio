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

/* ---------- ECG path used in hero + section dividers ---------- */
function ecgUnit(offsetX) {
  const x = offsetX;
  return `M${x},20 L${x+16},20 L${x+20},12 L${x+24},28 L${x+28},4 L${x+32},32 L${x+36},20 L${x+50},20 L${x+56},14 L${x+62},20 L${x+100},20`;
}
function ecgPath(repeats) {
  let d = "";
  for (let i = 0; i < repeats; i++) d += ecgUnit(i * 100) + " ";
  return d.trim();
}
function ecgSVG(repeats, height = 40) {
  return `<svg viewBox="0 0 ${repeats * 100} ${height}" preserveAspectRatio="none">
    <path d="${ecgPath(repeats)}" />
  </svg>`;
}

function renderHero() {
  $("#hero-status-name").textContent = PORTFOLIO.name.split(" ")[0].toUpperCase();
  $("#hero-name").textContent = PORTFOLIO.name;
  $("#hero-role").textContent = PORTFOLIO.role + " · " + PORTFOLIO.location;
  $("#hero-tagline").textContent = PORTFOLIO.tagline;

  const avatar = $("#avatar");
  if (PORTFOLIO.photo) {
    avatar.innerHTML = `<img src="${PORTFOLIO.photo}" alt="${PORTFOLIO.name}">`;
  } else {
    avatar.textContent = initials(PORTFOLIO.name);
  }

  const resumeBtn = $("#resume-btn");
  if (PORTFOLIO.resumeUrl) {
    resumeBtn.href = PORTFOLIO.resumeUrl;
    resumeBtn.style.display = "inline-flex";
  } else {
    resumeBtn.style.display = "none";
  }

  $("#hero-ecg-track").innerHTML = ecgSVG(14, 40);

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
  $("#achievements-list").innerHTML = PORTFOLIO.achievements.map(a => `
    <div class="list-card">
      <h4>${a.title}</h4>
      <div class="note">${a.note}</div>
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

  $("#contact-grid").innerHTML = `
    <a class="contact-card" href="mailto:${PORTFOLIO.email}">
      <div class="lbl">Email</div><div class="val">${PORTFOLIO.email}</div>
    </a>
    <a class="contact-card" href="${PORTFOLIO.linkedin}" target="_blank" rel="noopener">
      <div class="lbl">LinkedIn</div><div class="val">${PORTFOLIO.linkedin.replace("https://", "")}</div>
    </a>
    <a class="contact-card" href="${PORTFOLIO.github}" target="_blank" rel="noopener">
      <div class="lbl">GitHub</div><div class="val">${PORTFOLIO.github.replace("https://", "")}</div>
    </a>
    ${PORTFOLIO.phone ? `
    <a class="contact-card" href="tel:${PORTFOLIO.phone}">
      <div class="lbl">Phone</div><div class="val">${PORTFOLIO.phone}</div>
    </a>` : ""}
    <div class="contact-card" style="cursor:default">
      <div class="lbl">Location</div><div class="val">${PORTFOLIO.location}</div>
    </div>
  `;
}

function renderDividers() {
  document.querySelectorAll(".ecg-rule").forEach(elm => {
    elm.innerHTML = ecgSVG(12, 34);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${PORTFOLIO.name} — Portfolio`;
  renderHero();
  renderAbout();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCerts();
  renderAchievements();
  renderLanguages();
  renderContact();
  renderDividers();
});
