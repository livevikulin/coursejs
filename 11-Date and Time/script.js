//1
/*
const getDateFormat = (date, separator = '.') => {
	const day = date.getDay()
	const month = date.getMonth()
	const year = date.getFullYear()

	const newDay = day <= 9 ? `0${day}` : `${day}`
	const newMonth = month <= 9 ? `0${month}` : `${month}`

	if ( separator === '-' ) {
		console.log(`${newDay}-${newMonth}-${year}`)
	} else {
		console.log(`${newDay}.${newMonth}.${year}`)
	}

}

getDateFormat(new Date(), '-')
*/

//2
/*
const convertMsToDays = (convert) => {
	const days = convert / (1000 * 60 * 60 * 24)
	return Math.floor(days)
}

const getDaysBeforeBirthday = (nextBirthdayDate) => {
	const result = nextBirthdayDate - Date.now()
	console.log(`До моего дня рождения осталось ${convertMsToDays(result)} дней.`)
}

getDaysBeforeBirthday(new Date(2021, 11, 6))
*/

//3 
/*
const addDays = (date, days = 1) => {
	let result = new Date(date)
	result.setDate(result.getDate() + days)
	console.log(result)
}
addDays(Date.now(), 5)
*/