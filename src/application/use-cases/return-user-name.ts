import { User } from "../../domain/user.type";
import { validateUser } from "../../domain/validate-user.dto";

type UserName = {
  name: string;
};

export class ReturnUserName {
  user: User;
  constructor(user: User) {
    this.user = user;
  }

  exec(): Error | UserName {
    const validation = validateUser(this.user);

    if (validation instanceof Error) return validation;

    return { name: this.user.name };
  }
}
