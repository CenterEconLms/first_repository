const age = parseInt(prompt("How old are you"));
if(isNaN(age || age<0)){
    console.log("Please write a real positive number");
//prompt -> input
//parseInt -> int()
}
else if((age<18)){
    console.log("You are too young");
}
else if(age>=18 && age <=50){
    console.log("you can drink");
}
else if(age>50 && age <=80){
    console.log("You should exercise");
}

else{
    console.log("Thank you for writing your age");
}
// condition 중첩 주의! -> else if 순서를 유의하자
// === 같다
// !== 다르다
// isNaN -> boolean return
// or and 

const loginForm = document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_Classname = "hidden";
const Username_key = 'username';
function onLoginSubmit(event){

    event.preventDefault();
    const username = logInput.value;
    localStorage.setItem(Username_key,username);
    paintGreetings(username);
    }
function paintGreetings(username){
    greeting.innerText = 'Hello ${username}';
    greeting.classList.remove(HIDDEN_Classname);
}
