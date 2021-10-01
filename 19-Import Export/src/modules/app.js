import DonateForm from "./donate-form"
import DonateList from "./donate-list"

export default class App {
    constructor() {
        this.body = document.querySelector('body')
		this.state = {
			donates: [],
			totalAmount: 0,
		}
    }
    run() {
		const mockDonates = [
			{ amount: 4, date: new Date() },
			{ amount: 20, date: new Date() },
			{ amount: 3, date: new Date() },
			{ amount: 1, date: new Date() },
		]
		
		const updateAmount = this.state.totalAmount
        const form = new DonateForm(updateAmount)
		const container = new DonateList(mockDonates)

        const formRender = form.render()
		const containerRender = container.render()

        this.body.append(formRender, containerRender)
    }
}