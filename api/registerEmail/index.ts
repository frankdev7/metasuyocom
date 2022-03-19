import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserController } from "../controller";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const userController = new UserController();
    let result: any = {};
    const HEADERS = {'Content-Type': 'application/json'}
    console.log(req.body);
    try {
        result = await userController.create(req.body.email);
        result.statusCode = 200;
        
        context.res = {
            body: result,
            headers: HEADERS
        };
        
    } catch(ex) {
        console.log("Exception occurred while logging in --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }
};

export default httpTrigger;