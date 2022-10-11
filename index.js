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
