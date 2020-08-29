/*
класс выполняющий арифметические действия
*/
class ArithmeticExpressions {
    
    constructor(val_1, val_2){
        this.val_1 = val_1;
        this.val_2 = val_2;
    }
    
    //сложение
    doAddition (){
         return this.val_1 + this.val_2;
    }
    
    static doAdditionStatic (par1,par2){
        return par1 + par2;
    }
    //вычитание
    doSubtraction(){
        return this.val_1 - this.val_2;
    }
    static doSubtractionStatic(par1, par2){
        return par1 - par2;
    }
    //умножение
    doMultiplication(){
        return this.val_1 * this.val_2;
    }
    static doMultiplicationStatic(par1, par2){
        return par1 * par2;
    }
    //деление
    doDivision(){
        return this.val_1 / this.val_2;
    }
    static doDivisionStatic(par1,par2){
        return par1 / par2;
    }
}

export {ArithmeticExpressions};