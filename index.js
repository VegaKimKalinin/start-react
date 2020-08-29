import CashierCheck from "./src/CashierCheck";

let check = new CashierCheck();
check.setProducts("картофель", 2);
check.setProducts("морковь", 2);
check.setProducts("каша", 2);
check.setProducts("молоко", 2);

console.log(check);
