//アルファベット
var alphabet = new Array("ا","ب","ص","د","ع","ف","غ","ح","ي"
                     ,"ج","ك","ل","م","ن","ه","ة","ق","ر"
                     ,"س","ت","و","ذ","ش","خ","ط","ز"
                     
        );

//アルファベットキーコード
var keycode = new Array(65,66,67,68,69,70,71,72,73
        ,74,75,76,77,78,79,80,81,82
        ,83,84,85,86,87,88,89,90);

var max = 10; //最大文字数
var answer = new Array(); //答のキーコード配列
var question = new Array(); //問題
var count = 0;

document.onkeydown = function (e){
    
    if (!e) e = window.event;
    
    if (e.keyCode == answer[count]) {
        document.getElementById("q" + count).style.display="none"; 
        count++;
        if (count == max){ alert("Finish!!"); return;}
    };
}

/*
    問題を表示する
*/
function setQuestion(){
    setRandom();
    document.getElementById("question").innerHTML = "<ul>" + question.join(" ") + "</ul>";
}

/*
    乱数を配列に格納する
*/
function setRandom(){ 
    for ( var i = 0; i < max; i++) {
        val = Math.floor(Math.random () * alphabet.length);
        answer[i] = keycode[val];
        question[i] = "<li id=\"q" + i + "\">" + alphabet[val] + "</li>";

    }
}
