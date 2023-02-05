export interface readMoreInterface {
    title: string
    text: string
}

export interface frontendInterface {
    img: string,
    title: string,
    text: string
}

export interface menuItem {
    title: string,
    path: string,
}

export interface messageAlert {
    open: boolean,
    message: string,
}

export interface wide {
    wide: boolean,
}

export interface fullscreenProps {
    wide: boolean,
    fullScreen: number
}
