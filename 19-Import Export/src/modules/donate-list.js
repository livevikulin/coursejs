export default class DonateList {
	constructor(donates) {
		this.donates = donates
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

		const donateItem = this.createDonateItem()
		donatesWrapper.append(donateItem)

		return donatesWrapper
	}

	createDonateItem() {

		const donates = this.donates.map(donate => {
			const donateItem = document.createElement('div')
			donateItem.className = 'donate-item'

			const {amount, date} = donate
			donateItem.append(amount, date)
			
			return donateItem
		})

		return donates
	}
}