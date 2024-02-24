import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-root',
    // template:  `<app-child [(text)]="text"></app-child>`,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // public text: string = 'lesson';
    public form!: FormGroup;

    public ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            surname: new FormControl(null)
        });
    }
    // parent <- child   @Output
    public onSubmit(form: FormGroup): void {
        const data: { name: string, surname: string } = {
            name: form.get('name')?.value,
            surname: form.get('surname')?.value
        };
        this.getUser(data);
    }

    public getUser(user: { name: string, surname: string }): void {
        if (user.name === 'oleg' && user.surname === 'ppp') {
            console.log('Такой пользователь существует');
        }
    }
}

// cli, component, input, output, two-way binding, viewChild
