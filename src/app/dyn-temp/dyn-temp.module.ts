import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynTempComponent } from './dyn-temp/dyn-temp.component';
import { RouterModule } from '@angular/router';
import { TmpViaDirComponent } from './tmp-via-dir/tmp-via-dir.component';
import { TmpDirective } from './tmp.directive';
import { UseTmpComponent } from './use-tmp/use-tmp.component';
import { RoleDirective } from './role.directive';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path: '', component: TmpViaDirComponent }
      /*{ path: '', component: DynTempComponent } --- beispiele für templateOutlet*/
      ] )
  ],
  declarations: [DynTempComponent, TmpViaDirComponent, TmpDirective, UseTmpComponent, RoleDirective, EntryComponent],
  entryComponents: [ EntryComponent ]
})
export class DynTempModule { }
