import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeMainComponent } from './inner-app/node-main/node-main.component';
import { NodeVOneComponent } from './inner-app/node-vone/node-vone.component';
import { DialogComponent } from './inner-app/dialog.component';
import { DynamicNodeComponent } from './inner-app/dynamic-node.component';
import { InnerAppComponent } from './inner-app/inner-app.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NodeMainComponent,
    NodeVOneComponent,
    DialogComponent,
    DynamicNodeComponent,
    InnerAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InnerAppComponent
  ]
})
export class InnerModuleModule { }
