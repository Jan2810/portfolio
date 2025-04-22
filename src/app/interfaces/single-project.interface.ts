import { Tool } from "./tool.interface";

export interface SingleProject {
    title: string;
    description: string;
    descriptionDE: string;
    implementation: string;
    implementationDE: string;
    duration: string;
    durationDE: string;
    imgPath: string;
    sticker: string;
    usedTools: Tool[];
    github: string;
    liveTest: string;
}

export const projects: SingleProject[] = [
    {
        title: 'Join',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        descriptionDE: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag & Drop und weisen Sie Benutzer und Kategorien zu.',
        implementation: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
        implementationDE: 'Kurzer Text, der Ihre Rolle oder den Arbeitsablauf für dieses spezielle Projekt beschreibt. Informieren Sie einen Recruiter über Ihr Wissen und Ihre Fähigkeit, selbstständig oder strukturiert zu arbeiten.',
        duration: '4 weeks',
        durationDE: '4 Wochen',
        imgPath: './assets/img/single_project_view/project_img_join.png',
        sticker: './assets/img/single_project_view/sticker_featured_project.png',
        usedTools: [
            { img: './assets/img/single_project_view/logo_javascript.png', name: 'JavaScript' },
            { img: './assets/img/single_project_view/logo_firebase.png', name: 'Firebase' },
            { img: './assets/img/single_project_view/logo_html.png', name: 'HTML' },
            { img: './assets/img/single_project_view/logo_css.png', name: 'CSS' },
        ],
        github: 'https://github.com/Jan2810/join',
        liveTest: 'https://join.jan-steiner-dev.de',
    },
    {
        title: 'El Pollo Loco',
        description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        descriptionDE: 'Objektorientiertes Jump & Run-Game. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
        implementation: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
        implementationDE: 'Kurzer Text, der Ihre Rolle oder den Arbeitsablauf für dieses spezielle Projekt beschreibt. Informieren Sie einen Recruiter über Ihr Wissen und Ihre Fähigkeit, selbstständig oder strukturiert zu arbeiten.',
        duration: '5 weeks',
        durationDE: '5 Wochen',
        imgPath: './assets/img/single_project_view/project_img_el_pollo_loco.png',
        sticker: './assets/img/single_project_view/sticker_yellow1.png',
        usedTools: [
            { img: './assets/img/single_project_view/logo_javascript.png', name: 'JavaScript' },
            { img: './assets/img/single_project_view/logo_html.png', name: 'HTML' },
            { img: './assets/img/single_project_view/logo_css.png', name: 'CSS' },
        ],
        github: 'https://github.com/Jan2810/el-pollo-loco',
        liveTest: 'https://elpolloloco.jan-steiner-dev.de',
    },
    {
        title: 'Pokedex',
        description: 'An app with complete data on all Pokemon. It has a search function and many other features.',
        descriptionDE: 'Eine App mit sämtlichen Daten über alle Pokemon. Es gibt eine Suchfunktion und viele weiter Features.',
        implementation: 'One of my first projects. This was the first time I worked with an API in combination with JavaScript.',
        implementationDE: 'Eines meiner ersten Projekte. Hier habe ich zum ersten mal mit einer API in Kombination mit Javascript gearbeitet.',
        duration: '3 weeks...',
        durationDE: '3 Wochen...',
        imgPath: './assets/img/single_project_view/project_img_pokedex.png',
        sticker: './assets/img/single_project_view/sticker_yellow1.png',
        usedTools: [
            { img: './assets/img/single_project_view/logo_javascript.png', name: 'Javascript' },
            { img: './assets/img/single_project_view/logo_html.png', name: 'HTML' },
            { img: './assets/img/single_project_view/logo_css.png', name: 'CSS' },
        ],
        github: 'https://github.com/Jan2810/pokedex',
        liveTest: 'https://pokedex.jan-steiner-dev.de',
    }
]