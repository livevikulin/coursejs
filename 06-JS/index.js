//1
/*
const existedUserLogin = "the_best_user"
const existedUserPassword = "12345678"

let userLogin = prompt('Введите логин').trim()
	userPassword = prompt('Введите пароль').trim()

if ( existedUserLogin === userLogin && existedUserPassword === userPassword ) {
	alert(`Добро пожаловать, ${userLogin}!`)
} else {
	alert('Логин и (или) Пароль введены неверно!')
}
*/

//2
//for
/*
for ( let i = 0; i < 3; i++ ) {
	let newStudent = prompt('Введите имя нового студента!')

	newStudent = newStudent.trim()
	if ( newStudent ) {
		alert(`Добро пожаловать, ${newStudent}`)
	}
}
*/

//while
/*
let i = 0
while ( i < 3 ) {
	let newStudent = prompt('Введите имя нового студента!')

	newStudent = newStudent.trim()
	if ( newStudent ) {
		alert(`Добро пожаловать, ${newStudent}`)
	}
	i++
}
*/

//do while
/*
let i = 0
do {
	let newStudent = prompt('Введите имя нового студента!')

	newStudent = newStudent.trim()
	if ( newStudent ) {
		alert(`Добро пожаловать, ${newStudent}`)
	}
	i++
} while ( i < 3 )
*/

//3
/*
let sum = 0
for ( let i = 0; i <= 100; i++ ) {
	sum += i
}
alert(sum)
*/

//4
/*
let answer1 = 4
	answer2 = 4
	answer3 = 1
	answer4 = 12
	answer5 = 6

let correctAnswers = 0
	incorrectAnswers = 0

let question1 = Number(prompt('Сколько будет 2 + 2?'))
if ( question1 === answer1 ) {
	alert('Ответ верный!')
	correctAnswers++
} else {
	alert('Ответ неверный!')
	incorrectAnswers++
}

let	question2 = Number(prompt('Сколько будет 2 * 2?'))
if ( question2 === answer2 ) {
	alert('Ответ верный!')
	correctAnswers++
} else {
	alert('Ответ неверный!')
	incorrectAnswers++
}

let	question3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'))
if ( question3 === answer3 ) {
	alert('Ответ верный!')
	correctAnswers++
} else {
	alert('Ответ неверный!')
	incorrectAnswers++
}

let	question4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'))
if ( question4 === answer4 ) {
	alert('Ответ верный!')
	correctAnswers++
} else {
	alert('Ответ неверный!')
	incorrectAnswers++
}

let	question5 = Number(prompt('Сколько будет 2 + 2 * 2?'))
if ( question5 === answer5 ) {
	alert('Ответ верный!')
	correctAnswers++
} else {
	alert('Ответ неверный!')
	incorrectAnswers++
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`)
*/

//5
/*
let clientName = 'Игорь'
	clientSpentForAllTime = 110
	clientSpentToday = 25
	discount = 0

if ( clientSpentForAllTime > 100 && clientSpentForAllTime < 300 ) {
	discount = 10
} else if ( clientSpentForAllTime > 300 && clientSpentForAllTime < 500 ) {
	discount = 20
} else if ( clientSpentForAllTime > 500 ) {
	discount = 30
}

clientSpentForAllTime += clientSpentToday
alert(`Вам предоставляется скидка в ${discount}%!`)
clientSpentToday = clientSpentToday - clientSpentToday * discount / 100

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
*/

//6
/*
let clientName = prompt('Введите имя клиента')
	clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'))
	clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'))
	discount = 0

if ( clientSpentForAllTime > 100 && clientSpentForAllTime < 300 ) {
	discount = 10
} else if ( clientSpentForAllTime > 300 && clientSpentForAllTime < 500 ) {
	discount = 20
} else if ( clientSpentForAllTime > 500 ) {
	discount = 30
}

clientSpentToday = clientSpentToday - clientSpentToday * discount / 100

if ( isNaN(clientSpentToday) || isNaN(clientSpentForAllTime) ) {
	alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Страница будет перезагружена!')
	location = location
} else {
	alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
}
*/

//Доп задание
/*
let password = prompt('Введите пароль')

if ( password.length >= 3 && password.length <= 20 && password.match(/[a-z]/g) && password.match(/[A-Z]/g) ) {
	alert('Пароль валидный. Добро пожаловать в аккаунт!')
} else {
	alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}
*/
console.log('' ?? 'Done');
console.log('' || 'Done');





