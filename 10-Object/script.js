// 1
/*
const users = [
	{
		username: 'David',
		status: 'online',
		lastActivity: 10
	}, {
 
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22
	}, {
		username: 'Bob',
		status: 'online',
		lastActivity: 104
	}
]

const onlineUsers = []
let usersOnlineNames = []

users.forEach( (item) => {
	if ( item.status === 'online' ) {
		onlineUsers.push(item)
	}
} )

onlineUsers.forEach( (item) => {
	usersOnlineNames.push(item.username)
} )

console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)
*/

//2
/*
const student = {
	fullName: 'Максим',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const fullName = student.fullName
const giveJobToStudent = (student, jobName) => {
	console.log(`Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`)
	student.job = jobName
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
*/

//3
/*
const student = {
	name: 'Maxim',
	programmingLanguage: 'JavaScript',
}

const handleObject = (obj, key, action) => {

	if ( action === 'get' ) {
		return key
	} else if ( action === 'add' ) {
		const updateObj = obj
		obj.newKey = ''
		return updateObj
	} else if ( action === 'delete' ) {
		const updateObj = obj
		delete obj[key]
		return updateObj
	}
}

const result = handleObject(student, 'programmingLanguage', 'get')
console.log('result', result)
*/

//4
/*
const getKiller = (suspectInfo, deadPeople) => {
	let killerIs = []
	let humans = Object.entries(suspectInfo)
	humans.forEach(item => {
		let counter = 0
		deadPeople.forEach(element => {
			if (item[1].indexOf(element) != -1) {
				counter++
			}
		})
		if (counter == deadPeople.length) {
			killerIs.push(item[0])
		}
	});
	console.log(killerIs.join())
}

getKiller(
	{
		'James': ['Jacob', 'Bill', 'Lucas'],
		'Johnny': ['David', 'Kyle', 'Lucas'],
		'Peter': ['Lucy', 'Kyle'],
	},
	['Lucas', 'Bill']
)

 getKiller(
	{
		'Brad': [],
		'Megan': ['Ben', 'Kevin'],
		'Finn': [],
	},
	['Ben']
)
*/

//5
/*
const todaysWinner = {
	prize: '10 000$'
}

const winnerApplicants = {
	'001': {
		name: 'Максим',
		age: 25
	},
	'201': {
		name: 'Светлана',
		age: 20
	},
	'304': {
		name: 'Екатерина',
		age: 35
	}
}

const getRandomNumberInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min
}

const getWinner = (applicants, winnerObject) => {
	const newObj = Object.keys(applicants)
	const randomKey = applicants[newObj[getRandomNumberInRange(0, newObj.length)]]
	const winner = {
		...winnerObject,
		...randomKey
	}
	return winner
}

const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner) // { prize: '10 000$', name: 'Максим', age: 25 }
*/

//6
/*
const ordersArr = [4, 2, 1, 3]
const people = [
	{ id: 1, name: "Максим" },
	{ id: 2, name: "Николай" },
	{ id: 3, name: "Ангелина" },
	{ id: 4, name: "Виталий" }
]

const giveTalonsInOrder = (patients, orders) => {
	const sortArr = []
	orders.forEach(item => {
		sortArr.push(patients.find(arr => arr.id === item))
	})
	return sortArr
}

const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)
*/
