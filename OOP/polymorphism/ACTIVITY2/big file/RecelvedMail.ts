class ReceivedMail extends Mail{
    constructor(public receivedDate:string,title:string, body:string,name:string ){
        super(title, body, name);
        this.receivedDate = receivedDate;
    }
}