const inputPasswordEl = document.getElementById('input-password');
const objABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','&','*','(',')','-','+','/'];
const alert = document.querySelector('.alert');
const limiteMin = 3;
const limiteMax = document.getElementById('select');
const refreshBtn = document.querySelector(".btn-rotate-right");
const copyBtn = document.querySelector('.btn-copy');



function ABC() {
    // alert.classList.add('visibility');
    
    for (i=0; i < limiteMax.value; i++){
        let newPassword = Math.floor(Math.random()*objABC.length);
        inputPasswordEl.value = inputPasswordEl.value + objABC[newPassword];
    };

 
}


function changePassword() {
   
    limiteMax.value = "03";
    // inputPasswordEl.value = "";
   
    copyBtn.addEventListener('click', ()=>{
        navigator.clipboard.writeText(inputPasswordEl.value);
        iziToast.success({
            title: 'Password copiado: ',
            message: `${inputPasswordEl.value}`,
            position: 'bottomRight'
        });
    });

    refreshBtn.addEventListener('click', ()=> {
        inputPasswordEl.value = "";

        if(limiteMax.value < 3 || limiteMax.value >16 ) {
            inputPasswordEl.value = "";
            // alert.classList.remove('visibility');

        } else {
            for (i=0; i < limiteMax.value; i++){
                let newPassword = Math.floor(Math.random()*objABC.length);
                inputPasswordEl.value = inputPasswordEl.value + objABC[newPassword];
            };
        }
        
        
    });
};

changePassword();







