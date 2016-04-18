import {bindable} from 'aurelia-framework';

import {Person} from './person';


export class PersonList {
    @bindable() people: Person[];
}