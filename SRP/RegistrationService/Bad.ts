class UserService {

    public register(email: string , password:string): void {
        if (email.indexOf("@") === -1) {
            throw "Non valid email";
        }
        var user = new User(email, password);
        _database.Save(user);
        if (user) {
            smtpClient.Send("mysite@nowhere.com", user.email, {
                Subject: "Hello fool!"
            });
        }
    }

}
/**
 * Problems:
 *
 * - How we can reuse the code?
 * - What if any part of code must be changed? Should we repeat the change everywhere else?
 * - How can we determine the class responsibilty?
 *
 */
