import { User, UserInsertDTO } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "cubo_users"

    async insertUser(user: UserInsertDTO): Promise<string>{

        try {

            await this.getConnection()
                .insert(user).into(UserDatabase.TABLE_NAME)

                return "Usuário criado com sucesso!"

        }  catch (error) {

            if(error instanceof Error){
                throw new Error(error.message);
                
            }else{
                throw new Error("Unexpected error")
            }
        }

    }


    async getAllUsers(): Promise<User[]>{
        try {

            const allUsers: User[] = await this.getConnection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                

            const users = allUsers.map((user)=>{
                return User.userModel(user)
            })

            return users
        }  catch (error) {

            if(error instanceof Error){
                throw new Error(error.message);
                
            }else{
                throw new Error("Unexpected error")
            }
        }
    }
}