import postgres from "postgres";

export const sql = postgres({
  host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
  port                 : 5432,          // Postgres server port[s]
  database             : 'suretiCms',            // Name of database to connect to
  username             : 'postgres',            // Username of database user
      // Password of database user
})