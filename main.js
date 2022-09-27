const inputPasswordEl = document.getElementById('input-password');
const objABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];
const alert = document.querySelector('.alert');
const limiteMin = 3;
const limiteMax = document.getElementById('input-password-lenght');
const refreshBtn = document.querySelector(".btn-rotate-right");


function changePassword() {
   
    limiteMax.value = "";
    inputPasswordEl.value = "";
   

    refreshBtn.addEventListener('click', ()=> {
        inputPasswordEl.value = "";

        if(limiteMax.value < 3 || limiteMax.value >16 ) {
            inputPasswordEl.value = "";
            alert.classList.remove('visibility');
        } else {
            alert.classList.add('visibility');
            for (i=0; i < limiteMax.value; i++){
                let newPassword = Math.floor(Math.random()*objABC.length);
                inputPasswordEl.value = inputPasswordEl.value + objABC[newPassword];
            };
        }
        
        
    });
};

changePassword();
