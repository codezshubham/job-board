import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const ITEMS_PER_PAGE = 8;

export type JobsSearchParams = {
  [key: string]: string | string[] | undefined;
};

export type JobsFilters = {
  search?: string;
  type?: string;
  category?: string;
  experience?: string;
  workMode?: string;
  company?: string;
  page: number;
};

export type SeoLandingConfig = {
  slug: string;
  path: `/${string}`;
  shortLabel: string;
  badge: string;
  title: string;
  description: string;
  intro: string[];
  tips: string[];
  faqs: Array<{ question: string; answer: string }>;
  internalLinks: Array<{ href: string; label: string; description: string }>;
  filters: Partial<Pick<JobsFilters, "experience" | "workMode">>;
  keywords: string[];
};

function readString(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}

export function normalizeJobsSearchParams(
  searchParams?: JobsSearchParams
): JobsFilters {
  const pageParam = readString(searchParams?.page) ?? "1";
  const page = Math.max(1, Number.parseInt(pageParam, 10) || 1);

  return {
    search: readString(searchParams?.search),
    type: readString(searchParams?.type),
    category: readString(searchParams?.category),
    experience: readString(searchParams?.experience),
    workMode: readString(searchParams?.workMode),
    company: readString(searchParams?.company),
    page,
  };
}

export function formatLabel(value: string) {
  return value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function buildJobsQuery(filters: Partial<JobsFilters>) {
  const query: Record<string, unknown> = {};

  if (filters.search) {
    query.$or = [
      { title: { $regex: filters.search, $options: "i" } },
      { company: { $regex: filters.search, $options: "i" } },
      { location: { $regex: filters.search, $options: "i" } },
      { skills: { $regex: filters.search, $options: "i" } },
    ];
  }

  if (filters.company) {
    query.company = filters.company;
  }

  if (filters.type && filters.type !== "all") {
    query.employmentType = filters.type;
  }

  if (filters.category && filters.category !== "all") {
    query.category = filters.category;
  }

  if (filters.experience) {
    if (filters.experience.toLowerCase() === "experienced") {
      query.experience = {
        $not: { $regex: "fresher", $options: "i" },
        $exists: true,
        $ne: "",
      };
    } else {
      query.experience = { $regex: filters.experience, $options: "i" };
    }
  }

  if (filters.workMode && filters.workMode !== "all") {
    query.workMode = filters.workMode;
  }

  return query;
}

export const seoJobLandingPages: SeoLandingConfig[] = [
  {
    slug: "fresher-jobs",
    path: "/fresher-jobs",
    shortLabel: "Fresher Jobs",
    badge: "Entry-Level Jobs",
    title: "Fresher Jobs in India 2026 | Entry-Level Job Openings",
    description:
      "Find latest fresher jobs in India for 0-1 year experience candidates. Explore entry-level roles, internships, trainee jobs, and graduate hiring opportunities with direct apply links.",
    intro: [
      "Fresher jobs are meant for candidates who are beginning their career after graduation, final-year study, or a first internship. On this page, RojgarSync highlights entry-level openings that are easier to understand at a glance, especially for job seekers who want to avoid wasting time on vague or recycled listings. Instead of treating the page like only a filter result, we use it as a focused landing page for people who are actively looking for their first serious role.",
      "Most freshers lose time not because there are no jobs, but because the job search becomes noisy very quickly. Titles can look similar, eligibility may be unclear, and some listings hide the real experience requirement until late in the process. That is why candidates should always check the graduation year, expected skills, location, work mode, and official application instructions before applying. A cleaner search page is useful only when the details on it help people make better decisions faster.",
      "RojgarSync uses this page to group opportunities that are relevant to early-career applicants, including internships, trainee roles, graduate hiring, and junior openings where employers are open to low or no prior experience. Many of these jobs still expect proof of basics, project work, communication, or internship exposure, so fresher-friendly does not mean effortless. It means the opportunity is closer to the real starting point of a new candidate than a mid-level role disguised as entry level.",
      "If you are applying from this page, stay practical. Read the job description fully, compare the role with your actual background, and apply through the official destination shown in the listing. The strongest results usually come from consistent applications to realistic openings, not from mass applying to every post with the word fresher in it.",
    ],
    tips: [
      "Check whether the role is truly open to 0-1 year candidates before applying.",
      "Review graduation year, degree requirements, and location carefully.",
      "Prioritize listings that clearly mention training, internships, or entry-level responsibilities.",
      "Use your resume, projects, and portfolio to prove readiness for a first role.",
    ],
    faqs: [
      {
        question: "What counts as a fresher job on RojgarSync?",
        answer:
          "We treat fresher jobs as openings that are clearly suitable for candidates with no experience or only limited internship or trainee exposure.",
      },
      {
        question: "Are internships also included here?",
        answer:
          "Yes. When internships, trainee roles, or graduate hiring are meaningfully useful for early-career applicants, they can appear alongside fresher-friendly openings.",
      },
      {
        question: "What should I verify before applying?",
        answer:
          "Check eligibility, skills, work mode, application link, and whether the employer instructions match what is shown on the listing page.",
      },
    ],
    internalLinks: [
      {
        href: "/remote-jobs",
        label: "Remote Jobs",
        description: "Explore remote-friendly roles if you want flexible work options.",
      },
      {
        href: "/experienced-jobs",
        label: "Experienced Jobs",
        description: "Review how the platform separates fresher and more experienced openings.",
      },
      {
        href: "/articles/resume-format-for-freshers",
        label: "Resume Format for Freshers",
        description: "Improve your resume before applying to entry-level jobs.",
      },
      {
        href: "/articles/mistakes-freshers-make-while-applying",
        label: "Common Fresher Mistakes",
        description: "Avoid the application habits that cause preventable rejections.",
      },
    ],
    filters: {
      experience: "Fresher",
    },
    keywords: [
      "fresher jobs in India",
      "entry level jobs",
      "graduate hiring",
      "trainee jobs",
      "internships for freshers",
      "0-1 year jobs",
    ],
  },
  {
    slug: "remote-jobs",
    path: "/remote-jobs",
    shortLabel: "Remote Jobs",
    badge: "Work From Home Opportunities",
    title: "Remote Jobs in India 2026 | Work From Home Openings",
    description:
      "Browse remote jobs in India across tech, operations, design, and support roles. Find work from home openings with direct apply links and practical hiring details.",
    intro: [
      "Remote jobs attract a lot of attention because they offer flexibility, wider company access, and a different work rhythm from traditional office roles. At the same time, remote listings are often mixed with vague promises, weak descriptions, or misleading work-from-home claims. This page is designed to make remote job discovery cleaner by grouping listings that are marked for remote work mode and presenting them in a more focused way for job seekers who specifically want location-flexible opportunities.",
      "A remote job should still be evaluated like any other professional role. Candidates should check whether the position is fully remote or only partially distributed, whether the hiring company expects certain working hours, and whether the role requires occasional travel or office visits. Pay attention to communication expectations, reporting structure, onboarding style, and timezone overlap if the company works across regions. These details matter just as much as salary and title because remote work quality varies widely between employers.",
      "RojgarSync uses this page to surface remote openings from company career pages, official hiring announcements, and the platform's internal publishing flow. Remote does not automatically mean easy to get or universally flexible. Some companies want highly independent candidates, while others provide structured onboarding for freshers and junior professionals. That is why remote job seekers should match the listing not only to their skills, but also to their working style, communication habits, and home setup.",
      "Before applying, confirm the official destination, review the role expectations, and think beyond the word remote itself. The best remote opportunities are the ones where the work mode, team process, and candidate readiness all align realistically.",
    ],
    tips: [
      "Check whether the job is fully remote or includes occasional office or travel requirements.",
      "Look for clear expectations around work hours, communication, and collaboration tools.",
      "Confirm the employer site or application link before sharing personal information.",
      "Apply only when your skills and work style fit the independence remote work usually requires.",
    ],
    faqs: [
      {
        question: "Are all listings on this page fully remote?",
        answer:
          "They are filtered by remote work mode, but candidates should still confirm the final employer instructions because some companies update policy details after publishing.",
      },
      {
        question: "Can freshers apply for remote jobs?",
        answer:
          "Yes, but some remote roles expect stronger self-management and communication. Freshers should read the responsibilities closely before applying.",
      },
      {
        question: "Why should I still verify remote listings?",
        answer:
          "Remote roles are frequently reused by third-party channels, so it is important to confirm the final employer page and job status before proceeding.",
      },
    ],
    internalLinks: [
      {
        href: "/hybrid-jobs",
        label: "Hybrid Jobs",
        description: "Compare remote roles with openings that include both home and office work.",
      },
      {
        href: "/on-site-jobs",
        label: "On-site Jobs",
        description: "Browse roles for candidates who prefer direct office-based work.",
      },
      {
        href: "/articles/how-to-verify-if-a-job-posting-is-real-or-fake",
        label: "Verify Job Posts",
        description: "Use a practical checklist before applying to remote openings.",
      },
      {
        href: "/articles/how-to-prepare-for-virtual-job-interviews",
        label: "Virtual Interview Prep",
        description: "Prepare better for the online interview process common in remote hiring.",
      },
    ],
    filters: {
      workMode: "Remote",
    },
    keywords: [
      "remote jobs in India",
      "work from home jobs",
      "remote hiring",
      "distributed jobs",
      "online jobs",
      "flexible work jobs",
    ],
  },
  {
    slug: "hybrid-jobs",
    path: "/hybrid-jobs",
    shortLabel: "Hybrid Jobs",
    badge: "Flexible Office and Home Mix",
    title: "Hybrid Jobs in India 2026 | Flexible Work Openings",
    description:
      "Find hybrid jobs in India with a mix of office and remote work. Explore flexible roles across companies hiring for balanced work arrangements.",
    intro: [
      "Hybrid jobs sit between fully remote and fully office-based work, which is why they appeal to candidates who want flexibility without losing regular in-person collaboration. This page groups openings where the work mode is marked as hybrid, making it easier to browse roles that may offer both structure and flexibility. For many job seekers, hybrid jobs are more realistic than pure remote work because they still provide face time with the team while reducing daily commute pressure.",
      "Not all hybrid roles are structured in the same way. Some companies ask employees to come in on fixed days every week, while others use more flexible attendance depending on the role, team, or project phase. Before applying, candidates should check how often office presence is expected, whether the location is practical for them, and how the company defines hybrid in its own hiring process. A role described as hybrid may still involve more office time than expected.",
      "RojgarSync uses this page to give hybrid openings their own clear landing page rather than leaving them buried in filter URLs. That helps both users and search engines understand the intent of the page more directly. The listings here can include early-career, mid-level, and function-specific roles, so applicants should still compare each opportunity against their own availability, location, and experience. The more realistic the match, the better the application quality usually becomes.",
      "Hybrid work can be a strong option for candidates who want professional visibility, mentorship, and team access while keeping some flexibility in their schedule. The key is to verify the actual attendance expectation before assuming the role fits your lifestyle.",
    ],
    tips: [
      "Check the city and office location before treating a hybrid role as practical.",
      "Look for clarity on weekly in-office expectations or travel requirements.",
      "Compare hybrid roles carefully if you are balancing commute, studies, or relocation plans.",
      "Confirm whether onboarding starts on-site even if later work becomes more flexible.",
    ],
    faqs: [
      {
        question: "What is a hybrid job on RojgarSync?",
        answer:
          "A hybrid job is listed with a work arrangement that includes both office-based and remote work in some form.",
      },
      {
        question: "Do hybrid jobs always have fixed office days?",
        answer:
          "No. Some employers use fixed schedules while others adjust based on team or project needs, so applicants should verify the final policy.",
      },
      {
        question: "Who should consider hybrid roles?",
        answer:
          "Hybrid roles can work well for candidates who want a balance of flexibility, team exposure, and office support.",
      },
    ],
    internalLinks: [
      {
        href: "/remote-jobs",
        label: "Remote Jobs",
        description: "See fully remote alternatives if you want more location independence.",
      },
      {
        href: "/on-site-jobs",
        label: "On-site Jobs",
        description: "Explore office-first roles if you prefer full in-person work.",
      },
      {
        href: "/articles/how-to-apply-on-company-career-pages",
        label: "Apply on Career Pages",
        description: "Improve your direct applications for companies offering flexible work modes.",
      },
      {
        href: "/articles/how-to-track-job-applications",
        label: "Track Applications",
        description: "Keep hybrid role applications organized when comparing multiple cities or work arrangements.",
      },
    ],
    filters: {
      workMode: "Hybrid",
    },
    keywords: [
      "hybrid jobs in India",
      "flexible work jobs",
      "hybrid work opportunities",
      "office and remote jobs",
      "balanced work mode jobs",
      "hybrid hiring India",
    ],
  },
  {
    slug: "experienced-jobs",
    path: "/experienced-jobs",
    shortLabel: "Experienced Jobs",
    badge: "Roles Beyond Fresher Level",
    title: "Experienced Jobs in India 2026 | Mid-Level and Skilled Hiring",
    description:
      "Browse experienced jobs in India for candidates beyond fresher level. Explore roles that require prior work, project ownership, or stronger domain skills.",
    intro: [
      "Experienced jobs are not only for senior professionals. Many openings start asking for practical prior exposure as soon as a candidate moves beyond fresher level, whether that experience comes from full-time work, internships with deep responsibility, freelance delivery, or earlier role ownership. This landing page helps candidates who are no longer searching purely for fresher openings and want a clearer place to review roles that expect more direct contribution from day one.",
      "Candidates often struggle at this stage because job titles can be inconsistent. One employer may treat one year of experience as junior, while another expects far more from a similar-looking title. That is why applicants should always read responsibilities, reporting expectations, and skill depth instead of relying only on the job title. An experienced role usually expects more ownership, clearer communication, and a stronger ability to work without constant supervision.",
      "RojgarSync uses this page to separate experienced openings from fresher-focused listings so that users do not have to manually sort through mixed intent results. These jobs can still cover different domains and work modes, but they are generally better suited to candidates who already have a stronger professional base. That makes the page more useful for people who want to search efficiently rather than reopening clearly entry-level opportunities that no longer match their profile.",
      "If you are applying from this page, focus on evidence. Experienced-role hiring responds best to resumes and profiles that show outcomes, project ownership, tools used in real settings, and the ability to handle role-specific problems with less hand-holding.",
    ],
    tips: [
      "Read the responsibilities carefully because similar titles can imply very different experience expectations.",
      "Use a resume version that highlights ownership, outcomes, and real work history.",
      "Check salary, location, and work mode against your actual transition goals.",
      "Prioritize roles where your skills map clearly to the work instead of chasing title alone.",
    ],
    faqs: [
      {
        question: "How does RojgarSync treat experienced jobs?",
        answer:
          "These are roles that are not clearly fresher-focused and generally expect prior experience, stronger responsibility, or deeper functional skills.",
      },
      {
        question: "Can someone with internships still apply here?",
        answer:
          "Yes, if the internship work gave meaningful practical exposure and the role requirements still fit your background.",
      },
      {
        question: "What should be checked before applying to experienced roles?",
        answer:
          "Review ownership level, required tools, years of experience, and whether the employer expectations match your actual work history.",
      },
    ],
    internalLinks: [
      {
        href: "/fresher-jobs",
        label: "Fresher Jobs",
        description: "Compare how entry-level openings differ from more experienced hiring.",
      },
      {
        href: "/remote-jobs",
        label: "Remote Jobs",
        description: "Find experienced roles that also offer location flexibility.",
      },
      {
        href: "/articles/how-to-prepare-for-hr-interview",
        label: "HR Interview Preparation",
        description: "Refine your interview communication for roles with higher ownership expectations.",
      },
      {
        href: "/articles/how-to-follow-up-after-job-application",
        label: "Follow-Up Strategy",
        description: "Improve your process after applying to targeted mid-level roles.",
      },
    ],
    filters: {
      experience: "Experienced",
    },
    keywords: [
      "experienced jobs in India",
      "mid level jobs",
      "skilled hiring",
      "jobs for experienced candidates",
      "professional job openings",
      "non fresher jobs",
    ],
  },
  {
    slug: "on-site-jobs",
    path: "/on-site-jobs",
    shortLabel: "On-site Jobs",
    badge: "Office-Based Opportunities",
    title: "On-site Jobs in India 2026 | Office-Based Hiring Openings",
    description:
      "Browse on-site jobs in India across cities and industries. Find office-based opportunities with direct apply links and clear role details.",
    intro: [
      "On-site jobs remain important for candidates who prefer structured office environments, direct team access, and clearer in-person collaboration. While remote and hybrid roles often receive more attention, many employers still hire primarily for office-based work, especially in operations, support, engineering, sales, and early-career training roles. This page brings those on-site openings together under a clean public URL so candidates can search them without relying only on faceted filter parameters.",
      "For many job seekers, on-site roles are not a compromise. They can offer better onboarding, easier mentorship, stronger visibility with managers, and more stable routines for people who work best in structured environments. At the same time, office-based roles require realistic planning around location, commute, relocation, and schedule. Before applying, candidates should check the city, office setup, shift pattern, and whether the salary makes sense once transport or living costs are considered.",
      "RojgarSync uses this landing page to present office-based openings in a way that is more useful for both users and search engines. The goal is not to claim every role here is perfect, but to make the page intent clear: these jobs are best for candidates who want or accept in-person work. That distinction matters because a job search becomes more efficient when the page itself reflects the candidate's actual working preference.",
      "If you are looking for on-site jobs, treat location as a core requirement rather than a small detail. The strongest office-based applications usually come from candidates who have already considered commute practicality, relocation limits, and role fit before clicking apply.",
    ],
    tips: [
      "Check location, travel time, and relocation feasibility before applying.",
      "Review shift timing, office expectation, and attendance policy carefully.",
      "Compare salary against the real cost of working from the listed city.",
      "Use on-site roles strategically if you want more direct mentorship or structured learning.",
    ],
    faqs: [
      {
        question: "What is considered an on-site job here?",
        answer:
          "These are listings marked for office-based or in-person work rather than remote or hybrid work arrangements.",
      },
      {
        question: "Are on-site jobs useful for freshers?",
        answer:
          "Yes. Many freshers benefit from direct onboarding, mentorship, and team visibility that office-based roles can provide.",
      },
      {
        question: "What should be verified first on an on-site listing?",
        answer:
          "Start with city, office location, shift expectations, and whether the final employer page still shows the same role details.",
      },
    ],
    internalLinks: [
      {
        href: "/hybrid-jobs",
        label: "Hybrid Jobs",
        description: "Look at roles that mix office structure with some flexibility.",
      },
      {
        href: "/remote-jobs",
        label: "Remote Jobs",
        description: "Compare office-based openings with fully remote alternatives.",
      },
      {
        href: "/articles/documents-needed-before-applying-for-jobs",
        label: "Documents Before Applying",
        description: "Keep your paperwork ready before applying across multiple city-based jobs.",
      },
      {
        href: "/articles/best-job-search-strategy-for-final-year-students",
        label: "Final-Year Job Search Strategy",
        description: "Useful if you are targeting office-based training or graduate roles.",
      },
    ],
    filters: {
      workMode: "On-site",
    },
    keywords: [
      "on site jobs in India",
      "office jobs",
      "office based hiring",
      "in person jobs",
      "city based jobs",
      "on site openings India",
    ],
  },
];

export function getSeoLandingBySlug(slug: string) {
  return seoJobLandingPages.find((page) => page.slug === slug);
}

export function getMatchingSeoLanding(filters: Partial<JobsFilters>) {
  if (filters.search || filters.company || filters.type || filters.category) {
    return undefined;
  }

  return seoJobLandingPages.find((page) => {
    const expectedExperience = page.filters.experience;
    const expectedWorkMode = page.filters.workMode;

    return (
      (expectedExperience ? filters.experience === expectedExperience : !filters.experience) &&
      (expectedWorkMode ? filters.workMode === expectedWorkMode : !filters.workMode)
    );
  });
}

export function buildPaginationUrl(
  basePath: string,
  filters: Partial<JobsFilters>,
  page: number
) {
  const params = new URLSearchParams();

  if (basePath === "/jobs") {
    if (filters.search) params.set("search", filters.search);
    if (filters.type) params.set("type", filters.type);
    if (filters.category) params.set("category", filters.category);
    if (filters.experience) params.set("experience", filters.experience);
    if (filters.workMode) params.set("workMode", filters.workMode);
    if (filters.company) params.set("company", filters.company);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const queryString = params.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
}

export function buildJobsPageHeading(filters: Partial<JobsFilters>) {
  const landing = getMatchingSeoLanding(filters);

  if (landing) {
    return {
      pageTitle: landing.shortLabel,
      pageDescription: landing.description,
    };
  }

  const activeLabel =
    (filters.search && filters.search.trim()) ||
    (filters.company && filters.company.trim()) ||
    (filters.category && filters.category !== "all" ? filters.category : undefined) ||
    (filters.type && filters.type !== "all" ? filters.type : undefined) ||
    (filters.workMode && filters.workMode !== "all" ? filters.workMode : undefined) ||
    (filters.experience && filters.experience.trim()) ||
    undefined;

  return {
    pageTitle: activeLabel ? `${formatLabel(activeLabel)} Jobs` : "Browse All Jobs",
    pageDescription: activeLabel
      ? `Showing job results for ${formatLabel(activeLabel)}.`
      : "Explore the latest opportunities shaping remote, hybrid, on-site, fresher, and experienced careers.",
  };
}

export function buildJobsMetadata(filters: JobsFilters): Metadata {
  const landing = getMatchingSeoLanding(filters);
  const canonical = landing
    ? buildPaginationUrl(landing.path, {}, filters.page)
    : buildPaginationUrl("/jobs", filters, filters.page);
  const hasFacetedFilters = Boolean(
    filters.search ||
      filters.company ||
      filters.type ||
      filters.category ||
      filters.experience ||
      filters.workMode
  );

  if (landing) {
    return {
      ...createPageMetadata({
        title: landing.title,
        description: landing.description,
        canonical,
        keywords: [...landing.keywords, "RojgarSync", "jobs in India"],
        robots: {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
      }),
      keywords: [...landing.keywords, "RojgarSync", "jobs in India"],
    };
  }

  const heading = buildJobsPageHeading(filters);

  return createPageMetadata({
    title: heading.pageTitle,
    description: heading.pageDescription,
    canonical,
    keywords: ["jobs in India", "job search", "RojgarSync"],
    ...(hasFacetedFilters
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: {
              index: false,
              follow: true,
            },
          },
        }
      : {}),
  });
}

export function buildLandingMetadata(
  config: SeoLandingConfig,
  page: number
): Metadata {
  const canonical = buildPaginationUrl(config.path, {}, page);

  return {
    ...createPageMetadata({
      title: config.title,
      description: config.description,
      canonical,
      keywords: [...config.keywords, "RojgarSync", config.shortLabel],
    }),
    keywords: [...config.keywords, "RojgarSync", config.shortLabel],
  };
}
