import {Person} from './person';
import {SelectedPersonHolder} from './SelectedPersonHolder';
import {autoinject, BindingEngine, Disposable} from 'aurelia-framework';

@autoinject
export class App {
    people: Person[] = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Joe', lastName: 'Bloggs'},
    ];
    observerDisposer: Disposable;

    constructor(private selectedPersonHolder: SelectedPersonHolder, private bindingEngine: BindingEngine) {
      this.observerDisposer = this.bindingEngine.propertyObserver(this.selectedPersonHolder, "person")
      .subscribe((person: Person, oldValue: Person) => {
        alert(`${person.firstName} ${person.lastName} selected`);
      });
    }

    deactivate() {
      this.observerDisposer.dispose();
    }
}
