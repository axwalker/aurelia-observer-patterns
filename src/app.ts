import {bindable} from 'aurelia-framework';

import {Person} from './person';
import {PersonList} from './person-list';


export class App {
    @bindable() people: Person[] = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Joe', lastName: 'Bloggs'},
    ];
    personList: PersonList;
    
    attached() {
        this.personList.personSelected.add(person => this.personSelected(person));
    }
    
    personSelected(person: Person) {
        alert(`${person.firstName} ${person.lastName} selected`);
    }
}
