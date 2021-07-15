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

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = (arr) => {
	const deleteName = arr.shift()
	console.log(`${deleteName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}

const leaveQueueWithoutParcel = (arr) => {
	const leaveName = arr.pop()
	console.log(`${leaveName} не получил(а) посылку и ушел(ла) из очереди`)
}

peopleWaiting.forEach( ( name, index, array ) => {
	if ( index < 3 ) {
		giveParcel(array)
	}
	
} )

leaveQueueWithoutParcel(peopleWaiting)







// giveParcel(peopleWaiting)


