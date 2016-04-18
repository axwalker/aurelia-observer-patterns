import {autoinject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Person} from './person';


@autoinject
export class App {
    @bindable() people: Person[] = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Joe', lastName: 'Bloggs'},
    ];
    eventAggregator: EventAggregator;
    
    constructor(eventAggregator: EventAggregator) {
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe('person:selected', person => this.personSelected(person));
    }
    
    personSelected(person: Person) {
        alert(`${person.firstName} ${person.lastName} selected`);
    }
}
