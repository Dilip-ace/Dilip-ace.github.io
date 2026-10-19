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
  <span class="term-command">about</span>        - Summary, background & current role
  <span class="term-command">skills</span>       - Data, SQL, Python, Automation & Systems skills
  <span class="term-command">experience</span>   - Full career & internship history
  <span class="term-command">achieve</span>      - Awards, Top 10% rank & operational metrics
  <span class="term-command">education</span>    - B.Tech IT (CGPA: 8.45/10) & Spring Meadows School
  <span class="term-command">certs</span>        - Google, Azure, Microsoft & Deloitte certifications
  <span class="term-command">paper</span>        - Published research paper on comment toxicity
  <span class="term-command">projects</span>     - Key software & data pipelines
  <span class="term-command">leadership</span>   - Campus & student leadership (Internshala, IOSD)
  <span class="term-command">languages</span>    - Spoken language proficiency
  <span class="term-command">contact</span>      - Email, phone, LinkedIn & location
  <span class="term-command">clear</span>        - Clear the terminal screen
  <span class="term-command">github</span>       - Open my GitHub profile in a new tab
    `,

    about: () => `
<div class="term-success">👨‍💻 Dilip Kumar — Production Specialist & Full-Stack Developer</div>
Location: New Delhi, India
Current Role: Production Specialist – Operations at Fusion CX (Jan 2026 – Present)
Previous Role: Technical Support II / Senior Rep at Concentrix Pvt. Ltd. (Top 10% Performer)
Degree: B.Tech in Information Technology from GGSIPU (MAIT) — CGPA: 8.45 / 10
Core Focus: Turning operational and customer data into actionable business insights, SQL analysis, process optimization, and intelligent automation.
    `,

    skills: () => `
<div class="term-success">🛠️ Technical & Analytical Skill Matrix:</div>
  • Data & Analysis: SQL, Advanced Excel & Dashboard Reporting, Data Visualization, Root Cause Analysis, Business Requirements Analysis, Google Sheets
  • Programming & Automation: Python (Automation & Data), Java, C++, JavaScript (ES6+), Puppeteer, Cheerio, Data Structures & Algorithms
  • IT & Systems: Technical Troubleshooting (Tier 1 & 2), Networking Fundamentals, IT Security Basics, Operating Systems, Microsoft Azure
  • Process & Leadership: Process & Workflow Optimization, Escalation Management, SLA/KPI Tracking, Stakeholder Communication
    `,

    experience: () => `
<div class="term-success">💼 Professional Experience & Internships:</div>
  • <strong>Fusion CX</strong> — Production Specialist – Operations (Jan 2026 – Present)
    Studied multi-system customer data pushing FCR >88%; created 25+ walkthroughs; engineered 3 standardized workflows cutting AHT by ~18%; consistently exceeded commercial targets; organized 10+ feedback summaries shaping 2 core product updates.
  • <strong>Concentrix Pvt. Ltd.</strong> — Technical Support II (Apr 2025 – Jan 2026, Gurugram)
    <span class="text-yellow">★ Ranked Top 10% Performer team-wide (CSAT · FCR · AHT)</span>. Resolved 95%+ of escalated Tier-2 tickets; analyzed API logs to cut repeat contacts by ~30%.
  • <strong>Microsoft</strong> — Future Ready Talent Intern (Mar 2022 – May 2022)
    Azure cloud computing, CI/CD GitHub deployment, static web app hosting (Decor Urge).
  • <strong>Pepcoding</strong> — Software Engineering Trainee (Aug 2021 – Jul 2022)
    Advanced data structures, algorithms, recursion, and object-oriented architecture in Java/C++.
  • <strong>STEM-Away</strong> — Full Stack Intern (Jul 2021 – Aug 2021)
    14-member agile engineering team building plugins and themes for Discourse platforms.
  • <strong>The Sparks Foundation</strong> — Web Dev Intern (Jun 2021 – Jul 2021)
    Responsive banking web portal with MySQL relational database.
  • <strong>MedTourEasy</strong> — Data Analyst Intern (Jan 2021 – Feb 2021)
    Healthcare exploratory data analytics & visualization in Python and Google Sheets.
  • <strong>Internshala</strong> — Student Partner ISP-21 (Nov 2020 – Feb 2021)
    Campus leadership, peer outreach campaigns, and digital communication drives.
  • <strong>Leaders For Tomorrow</strong> — Community Member (Aug 2019 – Jan 2021)
    Youth empowerment and community development initiatives.
  • <strong>IOSD MAIT</strong> — Software Developer Society (Aug 2018 – Feb 2020)
    Peer coding hackathons, technical symposiums, and student open-source initiatives.
    `,

    leadership: () => `
<div class="term-success">🤝 Campus & Community Leadership:</div>
  • <strong>Internshala Student Partner (ISP-21)</strong> (Nov 2020 – Feb 2021): Campus ambassador driving career awareness and peer skill workshops.
  • <strong>Leaders For Tomorrow</strong> (Aug 2019 – Jan 2021): Social impact and youth empowerment initiatives.
  • <strong>IOSD MAIT</strong> (Aug 2018 – Feb 2020): Active member of the software developer society at Maharaja Agrasen Institute of Technology.
    `,

    languages: () => `
<div class="term-success">🌐 Language Proficiencies:</div>
  • <strong>Hindi</strong>: Native or Bilingual
  • <strong>English</strong>: Professional Working Proficiency
    `,

    achieve: () => `
<div class="term-success">🏆 Key Achievements & Impact Metrics:</div>
  • <strong>Top 10% Performer</strong> across CSAT, FCR, and AHT metrics at Concentrix.
  • <strong>8.45 / 10 CGPA</strong> in B.Tech Information Technology from GGSIPU.
  • <strong>>88% First-Contact Resolution</strong> rate achieved at Fusion CX.
  • <strong>~18% Average Handling Time reduction</strong> through custom decision trees.
  • <strong>~30% repeat-contact rate drop</strong> using root-cause API log analysis.
    `,

    education: () => `
<div class="term-success">🎓 Education:</div>
  • <strong>Maharaja Agrasen Institute of Technology (MAIT), GGSIPU, Delhi</strong>
    Bachelor of Technology in Information Technology (2018 – 2022) — <strong>CGPA: 8.45 / 10</strong>
  • <strong>Udacity</strong>
    Cloud Architect using Microsoft Azure Nanodegree (03/2022 – 09/2022)
  • <strong>Spring Meadows Public School, Delhi</strong>
    Senior Secondary Examination (Non-Medical Science)
    `,

    certs: () => `
<div class="term-success">📜 Professional Certifications:</div>
  • Google IT Automation with Python Professional Certificate (Python, Automation, Git, Troubleshooting, SysAdmin)
  • Google IT Support Professional Certificate (Hardware, Networking, OS, SysAdmin, Security)
  • Udacity Cloud Architect using Microsoft Azure Nanodegree
  • Deloitte Technology Consulting Virtual Internship Job Simulation
  • Microsoft Go-To-Market Asia Virtual Experience Program
  • VMware IT Academy: Network Virtualization Concepts
    `,

    paper: () => `
<div class="term-success">📑 Published Research Paper:</div>
  Title: <em>"Automated detection and Risk Assessment of Cyberbullying by Implementation of a Comment Toxicity Detector"</em>
  Focus: Natural Language Processing, TF-IDF feature extraction, and multi-label toxicity classification to prevent online cyberbullying.
    `,

    projects: () => `
<div class="term-success">🌟 Highlighted Projects & Pipelines:</div>
  1. <strong>Comment Toxicity Detector</strong>: Published research ML model for cyberbullying risk assessment.
  2. <strong>Decor Urge</strong>: Interior design web app deployed on Microsoft Azure Static Apps.
  3. <strong>Cricinfo Analytics Extractor</strong>: Web scraping engine exporting World Cup stats to Excel.
  4. <strong>HackerRank Automation Bot</strong>: Puppeteer headless bot solving challenges.
  5. <strong>Basic Banking System</strong>: PHP/MySQL transaction app (Sparks Foundation).
    `,

    contact: () => `
<div class="term-success">📬 Contact Information:</div>
  • Email:    <a href="mailto:dilipkumarmehra100@gmail.com" class="text-cyan">dilipkumarmehra100@gmail.com</a>
  • Phone:    <a href="tel:+919643408670" class="text-cyan">+91 9643408670</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/dilipkumar-" target="_blank" class="text-cyan">linkedin.com/in/dilipkumar-</a>
  • GitHub:   <a href="https://github.com/Dilip-ace" target="_blank" class="text-cyan">github.com/Dilip-ace</a>
  • Location: New Delhi, India
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
