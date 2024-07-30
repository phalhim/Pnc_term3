
class User extends SentMail {
    constructor(private firstName: string, private lastName: string, receivedDate: string, title: string, body: string, name: string, sentDate: string) {
        super(receivedDate, title, body, name);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}