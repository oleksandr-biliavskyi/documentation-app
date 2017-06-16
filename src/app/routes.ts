import { Routes } from '@angular/router';
import { EntityDetailsComponent } from './entities/entity.details.component';
import { AttributeListComponent } from './entities/attribute-list/attribute-list.component';


export const appRoutes = [
    {path: ':entityName', component: EntityDetailsComponent,
    children: [
      { path: '', redirectTo: 'attributes', pathMatch: 'full' },
      { path: ':type', component: AttributeListComponent },
    ]
  }
];