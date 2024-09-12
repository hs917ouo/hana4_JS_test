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
      console.log(`Table. ${tableNo}`);
      console.log("=====================");
      for (food of total) {
        console.log(`* ${food[0]}`);
        console.log(
          `공급가액:`,
          `${food[1].price.toLocaleString()}원`.padStart(10, " ")
        );
        console.log(
          `부가세액:`,
          `${
            food[1].taxfree === 1
              ? 0
              : Math.round(food[1].price / 11).toLocaleString()
          }원`.padStart(10, " ")
        );
        console.log("---------------------");
      }
      console.log(`주문합계:`, `${sum.toLocaleString()}원`.padStart(10, " "));
      console.log(`주문합계:`, `${tax.toLocaleString()}원`.padStart(10, " "));
      console.log(`=====================\n`);
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
