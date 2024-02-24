import { Component } from '@angular/core';

@Component({
    templateUrl: './parent.component.html',
    selector: 'app-parent'
})
export class ParentComponent {

    public title: string = 'Parent';

    public print(value: string): void {
        console.log(value);
    }
}
