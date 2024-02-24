import { Component, EventEmitter, Input, Output } from '@angular/core';

function transformField(value: string): string {
    console.log(value);

    return value + ' 123';
}

@Component({
    selector: 'app-child',
    template: `<div>
        <h1>{{text}}</h1>
        <!-- <button (click)="updateText()"></button> -->

        <button (click)="handlerStr()">Отправить родителю</button>
    </div>`,
})
export class ChildComponent {

    @Input({ required: true, transform: transformField })
    public text!: string;

    @Output()
    public titleEmitter: EventEmitter<string> = new EventEmitter<string>();

    public handlerStr(): void {
        this.titleEmitter.next('Child');
    }

    // public updateText(): void {
    //     this.text += ' A';
    //     this.titleEmitter.next(this.text);
    // }
}














