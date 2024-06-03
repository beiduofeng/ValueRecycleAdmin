/**
 * 判断账号密码是否正确
 * @param {string} account 账号
 * @param {string} password 密码
 * @returns 
 */
export function checkAccountPassword(account, password) {
    // 定义三组账号密码
    const accounts = [
        { account: "111111", password: "121212" },
        { account: "222222", password: "111111" },
        { account: "333333", password: "313131" }
    ];
    // 用户输入的账号在三组账号中匹配是否存在
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
export function saveAccount(x) {
    window.userId = x;
    return undefined;
}