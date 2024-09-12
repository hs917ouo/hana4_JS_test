const LABEL_SIZE = 10;
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill(tableNo) {
  const total = [];
  let totalSum = 0;
  let totalTax = 0;
  const taxCalculate = (price) => Math.round(price / 11);
  return {
    order(item) {
      MENU[item] ? total.push([item, MENU[item]]) : "";
      MENU[item] ? (totalSum += MENU[item].price) : "";
      MENU[item] && MENU[item].taxfree !== 1
        ? (totalTax += taxCalculate(MENU[item].price))
        : "";
    },
    printBill() {
      printTableNo(tableNo);
      printDoubleLine();
      for (food of total) {
        printFood(food[0]);
        printPrice`공급가액:${food[1].price}`;
        printPrice`부가세액:${
          food[1].taxfree === 1 ? 0 : taxCalculate(food[1].price)
        }`;
        printSingleLine();
      }
      printPrice`주문합계:${totalSum}`;
      printPrice`주문합계:${totalTax}`;
      printDoubleLine();
      console.log();
    },
  };
}
function printTableNo(tableNo) {
  console.log(`Table. ${tableNo}`);
}
function printDoubleLine() {
  console.log("=====================");
}
function printSingleLine() {
  console.log("---------------------");
}
function printFood(food) {
  console.log(`* ${food}`);
}
function printPrice([label, unit], price) {
  console.log(
    `${label}`,
    `${price.toLocaleString()}원`.padStart(LABEL_SIZE, " ")
  );
}

const table1 = bill(1);
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

const table2 = bill(2);
table2.order("짜장");
table2.printBill();

table1.order("탕슉");
table1.printBill();

table2.order("짬뽕");
table2.printBill();
//
