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
        implementation: 'Join was a group effort. Together with three other colleagues, our task included dividing the project into different parts and organizing them via Github. My role was the login and the task board. For the backend, we used Firebase.',
        implementationDE: 'Join war eine Gruppenarbeit. Zusammen mit drei weiteren Kollegen war die Aufgabe unter anderem das Projekt in verschiedene Teile aufzuteilen und über Github zu organisieren. Meine Aufgabe war der Login und das Taskboard. Für das Backend verwendeten wir Firebase',
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
        implementation: 'In this project, I focused on an object-oriented solution. Implementing gravity and game logic was the challenge.',
        implementationDE: 'In diesem Project konzentrierte ich mich auf eine Objekt-Orientierte-Lösung. Die Implementierung der Gravitation und Spiellogik war in diesem Projekt die Herausforderung.',
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