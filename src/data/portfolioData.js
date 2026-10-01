export const profile = {
    name: "Shreyash Gurav",
    role: "Full-Stack Web Developer",
    roleLine: "React.js · Django · Python",
    currentRole: "Trainee Engineer",
    currentCompany: "Walstar Technologies Pvt. Ltd.",
    email: "shreyashgurav317@gmail.com",
    phone: "+91-7058204125",
    phoneHref: "tel:+917058204125",
    location: "Kolhapur, Maharashtra",
    locationMeta: "16.70°N · 74.02°E",
    heroIntro:
        "I'm a software engineer specializing in Full Stack Development with React.js, Django and Python — building responsive web experiences with JavaScript, HTML5, CSS3 and MySQL, from pixel-tuned front-ends to reliable back-ends.",
};


export const about = {
    paragraphs: [
        "I'm a software engineer currently working as a Trainee Engineer at Walstar Technologies Pvt. Ltd., where I develop and maintain responsive WordPress websites and collaborate directly with clients — from gathering requirements to translating feedback into live, functional updates.",

        "My core stack is full-stack development with React.js, Django and Python. I work comfortably in the browser with HTML5, CSS3, Bootstrap and JavaScript, in MySQL on the data side, and I bring additional hands-on experience in WordPress development and theme customization.",

        "I use Git and GitHub in every workflow, and I care about the details: clean, scalable, maintainable code, systematic debugging, and performance tuning. Continuous learning is how I work.",
    ],

    strengths: [
        "Responsive, client-ready front-ends",
        "Full-stack builds with React.js & Django",
        "WordPress theming & plugin customization",
        "Systematic troubleshooting & bug fixing",
        "Performance & load-time optimization",
        "Git-based, collaborative workflows",
    ],

    quickFacts: [
        {
            label: "Current Role",
            value: "Trainee Engineer",
            sub: "Walstar Technologies Pvt. Ltd.",
        },
        {
            label: "Based In",
            value: "Kolhapur, Maharashtra",
            sub: "India",
        },
        {
            label: "Education",
            value: "B.Tech · E&TC",
            sub: "CGPA 8.33 / 10",
        },
        {
            label: "Core Stack",
            value: "React · Django · Python",
            sub: "Full-Stack Development",
        },
    ],

    codeCard: {
        fileName: "shreyash.js",
        lines: [
            { indent: 0, code: "const developer = {" },
            { indent: 1, code: 'name: "Shreyash Gurav",' },
            { indent: 1, code: 'stack: ["React.js", "Django", "Python"],' },
            { indent: 1, code: 'database: "MySQL",' },
            { indent: 1, code: 'cms: "WordPress",' },
            { indent: 1, code: "problemSolver: true," },
            { indent: 1, code: 'focus: "clean, scalable code",' },
            { indent: 1, code: 'status: "building & learning",' },
            { indent: 0, code: "};" },
            { indent: 0, code: "" },
            { indent: 0, code: "developer.build(); // shippable" },
        ],
    },
};

export const skillCategories = [
    {
        title: "Programming Languages",
        icon: "bi-code-slash",
        color: "#f5a83c",
        blurb: "The languages I think in.",
        skills: [
            { name: "Python", code: "Py" },
            { name: "JavaScript", code: "JS" },
            { name: "C", code: "C" },
            { name: "C++", code: "C+" },
        ],
    },

    {
        title: "Frontend",
        icon: "bi-vector-pen",
        color: "#64b5f6",
        blurb: "Interfaces that feel polished.",
        skills: [
            { name: "HTML5", code: "H5" },
            { name: "CSS3", code: "C3" },
            { name: "Bootstrap", code: "BS" },
            { name: "React.js", code: "Re" },
        ],
    },

    {
        title: "Backend",
        icon: "bi-hdd-network",
        color: "#45d0b5",
        blurb: "Reliable servers & APIs.",
        skills: [
            { name: "Django", code: "Dj" },
        ],
    },

    {
        title: "Database",
        icon: "bi-database",
        color: "#f97b5f",
        blurb: "Structured, queryable data.",
        skills: [
            { name: "MySQL", code: "My" },
        ],
    },

    {
        title: "CMS",
        icon: "bi-file-earmark-richtext",
        color: "#b5d96b",
        blurb: "Customizable client sites.",
        skills: [
            { name: "WordPress", code: "Wp" },
        ],
    },

    {
        title: "Tools & Technologies",
        icon: "bi-tools",
        color: "#94a3b8",
        blurb: "The daily drivers.",
        skills: [
            { name: "Git", code: "Gi" },
            { name: "GitHub", code: "Gh" },
            { name: "VS Code", code: "VS" },
        ],
    },
];

export const education = [
    {
        period: "2021 — 2025",
        degree: "B.Tech in Electronics & Telecommunication Engineering",
        institution: "Bharati Vidyapeeth's College of Engineering, Kolhapur",
        score: "CGPA: 8.33 / 10",
        description:
            "Built a strong engineering foundation while developing practical skills in programming, electronics, problem solving and software development.",
    },

    {
        period: "2019 — 2021",
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Vivekanand College, Kolhapur",
        score: "90.67%",
        description:
            "Completed higher secondary education with a strong academic foundation.",
    },

    {
        period: "2019",
        degree: "Secondary School Certificate (SSC)",
        institution: "Maharashtra High School, Kolhapur",
        score: "87.60%",
        description:
            "Completed secondary education with a strong academic performance.",
    },
];

export const experiences = [
    {
        role: "Trainee Engineer",
        company: "Walstar Technologies Pvt. Ltd.",
        period: "Feb 2026 — Present",
        location: "Kolhapur, Maharashtra",
        type: "Full-time",
        description:
            "Developing and maintaining responsive WordPress websites while working on client requirements, website updates, troubleshooting and performance improvements.",

        responsibilities: [
            "Develop and maintain responsive WordPress websites.",
            "Build and customize pages using Elementor, ACF and custom templates.",
            "Implement and manage contact forms using Contact Form 7.",
            "Troubleshoot WordPress, plugin, CSS and responsive layout issues.",
            "Handle client-requested website updates and content changes.",
            "Work with hosting platforms, SFTP and WordPress administration for website maintenance.",
        ],

        technologies: [
            "WordPress",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "Elementor",
            "ACF",
            "Git",
        ],
    },
];

import pureHueImage from "../assets/images/PureHue.jpg";
import TomatoImage from "../assets/images/Tomato.png";
import ExpenseTracker from "../assets/images/ExpenseTracker.png";
export const projects = [
    {
        title: "PureHue",
        subtitle: "Dynamic Product Visualization Web App",
        category: "Interactive UI",
        image: pureHueImage,

        technologies: ["HTML", "CSS", "JavaScript"],

        highlights: [
            "Built an interactive product showcase with real-time UI color and theme updates.",
            "Applied modular CSS and JavaScript for scalable and consistent design.",
        ],

        liveUrl: "https://shreyash3128.github.io/PureHue/",
        githubUrl: "https://github.com/shreyash3128/PureHue",
    },

    {
        title: "Tomato",
        subtitle: "Food Delivery Web Application",
        category: "React · Context API",
        image: TomatoImage,

        technologies: ["React.js"],

        highlights: [
            "Developed a responsive food delivery web application using React.js.",
            "Implemented dynamic cart management with real-time price calculation.",
            "Used React Context API and reusable components for scalable state management.",
        ],

        liveUrl: "https://tomato-food-delivery-web-applicatio.vercel.app/",
        githubUrl: "https://github.com/shreyash3128/Tomato.-Food-Delivery-Web-Application",
    },

    {
        title: "Expense Tracker",
        subtitle: "Full-Stack Web Application",
        category: "Full-Stack · CRUD",
        image: ExpenseTracker,

        technologies: ["Python", "SQL", "HTML", "CSS", "JS"],

        highlights: [
            "Designed and developed a full-stack web application to track personal expenses.",
            "Implemented CRUD functionality with category-wise and monthly expense analysis.",
            "Built a relational database schema for efficient data storage and retrieval.",
        ],

        liveUrl: "",
        githubUrl: "https://github.com/shreyash3128/Expense-Tracker-Web-Application",
    },
];

export const certifications = [
    {
        title: "Python Full Stack",
        issuer: "QSpiders, Pune",
        icon: "bi-patch-check-fill",
        certificateUrl: "",
    },
    {
        title: "C++ Programming",
        issuer: "Exel Computers",
        icon: "bi-code-slash",
        certificateUrl: "",
    },
    {
        title: "Data Structures & Algorithms",
        issuer: "Simpli Learn",
        icon: "bi-award-fill",
        certificateUrl: "https://drive.google.com/file/d/1W9_AS1HI312S8zWaKBI4WGq03rVVwsQx/view",
    },
];

export const contact = {
    heading: "Let's build something useful.",
    description:
        "I'm open to software development opportunities, collaborations and conversations about building great web experiences.",

    email: "shreyashgurav317@gmail.com",
    phone: "+91 70582 04125",
    phoneHref: "tel:+917058204125",
    location: "Kolhapur, Maharashtra",

    socials: [
        {
            name: "GitHub",
            icon: "bi-github",
            url: "https://github.com/shreyash3128",
        },
        {
            name: "LinkedIn",
            icon: "bi-linkedin",
            url: "https://www.linkedin.com/in/shreyash-gurav-057b80232/",
        },
    ],
};