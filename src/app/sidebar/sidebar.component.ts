import { Component } from '@angular/core';
import { EntitiesService } from '../entities/shared/entities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html',
    styles: ['li.nav-item:hover{background-color: #c4e3ff;}']
})

export class SideBarComponent {

    entities:string[];
    private sub:any;

    constructor(private entitiesService: EntitiesService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.entities = this.entitiesService.getEntityNames();
    }
}