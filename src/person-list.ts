import {autoinject, bindable} from 'aurelia-framework';

import {Person} from './person';
import {Signal} from './signal';


@autoinject
export class PersonList {
    @bindable() people: Person[];
    personSelected: Signal<Person> = new Signal<Person>();
    
    selectPerson(person: Person) {
        this.personSelected.dispatch(person);
    }
}
