const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz'; 
const nums = '0123456789'; 
const especiais = '!\"#$%()*+,-./:;<=>?@[]{}_~';
const button = document.getElementById('button')

let filter = [nums];
let length = document.getElementById('password_length');
let checks = document.querySelectorAll('.filter_check');



button.addEventListener('click', () => {
    if(checks[0].name == "upper_case" && checks[0].checked == true){
        filter.push(maiusculas);
    }

    if(checks[1].name == "lower_case" && checks[1].checked == true){
        filter.push(minusculas);
    }

    if(checks[2].name == "special_characters" && checks[2].checked == true){
        filter.push(especiais);
    }
    document.querySelector('h1').innerHTML = generatePassword(parseInt(length.value));
})

function generatePassword(_length){
    let password = '';
    let randomInt;
    while(_length > 0){
        randomInt = Math.floor(Math.random() * filter.length)
        password = password + filter[randomInt].charAt(Math.floor(Math.random() * filter[randomInt].length));
        _length--
    }
    return password;
}