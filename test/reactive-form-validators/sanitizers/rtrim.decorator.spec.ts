
import {  RxFormBuilder, rtrim, prop } from '../../../packages/reactive-form-validators';



export class User {

    @prop()
    @rtrim()
    userName: string;

}




(function () {
    describe('Decorator', () => {
        let formBuilder = new RxFormBuilder();

        describe('rtrimDecorator', () => {


            it('should pass.',
                () => {
                    let user = new User();
                    user.userName = "ajay          ";
                    let formGroup = formBuilder.formGroup(user);
                    expect(formGroup.controls.userName.value).toEqual("ajay");
                });


            it('should pass and value is "          ajay          ".',
                () => {
                    let user = new User();
                    user.userName = "          ajay          ";
                    let formGroup = formBuilder.formGroup(user);
                    expect(formGroup.controls.userName.value).toEqual("          ajay");
                });

            it('should pass with setValue method.',
                () => {
                    let formGroup = formBuilder.formGroup(User);
                    formGroup.controls.userName.setValue("          ajay          ");
                    expect(formGroup.controls.userName.value).toEqual("          ajay");
                });

            //end
        });
    });
})();