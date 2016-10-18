export class Notification {

    public static notifyUser(user: User): void {
        smtpClient.Send("mysite@nowhere.com", user.email, {
            Subject: "Hello fool!"
        });
    }

}
