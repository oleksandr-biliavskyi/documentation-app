import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AttributeDesc } from './entities/attribute/attribute.desc.component';
import { JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
    EntitiesService,
    EntityDetailsComponent,
    IEntity,
    IAttribute
} from './entities/index';
import { SearchComboComponent } from './search-combo/search-combo.component';
import { AttributeListComponent } from './entities/attribute-list/attribute-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    EntityDetailsComponent,
    AttributeDesc,
    SearchComboComponent,
    AttributeListComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EntitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
