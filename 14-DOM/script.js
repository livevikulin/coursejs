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
/*
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

const tasksList = document.querySelector('.tasks-list')

tasks.forEach( task => {
	const { id, completed, text } = task
	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.id = id
	taskItem.innerHTML = `<div class="task-item__main-container">
							<div class="task-item__main-content">
								<form class="checkbox-form">
									<input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
									<label for="task-${id}"></label>
								</form>
								<span class="task-item__text">${text}</span>
							</div>
							<button class="task-item__delete-button default-button delete-button" data-delete-task-id="${id}">
								Удалить
							</button>
						</div>`
	tasksList.append(taskItem)
})
*/

// 3 ЗАДАНИЕ

const addTaskButton = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')

addTaskButton.addEventListener('submit', (event) => {
	event.preventDefault()
	const { target } = event
	const inputValue = target.taskName.value
	const countTasks = tasksList.children.length + 1

	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.id = countTasks
	taskItem.innerHTML = `<div class="task-item__main-container">
							<div class="task-item__main-content">
								<form class="checkbox-form">
									<input class="checkbox-form__checkbox" type="checkbox" id="task-${countTasks}">
									<label for="task-${countTasks}"></label>
								</form>
								<span class="task-item__text">${inputValue}</span>
							</div>
							<button class="task-item__delete-button default-button delete-button" data-delete-task-id="${countTasks}">
								Удалить
							</button>
						</div>`
	tasksList.append(taskItem)
})