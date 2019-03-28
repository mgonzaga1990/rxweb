import { ReactiveFormConfig, RxFormBuilder ,dataUri, prop } from '@rxweb/reactive-form-validators';

export class User {

	@prop()
	scheme: string;

	//If you want to apply conditional expression of type 'function'
	@dataUri({conditionalExpression:(x,y) => x.scheme == "DataUri"  }) 
	imageDataUri: string;

	//If you want to apply conditional expression of type 'string'
	@dataUri({conditionalExpression:'x => x.scheme =="DataUri"' }) 
	audioDataUri: string;

	@dataUri({message:'{{0}} is not a proper data URI' }) 
	videoDataUri: string;

}

    describe('Decorator', () => {
      let formBuilder = new RxFormBuilder();
      beforeEach(() => {
        ReactiveFormConfig.set({
          "validationMessage": {
            "dataUri": "Please enter a proper data Uri.",
          }
        });
      });
      describe('dataUriDecorator', () => {
  
      it("Should not error, dataUri decorator  If you want to apply conditional expression of type 'function'",
          () => {
          let user  = new User ();
          user.scheme = 'DataUri';
          let formGroup = formBuilder.formGroup(user);
          formGroup.controls.imageDataUri.setValue('data:image/jpeg;base64,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');
          expect(formGroup.controls.imageDataUri.errors).toBeNull();
       });
  
      it("Should not error, dataUri decorator  If you want to apply conditional expression of type 'function'",
          () => {
          let user  = new User ();
          user.scheme = 'ImageUri';
          let formGroup = formBuilder.formGroup(user);
          formGroup.controls.imageDataUri.setValue('jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRU');
          expect(formGroup.controls.imageDataUri.errors).toBeNull();
       });

      it("Should error, dataUri decorator  If you want to apply conditional expression of type 'function'",
          () => {
          let user  = new User ();
          user.scheme = 'DataUri';
          let formGroup = formBuilder.formGroup(user);
          formGroup.controls.imageDataUri.setValue('jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRU');
          expect(formGroup.controls.imageDataUri.errors).toEqual({'dataUri':{ message: 'Please enter a proper data Uri.', refValues: [ 'jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRU' ] } });
         });
       
  
  
      it("Should not error, dataUri decorator  If you want to apply conditional expression of type 'string'",
          () => {
            let user  = new User ();
            user.scheme = 'DataUri';
            let formGroup = formBuilder.formGroup(user);
            formGroup.controls.audioDataUri.setValue('data:image/jpeg;base64,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');
           expect(formGroup.controls.audioDataUri.errors).toBeNull();
       });
  
      it("Should not error, dataUri decorator  If you want to apply conditional expression of type 'string'",
          () => {
            let user  = new User ();
            user.scheme = 'ImageUri';
            let formGroup = formBuilder.formGroup(user);
            formGroup.controls.audioDataUri.setValue('e/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUT');
            expect(formGroup.controls.audioDataUri.errors).toBeNull();
       });
      it("Should error, dataUri decorator  If you want to apply conditional expression of type 'string'",
          () => {
            let user  = new User ();
            user.scheme = 'DataUri';
            let formGroup = formBuilder.formGroup(user);
            formGroup.controls.audioDataUri.setValue('e/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUT');
           expect(formGroup.controls.audioDataUri.errors).toEqual({'dataUri':{ message: 'Please enter a proper data Uri.', refValues: [ 'e/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUT' ] } });
       });
  
       it("Should error, dataUri decorator Shows custom message",
          () => {
          let user  = new User ();
          let formGroup = formBuilder.formGroup(user);
          formGroup.controls.videoDataUri.setValue('e/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUT');
          expect(formGroup.controls.videoDataUri.errors).toEqual({'dataUri':{ message: 'e/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUT is not a proper data URI', refValues: [ 'e/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUT' ] } });
       });
  
      //end
      });
    });
