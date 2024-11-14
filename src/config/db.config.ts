import { Kysely, PostgresDialect } from "kysely";
import type { DB } from "kysely-codegen";
import { config } from "./config";
import pg from "pg";
const { Pool } = pg;

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool: new Pool({
			connectionString: config.databaseUrl,
		}),
	}),
});
