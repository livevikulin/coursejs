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

const getKiller = (suspectInfo, deadPeople) => {
	const suspect = Object.values(suspectInfo)
	suspect.forEach((item) => {
		console.log(item)
	})
	console.log(deadPeople)
}

getKiller(
	{
		'James': ['Jacob', 'Bill', 'Lucas'],
		'Johnny': ['David', 'Kyle', 'Lucas'],
		'Peter': ['Lucy', 'Kyle'],
	},
	['Lucas', 'Bill']
 )
