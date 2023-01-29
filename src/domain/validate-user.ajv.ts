import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";

import { UserSchema } from "./user.schema";
import { User } from "./user.type";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);

export const validateAjvUser = (user: User): string | boolean => {
  const validate = ajv.compile(UserSchema);

  const isValid = validate(user);

  if (!isValid) return ajv.errorsText(validate.errors, { separator: "\n" });

  return false;
};
