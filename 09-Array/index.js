//1
/*
const getSumOfSequence = function(number) {
	let arrNum = []
	for ( let i = 1; i <= number; i++ ) {
		arrNum.push(i)
	}
	console.log(arrNum)
}
getSumOfSequence(10)
*/

//2
/*
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = (arr) => {
	const deleteName = arr.shift()
	let peoples = peopleWaiting.length
	console.log(`${deleteName} получил(а) посылку. В очереди осталось ${peoples} человек.`)
}

const leaveQueueWithoutParcel = (arr) => {
	const leaveName = arr.shift()
	console.log(`${leaveName} не получил(а) посылку и ушел(ла) из очереди`)
}

const arrLength = peopleWaiting.length;

for ( let i = 0; i < arrLength; i++ ) {
	if ( i < 3 ) {
		giveParcel(peopleWaiting)
	} else {
		leaveQueueWithoutParcel(peopleWaiting)
	}
}
*/

//3
//for

const numbers = [10, 4, 100, -5, 54, 2]
/*
let sumNumberCube = 0

for ( let i = 0; i < numbers.length; i++ ) {
	const numberCube = numbers[i] ** 3
	sumNumberCube += numberCube
}

console.log(sumNumberCube)
*/

//for of
/*
let sumNumberCube = 0
for ( const number of numbers ) {
	const numberCube = number ** 3
	sumNumberCube += numberCube
}
console.log(sumNumberCube)
*/

//forEach
/*
let sumNumberCube = 0
numbers.forEach( (number) => {
	const numberCube = number ** 3
	sumNumberCube += numberCube
} )
console.log(sumNumberCube)
*/

//reduce
/*
const sumNumberCube = numbers.reduce( ( acc, number ) => {
	return acc + number ** 3
}, 0 )
console.log(sumNumberCube)
*/

//5
/*
const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map( (price) => price + 0.5 )

coffees.forEach( (coffe, i) => {
	alert(`Кофе ${coffe} сейчас стоит ${updatedPrices[i]} евро`)
} )

console.log(updatedPrices)
*/

//6
/*
const clientsEstimations = []

const askClientToGiveEstimation = () => {
	const questions = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
	if ( questions >= 1 && questions <= 10 ) {
		clientsEstimations.push(questions)
	}
}

for ( let i = 0; i < 5; i++ ) {
	askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter( ( estimation ) => estimation > 5 ).length
const notGoodEstimations = clientsEstimations.filter( ( estimation ) => estimation <= 5 ).length

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)
*/

//7

const goals = [8, 1, 1, 3, 2, -1, 5]
const sortGoals = []

//7.1

//7.2

//7.3

//7.4

//7.5
/*
const lengthArr = goals.length
const numberOfGoals = goals.reduce( ( acc, goal ) => acc + goal, 0 )
const average = numberOfGoals / lengthArr
console.log(`Среднее количество голов за матч равно ${average}`)
*/

//7.6
/*
const sortingArray = (arr) => {
	arr.forEach( ( goal ) => sortGoals.push(goal) )
	sortGoals.sort( (a, b) => a - b )
}

const stringArr = (arr) => {
	alert(arr.join())
}

sortingArray(goals)
stringArr(sortGoals)
*/