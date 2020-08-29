/*
Создайте класс, представляющий собою кассовый чек, 
в который можно вносить и удалять позиции с подсчетом количества и стоимости; 
Инициализируйте и заполните объект чека в методе render() и отобразите его с помощью React-компонента
*/

class CashierCheck {
	constructor(nameFirm = "ООО Нептун") {
		this.nameFirm = nameFirm;
		this.time = new Date().toLocaleString();
		this.products = [];
	}

	setProducts(productName, productPrise) {
		if (typeof productName === "string" && typeof productPrise === "number") {
			let product = { productName, productPrise };
			this.products.push(product);
			console.log(this.products);
		} else {
			console.log("проверьте вводимые значения");
		}
	}
}

export default CashierCheck;
