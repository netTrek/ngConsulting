import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynTempComponent } from './dyn-temp/dyn-temp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ { path: '', component: DynTempComponent } ] )
  ],
  declarations: [DynTempComponent]
})
export class DynTempModule { }
