export function checkAccountPassword(account, password) {
    //return account == 111111 && password == 222222 ? true : false
    console.log(account, password);
    const accounts = [
        { account: "111111", password: "121212" },
        { account: "222222", password: "111111" },
        { account: "333333", password: "313131" }
    ];
    let MathAccount = accounts.find(item => item.account === account)
    if (!MathAccount) {
        return {
            type: "error",
            message: "登录失败，请重新输入账号"
        }
    } else {
        if (MathAccount.password !== password) {
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
