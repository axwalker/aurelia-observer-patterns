import {autoinject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Person} from './person';


@autoinject
export class PersonList {
    @bindable() people: Person[];
    eventAggregator: EventAggregator;
    
    constructor(eventAggregator: EventAggregator) {
        this.eventAggregator = eventAggregator;
    }
    
    selectPerson(person: Person) {
        this.eventAggregator.publish('person:selected', person);
    }
}
