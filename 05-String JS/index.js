//1
/*
const myName = 'Vitaly'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen Minin'
const reasonText = 'это интересная работа'
const numberOfMonth = '3'
*/

//2
/*
let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
				  Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`

console.log(myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase()))
console.log(myInfoText.length)
console.log(myInfoText[0])
console.log(myInfoText[myInfoText.length - 1])
*/

//3
/*
const userName = prompt('Как вас зовут?')
userName
alert(`Вас зовут ${userName.toLowerCase().trim()}`)
*/

//4
/*
const userName = prompt('Как вас зовут?').toLowerCase().trim()
const userAge = Number(prompt('Сколько вам лет?').trim())

userName
userAge

alert(`Вас зовут ${userName} и вам ${userAge} лет!`)
*/

//5
/*
const userString = prompt('Введите текст для обрезки').trim()
const startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки'))
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки'))

alert('Результат:', userString.slice(startSliceIndex, endSliceIndex))
console.log('Результат:', userString.slice(startSliceIndex, endSliceIndex))
*/

//6
/*
let userText = prompt('Введите текст').trim()
const wordFromText = prompt('Введите слово из текста').trim()
const indexOfWord = userText.indexOf(wordFromText)

console.log('Результат: ', userText.slice(0, indexOfWord));
*/

//доп задание
/*
let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
let slideStr = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length / 2))

//1
console.log(slideStr)

//2
console.log(slideStr.replaceAll('а', 'А'))

//3
console.log(slideStr.replace(/\s+/g, ''))

//4
console.log(slideStr.replace(/\s+/g, '').repeat(3))

//5
console.log(slideStr.replace(/\s+/g, '')[Math.floor(slideStr.length / 2)])
*/



const str = '\'JavaScript\' - очень популярный!'