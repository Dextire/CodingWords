let TextArea = document.querySelector("textarea");
let View = document.querySelector("div.input");

let Translate = document.querySelector(".translate");
let Decode = document.querySelector(".decode");
let Clear = document.querySelector(".clear");

function GetText() {
    let WrittenText = TextArea.value;
    let IntermediateText = [];
    for (let i = 0; i < WrittenText.length; i++) {
        IntermediateText[i] = WrittenText.charCodeAt(i).toString();
    }
    return IntermediateText;
}
function FormatText() {
    let IntermediateText = GetText();
    let FinalText = "";
    for (let i = 0; i < IntermediateText.length; i++) {
        FinalText = FinalText + IntermediateText[i] + " ";
    }
    View.innerHTML = FinalText;
}

function GetCodedText() {
    let WrittenText = TextArea.value;
    let IntermediateText = WrittenText.split(" ");
    return IntermediateText;
}
function FormatCodedText() {
    let IntermediateText = GetCodedText();
    let NumberArray = [];
    for (let i = 0; i < IntermediateText.length; i++) {
        NumberArray[i] = Number.parseInt(IntermediateText[i]);
    }
    let FinalText = "";
    for (let i = 0; i < NumberArray.length; i++) {
        FinalText += String.fromCharCode(NumberArray[i]);
    }
    View.innerHTML = FinalText;
}

Decode.onclick = function () {
    View.innerHTML = "";
    FormatCodedText();
}

Translate.onclick = function () {
    View.innerHTML = "";
    FormatText();   
}

Clear.onclick = function () {
    TextArea.value = "";
    View.textContent = "";
}