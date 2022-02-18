let result=document.getElementById("screen");
button=document.querySelectorAll("button");
let updateTextBox='';
let pre=0;
let srt=0;
for(item of button){
    item.addEventListener('click', (e)=>{
        inputText=e.target.innerText;


        // Here we are checking inputText=='pyt'
        if(inputText=='pyt'){
            result.value=updateTextBox+inputText;
            srt=eval(updateTextBox)*eval(updateTextBox);
            updateTextBox="";
            result.value=updateTextBox;
            pre=1;
        }
        // Here we are check pre==1 or inputText=='=' then we calculate the value ans make the pre==0;

        else if(inputText=='=' && pre==1){
            srt=Math.sqrt(srt+eval(updateTextBox)*eval(updateTextBox));
            updateTextBox="";
            updateTextBox+=srt;
            result.value=updateTextBox;
            pre=0;
        }
        else if(inputText==='X'){
            inputText='*';
            updateTextBox+=inputText;
            result.value=updateTextBox;
        }
        else if(inputText=='='){
            result.value=eval(updateTextBox);
        }
        else if(inputText=='C'){
            updateTextBox="";
            result.value=updateTextBox;
        }
        else if(inputText=='←'){
            updateTextBox=updateTextBox.slice(0, -1);
            result.value=updateTextBox;
        }
        else if (inputText == "sin") {
            var x = eval(result.value);
            updateTextBox= x * (Math.PI / 180);
            result.value = Math.sin(updateTextBox);
            
        }
        else if (inputText == "cos") {
            var x = eval(result.value);
            updateTextBox= x * (Math.PI / 180);
            result.value = Math.cos(updateTextBox);
            
        }
        else if (inputText == "tan") {
            var x = eval(result.value);
            updateTextBox= x * (Math.PI / 180);
            result.value = Math.tan(updateTextBox);
            // screenValue = screen.value
        }
        else if(inputText=='sqrt'){
            updateTextBox=Math.sqrt(updateTextBox);
            result.value=updateTextBox;
            
        }
        else if(inputText=='log'){
            updateTextBox=Math.log(updateTextBox);
            result.value=updateTextBox;
        }
        else if(inputText=='exp'){
            updateTextBox=Math.exp(updateTextBox);
            result.value=updateTextBox;
        }
        else if(inputText=='^'){
            updateTextBox=Math.pow(updateTextBox,updateTextBox);
            result.value=updateTextBox;
        }
        else{
            updateTextBox+=inputText;
            result.value=updateTextBox;
        }
    })
}