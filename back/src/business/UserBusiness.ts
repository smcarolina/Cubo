import { UserDatabase } from "../data/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness{
    async createUser(input: UserInputDTO): Promise<string> {
        if(!input.firstName || !input.lastName || !input.participation){
            throw new MissingFields();   
        }

        if(input.participation === 0){
            throw new Error("Participation can't to be zero");
            
        }

        const user: UserInsertDTO = {
            id: new IdGenerator().generate(),
            ...input
        }

        const message = await new UserDatabase().insertUser(user)
        return message
    }

    async getAllUsers(){
        const allUsers = await new UserDatabase().getAllUsers()

        return allUsers
    }
}