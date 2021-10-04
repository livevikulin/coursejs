import DonateForm from "./donate-form"
import DonateList from "./donate-list"
import { calculateSumOfNumbers as sumNumbers } from "../core/utils/index.js"

const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date() },
	{ amount: 3, date: new Date() },
	{ amount: 1, date: new Date() },
]

export default class App {
	#donateForm 
	#donateList

	constructor() {
		this.body = document.querySelector('body')
		this.state = {
			donates: mockDonates,
			totalAmount: sumNumbers(mockDonates),
		}
		this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
		this.#donateList = new DonateList(this.state.donates)
	}

	createNewDonate(newDonate) {
		this.state.donates.push(newDonate)
		this.state.totalAmount = this.state.totalAmount + newDonate.amount
		this.#donateList.updateDonates(this.state.donates)
		this.#donateForm.updateTotalAmount(this.state.totalAmount)
	}

	run() {
		const formRender = this.#donateForm.render()
		const containerRender = this.#donateList.render()

		this.body.append(formRender, containerRender)
	}
}