import { User } from "../../domain/user.type";
import { validateAjvUser } from "../../domain/validate-user.ajv";

type UserName = {
  name: string;
};

export class ReturnAjvUserName {
  user: User;
  constructor(user: User) {
    this.user = user;
  }

  exec(): string | UserName {
    const validationErrors = validateAjvUser(this.user);

    if (validationErrors) return validationErrors as string;

    return { name: this.user.name };
  }
}
