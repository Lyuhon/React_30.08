// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    let result = [];

    let iterations = arr.length;

    for (let i = 0; i < iterations; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    console.log(arr);
    // Пишем решение вот тут


    // Не трогаем
    return result;
}

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам
// обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив


/////////

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    let data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    console.log(data);

    let iterations_2 = data.length;

    for (let i = 0; i < iterations_2; i++) {
        if (typeof (data[i]) === 'string') {
            data[i] = data[i] + ' - done';
        } else {
            data[i] = data[i] * 2;
        }
    }

    console.log(data);
    // Не трогаем
    return data;
}

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней
// было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];

    let iterations = data.length;
    let incr = 0;

    // Пишем решение вот тут
    for (let i = iterations; i > 0; i--) {
        result[incr] = data[i - 1];
        incr++;
        // console.log(data[i - 1]);
    }

    console.log(data);
    console.log(result);

    // Не трогаем
    return result;
}

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]