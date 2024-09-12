const LABEL_SIZE = 10;
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

const print = {
  tableNo(num) {
    console.log(`Table. ${num}`);
  },
  dish(food) {
    console.log(`* ${food}`);
  },
  doubleLine() {
    console.log("=====================");
  },
  singleLine() {
    console.log("---------------------");
  },
  price([label, unit], price) {
    console.log(
      `${label}`,
      `${price.toLocaleString()}원`.padStart(LABEL_SIZE, " "),
    );
  },
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
      print.tableNo(tableNo);
      print.doubleLine();
      for (let food of total) {
        print.dish(food[0]);
        print.price`공급가액:${food[1].price}`;
        print.price`부가세액:${
          food[1].taxfree === 1 ? 0 : taxCalculate(food[1].price)
        }`;
        print.singleLine();
      }
      print.price`주문합계:${totalSum}`;
      print.price`주문합계:${totalTax}`;
      print.doubleLine();
      console.log();
    },
  };
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
