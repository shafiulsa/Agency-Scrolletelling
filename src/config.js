export const config = {
    sections: ["home", "skills", "projects", "contact", "mission", "vision"],
    theme: {
        defaultBackground: "#f5f3ee",
        sections: {
            home: {
                background: "#f5f3ee",
            },
            skills: {
                background: "#eef7f6",
            },
            projects: {
                background: "#f4f0ff",
            },
            contact: {
                background: "#fff4e8",
            },
            mission: {
                background: "#eff6ff",
            },
            vision: {
                background: "#f8fbff",
            },
        },
    },

    home: {
        title: "Hi",
        description: " Developer",
    },
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
