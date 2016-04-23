import {Person} from './person';
import {SelectedPersonHolder} from './SelectedPersonHolder';
import {autoinject} from 'aurelia-framework';

@autoinject
export class App {
    people: Person[] = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Joe', lastName: 'Bloggs'},
    ];

    constructor(private selectedPersonHolder: SelectedPersonHolder) {
    }

}
