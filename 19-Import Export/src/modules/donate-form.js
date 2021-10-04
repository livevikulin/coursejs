import { settings as sets } from "../core/constants/settings.js";

export default class DonateForm {
	#form

	constructor(totalAmount, createNewDonate) {
		this.#form
		this.totalAmount = totalAmount
		this.createNewDonate = createNewDonate
	}

	render() {
		this.#form = this.createform()
		this.#form.addEventListener('submit', this.createNewDonateSubmit.bind(this))
		return this.#form
	}

	createform() {
		const form = document.createElement('form')
		form.className = 'donate-form'

		const title = this.createTitle(this.totalAmount)
		const input = this.createInput({
			name: "amount",
			type: "number",
			max: "100",
			min: "0",
			required: ""
		})
		
		const label = this.createLabel('Введите сумму в $', input)
		const button = this.createButton('Задонатить', 'submit')

		form.append(title, label, button)

		return form
	}

	updateTotalAmount(newAmount = 0) {
		const totalAmount = document.querySelector('#total-amount')
		totalAmount.innerHTML = `${newAmount}${sets.currency}`
	}

	createNewDonateSubmit(event) {
		event.preventDefault()
		const newDonateValue = Number(event.target.amount.value)

		if (newDonateValue && this.createNewDonate) {
			const newDonate = {
				amount: newDonateValue,
				date: new Date(),
			}

			this.createNewDonate(newDonate)
			event.target.amount.value = ''
		}
	}

	createTitle() {
		let title = document.createElement('h1')
		
		title.id = 'total-amount'
		title.innerHTML = `${this.totalAmount}${sets.currency}`

		return title
	}
	createLabel(textLabel, input) {
		const label = document.createElement('label')

		label.className = 'donate-form__input-label'
		label.append(textLabel, input)

		return label
	}
	createInput(props) {
		const { name, type, max, min, required } = props
		const input = document.createElement('input')

		input.className = 'donate-form__donate-input'
		input.name = name
		input.type = type
		input.max = max
		input.min = min
		input.required = required

		return input
	}
	createButton(textButton, type) {
		const button = document.createElement('button')

		button.className = 'donate-form__submit-button'
		button.type = type
		button.innerHTML = textButton

		return button
	}
}