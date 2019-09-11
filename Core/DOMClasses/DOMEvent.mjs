export default class DOMEvent {
    constructor(event_trigger, event_funtion) {
        this.event_function = event_funtion;
        this.event_trigger = event_trigger;
    }

    attach(DOM) { DOM.attachEventListener(this.event_trigger, this.event_function) }
    deattach(DOM) { DOM.removeEventListener(this.event_trigger, this.event_function) }
}