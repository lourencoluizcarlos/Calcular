var displayBuffer = "";
var numero = "";
var termos = [undefined,undefined,undefined];
var result = undefined;

function pressNum(num){
    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
    //console.log(numero);
}

function pressOperador(op){
    if(termos[1]==undefined){
        termos[0] = numero;
        termos[1] = op.innerHTML;
        showDisplay(op.innerHTML);
        numero = "";
    }
    //fora da condição nada acontece 
}    

function pressEqual(){
    if(termos[0] != undefined && termos[1] != undefined && numero != ""){
        termos[2] = numero;
        var keepresult;
        switch(termos[1]){
            case'+':
                result = Number(termos[0])+Number(termos[2]);
                break;   
            case'-':
                result = Number(termos[0])-Number(termos[2]);
                break; 
            case'*':
                result = Number(termos[0])*Number(termos[2]);
                break; 
            case'/':
                result = Number(termos[0])/Number(termos[2]);
                break;  
        }
        keepresult = result;
        clearDisplay();
        showDisplay(result);
        clearMemory();
        numero = keepresult.toString();
    }    
    //fora da condição nada acontece 
}

function clearMemory(){
    numero = "";
    termos = [undefined,undefined,undefined];
    result = undefined;
}

function clearDisplay(){
    displayBuffer = "";
    var tela = document.getElementById('resultado');
    tela.value = displayBuffer;
}

function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('resultado');
    tela.value = displayBuffer;
}

function valueEqual(){
    if(termos[0] != undefined && termos[1] != undefined && termos[2] == undefined){
       clearDisplay();
       showDisplay('Erro de operação');
    }   
}

function valueClick(num){
    if(num.innerHTML == '.' && numero.includes('.')){
        return; 
    }    
}    