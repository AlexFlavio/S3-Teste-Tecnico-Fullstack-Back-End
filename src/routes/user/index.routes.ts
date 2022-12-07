import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import { validateSchemaMiddleware } from "../../middlewares/schemaValidator.middleware";
import { userSchema } from "../../schemas/user/index.schemas";

const userRoutes = Router();

userRoutes.post("", validateSchemaMiddleware(userSchema), createUserController);

export { userRoutes };
