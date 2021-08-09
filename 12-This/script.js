//1
/*
const student = {
	stack: ['HTML'],
	level: 1,
	improveLevel() {
		this.level++
		if ( this.level === 2 ) {
			this.stack.push('CSS')
		} else if ( this.level === 3 ) {
			this.stack.push('JavaScript')
		} else if ( this.level === 4 ) {
			this.stack.push('React')
		} else if ( this.level === 5 ) {
			this.stack.push('NodeJS')
		} else if ( this.level > 5 ) {
			console.log('Студент выучил все технологии!')
		}
		return this
	}
}

student.improveLevel()
	   .improveLevel()
	   .improveLevel()
	   .improveLevel()
	   .improveLevel()

console.log(student.stack)
*/

//2
/*
const dog = {
	name: 'Чарли',
	type: 'Собака',
	makeSound() {
		return 'Гав - Гав'
	}
}

const bird = {
	name: 'Петя',
	type: 'Воробей',
	makeSound() {
		return 'Чик - Чирик'
	}
}

const makeDomestic = function(isHome) {
	console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
	this.isDomestic = isHome
}

const binedMakeDomestic = makeDomestic.bind(dog)

binedMakeDomestic(false)
makeDomestic.call(bird, true)
makeDomestic.apply(bird, [false])
*/

//3
/*
const footballer = {
	fullName: 'Cristiano Ronaldo',
	attack: function() {
		console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
	},
	scoreGoal(sound) {
		console.log(`${this.fullName} забил гол! Вот это да!`);
		this.celebrate(sound);
	},
	celebrate(sound) {
		console.log(sound);
	},
	goToSubstitution: function(newPlayer) {
		console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
	}
 }

 const attack = footballer.attack
 const binedAttack = attack.bind(footballer)
 const score = footballer.scoreGoal
 const substitute = footballer.goToSubstitution

 binedAttack()
 score.call(footballer, 'Сиииии')
 substitute.apply(footballer, ['Paulo Dibala'])
*/