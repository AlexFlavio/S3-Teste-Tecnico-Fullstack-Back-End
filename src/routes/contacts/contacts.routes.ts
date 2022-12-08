import { Router } from "express";
import createContactController from "../../controllers/contacts/createContacts.controller";
import deleteContactController from "../../controllers/contacts/deleteContact.controller";
import { validateSchemaMiddleware } from "../../middlewares/schemaValidator.middleware";
import { tokenVerifyMiddleware } from "../../middlewares/tokenVerify.middleware";
import { contactsSchema } from "../../schemas/contacts/index.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "/",
  tokenVerifyMiddleware,
  validateSchemaMiddleware(contactsSchema),
  createContactController
);

contactsRoutes.delete("/:id",tokenVerifyMiddleware,deleteContactController)

export { contactsRoutes };
