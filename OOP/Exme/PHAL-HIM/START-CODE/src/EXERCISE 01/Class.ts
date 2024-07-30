import {Student} from './Student'
export class Class {
    private student : Student[]=[];
    constructor(private name: string) {
        this.name = name
    }
    getStudent(){
       return this.student;
    }
}