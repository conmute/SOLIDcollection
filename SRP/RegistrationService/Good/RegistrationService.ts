import { Notification } from "./Notification";
import { Builder } from "./Builder";
import { Validate } from "./Validate";

class RegistrationService {

    public register(email: string , password:string): void {
        if (!Validate.email(email)) {
            throw "Non valid email";
        }
        var user = Builder.createUser(email, password);
        if (user) {
            Notification.notifyUser(user);
        }
    }

}
