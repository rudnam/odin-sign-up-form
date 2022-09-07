const PASSWORD = document.querySelector('#password');
const CONFIRM = document.querySelector('#confirm-password')
const ERRORMSG = document.querySelector('#error-msg')

document.addEventListener('keyup',check)

function check(e) {
    if (PASSWORD.value == CONFIRM.value) {
        console.log('wow');
        PASSWORD.classList.remove('error');
        CONFIRM.classList.remove('error');
        ERRORMSG.hidden = true;
    } else {
        console.log('no');
        PASSWORD.classList.add('error');
        CONFIRM.classList.add('error');
        ERRORMSG.hidden = false;
    }
}