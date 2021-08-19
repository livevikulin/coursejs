// 1 ЗАДАНИЕ

/*
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

//прелоадер
const toggleLoader = () => {
	const loader = document.querySelector('#loader')
	const isHidden = loader.hasAttribute('hidden')

	isHidden
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}
//создаем поля для юзеров
const createUserElement = (name) => {
	const userElement = document.createElement('li')
	const userElementAnchor = document.createElement('a')
	
	userElementAnchor.href = '#'
	userElementAnchor.textContent = name
	userElement.append(userElementAnchor)

	return userElement
}

const dataContainer = document.querySelector('#data-container')

//функция получения данных с сервера
const getAllUsers = () => {
	toggleLoader()

	const result = fetch(USERS_URL, {
		method: 'GET', // GET(получение), POST(отправление), DELETE(удаление)
	})
	
	
	result
		.then((response) => {
			if ( !response.ok ) {
				throw new Error('Ошибка запроса')
			}
			return response.json()
		})
		.then((users) => {
			users.forEach(user => {
				const { username } = user
				const userHTML = createUserElement(username)
				dataContainer.append(userHTML)
			})
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			toggleLoader()
		})
}

getAllUsers()
*/

// 2 ЗАДАНИЕ
/*
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const userIds = [5, 6, 2, 1]
const dataContainer = document.querySelector('#data-container')

//прелоадер
const toggleLoader = () => {
	const loader = document.querySelector('#loader')
	const isHidden = loader.hasAttribute('hidden')

	isHidden
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}
//создаем поля для юзеров
const createUserElement = (name) => {
	const userElement = document.createElement('li')
	const userElementAnchor = document.createElement('a')
	
	userElementAnchor.href = '#'
	userElementAnchor.textContent = name
	userElement.append(userElementAnchor)

	return userElement
}

const getUsersByIds = (ids) => {
	toggleLoader()
	const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`))

	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map((response) => response.json())
			return Promise.all(dataResults)
		})
		.then((users) => {
			console.log('users', users);
			users.forEach((user) => {
				const { username } = user
				const userHTML = createUserElement(username)
				dataContainer.append(userHTML)
			})
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			toggleLoader()
		})
}

getUsersByIds(userIds)
*/

// 3 ЗАДАНИЕ

/*

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'
const photoIds = [60, 12, 55]
const dataContainer = document.querySelector('#data-container')

//прелоадер
const toggleLoader = () => {
	const loader = document.querySelector('#loader')
	const isHidden = loader.hasAttribute('hidden')

	isHidden
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}
//создаем поля для фоток
const createUserElement = (url, title) => {
	const photoElement = document.createElement('li')
	photoElement.className = 'photo-item'
	const photoElementAnchor = document.createElement('img')
	
	photoElementAnchor.className = 'photo-item__image'
	photoElementAnchor.src = url

	const photoElementTitle = document.createElement('h3')
	photoElementTitle.className = 'photo-item__title'
	photoElementTitle.textContent = title

	photoElement.append(photoElementAnchor)
	photoElement.append(photoElementTitle)

	return photoElement
}

const getFastestLoadedPhoto = (photos) => {
	toggleLoader()

	const requests = photos.map((url) => fetch(`${PHOTOS_URL}/${url}`))

	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map((response) => response.json())
			return Promise.race([...dataResults])
		})
		.then((photo) => {
			const { url, title } = photo
			const photoHTML = createUserElement(url, title)
			dataContainer.append(photoHTML)
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			toggleLoader()
		})
}

getFastestLoadedPhoto(photoIds)
*/