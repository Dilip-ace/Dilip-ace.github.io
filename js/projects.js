/**
 * Projects Data & Interactive Filtering Logic
 */

const projectsData = [
  {
    id: 'toxic-comment-publication',
    title: 'Comment Toxicity Detector & Cyberbullying Risk Assessment',
    category: 'ai',
    badgeText: 'Published Paper',
    bannerIcon: '📜',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(244, 63, 94, 0.2) 100%)',
    summary: 'Published research publication & Machine Learning model implementing NLP and multi-label classifiers to detect online cyberbullying and score comment toxicity.',
    tags: ['Published Research', 'Python', 'NLP', 'TF-IDF', 'Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/Dilip-ace/toxic-comment',
    demoUrl: 'https://github.com/Dilip-ace/toxic-comment#readme',
    details: {
      overview: 'Published paper: "Automated detection and Risk Assessment of Cyberbullying by Implementation of a Comment Toxicity Detector". An end-to-end Machine Learning pipeline that identifies malicious, threatening, and toxic speech in online forums.',
      features: [
        'Multi-label classification targeting severe toxicity, threats, and insults',
        'Advanced text preprocessing (tokenization, regex cleaning, lemmatization)',
        'TF-IDF n-gram feature extraction vectors',
        'ROC-AUC performance benchmarking and confusion matrix validation'
      ],
      challenge: 'Overcoming massive data skew where non-toxic interactions drastically outnumbered offensive comments.'
    }
  },
  {
    id: 'decor-urge',
    title: 'Decor Urge — Interior Design Hub',
    category: 'fullstack',
    badgeText: 'Microsoft / Azure',
    bannerIcon: '🏡',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(14, 165, 233, 0.2) 100%)',
    summary: 'Full-stack interior design platform built during the Microsoft Future Ready Talent program and hosted live on Microsoft Azure Static Web Apps.',
    tags: ['Microsoft Azure', 'HTML5', 'CSS3', 'JavaScript', 'Cloud Deployment'],
    githubUrl: 'https://github.com/Dilip-ace/decor-urge',
    demoUrl: 'https://nice-sea-06270ea10.1.azurestaticapps.net/',
    details: {
      overview: 'Decor Urge connects clients with genuine interior decor options and reasonable pricing estimates. Developed and deployed as the capstone for Microsoft Future Ready Talent.',
      features: [
        'Production cloud deployment using Microsoft Azure Static Web Apps',
        'Automated CI/CD build actions via GitHub integration',
        'Responsive interactive catalog with filtering by room and aesthetic style',
        'Customer inquiry and quotation lead generation workflows'
      ],
      challenge: 'Ensuring ultra-fast page load times for image-heavy interior photography through responsive asset optimization.'
    }
  },
  {
    id: 'cricinfo-extracter',
    title: 'Cricinfo Analytics Extractor',
    category: 'automation',
    badgeText: 'Web Scraping',
    bannerIcon: '🏏',
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)',
    summary: 'Automated data pipeline scraping World Cup cricket matches, parsing dynamic DOM trees, and generating structured Excel sheets for analytical reporting.',
    tags: ['JavaScript', 'Node.js', 'Cheerio.js', 'Excel Export', 'Web Scraping'],
    githubUrl: 'https://github.com/Dilip-ace/Cricinfo-Extracter',
    demoUrl: 'https://github.com/Dilip-ace/Cricinfo-Extracter#readme',
    details: {
      overview: 'Extracts deep match analytics from Cricinfo pages, systematically saving team-by-team match records, player strike rates, and tournament statistics into organized Excel sheets and directory structures.',
      features: [
        'Recursive crawl across tournament match schedules and match reports',
        'Fast server-side DOM selection using Cheerio.js',
        'Automated creation of custom-formatted Excel workbooks',
        'Resilient error handling against network dropouts and varying match structures'
      ],
      challenge: 'Normalizing heterogeneous scorecard formats across washed-out matches, super-overs, and standard matches.'
    }
  },
  {
    id: 'hackerrank-automation',
    title: 'HackerRank Automation Engine',
    category: 'automation',
    badgeText: 'Puppeteer Bot',
    bannerIcon: '🤖',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(14, 165, 233, 0.2) 100%)',
    summary: 'Headless browser automation bot engineered with Puppeteer to authenticate, navigate code challenges, and automate problem submissions.',
    tags: ['Puppeteer', 'Chromium', 'JavaScript', 'Node.js', 'DOM Automation'],
    githubUrl: 'https://github.com/Dilip-ace/Hackerrank-Automation',
    demoUrl: 'https://github.com/Dilip-ace/Hackerrank-Automation#readme',
    details: {
      overview: 'Automates user authentication, challenge list traversal, code editor manipulation, and automated submission evaluation on HackerRank.',
      features: [
        'Headless Chromium navigation through the Puppeteer API',
        'Dynamic credential handling and cookie session preservation',
        'Custom script injection bypassing Monaco editor clipboard restrictions',
        'Real-time CLI feedback and verification logging'
      ],
      challenge: 'Handling asynchronous UI state transitions and non-standard web components on competitive programming websites.'
    }
  },
  {
    id: 'sparks-banking-system',
    title: 'Basic Banking System',
    category: 'fullstack',
    badgeText: 'Internship Project',
    bannerIcon: '🏦',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 100%)',
    summary: 'Full-stack banking web portal developed for The Sparks Foundation featuring dynamic customer account transfers and MySQL transaction logging.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'The Sparks Foundation'],
    githubUrl: 'https://github.com/Dilip-ace/Sparksfoundation_webd-Task-1',
    demoUrl: 'https://github.com/Dilip-ace/Sparksfoundation_webd-Task-1#readme',
    details: {
      overview: 'Engineered during a Web Development internship at The Sparks Foundation to simulate secure electronic fund transfers between customer accounts with atomic database transactions.',
      features: [
        'Relational MySQL database schema tracking accounts, balances, and ledger logs',
        'Instant balance verification before executing transfer transactions',
        'Comprehensive historical transaction audit trail',
        'Responsive layout built for desktop and mobile banking'
      ],
      challenge: 'Ensuring transaction atomicity to guarantee that sender debits and recipient credits occur without balance discrepancies.'
    }
  },
  {
    id: 'stem-away-discourse',
    title: 'Discourse Themes & Plugin Architecture',
    category: 'fullstack',
    badgeText: 'STEM-Away Intern',
    bannerIcon: '🧩',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 100%)',
    summary: 'Collaborative development of custom themes, components, and plugin extensions for Discourse community forum installations.',
    tags: ['Full Stack', 'Discourse', 'JavaScript', 'CSS3', 'Agile Team'],
    githubUrl: 'https://github.com/Dilip-ace',
    demoUrl: 'https://github.com/Dilip-ace',
    details: {
      overview: 'Contributed within a 14-member cross-functional engineering team at STEM-Away to design, build, and deploy custom extensions for open-source Discourse platforms.',
      features: [
        'Custom theme component engineering with Ember.js and modern CSS',
        'Plugin hook implementations extending community engagement features',
        'Cross-browser and responsive testing across devices',
        'Agile team sprint participation and collaborative code reviews'
      ],
      challenge: 'Understanding and extending a large, existing open-source codebase under tight sprint deadlines.'
    }
  }
];

// Initialize Projects Grid
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderProjects(filter = 'all') {
    grid.innerHTML = '';

    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'glass-card project-card';
      card.innerHTML = `
        <div class="project-card-banner" style="background: ${project.gradient}">
          <span class="project-banner-icon">${project.bannerIcon}</span>
          <span class="project-type-tag">${project.badgeText}</span>
        </div>
        <div class="project-card-content">
          <h3 class="project-title">
            <span>${project.title}</span>
          </h3>
          <p class="project-desc">${project.summary}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <button class="btn-details" onclick="openProjectModal('${project.id}')">
            <i class="fa-solid fa-circle-info"></i> View Details
          </button>
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-action-link">
            <span>Source Code</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Initial Render
  renderProjects('all');
}

// Modal Control
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('projectModalBackdrop');
  const modalBody = document.getElementById('modalBody');

  if (!backdrop || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="glass-pill" style="font-size: 0.8rem; color: var(--accent-cyan-light); font-weight: 600;">
        ${project.badgeText}
      </span>
      <h2 style="font-size: 1.85rem; font-weight: 800; margin: 0.5rem 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.6rem;">
        <span>${project.bannerIcon}</span> ${project.title}
      </h2>
      <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.6;">
        ${project.details.overview}
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.65rem;">
        <i class="fa-solid fa-star text-yellow"></i> Key Capabilities & Features
      </h4>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.45rem;">
        ${project.details.features.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.92rem; color: var(--text-secondary);">
            <i class="fa-solid fa-check text-cyan" style="margin-top: 0.25rem;"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem; padding: 1rem 1.25rem; background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan-light); margin-bottom: 0.25rem;">
        <i class="fa-solid fa-lightbulb"></i> Engineering Challenge Solved
      </h4>
      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
        ${project.details.challenge}
      </p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem;">
        Technologies Used
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
        ${project.tags.map(t => `<span class="tag-badge" style="font-size: 0.85rem; padding: 0.3rem 0.7rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm glow-btn">
        <i class="fa-brands fa-github"></i> View GitHub Repo
      </a>
      ${project.demoUrl ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Project Link
        </a>
      ` : ''}
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const backdrop = document.getElementById('projectModalBackdrop');
  if (!backdrop) return;
  backdrop.classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
  initProjects();

  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.getElementById('projectModalBackdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
});
