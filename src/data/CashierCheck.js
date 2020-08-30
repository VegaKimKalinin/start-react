class CashierCheck {
  constructor(firmName = 'ООО Нептун') {
    this.firmName = firmName;
    this.time = new Date().toLocaleString();
    this.products = [];
    this.totalPrice = 0;
  }

  setProducts(productName, productPrise) {
    if (typeof productName === 'string' && typeof productPrise === 'number') {
      let product = { productName, productPrise };
      this.products.push(product);
    } else {
      console.error(new Error('Первое значение строка, второе число'));
    }
  }

  deleteLastEnter() {
    this.products.pop();
  }

  deleteTargetItem(index) {
    if (typeof index === 'number' && this.products[index] !== 'undefined') {
      this.products.splice(index, 1);
    } else {
      console.error(new Error('Индекс должен быть числом или не существует'));
    }
  }

  calcTotalPrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.totalPrice += this.products[i].productPrise;
    }
  }
}

let check = new CashierCheck();
check.setProducts('Картофель', 7);
check.setProducts('Морковь', 3);
check.setProducts('Каша', 5);
check.setProducts('Персики', 10);
check.setProducts('Бананы', 10);
check.setProducts('Кифир', 10);
check.deleteLastEnter();
check.deleteTargetItem(0);
check.calcTotalPrice();

export default check;
