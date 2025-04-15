/* Создайте объект budget со свойствами income (доход) и expenses (расходы), значения которых вводятся пользователем и методом calculateProfit, который высчитывает прибыль по следующей формуле:

Прибыль = доход - расходы
Если прибыль положительная, программа выводит значение прибыли. Если прибыль равна нулю, программа выводит сообщение о том, что пользователь отработал в ноль. Если прибыль отрицательна, программа выводит насколько пользователь ушел в минус. 

Используйте интерполяцию. */


const budget = {
    calculateProfit(){
        let sum = this.income - this.expenses;
        return sum;
    }
};
budget.income = +prompt("Введите доход");
budget.expenses = +prompt("Введите расходы");

if (budget.calculateProfit() > 0) {
    console.log(`Ваша прибыль составляет ${budget.calculateProfit()} рублей`);
} else if (budget.calculateProfit() === 0) {
    console.log(`Вы отработали в ноль`);
} else {
    console.log(`Вы ушли в минус на ${budget.calculateProfit() *(-1)} рублей`);
}
