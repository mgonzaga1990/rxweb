import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumeric-dynamic-validator',
    templateUrl: './alpha-numeric-dynamic.component.html'
})
export class AlphaNumericDynamicValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/alphaNumeric/dynamic/dynamic.json').subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var location = { areaName:'', flatAddress:'', postalAddress:'', countryCode:'', cityCode:'',  }
			this.locationFormGroup = this.formBuilder.group(location,formBuilderConfiguration);
		})
    }
}
