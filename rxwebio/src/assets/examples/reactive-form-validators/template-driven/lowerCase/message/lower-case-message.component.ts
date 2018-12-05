import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-lowerCase-message-template-driven',
    templateUrl: './lower-case-message.component.html'
})
export class LowerCaseMessageTemplateDrivenComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
