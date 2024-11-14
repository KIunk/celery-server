import { config } from "./config";

const isProduction = config.nodeEnv === "production";

export const environmentConfig = {
	logLevel: isProduction ? "error" : "debug",
	enableDebug: !isProduction,
	cacheTimeout: isProduction ? 3600 : 600,
};
