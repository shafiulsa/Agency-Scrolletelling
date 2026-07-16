export const config = {
    sections: ["home", "skills", "projects", "contact", "mission", "vision", "showcase"],
    theme: {
        defaultBackground: "#080d1a",
        /** Central colour for the neon reveal block used across all TextReveal components */
        revealBlock: "#4c1dceff",
        sections: {
            home: {
                background: "#080d1a",
            },
            skills: {
                background: "#0a1128",
            },
            projects: {
                background: "#0f172a",
            },
            contact: {
                background: "#0a0f1d",
            },
            mission: {
                background: "#080d1a",
            },
            vision: {
                background: "#0b132b",
            },
            showcase: {
                background: "#030712",
            },
        },
    },

    home: {
        title: "We Build Brand",
        subtitle: "That Stands Out",
    },
    skillCategories: [
        {
            label: "Frontend",
            items: ["React & React Three Fiber", "JavaScript / TypeScript", "Tailwind CSS & Animations"],
        },
        {
            label: "3D & Creative",
            items: ["Three.js & WebGL", "Blender 3D Modeling", "GSAP Motion Systems"],
        },
        {
            label: "Engineering",
            items: ["Performance Optimization", "Clean Architecture", "API & Backend Integration"],
        },
    ],
    projectCategories: [
        {
            label: "Web Applications",
            items: ["Full-Stack React Apps", "Node.js REST APIs", "Database Architecture"],
        },
        {
            label: "3D Experiences",
            items: ["WebGL & R3F Scenes", "Interactive 3D Models", "Custom GLSL Shaders"],
        },
        {
            label: "Creative Dev",
            items: ["Motion & Scroll Design", "GSAP Timeline Systems", "Reusable Components"],
        },
    ],
    skills: [
        {
            name: "React",
            icon: "icons/react-native.png",
            level: 80,
        },
        {
            name: "JavaScript",
            icon: "icons/javascript.png",
            level: 85,
        },
        {
            name: "Three.js",
            icon: "icons/threejs.png",
            level: 70,
        },
        {
            name: "Blender",
            icon: "icons/blender-3d.png",
            level: 60,
        },
    ],

    projects: [
        {
            name: "Dissolve tutorial",
            description: "Create a dissolve effect with React Three Fiber",
            image: "projects/project1.jpg",
        },
        {
            name: "Bui ld a Portfolio",
            description: "Learn how to build a 3D portfolio with React Three Fiber",
            image: "projects/project2.jpg",
        },
        {
            name: "3D Room",
            description: "Creating a stunning 3D room with Blender and R3F",
            image: "projects/project3.jpg",
        },
        {
            name: "Interactive Scene",
            description: "Making your 3D scenes interactive and engaging",
            image: "projects/project4.jpg",
        },
    ],
    contact: {
        name: "Shafiul",
        address: "Dhaka, Bangladesh",
        socials: {
            linkedin: "https://www.linkedin.com/in/shafiul05/",
            twitter: "https://twitter.com/wawasenseimm",
        },
        mail: "contact@me.com"
    },
    mission: {
        title: "Mission",
        subtitle: "What drives my work",
        description:
            "To build thoughtful digital experiences that are useful, reliable, and easy for people to enjoy. I focus on clean interfaces, strong foundations, and practical solutions that turn ideas into products people can actually use.",
        points: [
            "Create user-focused web experiences",
            "Keep code clean, scalable, and maintainable",
            "Solve real problems with simple digital solutions",
        ],
    },
    vision: {
        title: "Vision",
        subtitle: "Where I am heading",
        description:
            "To grow as a creative developer who blends design, technology, and problem solving to make modern web products that feel polished, accessible, and meaningful.",
        points: [
            "Build products with long-term value",
            "Keep learning modern tools and best practices",
            "Design experiences that feel clear and professional",
        ],
    },

}
