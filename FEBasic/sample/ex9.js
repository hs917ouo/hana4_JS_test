const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill(tableNo) {}

const table1 = bill(1);
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

const table2 = bill(2);
table2.order('짜장');
table2.printBill();

table1.order('탕슉');
table1.printBill();

table2.order('짬뽕');
table2.printBill();
