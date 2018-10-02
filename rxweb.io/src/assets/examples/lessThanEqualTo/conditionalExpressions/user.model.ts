import {  lessThanEqualTo,prop,} from "@rxweb/reactive-form-validators"

export class User {

	@prop()
	totalMarks: number;
	@lessThanEqualTo({fieldName:'totalMarks'  ,conditionalExpressions:x => x.totalMarks == 100 }) 
	obtainedMarks: number;
}
