
type nodeElement = {name: string, checked: boolean};

const maiusculas: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas: string = 'abcdefghijklmnopqrstuvwxyz'; 
const nums: string = '0123456789'; 
const especiais: string = '!\\"#$%()*+,-./:;<=>?@[]{}_~';
const button = document.getElementById('button') as HTMLButtonElement;

let filter: string[] = [nums];
let passLength = document.getElementById('password_length') as HTMLInputElement;
let checks: any = document.querySelectorAll('.filter_check');

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
    document.querySelector('p')!.innerHTML = generatePassword(parseInt(passLength.value));

    filter = [nums]
})

function generatePassword(_length: number): string{
    let password: string = '';
    let randomInt: number;
    while(_length > 0){
        randomInt = Math.floor(Math.random() * filter.length)
        password = password + filter[randomInt].charAt(Math.floor(Math.random() * filter[randomInt].length));
        _length--
    }
    return password;
}