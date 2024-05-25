export function checkAccountPassword(account, password) {
    //return account == 111111 && password == 222222 ? true : false
    if (account != 111111) {
        return {
            type: "error",
            message: "登录失败，请重新输入账号"
        }
    } else {
        if (password != 222222) {
            return {
                type: "error",
                message: "登录失败，请重新输入密码"
            }
        } else {
            return {
                type: "success",
                message: "登录成功"
            }
        }
    }
}
