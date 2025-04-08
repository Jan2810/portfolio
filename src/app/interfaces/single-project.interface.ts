import { Tool } from "./tool.interface";

export interface SingleProject {
    title: string;
    description: string;
    implementation: string;
    duration: string;
    imgPath: string;
    sticker: string;
    usedTools: Tool[];
    github: string;
    liveTest: string;
}

export const projects: SingleProject[] = [
    {
        title: 'Join',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        implementation: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
        duration: '4 weeks',
        imgPath: './assets/img/single_project_view/project_img_join.png',
        sticker: './assets/img/single_project_view/sticker_featured_project.png',
        usedTools: [
            { img: './assets/img/single_project_view/logo_javascript.png', name: 'JavaScript' },
            { img: './assets/img/single_project_view/logo_firebase.png', name: 'Firebase' },
            { img: './assets/img/single_project_view/logo_html.png', name: 'HTML' },
            { img: './assets/img/single_project_view/logo_css.png', name: 'CSS' },
        ],
        github: 'https://github.com/Jan2810/join',
        liveTest: ''
    },
    {
        title: 'El Pollo Loco',
        description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        implementation: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
        duration: '5 weeks',
        imgPath: './assets/img/single_project_view/project_img_el_pollo_loco.png',
        sticker: './assets/img/single_project_view/sticker_yellow1.png',
        usedTools: [
            { img: './assets/img/single_project_view/logo_javascript.png', name: 'JavaScript' },
            { img: './assets/img/single_project_view/logo_html.png', name: 'HTML' },
            { img: './assets/img/single_project_view/logo_css.png', name: 'CSS' },
        ],
        github: 'https://github.com/Jan2810/el-pollo-loco',
        liveTest: ''
    },
    {
        title: 'DABubble',
        description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        implementation: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
        duration: '4 weeks',
        imgPath: './assets/img/single_project_view/project_img_da_bubble.png',
        sticker: './assets/img/single_project_view/sticker_yellow1.png',
        usedTools: [
            { img: './assets/img/single_project_view/logo_angular.png', name: 'Angular' },
            { img: './assets/img/single_project_view/logo_typescript.png', name: 'TypeScript' },
            { img: './assets/img/single_project_view/logo_firebase.png', name: 'Firebase' },
            { img: './assets/img/single_project_view/logo_html.png', name: 'HTML' },
            { img: './assets/img/single_project_view/logo_css.png', name: 'CSS' },
        ],
        github: '',
        liveTest: ''
    }
]