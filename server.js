import { app } from "./app.js";
import config from "./config.js";
const PORT = app.get("PORT"),
  HOST = app.get("HOST");
app.listen(PORT, HOST, () => {
  console.log(`Server is Started ${config.server.HOST} on port ${PORT}`);
});
