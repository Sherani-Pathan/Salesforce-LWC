import { LightningElement } from 'lwc';
export default class IbirdsSecond extends LightningElement {

    messageSon;
    ibirdsThirdComponent(event){
        this.messageSon = event.detail;
       // console.log('ibirds first1', this.messageSon);
    }
}