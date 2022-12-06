import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserSession } from "../../interfaces/session/index";

export const sessionSchema: SchemaOf<IUserSession> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
