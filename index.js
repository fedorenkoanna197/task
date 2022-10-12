let [...input] = document.querySelectorAll('.input-label input');
let btn = document.querySelector('.button-form input');
let email = document.querySelector('#userEmail');

const valid = (target) => {
    switch (target.id) {
        case "email":
            return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(target.value);
        case "password":
            return /^[0-9]{2,8}$/.test(target.value);
    }
}

const submit = () => {

    let resultInput = input.map(element => valid(element));
    if (!resultInput.includes(false)) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute("disabled", "disabled")
    }
}

input.forEach((ele) => {
    ele.addEventListener('change', (e) => {
        if (!(valid(e.target))) {
            e.target.style.backgroundColor = "red";
        } else {
            e.target.style.backgroundColor = "green";
        }
        submit();
    })
})

btn.addEventListener("click", (e) => {
    email.innerText = input[0].value;
})

let divForm = document.querySelector('.form');
let parentDiv = divForm.parentNode;
let confirm = document.querySelector('.modal-foot #create');
let div = document.createElement('div');
let divImg = document.createElement('div');
divImg.setAttribute('class','img-user');
let img = document.createElement('img');
img.setAttribute('src','./img/user.jpg')
div.setAttribute('class', 'div-hello');
divImg.appendChild(img);

confirm.addEventListener('click', (e) => {
    let divContent = document.createTextNode(`Hello, user with email ${email.innerText}`)
    div.appendChild(divContent);
    div.appendChild(divImg)
    parentDiv.replaceChild(div, divForm);

})