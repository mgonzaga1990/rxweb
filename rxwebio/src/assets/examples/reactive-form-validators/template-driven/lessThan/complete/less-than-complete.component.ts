import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-lessThan-complete-template-driven',
    templateUrl: './less-than-complete.component.html'
})
export class LessThanCompleteTemplateDrivenComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
