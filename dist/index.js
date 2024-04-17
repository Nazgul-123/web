import { helloWorldController } from "./controllers/HelloWorldController.js";
import { rootController } from "./controllers/RootController.js";
import { app } from "./server.js";
const registerControllers = () => {
  app.get("/helloWorld", helloWorldController);
  app.get("/", rootController);
};
registerControllers();
