import {bindable, autoinject} from 'aurelia-framework';

import {Person} from './person';
import {SelectedPersonHolder} from './SelectedPersonHolder';

@autoinject
export class PersonList {
    @bindable() people: Person[];

    constructor(private selectedPersonHolder: SelectedPersonHolder) {
    }

    selectPerson(person) {
        this.selectedPersonHolder.person = person;
    }
}
