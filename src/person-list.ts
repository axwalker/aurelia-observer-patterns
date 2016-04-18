import {bindable} from 'aurelia-framework';

import {Person} from './person';


export class PersonList {
    @bindable() people: Person[];
    @bindable() selectedPerson: Person;
    
    selectPerson(person) {
        this.selectedPerson = person;
    }
}
