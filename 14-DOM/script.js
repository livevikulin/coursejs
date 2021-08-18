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
/*
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
*/

// 4 ЗАДАНИЕ
/*
const form = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')

form.addEventListener('submit', (event) => {
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

	let error = ''
	const errorElement = document.createElement('span')
	errorElement.className = 'error-message-block'

	const taskItemTexts = document.querySelectorAll('.task-item__text')

	if ( form.querySelector(`.${errorElement.className}`) ) {
		form.querySelector(`.${errorElement.className}`).remove()
	} 

	if ( inputValue == '' ) 
		error = 'clearInput'

	if ( taskItemTexts.length > 0 ) {
		taskItemTexts.forEach( (text) => {
			if ( inputValue === text.textContent ) {
				error = 'isElement'
			}
		} )
	}

	if ( error ) {
		switch ( error ) {
			case 'clearInput':
				errorElement.textContent = 'Название задачи не должно быть пустым'
				break
			case 'isElement':
				errorElement.textContent = 'Задача с таким названием уже существует.'
				break
		}
		form.append(errorElement)
	} else {
		tasksList.append(taskItem)
	}
})
*/

// 5 ЗАДАНИЕ
/*
const form = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')
const body = document.querySelector('body')
const modal = document.createElement('div')
modal.className = 'modal-overlay modal-overlay_hidden'
modal.innerHTML = `
					<div class="delete-modal">
						<h3 class="delete-modal__question">
						Вы действительно хотите удалить эту задачу?
						</h3>
						<div class="delete-modal__buttons">
						<button class="delete-modal__button delete-modal__cancel-button">
							Отмена
						</button>
						<button class="delete-modal__button delete-modal__confirm-button">
							Удалить
						</button>
						</div>
					</div>
				`
body.append(modal)

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const { target } = event
	const inputValue = target.taskName.value
	const countTasks = tasksList.children.length + 1

	let error = ''
	const errorElement = document.createElement('span')
	errorElement.className = 'error-message-block'

	const taskItemTexts = document.querySelectorAll('.task-item__text')
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

	if ( form.querySelector(`.${errorElement.className}`) ) {
		form.querySelector(`.${errorElement.className}`).remove()
	} 

	if ( inputValue == '' ) 
		error = 'clearInput'

	if ( taskItemTexts.length > 0 ) {
		taskItemTexts.forEach( (text) => {
			if ( inputValue === text.textContent ) {
				error = 'isElement'
			}
		} )
	}

	if ( error ) {
		switch ( error ) {
			case 'clearInput':
				errorElement.textContent = 'Название задачи не должно быть пустым'
				break
			case 'isElement':
				errorElement.textContent = 'Задача с таким названием уже существует.'
				break
		}
		form.append(errorElement)
	} else {
		tasksList.append(taskItem)
	}

	if ( taskItem ) {
		taskItem.addEventListener('click', (event) => {
			const { target } = event
			const deleteButton = target.closest('.delete-button')
			const confirmButton = document.querySelector('.delete-modal__confirm-button')
			confirmButton.dataset.taskId = taskItem.id

			if ( deleteButton ) {
				modal.classList.remove('modal-overlay_hidden')
			}
		})
	}

	modal.addEventListener('click', (event) => {
		const { target } = event
		const cancelButton = target.closest('.delete-modal__cancel-button')
		const confirmButton = target.closest('.delete-modal__confirm-button')
		if ( cancelButton ) {
			modal.classList.add('modal-overlay_hidden')
		}
	
		if ( confirmButton ) {
			if ( document.getElementById(confirmButton.dataset.taskId) ) {
				document.getElementById(confirmButton.dataset.taskId).remove()
			}
			modal.classList.add('modal-overlay_hidden')
		}
	})
})
*/

// 6 ЗАДАНИЕ
/*
const form = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')
const body = document.querySelector('body')
const modal = document.createElement('div')
modal.className = 'modal-overlay modal-overlay_hidden'
modal.innerHTML = `
					<div class="delete-modal">
						<h3 class="delete-modal__question">
						Вы действительно хотите удалить эту задачу?
						</h3>
						<div class="delete-modal__buttons">
						<button class="delete-modal__button delete-modal__cancel-button">
							Отмена
						</button>
						<button class="delete-modal__button delete-modal__confirm-button">
							Удалить
						</button>
						</div>
					</div>
				`
body.append(modal)

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const { target } = event
	const inputValue = target.taskName.value
	const countTasks = tasksList.children.length + 1

	let error = ''
	const errorElement = document.createElement('span')
	errorElement.className = 'error-message-block'

	const taskItemTexts = document.querySelectorAll('.task-item__text')
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

	if ( form.querySelector(`.${errorElement.className}`) ) {
		form.querySelector(`.${errorElement.className}`).remove()
	} 

	if ( inputValue == '' ) 
		error = 'clearInput'

	if ( taskItemTexts.length > 0 ) {
		taskItemTexts.forEach( (text) => {
			if ( inputValue === text.textContent ) {
				error = 'isElement'
			}
		} )
	}

	if ( error ) {
		switch ( error ) {
			case 'clearInput':
				errorElement.textContent = 'Название задачи не должно быть пустым'
				break
			case 'isElement':
				errorElement.textContent = 'Задача с таким названием уже существует.'
				break
		}
		form.append(errorElement)
	} else {
		tasksList.append(taskItem)
	}

	if ( taskItem ) {
		taskItem.addEventListener('click', (event) => {
			const { target } = event
			const deleteButton = target.closest('.delete-button')
			const confirmButton = document.querySelector('.delete-modal__confirm-button')
			confirmButton.dataset.taskId = taskItem.id

			if ( deleteButton ) {
				modal.classList.remove('modal-overlay_hidden')
			}
		})
	}

	modal.addEventListener('click', (event) => {
		const { target } = event
		const cancelButton = target.closest('.delete-modal__cancel-button')
		const confirmButton = target.closest('.delete-modal__confirm-button')
		if ( cancelButton ) {
			modal.classList.add('modal-overlay_hidden')
		}
	
		if ( confirmButton ) {
			if ( document.getElementById(confirmButton.dataset.taskId) ) {
				document.getElementById(confirmButton.dataset.taskId).remove()
			}
			modal.classList.add('modal-overlay_hidden')
		}
	})
})

document.addEventListener('keydown', (event) => {
	const { key } = event
	const buttons = document.querySelectorAll('button')
	
	if ( key === 'Tab' ) {
		body.style.background = '#24292E'
		tasksList.style.color = '#FFFFFF'
		buttons.forEach((button) => {
			button.style.border = '1px solid #ffffff'
		})
	}

})
*/