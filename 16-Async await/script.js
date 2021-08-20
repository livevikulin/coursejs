// const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// const getTodosWithUserData = async () => {
//     try {
//         const response = await fetch(USERS_URL)

//         if ( !response.ok ) {
//             throw new Error('Ошибка в получении данных пользователя')
//         }

//         const users = await response.json()
//         const firstUsersId = users[0]?.id
//         const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUsersId}`)

//         if ( !todosResponse.ok ) {
//             throw new Error('Ошибка в получении данных о задачах')
//         }

//         const todos = await todosResponse.json()

//         console.log('todos', todos);
//     } catch(error) {
//         console.log('error', error)
//     } finally {
//         console.log('finally')
//     }
// }

// const promise = getTodosWithUserData()
// console.log(promise);


// 1 ЗАДАНИЕ

// const createNewPost = () => {
//     isLoading = true;
//     fetch(POSTS_URL, {
//         method: 'POST',
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log('result', result)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//         .finally(() => {
//             isLoading = false;
//         })
// }
// console.log(createNewPost())
/*
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;

const createNewPost = async () => {
    isLoading = true;

    try {
        const response = await fetch(POSTS_URL, {method: 'POST'})
        const result = await response.json()

        console.log('result', result)
    } catch(error) {
        console.log('error', error)
    } finally {
        isLoading = false
    }
}
console.log(createNewPost())
*/

// 2 ЗАДАНИЕ
/*
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
	try {
		const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
		const results = await Promise.all(requests)
		const response = results.map(async data => data.json())
		const allResults = await Promise.all(response)
		console.log(allResults)
	} catch(error) {
		console.log(error)
	} finally {
		console.log('finally')
	}
 }
  
 getTodosByIds([43, 21, 55, 100, 10, 51, 48])
 */

 // 3 ЗАДАНИЕ
/*
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const toggleLoader = () => {
	const loader = document.querySelector('#loader')
	const isHidden = loader.hasAttribute('hidden')

	isHidden
		? loader.removeAttribute('hidden')
		: loader.setAttribute('hidden', '')
}

const renderAlbum = async () => {
	try {
		toggleLoader()
		const response = await fetch(ALBUMS_URL)
		const albums = await response.json()
		const albumsList = albums.map((album) => {
			let li = document.createElement('li')
			const container = document.querySelector('#data-container')
			const { title } = album
			li.textContent = title
			container.append(li)
		})
	} catch(error) {
		console.log(error)
	} finally {
		toggleLoader()
	}
}

renderAlbum()
*/