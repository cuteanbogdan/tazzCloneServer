import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/UserValidators";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.post("/signup", UserValidators.signup(), UserController.signup);
    this.router.get("/test", UserController.test1, UserController.test2);
  }

  postRoutes() {}

  patchRoutes() {}

  putRoutes() {}

  deleteRoutes() {}
}

export default new UserRouter().router;
