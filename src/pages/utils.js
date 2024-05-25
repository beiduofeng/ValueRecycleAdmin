export function checkAccountPassword(account, password) {
    //return account == 111111 && password == 222222 ? true : false
    if (account != 111111) {
        console.log('账号错误，请重新输入账号');
        return ('账号错误，请重新输入账号')
    } else {
        if (password != 222222) {
            console.log('密码错误，请重新输入密码');
            return ('密码错误，请重新输入密码')
        } else {
            console.log('登录成功');
            return ('登录成功')
        }
    }
}
