const Canvas = {
    cvs: null,
    ctx: null,

    init: () => {
        this.cvs = document.querySelector("canvas")
        this.ctx = this.cvs.getContext("2d")

        const resize = () => {
            this.cvs.width = window.innerWidth
            this.cvs.height = window.innerHeight
        }

        window.addEventListener("resize", resize)
        resize()
    }
}

window.addEventListener("load", () => {
    Canvas.init()

    Canvas.ctx.strokeRect(10, 10, 200, 100)

    console.log("hello, world!")
})
class User {
    constructor() {
        this.name = "Guest"
        this.age = 18
    }
}
