export class Builder {

    public static createUser(email: string , password:string): User {
        var user = new User(email, password);
        _database.Save(user);
        return user;
    }

}
