type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}

let widget: Draggable & Resizable = {
    drag: () => {},
    resize: () => {}
}

// or 

type UIWidget = Draggable & Resizable;

let widget2: UIWidget = {
    drag: () => {},
    resize: () => {}
}