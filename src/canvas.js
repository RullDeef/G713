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
