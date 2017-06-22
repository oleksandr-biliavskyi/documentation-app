import { Component } from '@angular/core';
import { EntitiesService } from '../entities/shared/entities.service';
import { Router } from '@angular/router';

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html',
    styles: ['li.nav-item:hover{background-color: #c4e3ff;}', 'li.nav-item.active{background-color: #c4e3ff;}']
})

export class SideBarComponent {

    entities: string[];
    private sub: any;

    constructor(private entitiesService: EntitiesService, private router: Router) {

    }

    isItemActive(entityName: string) {

        return false;
    }

    ngOnInit() {
        this.entities = this.entitiesService.getEntityNames();
    }
}