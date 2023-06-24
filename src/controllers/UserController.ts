import User from "../models/User";
import { Utils } from "../utils/Utils";

export class UserController {
  static async signup(req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;
    const phone = req.body.phone;

    const data = {
      email,
      verification_token: Utils.generateVarificationToken(5),
      verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
      phone,
      password,
      name,
      type,
      status,
    };
    try {
      let user = await new User(data).save();
      //send email to user for verification
      res.send(user);
    } catch (e) {
      next(e);
    }
  }

  static async verify(req, res, next) {
    const email = req.body.email;
    const verification_token = req.body.verification_token;
    try {
      const user = await User.findOneAndUpdate(
        {
          email: email,
          verification_token: verification_token,
          verification_token_time: { $gt: Date.now() },
        },
        { email_verified: true },
        { new: true }
      );
      if (user) {
        res.send(user);
      } else {
        throw new Error(
          "Email verification token is expired. Please try again!"
        );
      }
    } catch (e) {
      next(e);
    }
  }
}
