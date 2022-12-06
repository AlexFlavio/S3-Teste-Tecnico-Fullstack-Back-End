import { Router } from "express";
import createSessionController from "../../controllers/session/createSession.controller";
import { SchemavalidatorMiddleware } from "../../middlewares/schemaValidator.middleware";
import { sessionSchema } from "../../schemas/session/index.schemas";

const sessionRoute = Router();

sessionRoute.post(
  "",
  SchemavalidatorMiddleware(sessionSchema),
  createSessionController
);

export { sessionRoute };
