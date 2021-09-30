import DonateForm from "./donate-form"
import DonateList from "./donate-list"

export default class App {
    constructor() {
        this.body = document.querySelector('body')
    }
    run() {
		const mockDonates = [
			{ amount: 4, date: new Date() },
			{ amount: 20, date: new Date() },
			{ amount: 3, date: new Date() },
			{ amount: 1, date: new Date() },
		 ]

        const form = new DonateForm()
		const container = new DonateList(mockDonates)

        const formRender = form.render()
		const containerRender = container.render()

        this.body.append(formRender, containerRender)
    }
}