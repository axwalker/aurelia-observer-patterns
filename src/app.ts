import {Person} from './person';


export class App {
    people: Person[] = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Joe', lastName: 'Bloggs'},
    ];

    selectPerson(person) {
        alert(`${person.firstName} ${person.lastName} selected`);
    }
}
