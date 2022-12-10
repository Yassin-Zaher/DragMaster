import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { AddNewItemComponent } from "./screen/add-new-item/add-new-item.component";
import { ConnectedItemsComponent } from './screen/connected-items/connected-items.component';
import { InnerAppComponent } from './inner-module/inner-app/inner-app.component';
import { IndexComponent } from "./shared/page/index/index.component";

const routes: Routes = [
  {
    path: 'page1',
    component: AddNewItemComponent
  },
  {
    path: 'page2',
    component: InnerAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
