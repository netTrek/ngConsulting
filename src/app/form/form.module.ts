import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { FormaterDirective } from './formater.directive';

@NgModule ( {
  imports     : [
    CommonModule,
    RouterModule.forChild ( [ { path: '', component: FormsComponent } ] ),
    FormsModule
  ],
  providers   : [ DecimalPipe ],
  declarations: [ FormsComponent,
                  TemplateDrivenComponent,
                  FormaterDirective
  ],
  exports     : [ FormsComponent,
                  TemplateDrivenComponent,
                  FormaterDirective
  ]
} )
export class FormModule {
}
