var inputTextArea=document.querySelector("#txt-input");
var outputEl=document.querySelector("#txt-output");
var translateBtn=document.querySelector("#btn-translate");
var url="https://api.funtranslations.com/translate/pirate.json";
console.log(inputTextArea,outputEl,translateBtn)
function errorHandler(error){
    console.log(error);
    alert(error);
}
function genetrateURL(input){
   return url+"?"+"text="+input;
}
function clickHandler(){
    var inputText=inputTextArea.value;
    console.log(inputText);
    console.log("i am surya")
    fetch(genetrateURL(inputText))
    .then(response=>response.json())
    .then(jsonData=>{
        var op=jsonData.contents.translated;
        
        outputEl.innerHTML=op;
    }).catch(errorHandler)

}
translateBtn.addEventListener("click",clickHandler);