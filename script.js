let checkBold = 0;
let checkItalic = 0;
let checkUnderline = 0;


function bold(value){
    const box = document.getElementById(value);
    if(checkBold == 0){
        box.style.fontWeight = 'bold';
        checkBold = 1;
    }
    else{
        box.style.fontWeight = '';
        checkBold = 0;
    }
}
function italic(value){
    const box = document.getElementById(value);
    if(checkItalic == 0){
        box.style.fontStyle = 'italic';
        checkItalic = 1;
    }
    else{
        box.style.fontStyle = '';
        checkItalic = 0;
    }
}
function underline(value){
    const box = document.getElementById(value);
    if(checkUnderline == 0){
        box.style.textDecoration = 'underline';
        checkUnderline = 1;
    }
    else{
        box.style.textDecoration = '';
        checkUnderline = 0;
    }
    var text1 = document.getElementById("text1");
    var fontSizeInput = document.getElementById("fontsize1");
    var fontSizeValue = fontSizeInput.value;
    text1.style.fontSize = fontSizeValue + 'px';
}
function fontheight(size,value1){
        if(size.value<=8){
            const box = document.getElementById(value1);
            box.style.fontSize = '8px';
        }
        else if(size.value>=40){
            const box = document.getElementById(value1);
            box.style.fontSize = '40px';
        }
        else{
            const box = document.getElementById(value1);
            box.style.fontSize = size.value + 'px';
        }
}
function fontcolor(color,value){
    const box = document.getElementById(value);
    console.log(color)
    box.style.color=color.value;
}




