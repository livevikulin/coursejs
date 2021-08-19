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

/*
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;

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

