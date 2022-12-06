import { Express } from "express";
import { contactsRoutes } from "./contacts/contacts.routes";
import { loginRoutes } from "./login/index.routes";
import { userRoutes } from "./user/index.routes";

export const appRoutes = (app: Express) => {
  app.use("/user", userRoutes);
  app.use("/login", loginRoutes);
  app.use("/contacts", contactsRoutes);
};
