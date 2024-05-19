const register = () => {
    const x = document.getElementById("logIn");
    const y = document.getElementById("register");
    const btn = document.getElementById("btn-color");
    x.style.left="-650px";
    y.style.left="50px";
    btn.style.left="140px";
}
const login = () => {
    const x = document.getElementById("logIn");
    const y = document.getElementById("register");
    const btn = document.getElementById("btn-color");
    x.style.left="50px";
    y.style.left="650px";
    btn.style.left="0px";
}

export { login, register };