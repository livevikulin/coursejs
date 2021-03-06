//1 ЗАДАНИЕ

/*
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     this.setNewStatus = function(newStatus) {
//         this.status = newStatus;
//     }
//  }

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior'
    }
    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies
        ]
    }
    setNewStatus(newStatus) {
        this.status = newStatus
    }
}
 
 const student = new Student('Maxim', 20)
 student.setTechnologies(['HTML', 'CSS', 'JavaScript'])
 student.setNewStatus('Middle')
 console.log(student)
 */

//2 ЗАДАНИЕ

/*
 class Person {
     constructor(name, age) {
        this.name = name;
        this.age = age
     }
     compareAge(comparePerson) {
        this.age >= comparePerson.age 
            ? console.log(`${this.name} старше, чем ${comparePerson.name}`)
            : console.log(`${this.name} младше, чем ${comparePerson.name}`)
     }
 }

 const person1 = new Person('Максим', 24);
 const person2 = new Person('Светлана', 36);
 const person3 = new Person('Ирина', 23);

 person1.compareAge(person2); // Максим младше, чем Светлана
 person2.compareAge(person3); // Светлана старше, чем Ирина
 person3.compareAge(person1); // Ирина младше, чем Максим
 */

//3 ЗАДАНИЕ

/*
 class CarService {
	static DefaultWorkingHours = {
		from: '9:00',
		till: '20:00',
	 }

	 constructor(name, workingHours) {
		this.name = name;
		this.workingHours = workingHours || CarService.DefaultWorkingHours;
	 }

	repairCar(carName) {
		if ( carName ) {
			const timeFrom = Number(CarService.DefaultWorkingHours.from.split(':')[0])
			const timeTill = Number(CarService.DefaultWorkingHours.till.split(':')[0])
			const thisTime = new Date().getHours()

			thisTime >= timeFrom && thisTime <= timeTill 
				? console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста”`)
				: console.log(`К сожалению, мы сейчас закрыты. Приходите завтра`)
		} else {
			console.error('Вам необходимо указать название машины, чтобы ее отремонтировать!');
			return
		}
	 }
 }
 
 const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' })
 carService.repairCar('BMW')
 */

//4 ЗАДАНИЕ

/*
 class Dictionary {
	constructor(name) {
		this.name = name;
		this.words = {};
	}

	add(word, description) {
		this.words[word] = {
			word,
			description,
		}
	}

	remove(word) {
		delete this.words[word]
	}

	get(word) {
		this.words[word]
			? console.log(`${this.words[word]}`)
			: console.log(`Такого слова нет в словаре!`)
		
	}

	showAllWords() {
		Object.values(this.words).forEach(element => {
			const {word, description} = element
			return console.log(`${word} - ${description}`)
		})
	}
 }

 const dictionary = new Dictionary('Толковый словарь')

 dictionary.add('JavaScript', 'популярный язык программирования')
 dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
 dictionary.remove('JavaScript')
 dictionary.get('Веб-разработчик')
 */

//5 ЗАДАНИЕ

/*
class Dictionary {
	constructor(name) {
		this.name = name;
		this.words = {};
	}

	add(word, description) {
		this.words[word] = {
			word,
			description,
		}
	}

	remove(word) {
		delete this.words[word]
	}

	get(word) {
		this.words[word]
			? console.log(`${this.words[word]}`)
			: console.log(`Такого слова нет в словаре!`)
	}

	showAllWords() {
		Object.values(this.words).forEach(element => {
			const {word, description} = element
			return console.log(`${word} - ${description}`)
		})
	}
}

class HardWordsDictionary extends Dictionary {
	constructor(name) {
		super(name)
	}

	add(word, description) {
		this.words[word] = {
			word,
			description,
			isDifficult: true
		}
	}
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.')
console.log(hardWordsDictionary.showAllWords())
*/

//6 ЗАДАНИЕ
/*
class Dictionary {
	#name
	#words

	constructor(name) {
		this.#name = name
		this.#words = {}
	}

	get mainName() {
		return this.#name
	}

	get allWords() {
		return this.#words
	}

	set setMainName(name) {
		this.#name = name
	}

	addNewWord(word, description) {
		this.add(word, description)
	}

	add(word, description) {
		this.#words[word] = {
			word,
			description
		}
	}

	remove(word) {
		delete this.#words[word]
	}

	get(word) {
		this.#words[word]
			? console.log(`${this.#words[word]}`)
			: console.log(`Такого слова нет в словаре!`)
	}

	showAllWords() {
		Object.values(this.#words).forEach(element => {
			const {word, description} = element
			return console.log(`${word} - ${description}`)
		})
	}
}

class HardWordsDictionary extends Dictionary {
	constructor(name) {
		super(name)
	}

	add(word, description) {
		this.allWords[word] = {
			word,
			description,
			isDifficult: true
		}
	}
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.')

hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()
 
console.log(hardWordsDictionary.mainName) // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь'
console.log(hardWordsDictionary)
console.log(hardWordsDictionary.mainName) // Новый Словарь
console.log(hardWordsDictionary.allWords) // выводит объект в котором есть слова дилетант и квант
*/

//7 ЗАДАНИЕ
/*
class Developer {
	constructor( fullName, age, position ) {
		this.fullName = fullName;
		this.age = age;
		this.position = position;
		this.technologies = [];
	}

	code() {}

	learnNewTechnology(technology) {
		this.technologies = [...technology]
	}
}

class JuniorDeveloper extends Developer {
	constructor(fullName, age, position = 'Junior') {
		super(fullName, age, position)
	}

	code() {
		console.log(`${this.position} разработчик пишет код...`)
	}
}

class MiddleDeveloper extends Developer {
	constructor(fullName, age, position = 'Middle') {
		super(fullName, age, position)
	}

	code() {
		console.log(`${this.position} разработчик пишет код...`)
	}
}

class SeniorDeveloper extends Developer {
	constructor(fullName, age, position = 'Senior') {
		super(fullName, age, position)
	}

	code() {
		console.log(`${this.position} разработчик пишет код...`)
	}
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...
console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); // 'Максим', 30, 'Senior'
//juniorDeveloper.learnNewTechnology(['HTML', 'CSS', 'JavaScript'])
////middleDeveloper.learnNewTechnology(['HTML', 'CSS', 'JavaScript', 'React'])
//seniorDeveloper.learnNewTechnology(['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'])
*/



