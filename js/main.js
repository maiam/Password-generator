const inputPasswordEl = document.getElementById('input-password');
const selectEl = document.getElementById('select');
const refreshBtn = document.querySelector(".btn-rotate-right");
const copyBtn = document.querySelector('.btn-copy');
inputPasswordEl.value = "";
const inputs = document.querySelectorAll('input');



// EVENTO DE CLICK NO BOTAO REFRESH PARA CRIAÇÃO DE SENHA
refreshBtn.addEventListener('click', ()=> {
    createPassword();
});

// EVENTO CLICK NO BOTAO COPY PARA COPIAR A SENHA PARA A AREA DE TRANSFERENCIA
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(inputPasswordEl.value);
    iziToast.success({
        title: 'Password copiado: ',
        message: `${inputPasswordEl.value}`,
        position: 'bottomRight'
    });
});


selectEl.addEventListener('change', () => {
    createPassword();
})

inputs.forEach(input =>{
    input.addEventListener('click', () => {
        if(input.id!='input-password'){
            createPassword();
        }
    })
})


function newCharArray () {
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-+={}[]^~.,;:";
    let newChars = "";
    let checkedArray = [];
    inputs.forEach(input => {
        
        if(input.checked) {
            checkedArray.push(input.id);
        }
    })

    for(i=0; i < checkedArray.length; i++){
        if(checkedArray[i]==='password-type-ABC')
            newChars += chars.substring(36,62);
        if(checkedArray[i]==='password-type-abc')
            newChars += chars.substring(0,26);
        if(checkedArray[i]==='password-type-123')
            newChars += chars.substring(26,36);
        if(checkedArray[i]==='password-type-#$&')
            newChars += chars.substring(62,84);
    }
    return (newChars);
}


function createPassword() {
    inputPasswordEl.value = "";
    
    let chars = newCharArray();
    let charsLength = selectEl.value;
    let randomChar = 0;
    for (i=0; i < selectEl.value; i++){
        randomChar = Math.floor(Math.random()*chars.length);
        inputPasswordEl.value = inputPasswordEl.value + chars.substring(randomChar,randomChar+1);
    };
    

};

