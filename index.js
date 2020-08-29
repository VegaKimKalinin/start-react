import {ArithmeticExpressions} from './src/ArithmeticExpressions';
import React from 'react';
import ReactDom from 'react-dom';
import {HelloWorld} from './src/HellWorld'

let arithmeticExpressions = new ArithmeticExpressions(3, 5);

//проверка работы методов объекта
console.log(`результаты 
сложения: ${arithmeticExpressions.doAddition()}
вычитания: ${arithmeticExpressions.doSubtraction()}
умножения: ${arithmeticExpressions.doMultiplication()} 
Деления: ${arithmeticExpressions.doDivision()}`);

//проверка работы статических методов класса
console.log(`результаты 
сложения: ${ArithmeticExpressions.doAdditionStatic(3,5)}
вычитания: ${ArithmeticExpressions.doSubtractionStatic(3,5)}
умножения: ${ArithmeticExpressions.doMultiplicationStatic(3,5)} 
Деления: ${ArithmeticExpressions.doDivisionStatic(3,5)}`);

//создание первого приложения React
ReactDom.render(<HelloWorld></HelloWorld>, document.getElementById('root'));