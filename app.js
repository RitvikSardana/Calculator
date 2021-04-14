const screen = document.querySelector(".button-result")
const buttons = document.querySelectorAll("button")
let screenValue = "";
for(item of buttons){

    item.addEventListener('click',(e) =>{
        text = e.target.innerText;
        console.log(text);
        if(text == "X"){
            text = "*";
            screenValue +=text;
            screen.value =screenValue;

        }
        else if(text == "AC"){
            screenValue = "";
            screen.value =screenValue;
        }
        else if(text == "="){
            screen.value = eval(screenValue);
            // screen.value = ""
        }
        else if(text == 'del'){
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else{
            screenValue +=text;
            screen.value =screenValue;
        }
    })

}
