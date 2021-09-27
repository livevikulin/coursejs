export default class DonateForm {
    constructor() {
        this.form
    }
    render() {
        this.form = this.createform()
        return this.form
    }
    createform() {
        const form = document.createElement('form')
        form.className = 'donate-form'

        const title = this.createTitle('28$')
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
    createTitle(textTitle) {
        const title = document.createElement('h1')
        title.id = 'total-amount'
        title.innerHTML = textTitle

        return title
        
    }
    createLabel(textLabel, input) {
        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.append(textLabel, input)

        return label
    }
    createInput(props) {
        const {name, type, max, min, required} = props
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