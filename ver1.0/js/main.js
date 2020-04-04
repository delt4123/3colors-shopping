'use strict';

{
    const box = document.getElementById('box');
    const ball = document.getElementById('ball');

    box.addEventListener('click' , () => {
        const n = Math.floor(Math.random() * 12);

        switch (n) {
            case 0:
                ball.textContent = '赤';
                ball.style.color = 'white';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#D93223), to(#A6261B))";
                break;
            case 1:
                ball.textContent = '青';
                ball.style.color = 'white';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#0311FC), to(#020A96))";
                break;
            case 2:
                ball.textContent = '黄';
                ball.style.color = 'black';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#EBF700), to(#D98600))";
                break;
            case 3:
                ball.textContent = '黒';
                ball.style.color = 'white';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#333), to(#000))";
                break;
            case 4:
                ball.textContent = '白';
                ball.style.color = 'black';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#fff), to(#bbb))";
                break;
            case 5:
                ball.textContent = 'グレー';
                ball.style.color = 'black';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#bbb), to(#666))";
                break;
            case 6:
                ball.textContent = 'ピンク';
                ball.style.color = 'black';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#F279BC), to(#F21B7F))";
                break;
            case 7:
                ball.textContent = '緑';
                ball.style.color = 'white';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#03A62C), to(#02734A))";
                break;
            case 8:
                ball.textContent = '紫';
                ball.style.color = 'white';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#8553A6), to(#724A8C))";
                break;
            case 9:
                ball.textContent = 'オレンジ';
                ball.style.color = 'black';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#F2622E), to(#F23005))";
                break;
            case 10:
                ball.textContent = 'ベージュ';
                ball.style.color = 'black';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#F2DEC4), to(#D9BC9A))";
                break;
            case 11:
                ball.textContent = '茶';
                ball.style.color = 'white';
                ball.style.background = "-webkit-gradient(linear, left top, right bottom, from(#A66329), to(#8C441B))";
                break;
        }
    });
}