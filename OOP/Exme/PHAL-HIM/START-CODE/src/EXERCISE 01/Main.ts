import {Class} from './Class';
import {School} from './School';
import {Student} from './Student';
import {Person} from './Person'


let className = new Class('web B');
let school = new School('PNC');
let student =new Student('01223389', 'phal',33);
school.getClass().push(new Class('web B'));
console.log(school);

className.getStudent().push((student));
console.log(className);
