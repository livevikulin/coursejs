import DonateForm from "./donate-form"

export default class App {
    constructor() {
        this.body = document.querySelector('body')
    }
    run() {
        const form = new DonateForm()
        const formRender = form.render()
        this.body.appendChild(formRender)
    }
}