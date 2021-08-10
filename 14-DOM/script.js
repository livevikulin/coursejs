//1 ЗАДАНИЕ

/*
const body = document.querySelector('body')
const form = `<form class="create-user-form">
				<label>
					Имя
					<input type="text" name="userName" placeholder="Введите ваше имя" />
				</label>
				<label>
					Пароль
					<input type="password" name="password" placeholder="Придумайте Пароль" />
				</label>
				<button type="submit">
					Подтвердить
				</button>
			  </form>`

const formEl = document.createElement('form')
formEl.classList.add('create-user-form')
formEl.innerHTML = `<label>
						Имя
						<input type="text" name="userName" placeholder="Введите ваше имя" />
					</label>
					<label>
						Пароль
						<input type="password" name="password" placeholder="Придумайте Пароль" />
					</label>
					<button type="submit">
						Подтвердить
					</button>`
body.appendChild(formEl)
body.innerHTML = form
*/

//2 ЗАДАНИЕ

const tasks = [
	{
		id: 1,
		completed: false,
		text: 'Посмотреть новый урок по JavaScript',
	},
	{
		id: 2,
		completed: false,
		text: 'Выполнить тест после урока',
	},
	{
		id: 3,
		completed: false,
		text: 'Выполнить ДЗ после урока',
	}
]

tasks.forEach( task => {
	console.log(task.id)
})