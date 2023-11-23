const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const greetingForm = document.querySelector("#greetingForm");
const greetingContent = greetingForm.querySelector("h1");

function handleLoginInput(event){
    event.preventDefault();
    loginInput.type="hidden";
    const userName = loginInput.value;
    console.log(userName);
    printGreeting(userName);
    //새로고침해도 저장하기 -> localStorage
    localStorage.setItem("userName",userName);
}

function printGreeting(userName){
    greetingContent.innerText = "hello "+userName;
    greetingContent.type="";

}

if(localStorage.getItem("userName")==null){
    loginForm.addEventListener("submit", handleLoginInput);
}else{
    loginInput.type="hidden";
    const userName = localStorage.getItem("userName");
    printGreeting(userName);
}
