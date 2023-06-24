export class Utils {
  public MAX_TOKEN_TIME = 5 * 60 * 1000;

  static generateVarificationToken(digit: number = 6) {
    const digits = "0123456789";
    let otp = "";
    for (let i = 0; i < digit; i++) {
      otp = otp + Math.floor(Math.random() * 10);
    }
    return parseInt(otp);
  }
}
