const LABEL_SIZE = 10;
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill(tableNo) {
  const total = [];
  let sum = 0;
  let tax = 0;
  return {
    order(item) {
      MENU[item] ? total.push([item, MENU[item]]) : "";
      MENU[item] ? (sum += MENU[item].price) : "";
      MENU[item] && MENU[item].taxfree !== 1
        ? (tax += Math.round(MENU[item].price / 11))
        : "";
    },
    printBill() {
      printTableNo(tableNo);
      printDoubleLine();
      for (food of total) {
        printFood(food[0]);
        printPrice`공급가액:${food[1].price}`;
        printPrice`부가세액:${
          food[1].taxfree === 1 ? 0 : Math.round(food[1].price / 11)
        }`;
        printSingleLine();
      }
      printPrice`주문합계:${sum}`;
      printPrice`주문합계:${tax}`;
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
