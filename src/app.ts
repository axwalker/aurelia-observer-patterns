import {bindable} from 'aurelia-framework';

import {Person} from './person';


export class App {
    @bindable() people: Person[] = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Joe', lastName: 'Bloggs'},
    ];
    
    @bindable() selectedPerson: Person;
    
    selectedPersonChanged(person) {
        alert(`${person.firstName} ${person.lastName} selected`);
    }
}
