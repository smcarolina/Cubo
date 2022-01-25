import knex, { Knex } from "knex";
import dotenv from "dotenv"

dotenv.config()

export class BaseDatabase{
    
    protected static connection: Knex | null = null

    protected getConnection():Knex{

        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection:{
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    port: 3306
                }
            })
        }

        return BaseDatabase.connection


    }

}