import * as yup from "yup";
import { hashSync } from "bcryptjs";
import { SchemaOf } from "yup";
import { IUserCreateRequest, IUserUpdateRequest } from "../../interfaces/user";

export const userSchema: SchemaOf<IUserCreateRequest> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  name: yup.string().required(),
  telefones: yup.array().required(),
});

export const userUpdateSchema: SchemaOf<IUserUpdateRequest> = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  name: yup.string(),
  telefones: yup.array(),
});
