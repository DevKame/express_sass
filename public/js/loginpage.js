

const loginname = document.getElementById('inpname');
const loginpw = document.getElementById('inppw');

const loginbutton = document.querySelector('button');

loginbutton.addEventListener('click', async e => {
    if(!(loginname.value === "e" && loginpw.value === 'e'))
    {
        const error = document.createElement('p');
        error.style.color = 'firebrick';
        error.style.fontWeight = '1000';
        error.innerText = 'Wrong Data!';
        loginbutton.insertAdjacentElement('afterend', error);
    }
    else {
        const data = {name: loginname.value, pw: loginpw.value};

        const res = await fetch('http://localhost:3000/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
        });
    }
});