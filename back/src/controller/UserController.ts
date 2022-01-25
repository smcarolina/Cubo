import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController{
    async createUser(req: Request, res: Response){
        try {
            
            const user: UserInputDTO = req.body;

            const message = await new UserBusiness().createUser(user)

            res.status(200).send(message)

        } catch (error) {

            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json("Unexpected error")
            }
        }
    }


    async getAllUsers(req: Request, res: Response){
        try {
            
            const allUsers = await new UserBusiness().getAllUsers()
            

            res.status(200).send(allUsers)

        } catch (error) {

            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json("Unexpected error")
            }
        }
    }
}