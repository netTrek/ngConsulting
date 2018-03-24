import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ {path: '', component: ChangeDetectComponent} ] )
  ],
  declarations: [ChangeDetectComponent, AComponent, BComponent, CComponent],
  exports: [ChangeDetectComponent, AComponent, BComponent, CComponent]
})
export class ChangeDetectModule { }
