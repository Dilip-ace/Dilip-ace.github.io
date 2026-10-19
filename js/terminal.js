/**
 * Interactive Developer CLI Terminal for Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');

  if (!terminalForm || !terminalInput || !terminalOutput) return;

  const commands = {
    help: () => `
<div class="system-msg">Available commands:</div>
  <span class="term-command">about</span>        - Brief summary & professional background
  <span class="term-command">skills</span>       - Technical skill matrix & tools
  <span class="term-command">projects</span>     - Key featured software & automation engines
  <span class="term-command">experience</span>   - Work history (Concentrix, Microsoft, STEM-Away)
  <span class="term-command">education</span>    - Degrees & Nanodegrees (MAIT, Udacity)
  <span class="term-command">certs</span>        - Professional industry certifications
  <span class="term-command">paper</span>        - Published research paper details
  <span class="term-command">contact</span>      - Email, phone, LinkedIn & location
  <span class="term-command">clear</span>        - Clear the terminal screen
  <span class="term-command">github</span>       - Open my GitHub profile in a new tab
    `,

    about: () => `
<div class="term-success">👨‍💻 Dilip Kumar — Full-Stack Developer & Automation Specialist</div>
Location: Delhi, India
Degree: B.Tech in Information Technology from Maharaja Agrasen Institute of Technology (MAIT)
Focus: Reactive Web Applications, Headless Browser Automation (Puppeteer), Cloud Architecture (Azure), and Machine Learning.
    `,

    skills: () => `
<div class="term-success">🛠️ Technical Skill Matrix:</div>
  • Languages: JavaScript (ES6+), Python, Java, C++, HTML5, CSS3, PHP
  • Frameworks: Node.js, Express, Puppeteer, React.js, Cheerio.js, Pandas, Scikit-Learn
  • Cloud & Tools: Microsoft Azure, Git, GitHub Actions, Postman, VS Code, Jupyter
  • Domains: Web Scraping, DOM Automation, NLP Classification, Full-Stack Architecture
    `,

    projects: () => `
<div class="term-success">🌟 Highlighted Projects:</div>
  1. <strong>Cricinfo Extractor</strong>: Web scraping engine exporting World Cup stats to Excel.
  2. <strong>HackerRank Automation Bot</strong>: Puppeteer headless bot solving challenges.
  3. <strong>Decor Urge</strong>: Interior design cloud platform hosted on Azure Static Apps.
  4. <strong>Toxic Comment Classifier</strong>: NLP machine learning publication model.
  5. <strong>Banking System</strong>: PHP/MySQL transaction app (Sparks Foundation).
    `,

    experience: () => `
<div class="term-success">💼 Experience & Internships:</div>
  • <strong>Concentrix</strong> — Technical Support II (Apr 2025 - Jan 2026)
    Tier 1 & 2 technical resolution, system troubleshooting, enterprise SLA delivery.
  • <strong>Microsoft</strong> — Future Ready Talent Intern (Mar 2022 - May 2022)
    Azure cloud computing, CI/CD GitHub deployment, static web app hosting.
  • <strong>Pepcoding</strong> — Trainee (Aug 2021 - Jul 2022)
    Rigorous algorithms, data structures, and software engineering.
  • <strong>STEM-Away</strong> — Full Stack Intern (Jul 2021 - Aug 2021)
    14-member agile team building plugins, components & themes for Discourse.
  • <strong>The Sparks Foundation</strong> — Web Dev Intern (Jun 2021 - Jul 2021)
    Responsive banking web portal with MySQL relational database.
    `,

    education: () => `
<div class="term-success">🎓 Education:</div>
  • <strong>Maharaja Agrasen Institute of Technology (MAIT), Delhi</strong>
    Bachelor of Technology in Information Technology (2018 - 2022)
  • <strong>Udacity</strong>
    Cloud Architect using Microsoft Azure Nanodegree (2021 - 2022)
  • <strong>Spring Meadows Public School, Delhi</strong>
    Senior Secondary Examination (Non-Medical Science)
    `,

    certs: () => `
<div class="term-success">📜 Industry Certifications:</div>
  • Google IT Automation with Python Professional Certificate
  • Google IT Support Professional Certificate
  • Udacity Cloud Architect using Microsoft Azure Nanodegree
  • Deloitte Technology Consulting Virtual Internship Simulation
  • Microsoft Go-To-Market Asia Virtual Experience Program
  • VMware IT Academy: Network Virtualization Concepts
    `,

    paper: () => `
<div class="term-success">📑 Published Research Paper:</div>
  Title: <em>"Automated detection and Risk Assessment of Cyberbullying by Implementation of a Comment Toxicity Detector"</em>
  Focus: Natural Language Processing, TF-IDF feature extraction, and multi-label toxicity classification to prevent online cyberbullying.
    `,

    contact: () => `
<div class="term-success">📬 Contact Information:</div>
  • Email:    <a href="mailto:dilipkumarmehra100@gmail.com" class="text-cyan">dilipkumarmehra100@gmail.com</a>
  • Phone:    <a href="tel:+919643408670" class="text-cyan">+91 9643408670</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/dilipkumar-" target="_blank" class="text-cyan">linkedin.com/in/dilipkumar-</a>
  • GitHub:   <a href="https://github.com/Dilip-ace" target="_blank" class="text-cyan">github.com/Dilip-ace</a>
  • Location: Delhi, India
    `,

    github: () => {
      window.open('https://github.com/Dilip-ace', '_blank');
      return `<div class="term-success">Opening https://github.com/Dilip-ace in a new window...</div>`;
    },

    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    }
  };

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawInput = terminalInput.value.trim();
    if (!rawInput) return;

    const inputLower = rawInput.toLowerCase();

    // Echo command line
    const cmdEcho = document.createElement('div');
    cmdEcho.className = 'terminal-line';
    cmdEcho.innerHTML = `<span class="terminal-prompt">dilip-ace:~$</span> <span class="term-command">${rawInput}</span>`;
    terminalOutput.appendChild(cmdEcho);

    // Process output
    if (commands[inputLower]) {
      const outputHtml = commands[inputLower]();
      if (outputHtml) {
        const outDiv = document.createElement('div');
        outDiv.className = 'terminal-line';
        outDiv.innerHTML = outputHtml;
        terminalOutput.appendChild(outDiv);
      }
    } else {
      const errDiv = document.createElement('div');
      errDiv.className = 'terminal-line term-error';
      errDiv.innerHTML = `Command not recognized: "${rawInput}". Type <span class="term-command">help</span> for a list of commands.`;
      terminalOutput.appendChild(errDiv);
    }

    terminalInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  });

  // Keep focus on click
  document.getElementById('interactiveTerminal')?.addEventListener('click', () => {
    terminalInput.focus();
  });
});
