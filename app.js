document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const errorName = document.getElementById('nameError');
    const userGreeting = document.getElementById('user-greeting');
    const changeBackgroundColor = document.getElementById('bg-color');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(nameInput.value.trim() === ""){
            errorName.style.display = 'block';
        }else{
            errorName.style.display = 'none';
            userGreeting.textContent = 'Hello ' + nameInput.value + ', Welcome!'
        }
    });

    changeBackgroundColor.addEventListener('click', ()=>{
        document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString();
    })
})