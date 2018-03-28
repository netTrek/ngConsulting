import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenChildComponent } from './conten-child/conten-child.component';
import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [{
      path: '', component: ContenChildComponent
    }] )
  ],
  declarations: [ContenChildComponent, UserHeaderComponent]
})
export class ContentChildSampleModule { }
