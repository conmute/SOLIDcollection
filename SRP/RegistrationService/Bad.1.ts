class UserService {

    public register(email: string , password:string): void {
        if (!this.validateEmail(email)) {
            throw "Non valid email";
        }
        var user = this.createUser(email, password);
        if (user) {
            this.notifyEmail(user);
        }
    }

    public validateEmail(email: string): boolean {
        return !email.indexOf("@") !== -1;
    }

    public createUser(email: string , password:string): User {
        var user = new User(email, password);
        _database.Save(user);
        return user;
    }

    public notifyUser(user: User): void {
        smtpClient.Send("mysite@nowhere.com", user.email, {
            Subject: "Hello fool!"
        });
    }

}
/**
 * Problems:
 *
 * - How can we determine the class responsibilty?
 *
 */
