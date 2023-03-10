var translateButton = document.querySelector("#translateBtn");
var textAreaInput = document.querySelector("#text-area");
var textAreaoutput = document.querySelector("#output-area");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text){
    return serverUrl + "?" + "text=" +text;
}

function errorHandler(error){
    alert("An error occured please try after some time")
}

function eventAfterClick(){
    var textInput = textAreaInput.value;

    fetch(getTranslationUrl(textInput))
        .then(response => response.json())
        .then(json => {
            textAreaoutput.innerText = json.contents.translated;
             
        })
        .catch(errorHandler)
}

translateButton.addEventListener("click",eventAfterClick);