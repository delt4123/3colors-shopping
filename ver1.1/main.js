'use strict';

{
    //初期表示は非表示
    document.getElementById("ball").style.visibility ="hidden";

    let some_array = [
        '赤',
        '青',
        '黄',
        '黒',
        '白',
        'グレー',
        'ピンク',
        '緑',
        '紫',
        'オレンジ',
        'ベージュ',
        '茶'
    ];
    let months = random_elems(some_array, 3);

    ball.textContent = (months);

    function random_elems(arr, count) {
    let len = arr.length;
    let lookup = {};
    let tmp = [];

    if (count > len)
        count = len;

    for (let i = 0; i < count; i++) {
        let index;
        do {
        index = ~~(Math.random() * len);
        } while (index in lookup);
        lookup[index] = null;
        tmp.push(arr[index]);
    }

    return tmp;
    }

    var clickBtn = function () {
        const ball = document.getElementById("ball");

        if(ball.style.visibility=="visible"){
            // hiddenで非表示
            location.reload();

            ball.style.visibility ="hidden";
        }else{
            // visibleで表示
            ball.style.visibility ="visible";
        }
    }

}