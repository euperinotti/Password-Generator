const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChar = 'abcdefghijklmnopqrstuvwxyz'; 
const nums = '0123456789'; 
const specialChar = '!"\\#$%()"*+,-./:;<=>?@[]{}_~|';

let button = document.getElementById('button');
let filter = [nums]; //array with chars
let length = document.getElementById('password_length'); //get length of the password
let checks = document.querySelectorAll('.filter_check'); //get the filters of the password

button.addEventListener('click', () => {

    // first, check if the filters are checked
    // then add the filters to the array
    // execute the function to generate de new password

    if(checks[0].name == "upper_case" && checks[0].checked == true){
        filter.push(upperChar);
    }

    if(checks[1].name == "lower_case" && checks[1].checked == true){
        filter.push(lowerChar);
    }

    if(checks[2].name == "special_characters" && checks[2].checked == true){
        filter.push(specialChar);
    }
    document.querySelector('p').innerHTML = generatePassword(parseInt(length.value));

    // reset the array

    filter = [nums]
})

function generatePassword(_password_length){
    let password = '';
    let randomInt;
    while(_password_length > 0){
        randomInt = Math.floor(Math.random() * filter.length)
        password = password + filter[randomInt].charAt(Math.floor(Math.random() * filter[randomInt].length));
        _password_length--
    }
    return password;
}