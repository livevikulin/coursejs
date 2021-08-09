// ООП

// function and class

// function Animal(name) {
//     this.name = name;

//     this.getName = function() {
//         return this.name
//     }
// }

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }


//new
// const cat = new Animal('кот')
// const dog = new Animal('собака')

// console.log('cat', cat)
// console.log('cat', cat.name)
// console.log('cat', cat.getName())

//console.log(dog)

// 1. Наследование
// class Plane {
//     constructor(type, numberOfPassengers) {
//         this.type = type;
//         this.numberOfPassengers = numberOfPassengers;
//     }
//     startFlight() {
//         console.log('Полетели');
//     }
// }

// class MilitaryPlane extends Plane {
//     constructor(type) {
//         super(type, 0)
//         this.numberOfGuns = 0;
//     }
//     setNumberOfGuns(numberOfGuns) {
//         this.numberOfGuns = numberOfGuns
//     }
//     shoot() {
//         console.log('Стреляем!');
//     }
// }

// const plane = new Plane('Пассажирский', 100)
// console.log(plane)
// plane.startFlight()

// const militaryPlane = new MilitaryPlane('Military')
// console.log(militaryPlane)
// militaryPlane.startFlight()
// militaryPlane.setNumberOfGuns(4)
// militaryPlane.shoot()
// console.log(militaryPlane)
// console.log(militaryPlane instanceof MilitaryPlane)

// 2. Инкапсуляция


// 3. Полиморфизм


// 4. Абстракция


//1
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

 //2

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