import { settings as sets } from "../core/constants/settings";
import { getFormatedDate as FormatedDate } from "../core/utils/index.js";

export default class DonateList {
	#donates

	constructor(donates) {
		this.#donates = donates
	}

	render() {
		return this.createDonatesContainer()
	}

	createDonatesContainer() {
		const container = document.createElement('div')
		container.className = 'donates-container'

		const containerTitle = this.createDonatesContainerTitle('Список донатов')
		const donatesWrapper = this.createDonatesWrapper()
		
		container.append(containerTitle, donatesWrapper)

		return container
	}

	createDonatesContainerTitle(titleText) {
		const title = document.createElement('h2')
		title.className = 'donates-container__title'
		title.innerHTML = titleText

		return title
	}

	createDonatesWrapper() {
		const donatesWrapper = document.createElement('div')
		donatesWrapper.className = 'donates-container__donates'

		const donateItems = this.createDonateItems()
		donateItems.forEach(donateItem => {
			donatesWrapper.append(donateItem)
		})

		return donatesWrapper
	}

	createDonateItems() {
		const donates = this.#donates.map(donate => {
			const donateItem = document.createElement('div')
			donateItem.className = 'donate-item'

			const {amount, date} = donate
			donateItem.innerHTML = `${FormatedDate(date)} - <b>${amount}${sets.currency}</b>`
			
			return donateItem
		})
		
		return donates
	}

	updateDonates(updateDonates) {
		const donatesContainer = document.querySelector('.donates-container')
		donatesContainer.remove()
		
		const container = document.createElement('div')
		container.className = 'donates-container'

		const title = document.createElement('h2')
		title.className = 'donates-container__title'

		const donatesWrapper= document.createElement('div')
		donatesWrapper.className = 'donates-container__donates'

		updateDonates.forEach((donate) => {
			const donateItem = document.createElement('div')
			const {amount, date} = donate

			donateItem.className = 'donate-item'
			donateItem.innerHTML = `${FormatedDate(date)} - <b>${amount}${sets.currency}</b>`
			donatesWrapper.append(donateItem)
		})

		container.append(title, donatesWrapper)
		document.body.append(container)
	}
}