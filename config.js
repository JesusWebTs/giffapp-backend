import { join } from "path";
import env from "dotenv";
env.config();

export default {
  server: {
    HOST: "localhost",
    PORT: process.env.PORT || 8000,
  },
  db: {
    dbUser: process.env.dbUser,
    dbPassword: process.env.dbPassword,
  },
  express_sets: {
    /* api: {
      routes: {
        mainRouter: join(__dirname, "routes/userRouter.js"),
        mainRouter: join(__dirname, "routes/gifFav.js"),
      },
    }, */
  },
};
