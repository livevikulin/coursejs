//1
/*
function getName1( name ) {
    console.log(`Имя равно ${name}`)
}
getName1('Петр')

const getName2 = function( name ) {
    console.log(`Имя равно ${name}`)
}
getName2('Иван')

const getName3 = name => console.log(`Имя равно ${name}`)
getName3('Алексей')
*/

//2
/*
const getSumOfNumbers = ( number, type = 'odd' ) => {
    let sum = 0
    
    if ( type === 'odd' ) {
        for ( let i = 1; i <= number; i+=2 ) {
            sum += i
        }
    } else if ( type === 'even' ) {
        for ( let i = 0; i <= number; i+=2 ) {
            sum += i
        }
    } else if ( type === '' ) {
        for ( let i = 0; i <= number; i++ ) {
            sum += i
        }
    }
    

    console.log(sum)
    return sum
}

getSumOfNumbers(10, '')
*/

//3
/*
const getDivisors = ( number = 1 ) => {
    let devisor = 0

    if ( !Number.isInteger(number) || number < 0 ) {
        alert(`${number} должен быть целым числом и больше нуля!`)
    }

    for ( let i = 1; i <= number; i++ ) {

        if ( !(number % i) ) {
            devisor++
        }
    }
    
    return devisor
}
getDivisors(15)
*/

//4
/*
const checkQuestionAnswer = ( question, correctAnswer ) => {

    let answerUser = prompt(question).toLowerCase()
    let сorrectAnswers = correctAnswer.toLowerCase()

    if ( answerUser == сorrectAnswers ) {
        alert('Ответ верный')
    } else {
        alert('Ответ неверный')
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')
*/

//Доп задание
/*
const showSuccessMessage = () => {
    console.log('В данном тексте нет запрещенных символов');
}

const showErrorMessage = ( errorSymbol, i ) => {
    console.error(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
}

const checkTextOnErrorSymbol = ( text, errorSymbol, successCallback, errorCallback ) => {
    let arrIdSymbols = []

    for ( let i = 0; i < text.length; i++ ) {
        if ( text[i] === errorSymbol ) {
            arrIdSymbols.push(i)
            errorCallback( errorSymbol, i )
        }
    }
    
    if ( arrIdSymbols.length === 0 ) {
        successCallback()
    }
}

const text = 'Привет, как дела? Давно мы с тобой не виделись!'
checkTextOnErrorSymbol( text, 'о', showSuccessMessage, showErrorMessage )
*/