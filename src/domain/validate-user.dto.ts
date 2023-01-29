import { User } from "./user.type";

const DTO_PROPERTY_NAMES = ["name", "age"];

export const validateUser = (user: User): Error | boolean => {
  if (typeof user !== "object") {
    return new Error("User must be an object");
  }

  const userPropertyNames = Object.keys(user);

  const checkProperties =
    userPropertyNames.length === DTO_PROPERTY_NAMES.length &&
    userPropertyNames.every((userPropertyNames) =>
      DTO_PROPERTY_NAMES.includes(userPropertyNames)
    );

  if (!checkProperties)
    return new Error('User must contain "name" and "age" properties');

  if (typeof user.name !== "string")
    return new Error('"name" must be a string');
  if (typeof user.age !== "number") return new Error('"age" must be a number');

  return true;
};
