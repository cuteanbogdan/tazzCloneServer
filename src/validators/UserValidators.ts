import { body, validationResult } from "express-validator";

export class UserValidators {
  static signup() {
    return [
      body("name", "Name is required").isString(),
      body("phone", "Phone number is required"),
      body("email", "Email is required").isString(),
      body("password", "Password is required")
        .isAlphanumeric()
        .isLength({ min: 8, max: 25 })
        .withMessage("Password must be between 8-20 characters"),
      body("type", "User role type is required").isString(),
      body("status", "User status is required").isString(),
    ];
  }

  static verifyUserEmail() {
    return [
      body(
        "verification_token",
        "Email verification token is required"
      ).isNumeric(),
      body("email", "Email is required"),
    ];
  }
}
