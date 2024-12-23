// スライドメニューを開く
function openMenu() {
    document.getElementById("side-menu").style.width = "400px"; // 幅を400pxに拡大
    document.getElementById("overlay").style.display = "block";
}

// スライドメニューを閉じる
function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

// スクロールによるヘッダーの表示/非表示
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // 下にスクロール時
        header.style.top = `-${header.offsetHeight}px`; // ヘッダーの高さ分を引き込む
    } else {
        // 上にスクロール時
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// URLをコピーする関数
function copyURL(url) {
    navigator.clipboard.writeText(url).then(function() {
        alert("URLがクリップボードにコピーされました！");
    }, function() {
        alert("URLのコピーに失敗しました。");
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const animatedTextContainer = document.querySelector('.animated-text');
    const textPatterns = [
        'S̵̭͍͎͖҇͋͒͢ó̷̢̬̝̥̯͛̇͠ṁ̸̢͈̗̳̥̬̀͝e̷̖̫̤͑̒̾̋̕̚͢b̶̢͉͙̳̩̖̐͛͠o̵̢͈̭͊͋̔̿̕ͅd̸̛̲̞̰̈́͋̚͢y̶͓͎̆͒̔̿͜͡ h̶̛̭̫̫̽̌̌͢ę̵̬̮̓̈̐͠l̷̡̲̩̰͖̃̏͛̃̕p҈̢̱̣̣̞̭̊̀̔͊̽̕ m̴̢͔͉̰͆̽͋̉͠e̴̢̙̪̓́̋̈́̕̚!̵͓̗͖҇̽̂̇͢ͅ!҉̢̗͓͇͓̂̾̄̒̊̕!̸̠͈̊̀̄̚͜͞!҈̨͓̙̙̫͐́͗͞!̸̖̤̊̆̕͜',
        's̴͖̩̜̋̅͛̃̓̋͒̑ͅo̶̰͎̝̯̠̖͆́̄̀̅̄̿̒̃̑̚̚M̶͖͈͉̞̙̝̆̓̓̍̓̈́̔̔͛͛̅ͅͅE̶̝̳͍͛̃̓͊͆́͊͗̂ͅb̴̫̙͍̜̭̜͕̫̉͒̑̊̊o҉̗̪͕̝̬͔̯̯͔͈̫̇̄̀̀̀̓̇̃͂̀̚ͅd̸̲͍͕̥̪̩̞̘̳̠̝͙̐̈͊͂̾͛̐̎͆y҉̭̫͖͍̣̰̩̣̥̙͕̲̎̉͌̓ H̶͎͖̫̮̜̞̞̞͙̐͐̌̇͗Ȅ̶̲͕̖̭͖͍̜͔̫̰̀̿͊l̸͓̙̙͖͉̬̘̫̈́̓͌̿̒Ṕ̴̦̣̤̯̬͓̯̟̈͒͂̌͐͑́ m̵͇͍͙̫̖͕̥̠̦̈́̒͐̍̍̊̒̈͋̒͗̄Ḛ̸͍̜͇͎͍̤̳̗͆̌̏̆͗!̵̫̜̲̣̣̬͖̆̒̅̌!҉̮̠͇̫̝̭̣̊͊͒͆̓̅̄̓̽!̴̝͙̦͖̘̘͕͚̲̀̏̆̽̽͐̈̒ͅͅ!҉̞̩͚͖͈͓͖̰̮̩͛͒͒̍̿́',
        's̸̜̰̿̕͜Ő̵͈̩̜̕͢m̸̦͔̟҇́́͜Ȩ̶̭̙̖҇̀̈̑B̸̨͇͈̰̌͆̾͡o҉̧̛̘̜̩̎̒D̷̡̲͚̒͛͛͡Y̷̧͙̙̙̌̅͞ h̸̡͙̜̥̎̕Ĕ̶̢̛̜͇͇̔́L҉̯̓͗͢͞p̵̧̪͍҇̉͗ M̴͍̭̏̕͢ė̸͇̄̄͜͝!҈̨̜҇͗!҉̧̙̭̆͞!̴̡̛͍̮͎͛̈́̏!҉̖̦̯͒̀̆͢͠'
    ];
    let currentIndex = 0;

    function changeText() {
        animatedTextContainer.textContent = textPatterns[currentIndex];
        currentIndex = (currentIndex + 1) % textPatterns.length;
    }

    setInterval(changeText, 80); // テキスト変更のインターバルを2秒に設定
    changeText(); // 初回表示のために一度実行
});

document.addEventListener('DOMContentLoaded', function() {
    const waveTextContainer = document.querySelector('.animated-wave-text');
    const waveText = waveTextContainer.textContent.split('').map(char => `<span>${char}</span>`).join('');
    waveTextContainer.innerHTML = waveText;
});

document.addEventListener('DOMContentLoaded', function() {
    const binaryTextContainer = document.querySelector('.binary-animation');
    const binaryText = binaryTextContainer.innerHTML.split(/(<br>)/g).map((char, index) => {
        if (char === '<br>') {
            return char; // 改行タグはそのままにする
        }
        return `<span style="--index: ${index};">${char}</span>`;
    }).join('');
    binaryTextContainer.innerHTML = binaryText;
});

document.addEventListener('DOMContentLoaded', function() {
    const shakyTextContainer = document.querySelector('.shaky-text');
    const shakyText = shakyTextContainer.innerHTML.split(/(<br>)/g).map((char, index) => {
        if (char === '<br>') {
            return char; // 改行タグはそのままにする
        }
        return `<span style="--index: ${index};">${char}</span>`;
    }).join('');
    shakyTextContainer.innerHTML = shakyText;
});

function openHelp() {
    document.getElementById('help-popup').style.display = 'block';
}

function closeHelp() {
    document.getElementById('help-popup').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('help-popup')) {
        document.getElementById('help-popup').style.display = 'none';
    }
}
