import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import updateUserController from "../../controllers/user/updateUser.controller";
import { validateSchemaMiddleware } from "../../middlewares/schemaValidator.middleware";
import { tokenVerifyMiddleware } from "../../middlewares/tokenVerify.middleware";
import { userSchema, userUpdateSchema } from "../../schemas/user/index.schemas";

const userRoutes = Router();

userRoutes.post("", validateSchemaMiddleware(userSchema), createUserController);
userRoutes.patch(
  "",
  tokenVerifyMiddleware,
  validateSchemaMiddleware(userUpdateSchema),
  updateUserController
);

export { userRoutes };
