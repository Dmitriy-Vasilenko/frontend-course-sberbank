const body = document.querySelector('body');

const form = document.createElement('form');

const input = document.createElement('input');

const button2 = document.createElement('button');

button2.style.width = '25px';
button2.style.height = '25px';
button2.style.border = '1px solid black';
button2.style.borderRadius = '7px';
button2.style.backgroundColor = 'white';

button2.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
button2.type = 'button';


input.style.width = '120px';
input.style.height = '20px';
input.style.marginRight = '5px';
input.style.borderRadius = '7px';
input.style.outlineColor = 'orange';



form.style.display = 'flex';
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
form.style.backgroundColor = 'lemonchiffon';
form.style.width = '175px';
form.style.height = '38px';
form.style.borderRadius = '7px';
form.style.border = '1px solid black';
form.style.top = '0px';
form.style.right = '0px';
form.style.position = 'fixed';



form.appendChild(input);
form.appendChild(button2);

body.appendChild(form);


const fingerLeft = String.fromCodePoint(128073);
const fingerRight = String.fromCodePoint(128072);

button2.addEventListener('click', (event) => {
    if (document.querySelector('input').value) {
        alert(`${fingerLeft}${document.querySelector('input').value}${fingerRight}`);
    }
});

document.addEventListener('keypress', function(event) {
    if (event.code == 'Enter' && document.querySelector('input').value) {
      alert(`${fingerLeft}${document.querySelector('input').value}${fingerRight}`);
      event.preventDefault();
    }
});


