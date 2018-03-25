import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { FormaterDirective } from './formater.directive';
import { EqualValidatorDirective } from './equal-validator.directive';
import { FutureValidatorDirective } from './future-validator.directive';

@NgModule ( {
  imports     : [
    CommonModule,
    RouterModule.forChild ( [ { path: '', component: FormsComponent } ] ),
    FormsModule
  ],
  providers   : [ DecimalPipe ],
  declarations: [ FormsComponent,
                  TemplateDrivenComponent,
                  FormaterDirective,
                  EqualValidatorDirective,
                  FutureValidatorDirective
  ],
  exports     : [ FormsComponent,
                  TemplateDrivenComponent,
                  FormaterDirective,
                  EqualValidatorDirective,
                  FutureValidatorDirective
  ]
} )
export class FormModule {
}
