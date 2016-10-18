export class Validate {

    public static email(email: string): boolean {
        return !email.indexOf("@") !== -1;
    }

}
