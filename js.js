const display=document.getElementById("input_label");

function append_to_input(input){
    display.value +=input;
}

function clear_display(){
    display.value = "";
}

function calculate(){
    try{
        let result=eval(display.value);
        display.value=result;
    }
    catch(error){
        display.value="Error"
    }
    
}
    