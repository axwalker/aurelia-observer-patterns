export class Signal<T> {
    handlers: ((T) => any)[] = [];
    
    add(f: (t: T) => any) {
        this.handlers.push(f);
    }
    
    dispatch(t: T) {
        this.handlers.forEach(f => f(t));
    }
}
