// import { Validation } from "../../services/lib/validation";

export class LoginForm {
  email: string;
  password: string;
  errorEmail: boolean;
  errorPassword: boolean;
  constructor() {
    this.email = "";
    this.password = "";
    this.errorEmail = false;
    this.errorPassword = false;
  }

  /**
   *
   * @param {*} email
   * @returns
   */
  setEmail(email: string) {
    this.email = email;
    // const isValidEmail = Validation.email(this.email)

    if (this.email.trim() === "") {
      this.errorEmail = true;
    } else {
      this.errorEmail = false;
    }

    return this;
  }

  /**
   *
   * @param {*} password
   * @returns
   */
  setPassword(password: string) {
    this.password = password;

    if (this.password.trim() === "") {
      this.errorPassword = true;
    } else {
      this.errorPassword = false;
    }
    return this;
  }

  builderLoginForm() {
    return {
      errorEmail: this.errorEmail,
      errorPassword: this.errorPassword,
    };
  }
}
