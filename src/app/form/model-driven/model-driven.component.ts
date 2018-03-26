import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component ( {
  selector   : 'msg-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls  : [ './model-driven.component.scss' ]
} )
export class ModelDrivenComponent implements OnInit {

  // get credentialsGroup (): FormGroup {
  //   return this.myForm.controls.credentials as FormGroup;
  // }
  //
  // get emailCtrl (): FormControl {
  //   if ( this.credentialsGroup ) {
  //     return this.credentialsGroup.controls.email as FormControl;
  //   }
  //   return undefined;
  // }
  //
  // get passwordCtrl (): FormControl {
  //   if ( this.credentialsGroup ) {
  //     return this.credentialsGroup.controls.password as FormControl;
  //   }
  //   return undefined;
  // }

  myForm: FormGroup;
  nameCtrl: FormControl;
  credentialsGroup: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor ( private fb: FormBuilder ) {
  }

  ngOnInit () {

    this.myForm = this.fb.group( {
      name: [ 'Saban', Validators.required ],
      credentials: this.fb.group ( {
        email: ['us@netTrek.de', [ Validators.email, Validators.required]],
        password: ['test1234', Validators.required ]
      })
    });

    this.nameCtrl = this.myForm.get( 'name') as FormControl;
    this.credentialsGroup = this.myForm.get( 'credentials') as FormGroup;
    this.emailCtrl = this.myForm.get( ['credentials', 'email'] ) as FormControl;
    this.passwordCtrl = this.myForm.get( ['credentials', 'password']) as FormControl;

    // this.myForm = new FormGroup ( {
    //   name       : new FormControl ( 'Saban', Validators.required ),
    //   credentials: new FormGroup ( {
    //     email   : new FormControl ( 'us@netTrek.de', [ Validators.email,
    //                                                    Validators.required
    //     ] ),
    //     password: new FormControl ( 'test1234', Validators.required )
    //   } )
    // } );
  }

  send () {
    console.log ( this.myForm.value );
  }

  reset ( event?: Event ) {
    event.stopPropagation ();
    event.preventDefault ();
    this.myForm.controls.name.setValue ( 'Saban' );
    (this.myForm.controls.credentials as FormGroup).controls.email.setValue ( 'us@netTrek.de' );
    (this.myForm.controls.credentials as FormGroup).controls.password.setValue ( 'test1234' );
  }

}
