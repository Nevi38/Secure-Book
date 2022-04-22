function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    let condition = [
        username.value == localStorage.getItem("username"),
        password.value == localStorage.getItem("password")
    ]
    if (condition[0] && condition[1])
    {
        alert("Bạn đã đăng nhập thành công");
        window.location.href = "./index.html";
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu');
    }
    return false;
}