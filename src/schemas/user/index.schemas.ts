import * as yup from "yup";
import { hashSync } from "bcryptjs";

export const userSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  name: yup.string().required(),
  telefones: yup.array().required(),
});

export const userUpdateSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  name: yup.string(),
  telefones: yup.array(),
});
