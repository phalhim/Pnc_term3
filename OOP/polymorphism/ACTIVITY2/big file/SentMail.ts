class SentMail extends Mail{
    constructor(private sentDate:string ,title:string,body:string,name:string){
        super(title,body, name);
        this.sentDate = sentDate;
    }
}