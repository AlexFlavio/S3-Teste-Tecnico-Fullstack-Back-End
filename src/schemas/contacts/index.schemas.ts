import * as yup from "yup";
import { SchemaOf } from "yup";
import { Icontacts } from "../../interfaces/contacts";

export const contactsSchema: SchemaOf<Icontacts> = yup.object().shape({
  emails: yup.array().required(),
  name: yup.string().required(),
  telefones: yup.array().required(),
});

//yup.object().shape({ path: yup.string().email() })
// yup.object().shape({ path: yup.string() })
