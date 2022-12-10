import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AddNewItemComponent } from './screen/add-new-item/add-new-item.component';
import { ItemComponent } from './component/item/item.component';
import { ConnectedItemsComponent } from './screen/connected-items/connected-items.component';
import { InnerModuleModule } from "./inner-module/inner-module.module";

@NgModule({
  declarations: [
    AppComponent,
    AddNewItemComponent,
    ItemComponent,
    ConnectedItemsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
