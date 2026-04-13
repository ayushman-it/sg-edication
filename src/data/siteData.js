const countryShortcuts = [
  { label: 'India', href: '/countries/india' },
  { label: 'Georgia', href: '/countries/georgia' },
  { label: 'Tajikistan', href: '/countries/tajikistan' },
  { label: 'Russia', href: '/countries/russia' },
  { label: 'Uzbekistan', href: '/countries/uzbekistan' },
]

const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'Colleges',
    href: '/colleges',
    children: [
      { label: 'Management', href: '/colleges?category=Management' },
      { label: 'Science', href: '/colleges?category=Science' },
      { label: 'Engineering', href: '/colleges?category=Engineering' },
      { label: 'Medical', href: '/colleges?category=Medical' },
      { label: 'Commerce', href: '/colleges?category=Commerce' },
      { label: 'Arts', href: '/colleges?category=Arts' },
    ],
  },
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'Management', href: '/courses?category=Management' },
      { label: 'Science', href: '/courses?category=Science' },
      { label: 'Engineering', href: '/courses?category=Engineering' },
      { label: 'Medical', href: '/courses?category=Medical' },
      { label: 'Commerce', href: '/courses?category=Commerce' },
      { label: 'Arts', href: '/courses?category=Arts' },
      { label: 'Paramedical', href: '/courses?category=Paramedical' },
      { label: 'Pharmacy', href: '/courses?category=Pharmacy' },
      { label: 'Education', href: '/courses?category=Education' },
      { label: 'Dental', href: '/courses?category=Dental' },
      { label: 'Computer Science', href: '/courses?category=Computer%20Science' },
    ],
  },
  {
    label: 'Exams',
    href: '/exams',
    children: [
      { label: 'Management', href: '/exams?stream=Management' },
      { label: 'Science', href: '/exams?stream=Science' },
      { label: 'Engineering', href: '/exams?stream=Engineering' },
      { label: 'Medical', href: '/exams?stream=Medical' },
      { label: 'Arts', href: '/exams?stream=Arts' },
      { label: 'Computer Science', href: '/exams?stream=Computer%20Science' },
      { label: 'All Exams', href: '/exams' },
    ],
  },
  { label: 'Blogs', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Direct Admission', href: '/direct-admission' },
  { label: 'Contact Us', href: '/contact' },
]

const siteMeta = {
  brand: 'SG Education Solution',
  phone: '+91 9706650555',
  email: 'info@sgeducation.co.in',
  office:
    'Third Floor, C-303, Bramhacorp Vantage Tower C, opposite Bavdhan Police Station, Ram Nagar, Bavdhan, Pune - 411021',
  heroStats: [
    { value: '10,000+', label: 'Colleges and universities on one platform' },
    { value: '957+', label: 'India options listed for students' },
    { value: '1:1', label: 'Career counselling and application support' },
  ],
  trustPoints: [
    'Verified colleges and courses',
    'Personalised counselling support',
    'India and abroad application guidance',
  ],
}

const topLinks = [
  { label: 'B.Tech', href: '/courses?category=Engineering' },
  { label: 'MBBS', href: '/courses?category=Medical' },
  { label: 'MBA', href: '/courses?category=Management' },
  { label: 'LLB', href: '/courses?category=Arts' },
  { label: 'BPT', href: '/courses?category=Paramedical' },
  { label: 'BBA', href: '/courses?category=Management' },
]

const careerPaths = [
  {
    slug: 'management',
    label: 'Management',
    options: '0 options available',
    description: 'Business, administration, entrepreneurship, and leadership-focused programs.',
    color: 'amber',
  },
  {
    slug: 'science',
    label: 'Science',
    options: '230 options available',
    description: 'Pure sciences, applied sciences, research, and foundational healthcare routes.',
    color: 'sky',
  },
  {
    slug: 'engineering',
    label: 'Engineering',
    options: '111 options available',
    description: 'Computer, civil, mechanical, AI, electronics, and industry-driven technical pathways.',
    color: 'indigo',
  },
  {
    slug: 'medical',
    label: 'Medical',
    options: '262 options available',
    description: 'MBBS, allied health, dental, and specialist clinical education opportunities.',
    color: 'rose',
  },
  {
    slug: 'commerce',
    label: 'Commerce',
    options: '183 options available',
    description: 'Finance, accounting, economics, and corporate business studies.',
    color: 'emerald',
  },
  {
    slug: 'arts',
    label: 'Arts',
    options: '0 options available',
    description: 'Humanities, social science, communication, and liberal education tracks.',
    color: 'violet',
  },
  {
    slug: 'paramedical',
    label: 'Paramedical',
    options: '0 options available',
    description: 'Diagnostic, therapy, and practical healthcare support careers.',
    color: 'orange',
  },
  {
    slug: 'education',
    label: 'Education',
    options: '0 options available',
    description: 'Teacher training, learning design, and academic leadership programs.',
    color: 'cyan',
  },
  {
    slug: 'dental',
    label: 'Dental',
    options: '0 options available',
    description: 'Dental medicine, surgery, and oral healthcare education.',
    color: 'pink',
  },
  {
    slug: 'computer-science',
    label: 'Computer Science',
    options: '0 options available',
    description: 'Software, AI, cybersecurity, analytics, and systems-focused learning.',
    color: 'teal',
  },
]

const nationalDestinations = [
  { label: 'Maharashtra', options: '342 options available' },
  { label: 'Karnataka', options: '196 options available' },
  { label: 'Rajasthan', options: '30 options available' },
  { label: 'Telangana', options: '114 options available' },
  { label: 'Andhra Pradesh', options: '35 options available' },
  { label: 'West Bengal', options: '19 options available' },
  { label: 'Tamil Nadu', options: '17 options available' },
  { label: 'Haryana', options: '8 options available' },
  { label: 'Bihar', options: '15 options available' },
  { label: 'Delhi NCR', options: '53 options available' },
  { label: 'Chhattisgarh', options: '11 options available' },
  { label: 'Madhya Pradesh', options: '26 options available' },
]

const countries = [
  {
    slug: 'india',
    name: 'India',
    tagline: 'Explore Indian colleges, dream fields, and direct admission support across top states.',
    heroAccent: 'Study in India with curated state-by-state college options and fast counselling support.',
    summary:
      'SG Education Solution covers leading colleges and universities across India for engineering, medical, management, commerce, law, and more.',
    intake: 'Multiple academic intakes',
    popularCities: ['Pune', 'Bangalore', 'Mumbai', 'Delhi NCR'],
    tuition: 'Varies by course and institution',
    workRights: 'Internships and placement-led opportunities',
    highlight: 'Best for students wanting a strong India-first college search with trusted counselling support.',
    topPrograms: ['B.Tech', 'MBBS', 'MBA', 'LLB'],
    checklist: ['Profile discussion', 'State and college selection', 'Admission support', 'Application follow-up'],
    optionsCount: '957 options available',
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    tagline: 'Popular for international MBBS routes with student-friendly costs and smoother entry pathways.',
    heroAccent: 'Build your medical career through a clear and guided study abroad route.',
    summary:
      'Georgia remains a common option for students evaluating affordable medical study abroad pathways with practical application support.',
    intake: 'Spring and Fall',
    popularCities: ['Tbilisi', 'Batumi', 'Kutaisi'],
    tuition: 'Affordable compared to many European medical pathways',
    workRights: 'Depends on visa route and study status',
    highlight: 'Well-suited for students focused on medical education and admission support abroad.',
    topPrograms: ['MBBS', 'Medical Foundation'],
    checklist: ['Eligibility review', 'University shortlist', 'Documentation', 'Visa and travel guidance'],
    optionsCount: '0 options available',
  },
  {
    slug: 'tajikistan',
    name: 'Tajikistan',
    tagline: 'An alternative destination for medical aspirants seeking lower-cost study options.',
    heroAccent: 'Explore simpler application journeys for medical education abroad.',
    summary:
      'Tajikistan is considered by students who want cost-conscious international medical study routes supported by counselling.',
    intake: 'Annual academic intake',
    popularCities: ['Dushanbe'],
    tuition: 'Cost-effective medical study route',
    workRights: 'Depends on student visa conditions',
    highlight: 'Useful for students evaluating budget-sensitive international medical education.',
    topPrograms: ['MBBS'],
    checklist: ['Counselling session', 'Admission process', 'Document support', 'Travel planning'],
    optionsCount: '0 options available',
  },
  {
    slug: 'russia',
    name: 'Russia',
    tagline: 'A long-standing study-abroad destination for medicine and technical education.',
    heroAccent: 'Study in Russia with structured counselling, documentation, and application guidance.',
    summary:
      'Russia continues to be explored by students interested in medical and technical education pathways abroad.',
    intake: 'Annual academic intake',
    popularCities: ['Moscow', 'Kazan', 'Saint Petersburg'],
    tuition: 'Moderate-cost international education route',
    workRights: 'Varies with visa and institution rules',
    highlight: 'A known destination for students comparing legacy international education pathways.',
    topPrograms: ['MBBS', 'Engineering'],
    checklist: ['Destination counselling', 'University mapping', 'Visa support', 'Departure readiness'],
    optionsCount: '0 options available',
  },
  {
    slug: 'uzbekistan',
    name: 'Uzbekistan',
    tagline: 'A growing option for students exploring international medical education.',
    heroAccent: 'A more accessible study abroad route for selected medical aspirants.',
    summary:
      'Uzbekistan is an emerging option in the international study journey for students interested in medical programs.',
    intake: 'Annual academic intake',
    popularCities: ['Tashkent', 'Samarkand'],
    tuition: 'Cost-conscious study abroad choice',
    workRights: 'Subject to visa and course status',
    highlight: 'Strong for students comparing newer MBBS destinations abroad.',
    topPrograms: ['MBBS'],
    checklist: ['Initial consultation', 'Shortlist and compare', 'Admission documents', 'Travel support'],
    optionsCount: '0 options available',
  },
]

const abroadDestinations = countries.map(({ name, optionsCount, slug, summary }) => ({
  label: name,
  options: optionsCount,
  slug,
  summary,
}))

const colleges = [
  {
    slug: 'symbiosis-institute-of-business-management',
    name: 'Symbiosis Institute of Business Management',
    category: 'Management',
    country: 'India',
    location: 'Pune',
    type: 'Private Institute',
    tuition: 'Profile-based counselling required',
    rating: 'Popular MBA route',
    summary: 'Well-known option for management aspirants looking for brand value and placement support.',
    programs: ['MBA', 'BBA', 'PGDM'],
    badge: 'Management',
    image: '/college-management.svg',
    established: 'Established 1978',
    approvals: 'AICTE-aligned management ecosystem',
    intake: 'Postgraduate and UG business pathways',
  },
  {
    slug: 'bharati-vidyapeeth-medical-college',
    name: 'Bharati Vidyapeeth Medical College',
    category: 'Medical',
    country: 'India',
    location: 'Pune',
    type: 'Medical College',
    tuition: 'Varies by quota and seat type',
    rating: 'Medical track',
    summary: 'A relevant option for MBBS aspirants comparing Indian private medical education routes.',
    programs: ['MBBS', 'MD', 'MS'],
    badge: 'Medical',
    image: '/college-medical.svg',
    established: 'Established 1989',
    approvals: 'NMC-linked private medical route',
    intake: 'UG and PG clinical programs',
  },
  {
    slug: 'rv-college-of-engineering',
    name: 'RV College of Engineering',
    category: 'Engineering',
    country: 'India',
    location: 'Bangalore',
    type: 'Engineering College',
    tuition: 'Counselling based',
    rating: 'High demand engineering route',
    summary: 'Preferred by students targeting strong engineering and technology outcomes in India.',
    programs: ['B.Tech', 'M.Tech', 'Computer Science'],
    badge: 'Engineering',
    image: '/college-engineering.svg',
    established: 'Established 1963',
    approvals: 'Autonomous engineering campus',
    intake: 'Core and technology-driven branches',
  },
  {
    slug: 'tbilisi-state-medical-university',
    name: 'Tbilisi State Medical University',
    category: 'Medical',
    country: 'Georgia',
    location: 'Tbilisi',
    type: 'Medical University',
    tuition: 'Affordable MBBS route',
    rating: 'Study abroad medical option',
    summary: 'A commonly explored destination for students planning MBBS abroad with counselling support.',
    programs: ['MBBS', 'Foundation'],
    badge: 'Study abroad',
    image: '/college-global.svg',
    established: 'Legacy international university',
    approvals: 'Popular abroad medical pathway',
    intake: 'Foundation and medical admissions',
  },
  {
    slug: 'delhi-university-commerce-college',
    name: 'Delhi University Commerce Cluster',
    category: 'Commerce',
    country: 'India',
    location: 'Delhi NCR',
    type: 'University Cluster',
    tuition: 'Entrance and merit based',
    rating: 'Commerce pathway',
    summary: 'Useful for commerce students evaluating respected undergraduate options and city exposure.',
    programs: ['B.Com', 'Economics', 'Finance'],
    badge: 'Commerce',
    image: '/college-commerce.svg',
    established: 'Established public university ecosystem',
    approvals: 'Merit and entrance-driven route',
    intake: 'Undergraduate commerce majors',
  },
  {
    slug: 'christ-university',
    name: 'Christ University',
    category: 'Arts',
    country: 'India',
    location: 'Bangalore',
    type: 'Private University',
    tuition: 'Programme dependent',
    rating: 'Multi-stream option',
    summary: 'A strong multidisciplinary option across business, arts, psychology, and communication studies.',
    programs: ['BBA', 'BA', 'B.Com'],
    badge: 'Multi-stream',
    image: '/college-campus.svg',
    established: 'Established multidisciplinary campus',
    approvals: 'Private university with broad portfolio',
    intake: 'UG and PG multi-stream programs',
  },
]

const courses = [
  {
    slug: 'b-tech',
    title: 'B.Tech',
    category: 'Engineering',
    duration: '4 years',
    destination: 'India',
    mode: 'Undergraduate',
    summary: 'Core engineering route for students targeting technology, software, and industrial careers.',
    careers: ['Software Engineer', 'Civil Engineer', 'Product Developer'],
    seoTitle: 'B.Tech Course Details, Eligibility, Admission, Scope and Careers | SG Education Solution',
    seoDescription:
      'Explore complete B.Tech course details including eligibility, duration, admission routes, specialisations, career scope, and counselling support for Indian engineering colleges.',
    seoKeywords: ['B.Tech course details', 'BTech eligibility', 'engineering admission', 'B.Tech scope', 'BTech careers'],
    heroHeadline: 'B.Tech course details, admission guidance, and career scope for engineering aspirants.',
    overview:
      'B.Tech is one of the most preferred undergraduate engineering programs for students who want to build careers in technology, design, core engineering, manufacturing, infrastructure, and product-led industries. It combines classroom fundamentals with lab work, projects, internships, and applied problem-solving.',
    averageFees: 'Fees vary by institute type, branch, and quota-based admission route.',
    salaryRange: 'Entry-level opportunities differ by branch, internship profile, and city.',
    studyFormat: 'Classroom learning, laboratories, workshops, project work, and internships',
    eligibility: [
      'Students typically need 10+2 with Physics, Chemistry, and Mathematics from a recognised board.',
      'Most colleges expect qualifying marks based on category, state rules, and institution policy.',
      'Entrance exam scores such as JEE Main or state-level engineering tests are commonly used for admission.',
    ],
    admissionProcess: [
      'Choose the right branch and shortlist realistic colleges based on marks, rank, and budget.',
      'Track counselling deadlines, documentation, and quota-specific eligibility requirements.',
      'Review academic environment, labs, placements, and location before locking the final option.',
    ],
    curriculum: [
      'Engineering mathematics, physics, chemistry, and computing fundamentals',
      'Branch-specific subjects such as programming, mechanics, circuits, structures, or design systems',
      'Laboratory work, mini projects, industrial exposure, capstone project, and internship experience',
    ],
    specialisations: ['Computer Science', 'Mechanical', 'Civil', 'Electronics', 'AI and Data Science'],
    idealFor: [
      'Students who enjoy analytical problem-solving and practical application',
      'Learners aiming for technical roles, product teams, or higher studies in engineering',
      'Applicants comparing core branches with software and emerging technologies',
    ],
    whyChoose: [
      'Wide range of branch options across private, deemed, and government institutions',
      'Strong alignment with technical careers, innovation roles, and postgraduate pathways',
      'Can lead to both campus placements and entrepreneurship-focused growth paths',
    ],
    topRecruiters: ['Technology firms', 'Infrastructure companies', 'Manufacturing groups', 'Engineering consultancies'],
    faq: [
      {
        question: 'What is the duration of a B.Tech course?',
        answer: 'A standard B.Tech program usually runs for four academic years divided into eight semesters.',
      },
      {
        question: 'Which exams are commonly accepted for B.Tech admission?',
        answer: 'Many colleges consider JEE Main, state counselling tests, or institution-specific entrance pathways depending on the college type.',
      },
      {
        question: 'Is B.Tech good for software careers only?',
        answer: 'No. B.Tech supports software, product, manufacturing, civil, design, electronics, research, and many other engineering career tracks.',
      },
    ],
  },
  {
    slug: 'mbbs',
    title: 'MBBS',
    category: 'Medical',
    duration: '5.5 years',
    destination: 'India, Georgia, Russia, Uzbekistan',
    mode: 'Undergraduate',
    summary: 'A flagship medical path with both Indian and abroad counselling options.',
    careers: ['Doctor', 'Medical Officer', 'Clinical Resident'],
    seoTitle: 'MBBS Course Details, Eligibility, Admission and Career Scope | SG Education Solution',
    seoDescription:
      'Read complete MBBS course details with NEET-linked eligibility, duration, curriculum, India and abroad study routes, admission guidance, and long-term medical career scope.',
    seoKeywords: ['MBBS course details', 'MBBS eligibility', 'NEET admission', 'study MBBS abroad', 'medical course scope'],
    heroHeadline: 'MBBS course details for students planning medical admissions in India or abroad.',
    overview:
      'MBBS is the foundational medical degree for students who want to enter the clinical profession as doctors. The course is academically demanding and combines theoretical sciences, hospital exposure, rotations, and patient-facing learning. It remains one of the most sought-after programs for students planning long-term healthcare careers.',
    averageFees: 'Fee structures vary significantly by government, private, and abroad medical options.',
    salaryRange: 'Career progression depends on internship, licensing, residency, and specialisation decisions.',
    studyFormat: 'Classroom learning, anatomy labs, clinical rotations, hospital internships, and supervised practice',
    eligibility: [
      'Students usually need 10+2 with Physics, Chemistry, Biology, and English from a recognised board.',
      'NEET qualification is a key requirement for MBBS admission in India and is also commonly needed for many abroad pathways.',
      'Medical admission decisions depend on score, category, counselling process, budget, and destination rules.',
    ],
    admissionProcess: [
      'Evaluate India and abroad pathways based on NEET score, budget, and preferred admission timeline.',
      'Shortlist recognised universities, compare fee structures, and review compliance or licensing considerations.',
      'Complete counselling, documentation, admission confirmation, and travel planning where applicable.',
    ],
    curriculum: [
      'Pre-clinical learning including anatomy, physiology, and biochemistry',
      'Para-clinical subjects such as pathology, pharmacology, microbiology, and forensic medicine',
      'Clinical training in medicine, surgery, paediatrics, obstetrics and gynaecology, and community health',
    ],
    specialisations: ['General Medicine', 'Surgery', 'Paediatrics', 'Obstetrics and Gynaecology', 'Community Medicine'],
    idealFor: [
      'Students committed to long-term healthcare service and intensive academic training',
      'Applicants preparing for NEET-based medical admission choices',
      'Families comparing private medical colleges in India with selected abroad destinations',
    ],
    whyChoose: [
      'Direct path into the medical profession and later postgraduate specialisation',
      'High social trust, long-term stability, and a broad range of clinical branches',
      'Useful for students seeking India and abroad counselling in one place',
    ],
    topRecruiters: ['Hospitals', 'Clinics', 'Healthcare networks', 'Research institutions'],
    faq: [
      {
        question: 'How long is the MBBS course?',
        answer: 'In India, MBBS usually runs for 5.5 years including academic study and the compulsory internship period.',
      },
      {
        question: 'Is NEET compulsory for MBBS?',
        answer: 'NEET is commonly required for MBBS admission in India and often remains important for students planning recognised medical education routes abroad.',
      },
      {
        question: 'Can students compare India and abroad MBBS options on the same page?',
        answer: 'Yes. This detail page is structured to support comparison of route, duration, admission process, and destination fit.',
      },
    ],
  },
  {
    slug: 'mba',
    title: 'MBA',
    category: 'Management',
    duration: '2 years',
    destination: 'India, United Kingdom',
    mode: 'Postgraduate',
    summary: 'Designed for business leadership, strategy, marketing, and management progression.',
    careers: ['Business Manager', 'Marketing Lead', 'Operations Manager'],
    seoTitle: 'MBA Course Details, Eligibility, Admission and Career Growth | SG Education Solution',
    seoDescription:
      'Understand MBA course details including eligibility, entrance exams, specialisations, duration, career outcomes, and counselling support for management aspirants.',
    seoKeywords: ['MBA course details', 'MBA eligibility', 'CAT admission', 'MBA specialisations', 'management course scope'],
    heroHeadline: 'MBA course details for students planning business, leadership, and management careers.',
    overview:
      'MBA is a postgraduate management degree designed for students and professionals who want to move into business strategy, operations, finance, marketing, analytics, and leadership roles. It is valued for its flexible specialisation options and its relevance across industries.',
    averageFees: 'MBA fees differ by college tier, brand value, location, and placement ecosystem.',
    salaryRange: 'Outcome depends on institute profile, work experience, specialisation, and placement performance.',
    studyFormat: 'Case studies, presentations, live projects, internships, simulations, and classroom learning',
    eligibility: [
      "Students typically need a recognised bachelor's degree from any discipline.",
      'Many institutes consider entrance exams such as CAT, XAT, MAT, CMAT, or institute-level admission criteria.',
      'Shortlisting can also include academic consistency, work experience, interview rounds, and profile quality.',
    ],
    admissionProcess: [
      'Clarify goals such as placements, entrepreneurship, family business, or career switch.',
      'Compare exam scores, budget, location, specialisation, and institute quality before applying.',
      'Prepare for group discussion, written ability test, and interview rounds where required.',
    ],
    curriculum: [
      'Core management areas such as marketing, finance, HR, operations, economics, and business communication',
      'Applied learning through live projects, case analysis, internships, and team presentations',
      'Advanced electives based on specialisation and industry interest',
    ],
    specialisations: ['Marketing', 'Finance', 'Human Resources', 'Operations', 'Business Analytics'],
    idealFor: [
      'Graduates planning leadership-oriented business roles',
      'Working professionals considering skill upgrade or career movement',
      'Students seeking structured exposure to management thinking and decision-making',
    ],
    whyChoose: [
      'Works across sectors including consulting, banking, FMCG, startups, and operations',
      'Supports both fresh graduates and experienced candidates with different career goals',
      'Strong fit for students who value placements, communication, and strategic thinking',
    ],
    topRecruiters: ['Consulting firms', 'Banks', 'FMCG brands', 'E-commerce companies'],
    faq: [
      {
        question: 'Who should study MBA?',
        answer: 'MBA is suited for students or professionals who want management, business strategy, operations, marketing, finance, or leadership-oriented careers.',
      },
      {
        question: 'Is work experience compulsory for MBA?',
        answer: 'Not always. Some programs accept fresh graduates, while others prefer or value prior work experience.',
      },
      {
        question: 'Which specialisation is best in MBA?',
        answer: 'The right specialisation depends on your goals, strengths, and target industry rather than a one-size-fits-all ranking.',
      },
    ],
  },
  {
    slug: 'llb',
    title: 'LLB',
    category: 'Arts',
    duration: '3 - 5 years',
    destination: 'India',
    mode: 'Undergraduate',
    summary: 'A law route for students planning advocacy, judiciary exams, or legal advisory careers.',
    careers: ['Lawyer', 'Legal Associate', 'Compliance Executive'],
    seoTitle: 'LLB Course Details, Eligibility, Admission and Legal Careers | SG Education Solution',
    seoDescription:
      'Check complete LLB course details with eligibility, duration, admission routes, law subjects, career outcomes, and guidance for students planning legal education.',
    seoKeywords: ['LLB course details', 'law course eligibility', 'LLB admission', 'legal careers', 'law degree scope'],
    heroHeadline: 'LLB course details for students interested in legal studies, advocacy, and compliance roles.',
    overview:
      'LLB is a core law program for students interested in legal reasoning, constitutional studies, contracts, litigation, policy, and compliance-driven careers. It can lead to advocacy, legal advisory work, corporate legal teams, judiciary preparation, or further legal specialisation.',
    averageFees: 'Fees depend on whether the law college is private, university-affiliated, or part of an integrated campus.',
    salaryRange: 'Career growth varies by practice area, internships, litigation exposure, and institution profile.',
    studyFormat: 'Classroom lectures, moot courts, research projects, drafting exercises, and internships',
    eligibility: [
      'Eligibility depends on whether the student is applying for a 3-year LLB after graduation or an integrated law pathway through a different route.',
      'Institutions may use entrance tests, merit criteria, interviews, or state-level admission rules.',
      'Students should confirm age, degree, and exam-specific criteria before applying.',
    ],
    admissionProcess: [
      'Compare private universities, public institutions, and law-focused campuses based on academic environment and practical exposure.',
      'Review admission route, internship culture, moot court participation, and faculty strength.',
      'Plan documentation, deadlines, and entrance preparation carefully for law admissions.',
    ],
    curriculum: [
      'Constitutional law, contract law, criminal law, family law, and property law',
      'Legal writing, drafting, interpretation, research, and moot court practice',
      'Electives such as corporate law, intellectual property, taxation, or cyber law',
    ],
    specialisations: ['Corporate Law', 'Criminal Law', 'Constitutional Law', 'IPR', 'Cyber Law'],
    idealFor: [
      'Students who enjoy reading, argument-building, and analytical reasoning',
      'Applicants planning courtroom, corporate, compliance, or judiciary-oriented careers',
      'Learners seeking a respected professional pathway with strong long-term depth',
    ],
    whyChoose: [
      'Builds legal reasoning and opens both practice-based and advisory career paths',
      'Supports careers across litigation, companies, policy work, and exams',
      'Creates a strong base for higher legal education and specialised legal domains',
    ],
    topRecruiters: ['Law firms', 'Corporate legal teams', 'Compliance departments', 'Policy organisations'],
    faq: [
      {
        question: 'Is LLB only for courtroom careers?',
        answer: 'No. LLB also supports corporate legal, policy, compliance, contract, consulting, and regulatory roles.',
      },
      {
        question: 'What skills help in law studies?',
        answer: 'Reading discipline, communication, structured writing, analysis, and confidence in argument-building help significantly.',
      },
      {
        question: 'Can LLB students prepare for judiciary or civil services later?',
        answer: 'Yes. Many students use their law background as a strong foundation for judiciary and other competitive paths.',
      },
    ],
  },
  {
    slug: 'bpt',
    title: 'BPT',
    category: 'Paramedical',
    duration: '4.5 years',
    destination: 'India',
    mode: 'Undergraduate',
    summary: 'Popular allied-health pathway for rehabilitation, mobility, and therapy-focused careers.',
    careers: ['Physiotherapist', 'Rehab Specialist', 'Sports Therapist'],
    seoTitle: 'BPT Course Details, Eligibility, Admission and Physiotherapy Scope | SG Education Solution',
    seoDescription:
      'Explore BPT course details including eligibility, duration, physiotherapy subjects, admission process, and career scope in rehabilitation, sports, and allied health.',
    seoKeywords: ['BPT course details', 'physiotherapy eligibility', 'BPT admission', 'physiotherapy careers', 'allied health courses'],
    heroHeadline: 'BPT course details for students planning physiotherapy and rehabilitation careers.',
    overview:
      'BPT, or Bachelor of Physiotherapy, is an allied-health program focused on physical rehabilitation, movement science, exercise therapy, injury recovery, and patient support. It suits students who want to work closely with patients in recovery, sports medicine, orthopaedics, and rehabilitation settings.',
    averageFees: 'Course costs vary by institute, hospital affiliation, and clinical infrastructure.',
    salaryRange: 'Initial roles depend on clinical exposure, internships, and specialisation choice.',
    studyFormat: 'Classroom learning, anatomy and movement studies, clinical practice, and supervised internships',
    eligibility: [
      'Most institutes require 10+2 with science subjects, especially Biology, depending on college norms.',
      'Admission can be through merit, counselling, or institute-specific entrance routes.',
      'Students should review practical training opportunities before selecting a college.',
    ],
    admissionProcess: [
      'Compare institutes based on hospital tie-ups, rehabilitation exposure, and practical training quality.',
      'Check intake process, eligibility, and documentation timelines carefully.',
      'Prioritise colleges with strong clinical settings and internship support for better readiness.',
    ],
    curriculum: [
      'Human anatomy, physiology, biomechanics, exercise therapy, and electrotherapy',
      'Orthopaedic, neurological, sports, and cardio-respiratory rehabilitation modules',
      'Clinical observation, practical training, case handling, and internship learning',
    ],
    specialisations: ['Sports Physiotherapy', 'Orthopaedic Rehab', 'Neuro Rehab', 'Cardio-Respiratory Therapy'],
    idealFor: [
      'Students who enjoy patient interaction and mobility-focused healthcare',
      'Applicants interested in allied-health roles rather than medicine or surgery',
      'Learners who want a practical rehabilitation-led healthcare profession',
    ],
    whyChoose: [
      'Growing relevance in sports, orthopaedics, recovery, and rehabilitation care',
      'Can lead to clinics, hospitals, wellness, and specialist therapy settings',
      'Balances healthcare service with a more focused allied-health career path',
    ],
    topRecruiters: ['Hospitals', 'Sports rehab centres', 'Physiotherapy clinics', 'Wellness and recovery centres'],
    faq: [
      {
        question: 'What does BPT stand for?',
        answer: 'BPT stands for Bachelor of Physiotherapy, an undergraduate allied-health course focused on rehabilitation and movement care.',
      },
      {
        question: 'Is BPT a medical degree?',
        answer: 'It is not an MBBS-style medical degree, but it is a respected healthcare course within the allied-health ecosystem.',
      },
      {
        question: 'What careers can students pursue after BPT?',
        answer: 'Students commonly move into clinical physiotherapy, rehabilitation, sports therapy, or specialised recovery-focused roles.',
      },
    ],
  },
  {
    slug: 'computer-science',
    title: 'Computer Science',
    category: 'Computer Science',
    duration: '3 - 4 years',
    destination: 'India, United States',
    mode: 'Undergraduate / Postgraduate',
    summary: 'Flexible route for software, AI, cybersecurity, and data-led careers.',
    careers: ['Developer', 'Data Engineer', 'Security Analyst'],
    seoTitle: 'Computer Science Course Details, Eligibility, Scope and Careers | SG Education Solution',
    seoDescription:
      'Discover computer science course details with eligibility, duration, subjects, specialisations, software and AI career scope, and guidance for choosing the right program.',
    seoKeywords: ['computer science course details', 'computer science eligibility', 'software careers', 'AI course scope', 'computer science admission'],
    heroHeadline: 'Computer science course details for students planning software, AI, and data-driven careers.',
    overview:
      'Computer Science is a broad academic pathway that prepares students for software development, systems thinking, cybersecurity, cloud, AI, machine learning, and data-driven careers. It is chosen by students who want strong digital-skill alignment and future-facing technical opportunities.',
    averageFees: 'Fee ranges depend on degree level, institute tier, and technology infrastructure.',
    salaryRange: 'Career outcomes often reflect project quality, internship exposure, and specialisation depth.',
    studyFormat: 'Theory, coding labs, projects, hackathons, portfolio work, and internships',
    eligibility: [
      'Eligibility differs by degree type, but science or mathematics background is commonly preferred for many programs.',
      'Some institutions admit based on board marks while others rely on entrance exams or profile screening.',
      'Students should review coding orientation, math comfort, and curriculum depth before applying.',
    ],
    admissionProcess: [
      'Choose the degree route such as B.Tech, B.Sc., BCA, or advanced computing-focused programs.',
      'Compare faculty strength, coding culture, labs, internships, and placement quality.',
      'Shortlist institutions that support modern software, AI, and systems learning rather than outdated curriculum design.',
    ],
    curriculum: [
      'Programming, data structures, algorithms, operating systems, databases, and computer networks',
      'Application-focused learning in software engineering, web systems, AI, ML, cloud, and security',
      'Project work, coding practice, internship learning, and portfolio-building exposure',
    ],
    specialisations: ['Software Development', 'Artificial Intelligence', 'Cybersecurity', 'Data Science', 'Cloud Computing'],
    idealFor: [
      'Students who enjoy logic, coding, digital systems, and structured problem-solving',
      'Applicants looking for high-growth sectors with strong adaptability',
      'Learners who want to combine technical depth with product and innovation opportunities',
    ],
    whyChoose: [
      'Strong relevance across startups, product companies, enterprise tech, and global digital teams',
      'Flexible pathways into software, AI, data, cybersecurity, and emerging computing domains',
      'Supports both employment-focused and higher-study-driven academic planning',
    ],
    topRecruiters: ['Product companies', 'IT services firms', 'Startups', 'Analytics and security teams'],
    faq: [
      {
        question: 'Is computer science only for coding jobs?',
        answer: 'No. It can lead to software, security, cloud, product, analytics, research, and systems-oriented roles.',
      },
      {
        question: 'Do students need strong maths for computer science?',
        answer: 'A comfort level with logic and mathematical thinking is useful, especially for algorithms, AI, and advanced computing topics.',
      },
      {
        question: 'How should students choose between B.Tech and other computer science routes?',
        answer: 'The right choice depends on your academic background, depth required, college quality, budget, and long-term goals.',
      },
    ],
  },
]

const exams = [
  {
    slug: 'jee-main-session-1',
    title: 'JEE Main Session 1',
    stream: 'Engineering',
    acceptedFor: 'Engineering and technical programs',
    format: 'Computer-based test',
    duration: '3 hours',
    scoreRange: 'Percentile based',
    prepWindow: 'Focused preparation cycle',
    examLevel: 'National',
    examDate: '30-01-2026',
    tips: ['Practice full-length mocks', 'Prioritise physics and maths timing', 'Track weak chapters weekly'],
  },
  {
    slug: 'cuet-pg',
    title: 'Common Universities Entrance Test Post Graduate',
    stream: 'Science',
    acceptedFor: 'Postgraduate university admissions',
    format: 'Computer-based test',
    duration: '2 hours',
    scoreRange: 'Score based',
    prepWindow: 'Structured revision cycle',
    examLevel: 'National',
    examDate: '30-09-2025',
    tips: ['Map syllabus to target university', 'Revise subject-specific concepts', 'Use timed practice papers'],
  },
  {
    slug: 'neet-ug',
    title: 'NEET UG',
    stream: 'Medical',
    acceptedFor: 'MBBS and allied medical routes',
    format: 'Offline entrance test',
    duration: '3 hours 20 minutes',
    scoreRange: 'Score and rank based',
    prepWindow: 'Long-cycle preparation',
    examLevel: 'National',
    examDate: '04-05-2026',
    tips: ['Strengthen NCERT recall', 'Practice biology accuracy', 'Solve previous-year papers'],
  },
  {
    slug: 'cat',
    title: 'CAT',
    stream: 'Management',
    acceptedFor: 'MBA and PGDM admissions',
    format: 'Computer-based test',
    duration: '2 hours',
    scoreRange: 'Percentile based',
    prepWindow: '10 - 16 weeks',
    examLevel: 'National',
    examDate: '29-11-2026',
    tips: ['Build section pacing', 'Improve LRDI discipline', 'Review mock analysis deeply'],
  },
]

const examStreams = [
  'Management',
  'Science',
  'Engineering',
  'Medical',
  'Commerce',
  'Arts',
  'Paramedical',
  'Pharmacy',
  'Education',
  'Dental',
  'Computer Science',
  'Law',
  'All Exams',
]

const blogPosts = [
  {
    slug: 'how-to-score-8-band-in-ielts-2025',
    title: 'How to Score 8+ Band in IELTS: Complete Preparation Guide',
    category: 'Exams',
    date: '18 Nov 2025',
    readTime: '6 min read',
    excerpt: 'A step-by-step IELTS preparation guide for students targeting strong study-abroad applications.',
    content: [
      'Scoring an 8+ band in IELTS is usually about structured preparation, consistent feedback, and clear timing strategy.',
      'Students should split prep time across reading speed, writing templates, speaking confidence, and listening repetition.',
      'The strongest plans include mock tests, answer review, and pattern analysis rather than only passive practice.',
      'A counsellor or mentor can help align your target band with your course and destination needs.',
    ],
  },
  {
    slug: 'how-to-choose-study-destination',
    title: 'How to Choose the Right Study Destination for Your Career Goals',
    category: 'Planning',
    date: '13 Apr 2026',
    readTime: '6 min read',
    excerpt: 'A practical framework to match your academic profile, budget, and long-term career plans.',
    content: [
      'The right destination is not simply the most popular one. It is the place where your profile, budget, course intent, and work expectations align cleanly.',
      'Start with the outcome you want after graduation. If you want a short masters with global brand value, the UK can be compelling. If you want applied post-grad programs and co-op, Canada may fit better.',
      'Budget should include tuition, visa, travel, health cover, and at least six months of living cost runway. A realistic plan creates better choices and lower stress.',
      'Finally, compare admission flexibility, intake timing, and language test expectations so your timeline feels achievable instead of rushed.',
    ],
  },
  {
    slug: 'student-visa-documents-checklist',
    title: 'Student Visa Documents Checklist: What to Prepare Early',
    category: 'Visa',
    date: '08 Apr 2026',
    readTime: '5 min read',
    excerpt: 'The documents students often miss, and how to organise your file before deadlines pile up.',
    content: [
      'Strong visa files are rarely built in the final week. They are organised gradually, with clean scans, clear financial evidence, and consistent academic records.',
      'Keep a single folder for passport pages, academic transcripts, language test reports, experience documents, and financial statements.',
      'If a country needs purpose statements or interviews, prepare the narrative early so every part of your file says the same thing about your goals.',
      'Working with a counsellor helps you spot small inconsistencies before they turn into delays.',
    ],
  },
]

const testimonials = [
  {
    name: 'Shri',
    course: 'IELTS Student',
    quote: 'The counselling felt personal and clear. I always knew what to do next.',
  },
  {
    name: 'Aaditya Joshi',
    course: 'MBBS Admission Support',
    quote: 'The team made college shortlisting and documentation much easier for my family.',
  },
  {
    name: 'Megha Patel',
    course: 'MBA Counselling',
    quote: 'What I liked most was the honest advice. The options felt practical, not random.',
  },
]

const faqItems = [
  {
    question: 'Do you guide students for India and abroad both?',
    answer:
      'Yes. The redesigned frontend covers Indian college discovery as well as selected abroad destinations and application support.',
  },
  {
    question: 'Can students search by category like MBBS, B.Tech, MBA, or exams?',
    answer:
      'Yes. The homepage, dropdown menus, filters, and search all support category-led discovery so students can move faster.',
  },
  {
    question: 'Is this frontend ready for PHP integration later?',
    answer:
      'Yes. Search, enquiry forms, blog content, and listing sections are structured so PHP APIs or admin panels can replace the static data later.',
  },
]

const admissionsSteps = [
  {
    title: 'Counselling session',
    description: 'Understand goals, score profile, budget range, and preferred study location.',
  },
  {
    title: 'Course and college shortlist',
    description: 'Map the right field, country or state, and realistic college options.',
  },
  {
    title: 'Application execution',
    description: 'Prepare documents, complete forms, and track submissions carefully.',
  },
  {
    title: 'Admission and next steps',
    description: 'Move into offer handling, counselling, and future PHP-powered status tracking.',
  },
]

const backendSpace = [
  'Lead capture endpoints for forms and callbacks',
  'Dynamic college, course, and exam feeds',
  'Admin-managed news, blogs, and home sections',
  'Search indexing and analytics with PHP APIs',
]

const whyChoosePoints = [
  {
    title: 'Verified and trusted information',
    description: 'Students get cleaner data, clearer options, and less guesswork while shortlisting.',
  },
  {
    title: 'Expert career guidance',
    description: 'Support is organised around goals, eligibility, and better decision-making.',
  },
  {
    title: 'Personalized recommendations',
    description: 'Students can move from browsing to a realistic shortlist much faster.',
  },
  {
    title: 'Global opportunities and support',
    description: 'India and abroad journeys both have space in the same responsive system.',
  },
]

const footerGroups = [
  {
    title: 'Find Colleges',
    links: [
      { label: 'B.Sc.', href: '/courses?category=Science' },
      { label: 'B.Tech', href: '/courses?category=Engineering' },
      { label: 'MBBS', href: '/courses?category=Medical' },
      { label: 'MBA', href: '/courses?category=Management' },
      { label: 'LLB', href: '/courses?category=Arts' },
      { label: 'BPT', href: '/courses?category=Paramedical' },
    ],
  },
  {
    title: 'Countries',
    links: countryShortcuts.map((country) => ({ label: country.label, href: country.href })),
  },
  {
    title: 'Exams',
    links: exams.slice(0, 3).map((exam) => ({ label: exam.title, href: '/exams' })),
  },
]

const spotlightMetrics = [
  { value: '10,000+', label: 'Students can browse a wider college universe from one place' },
  { value: '12+', label: 'Responsive sections built to scale into backend-driven modules' },
  { value: '24/7', label: 'Site structure designed to support student enquiries anytime' },
]

function buildSearchIndex() {
  const searchableGroups = [
    {
      type: 'Country',
      items: countries,
      getLabel: (item) => item.name,
      getPath: (item) => `/countries/${item.slug}`,
      getText: (item) => `${item.summary} ${item.topPrograms.join(' ')}`,
    },
    {
      type: 'College',
      items: colleges,
      getLabel: (item) => item.name,
      getPath: () => '/colleges',
      getText: (item) => `${item.category} ${item.country} ${item.location} ${item.summary} ${item.programs.join(' ')}`,
    },
    {
      type: 'Course',
      items: courses,
      getLabel: (item) => item.title,
      getPath: (item) => `/courses/${item.slug}`,
      getText: (item) => `${item.category} ${item.destination} ${item.summary} ${item.careers.join(' ')}`,
    },
    {
      type: 'Exam',
      items: exams,
      getLabel: (item) => item.title,
      getPath: () => '/exams',
      getText: (item) => `${item.stream} ${item.acceptedFor} ${item.examLevel} ${item.tips.join(' ')}`,
    },
    {
      type: 'Blog',
      items: blogPosts,
      getLabel: (item) => item.title,
      getPath: (item) => `/blog/${item.slug}`,
      getText: (item) => `${item.category} ${item.excerpt}`,
    },
  ]

  return searchableGroups.flatMap(({ type, items, getLabel, getPath, getText }) =>
    items.map((item) => ({
      type,
      label: getLabel(item),
      path: getPath(item),
      description: getText(item),
      keywords: `${getLabel(item)} ${getText(item)}`.toLowerCase(),
    })),
  )
}

const searchIndex = buildSearchIndex()

export {
  admissionsSteps,
  abroadDestinations,
  backendSpace,
  blogPosts,
  careerPaths,
  colleges,
  countries,
  countryShortcuts,
  courses,
  examStreams,
  exams,
  faqItems,
  footerGroups,
  nationalDestinations,
  navigation,
  searchIndex,
  siteMeta,
  spotlightMetrics,
  testimonials,
  topLinks,
  whyChoosePoints,
}
