abstract class Mailbox{
    constructor(private name:string){
        this.name = name;
    }
}

class Mail extends Mailbox{
    constructor(private title:string, private body:string, name: string){
        super(name);
        this.title = title;
        this.body = body;
    }
}

class ReceivedMail extends Mail{
    constructor(private receivedDate:string, title:string, body:string ,name:string){
        super(title,body,name);
        this.receivedDate = receivedDate;
    }
}

class SentMail extends Mail{
    constructor(private sentDate:string, title:string, body:string ,name:string){
        super(title,body,name);
        this.sentDate = sentDate;
    }
}

class User extends ReceivedMail {
    constructor(private firstName: string, private lastName: string, receivedDate:string, title:string, body:string, name:string, sentDate:string){
        super(receivedDate,title,body,name);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


let user = new User("phal", "OK", "1111-01-01", "Wow", "Wow", "JohnDoe", "2020-01-01");

console.log(user);