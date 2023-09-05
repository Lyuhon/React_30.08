// 22 Лекция - Циклы

let wh = 50;

//
while (wh <= 55) {
    console.log(wh);
    wh++;
}

//
do {
    console.log(wh);
    wh++;
}
while (wh < 100);

//
for (let i = 1; i < 8; i++) {
    console.log(`i = ${i}`);
    if (i == 4) {
        console.log('приплыли');
        break;
        // continue - пропуск
    }
}