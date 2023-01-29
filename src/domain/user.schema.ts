export const UserSchema = {
  type: "object",
  properties: {
    name: { type: "string", errorMessage: '"name" must be a string' },
    age: { type: "number", errorMessage: '"age" must be a number' },
  },
  required: ["name", "age"],
  additionalProperties: false,
  errorMessage: "additional properties not allowed",
};
