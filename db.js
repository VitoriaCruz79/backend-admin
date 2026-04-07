import { Pool } from "pg";

const db = new Pool ({
    user: "admin",
    host: "192.168.100.42",
    database: "admin",
    password: "admin",
    port: 5432
});

export { db };