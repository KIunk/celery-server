import express, { type Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./config/config";
import apiRouter from "./api";

export class App {
	private app: Express;

	constructor() {
		this.app = express();

		this.configureMiddleware();
		this.configureRoutes();
	}

	private configureMiddleware() {
		this.app.use(helmet());
		this.app.use(express.json());
		this.app.use(morgan("dev"));
	}

	private configureRoutes() {
		this.app.use("/api", apiRouter);
	}

	public start() {
		this.app.listen(config.port, () => {
			console.log(
				`App running.\nRunning app on port ${config.port}\nLink: http://127.0.0.1:${config.port}`,
			);
		});
	}
}
