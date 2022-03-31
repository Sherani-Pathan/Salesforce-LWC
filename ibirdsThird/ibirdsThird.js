import { LightningElement } from 'lwc';

export default class IbirdsThird extends LightningElement {
    handleClick() {
        const messageSon = this.template.querySelector('lightning-input[data-id="son"]').value;

        const custEvent = new
            CustomEvent('callpasstoparentson', { detail: messageSon ,bubbles: true, composed: true}
            );
        this.dispatchEvent(custEvent);
    }
}