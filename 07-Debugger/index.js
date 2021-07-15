//1
/*
let health = Number(prompt('Введите число параметра "здоровье" для персонажа'))

//console.log( typeof health )
//console.log( Health )

if ( health < 0 || !health ) {
	//debugger
	alert('Параметр "здоровье" должен быть больше нуля!')
} else {
	alert(`Параметр "здоровье" равен ${health}`)
}
*/

//2
/*
const temperatureInCelsius = Number(prompt('Введите температуру в градусах цельсия'))
//console.log( typeof temperatureInCelsius )

if ( temperatureInCelsius === 0 ) {
	//debugger
	alert('0 градусов по Цельсию - это температура замерзания воды')
} else if ( temperatureInCelsius > 0 ) {
	alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже')
}

const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32

alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по фаренгейту.`)
*/

//3

const salaryOfJuniorDeveloper = 500
const numberOfJuniorDevelopers = 3
let taxPercentage = 13
let totalJuniorDevelopersSalary = 0

//console.log(totalJuniorDevelopersSalary)

for ( let i =0; i < numberOfJuniorDevelopers; i++ ) {
	debugger
	const salaryWithTax = salaryOfJuniorDeveloper - ( salaryOfJuniorDeveloper * taxPercentage / 100 )
	totalJuniorDevelopersSalary += salaryWithTax
}

console.log( 'totalJuniorDevelopersSalary', totalJuniorDevelopersSalary )
