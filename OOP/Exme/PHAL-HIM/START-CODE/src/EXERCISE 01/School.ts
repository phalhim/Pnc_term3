import {Class} from './Class'
export class School {
    getStudent() {
        throw new Error('Method not implemented.');
    }
    private class: Class[]= [];
    constructor(private name: string) {
        this.name = name
    }
    getSchool(){
        return this.name
    }
    getClass(){
        return this.class
    }
   
}
