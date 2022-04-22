const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re-password');

function register() {

    if (localStorage.getItem('username') == email.value)
    {
        alert("Tài khoản này đã tồn tại");
        email.focus();
        email.value = "";
        return false;
    }
    else 
    {
        if (existNumber(firstName.value))
        {
            alert("Vui lòng nhập chữ");
            firstName.focus();
            return false;
        }

        if (existNumber(lastName.value))
        {
            alert("Vui lòng nhập chữ");
            lastName.focus();
            return false;
        }

        if (password.value.length <= 8) {
            alert("Mật khẩu phải nhiều hơn 8 kí tự");
            password.focus();
            return false;
        }

        if (!checkPass(password.value, rePassword.value))
        {
            alert("Mật khẩu nhập lại phải trùng khớp với mật khẩu phía trên");
            rePassword.focus();
            return false;
        }

        // Save Email & Password
        localStorage.setItem('username', email.value);
        localStorage.setItem('password', password.value);
        
        alert("Bạn đã đăng ký thành công");
        window.location.href = "./login.html";
        return false;
    }
}

function existNumber (value) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < value.length; i++)
        for (let j = 0; j < num.length; j++)
            if (value[i] == num[j])
                return true;
    return false;
}

function checkPass (pass1, pass2) {
    for (let i = 0; i < pass1.length; i++)
        if (pass1[i] != pass2[i])
            return false;
    return true;
}