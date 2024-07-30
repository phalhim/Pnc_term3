export class Mail extends Mailbox {
    constructor(private title: string, private body: string, name: string) {
        super(name)
        this.title = title;
        this.body = body;
    }
}