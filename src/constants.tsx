import { readMoreInterface, frontendInterface, menuItem } from "./Interfaces"
import html from "./assets/htmlLogo.png"
import js from "./assets/jsLogo.png"
import css from "./assets/css3Logo.png"

export const readMore: readMoreInterface = {
    title: "Experts in Co-creation",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos."
}

export const frontend: frontendInterface[] = [
    {
        img: html,
        title: "HTML5",
        text: "HTML5 is a markuo language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard."
    },
    {
        img: css,
        title: "CSS3",
        text: "Cascading Style Sheet language used for describing the presentation of a document written in a markup language."
    },
    {
        img: js,
        title: "JS",
        text: "Javascript, often abbreviated as JS, is a high-level dynamic, dynamic, weakly typed, prototype-based, multy-paradigm and interpreted programming language."
    },
]


export const menuItems: menuItem[] = [
    {
        title: "Portfolio",
        path: "At the bottom there is a link to my portfolio",
    },
    {
        title: "CV",
        path: "At the bottom there is a link to download my CV",
    },
    {
        title: "Personal letter",
        path: "At the bottom there is a link to download my Personal letter",
    }
]