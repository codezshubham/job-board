export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "how-to-apply-for-government-jobs",
    title: "How to apply for government jobs",
    category: "Government Jobs",
    readTime: "6 min read",
    excerpt:
      "A practical guide to understanding notifications, checking eligibility, organizing documents, and applying safely through official government portals.",
    intro:
      "Government jobs attract a huge number of candidates because they are often associated with job security, structured benefits, and long-term stability. At the same time, the application process can feel confusing if you are new to it. Each recruitment notice may have different rules, documents, deadlines, and exam stages. The best way to approach government applications is to stay organized, follow the official notification carefully, and avoid rushing at the last minute.",
    sections: [
      {
        heading: "Start with the official notification",
        paragraphs: [
          "The official notification is the most important document in any government recruitment process. It explains who can apply, how selection works, what fees are required, and what documents you must upload. Many candidates make mistakes because they rely only on social media posts or short summaries instead of reading the original notice.",
          "Before filling the form, take time to understand the post name, department, number of vacancies, age rules, educational qualifications, salary level, and exam pattern. If anything is unclear, revisit the notification rather than guessing.",
        ],
        bullets: [
          "Check the eligibility criteria carefully, especially age limits, degree requirements, and category-based relaxations.",
          "Read the schedule for registration, fee payment, admit card release, exam dates, and result announcements.",
          "Verify whether the application is online only or if any hard-copy submission is also required.",
        ],
      },
      {
        heading: "Prepare your documents in advance",
        paragraphs: [
          "Most government portals ask for scanned documents in specific formats and sizes. If you wait until the final day, even a small upload issue can cause unnecessary stress. Preparing everything earlier gives you time to rename files correctly, resize images, and avoid technical mistakes.",
          "Keep both digital and physical copies of your key documents. That way, if the portal rejects a file or asks for re-upload, you can respond quickly.",
        ],
        bullets: [
          "Passport-size photo and signature in the required format.",
          "Marksheets, certificates, identity proof, and address proof.",
          "Category, disability, or reservation certificates if applicable.",
          "Payment proof and a final copy of the submitted form.",
        ],
      },
      {
        heading: "Fill the form carefully and review every field",
        paragraphs: [
          "Application errors such as wrong spelling, incorrect category, or mismatched dates can create serious issues later during verification. Fill each section slowly and compare your entries against your original documents.",
          "Use only the official recruitment portal or the official website mentioned in the notification. Avoid unknown third-party websites that claim to submit forms on your behalf.",
        ],
        bullets: [
          "Double-check your name, date of birth, mobile number, and email address.",
          "Confirm the post code, location preferences, and reservation details before final submission.",
          "Download the submitted application form and note your registration number immediately.",
        ],
      },
      {
        heading: "Track the next stages after applying",
        paragraphs: [
          "Submitting the form is only the beginning. Many government recruitments involve multiple stages such as written exams, skill tests, document verification, medical checks, or interviews. Missing an update after submission can cost you the opportunity even if your form was accepted.",
          "Create a simple system to track every application. A spreadsheet or notes app can help you record deadlines, admit card dates, exam centers, and official links.",
        ],
        bullets: [
          "Keep checking the official website for corrigenda, exam city slips, and admit card updates.",
          "Save login credentials securely so you can access your application portal later.",
          "Start exam preparation early instead of waiting for the admit card announcement.",
        ],
      },
    ],
  },
  {
    slug: "resume-tips-for-freshers",
    title: "Resume tips for freshers",
    category: "Resume Writing",
    readTime: "5 min read",
    excerpt:
      "Learn how freshers can build a strong one-page resume that highlights skills, projects, internships, and role-specific strengths.",
    intro:
      "A fresher resume does not need years of experience to make a strong impression. What matters more is clarity, relevance, and proof that you can learn, contribute, and communicate well. Recruiters often scan resumes quickly, so your goal is to help them understand who you are, what you know, and why you fit the role within a few seconds.",
    sections: [
      {
        heading: "Keep the structure simple and readable",
        paragraphs: [
          "For most freshers, a one-page resume is enough. Long resumes with unnecessary details can make you look unfocused. Use clean headings and a logical flow so recruiters can scan the page without effort.",
          "Your contact details, education, skills, projects, internships, and certifications should be easy to locate. If the structure is clear, even a simple resume can feel professional.",
        ],
        bullets: [
          "Use a professional email address and current phone number.",
          "Place your strongest section near the top if it is especially relevant to the role.",
          "Avoid heavy graphics, multiple font styles, or cluttered formatting.",
        ],
      },
      {
        heading: "Show proof through projects and internships",
        paragraphs: [
          "Freshers often worry that they have no experience, but academic projects, internships, freelance work, competitions, and volunteering can all demonstrate ability. The key is to describe them in a meaningful way.",
          "Instead of listing a project title alone, explain what problem you solved, what tools you used, and what result you achieved. This gives recruiters something concrete to evaluate.",
        ],
        bullets: [
          "Mention technologies, tools, or methods used in each project.",
          "Add measurable outcomes where possible, such as time saved, users served, or features built.",
          "Prioritize the projects most relevant to the job you are applying for.",
        ],
      },
      {
        heading: "Customize for the job role",
        paragraphs: [
          "A generic resume can work against you because different roles value different strengths. A recruiter hiring for customer support, data analysis, and frontend development will not look for the same signals.",
          "Read the job description and adjust your skills, projects, and summary so the most relevant information stands out. This does not mean inventing experience. It means presenting your real experience in the most helpful order.",
        ],
        bullets: [
          "Match relevant keywords from the job description with your actual skills.",
          "Move the most useful project or internship higher on the page.",
          "Remove sections that do not help the target role.",
        ],
      },
      {
        heading: "Proofread before you send",
        paragraphs: [
          "Small mistakes can reduce trust quickly, especially for freshers. Spelling errors, inconsistent dates, and broken links suggest carelessness even when your skills are strong.",
          "Before sending your resume, review it slowly and, if possible, ask a friend, mentor, or senior to check it once. A second pair of eyes often catches issues you miss.",
        ],
        bullets: [
          "Check grammar, spelling, and punctuation.",
          "Make sure portfolio, GitHub, or LinkedIn links open correctly.",
          "Save the file with a professional name, such as YourName-Resume.pdf.",
        ],
      },
    ],
  },
  {
    slug: "best-websites-for-job-search",
    title: "Best websites for job search",
    category: "Job Search",
    readTime: "5 min read",
    excerpt:
      "A smarter job search combines company career pages, job boards, professional networks, and alerts so you do not miss strong opportunities.",
    intro:
      "Many candidates limit their job search to one or two websites and then wonder why results feel repetitive. The most effective approach is to treat job search as a system rather than a single platform. Different websites serve different purposes: some are best for direct applications, some for networking, and others for specialized roles or fresher hiring.",
    sections: [
      {
        heading: "Use company career pages for direct applications",
        paragraphs: [
          "Company websites are often one of the best sources for reliable openings because they are managed by the employer directly. You are also less likely to apply to outdated listings when you use the official careers page.",
          "If you already know the companies you want to target, bookmark their careers pages and check them regularly. This is especially useful for large organizations and startups that hire continuously.",
        ],
        bullets: [
          "Search for roles on official career portals whenever possible.",
          "Create a shortlist of target companies and review them weekly.",
          "Use the company page to understand culture, locations, and role expectations.",
        ],
      },
      {
        heading: "Combine job boards with professional networks",
        paragraphs: [
          "Job boards help you discover volume, while professional networks help you discover context. A role found on a job board becomes more useful when you also research the team, hiring manager, or company background on networking platforms.",
          "This combination can also help you decide whether a role is still active, how competitive it may be, and whether you can reach out for more clarity.",
        ],
        bullets: [
          "Use job boards to track new listings across categories and locations.",
          "Use professional networks to learn about employees, company updates, and referrals.",
          "Follow recruiters or company pages that regularly post relevant openings.",
        ],
      },
      {
        heading: "Do not ignore niche communities",
        paragraphs: [
          "Some of the best opportunities are shared in smaller communities rather than only on major platforms. Tech groups, design communities, startup forums, alumni groups, and college networks can surface roles with less competition.",
          "These communities also sometimes share hiring tips, referral opportunities, and direct recruiter contacts that are not visible on public boards.",
        ],
        bullets: [
          "Join communities related to your role, location, or industry.",
          "Participate thoughtfully instead of joining only when you need a job.",
          "Track recurring employers or recruiters who post quality opportunities.",
        ],
      },
      {
        heading: "Set alerts and organize your search",
        paragraphs: [
          "Job searching becomes much more manageable when you rely on alerts instead of checking everything manually. Alerts help you respond faster, and organized tracking helps you avoid duplicate applications.",
          "Create a simple tracker with role name, company, date applied, source, status, and next step. That alone can make your process far more disciplined.",
        ],
        bullets: [
          "Set alerts for keywords, experience level, and preferred locations.",
          "Track every application in a spreadsheet or notes app.",
          "Review your results weekly and adjust your search terms if needed.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-campus-placement",
    title: "How to prepare for campus placement",
    category: "Campus Placement",
    readTime: "6 min read",
    excerpt:
      "A complete approach to campus placement preparation, covering aptitude, resume strength, interview readiness, company research, and confidence.",
    intro:
      "Campus placements can move quickly, which is why early preparation makes such a difference. The students who perform well are not always the most naturally confident. Often, they are the ones who practiced consistently, organized their materials early, and learned how to present their strengths clearly. A strong placement strategy covers both knowledge and communication.",
    sections: [
      {
        heading: "Build a realistic preparation plan",
        paragraphs: [
          "Trying to prepare everything at once usually leads to burnout. A better strategy is to divide preparation into manageable parts such as aptitude, technical knowledge, resume building, communication, and mock interviews.",
          "Start by identifying the types of companies likely to visit your campus. Service companies, product companies, core companies, and startups may each test different skills.",
        ],
        bullets: [
          "Create a weekly routine with fixed time for aptitude and interview preparation.",
          "Prioritize topics that are repeatedly asked in your target roles.",
          "Keep revising instead of always collecting new material.",
        ],
      },
      {
        heading: "Know your resume and projects deeply",
        paragraphs: [
          "Your resume becomes a script for many interview questions. If you mention a project, certification, or internship, be ready to explain it clearly. Interviewers often care less about perfect answers and more about whether you genuinely understand what you worked on.",
          "Spend time simplifying your project explanations so they are easy to say under pressure. You should be able to explain the objective, your role, the tools used, the main challenge, and the final outcome.",
        ],
        bullets: [
          "Prepare a one-minute explanation for each major project.",
          "Revise the basics behind the technologies or concepts listed on your resume.",
          "Be honest about your contribution instead of overstating your role.",
        ],
      },
      {
        heading: "Practice interview communication",
        paragraphs: [
          "Many capable students lose confidence during interviews because they practice only written questions and ignore spoken delivery. Communication improves with repetition, not with last-minute pressure.",
          "Mock interviews can help you reduce filler words, improve structure, and get comfortable with follow-up questions. Even recording yourself on your phone can help you notice weaknesses.",
        ],
        bullets: [
          "Prepare your self-introduction and say it aloud multiple times.",
          "Practice answering common HR and technical questions in a calm, structured way.",
          "Work on eye contact, clarity, and concise answers rather than trying to sound perfect.",
        ],
      },
      {
        heading: "Research every company before the drive",
        paragraphs: [
          "Going into a placement round without understanding the company can make you appear unprepared. Even basic research helps you answer better and ask more thoughtful questions.",
          "Look at the company's work, hiring role, office locations, and general expectations. If the role is for trainees or freshers, understand what skills are emphasized most.",
        ],
        bullets: [
          "Review the company website and recent public information.",
          "Understand whether the role is technical, support-oriented, sales-oriented, or mixed.",
          "Prepare one or two genuine questions to ask if given the chance.",
        ],
      },
    ],
  },
  {
    slug: "private-job-vs-government-job",
    title: "Private job vs government job",
    category: "Career Choice",
    readTime: "6 min read",
    excerpt:
      "Understand the real trade-offs between private and government jobs so you can choose based on your goals, not only public perception.",
    intro:
      "The private job versus government job debate is common, especially among students and early-career candidates. The right answer is not the same for everyone. Some people value stability above everything else, while others prefer faster learning, wider exposure, or income growth. A good career decision comes from understanding your priorities clearly rather than copying the path that others praise the most.",
    sections: [
      {
        heading: "Stability versus speed of change",
        paragraphs: [
          "Government jobs are often preferred for their predictability. Many people appreciate the structured environment, fixed procedures, and long-term sense of security they offer.",
          "Private jobs, on the other hand, can move faster. This can be exciting if you enjoy learning quickly, adapting to change, and taking on new responsibilities early in your career.",
        ],
        bullets: [
          "Government roles are often seen as stronger on long-term stability.",
          "Private roles may offer faster transitions, role changes, and learning curves.",
          "Your comfort with uncertainty should influence your decision.",
        ],
      },
      {
        heading: "Growth, skills, and salary potential",
        paragraphs: [
          "Private-sector roles in some industries can reward performance with faster salary growth and broader skill exposure. This is especially true in fields such as technology, consulting, sales, digital marketing, and startups.",
          "Government roles may offer slower changes in compensation, but they often include benefits and a more structured progression path. Whether that feels attractive depends on what kind of career pace you want.",
        ],
        bullets: [
          "Private jobs can offer higher upside in some sectors and roles.",
          "Government jobs may provide more standardized progression and benefits.",
          "Consider not only starting salary, but also learning opportunities and long-term mobility.",
        ],
      },
      {
        heading: "Competition and entry path",
        paragraphs: [
          "Government job entry often depends on competitive exams, lengthy processes, and a smaller number of seats relative to applicants. This demands patience and consistent exam preparation.",
          "Private jobs can also be competitive, but the number of openings, hiring cycles, and entry routes may be broader. Candidates can apply through campus placements, job boards, referrals, internships, and direct outreach.",
        ],
        bullets: [
          "Government hiring may require long preparation timelines and multiple exam stages.",
          "Private hiring often gives more frequent chances to apply across many companies.",
          "Think about how much time you want to invest before your first offer arrives.",
        ],
      },
      {
        heading: "Choose based on your life goals",
        paragraphs: [
          "The better option depends on what matters most to you right now. If security, structure, and long-term predictability rank highest, government roles may align better. If you care more about rapid growth, experimentation, or industry mobility, the private sector may suit you more naturally.",
          "It is also possible for priorities to change over time. Career choices are rarely permanent identities. What matters is choosing a path that fits your present goals and building it with intention.",
        ],
        bullets: [
          "List your top priorities honestly before deciding.",
          "Avoid comparing only based on status or social pressure.",
          "Choose the path that best supports your goals, strengths, and working style.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
