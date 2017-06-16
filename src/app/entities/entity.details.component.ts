import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntitiesService } from '../entities/shared/entities.service';
import { ActivatedRoute} from '@angular/router';
import { IEntity } from './shared/model/entity.model';

@Component({
    selector: 'app-entity-details',
    templateUrl: './entity.details.component.html'
})

export class EntityDetailsComponent implements OnInit, OnDestroy{

    entity: IEntity;
    private sub1: any;
    private sub2: any;
    private dataReady: Boolean = false;
    private isAttributesTabActive: Boolean = true;

    constructor(private entitiesService: EntitiesService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.entitiesService.isDataReady.subscribe((
            (dataReady: Boolean) => {
                this.dataReady = dataReady;
                if (dataReady) {
                    const entities = this.entitiesService.getEntities();

                    this.sub1 = this.route.params.subscribe(params => {
                        this.entity = entities.find(entity => entity.name === params['entityName']);
                    });

                    this.sub2 = this.route.children[0].params.subscribe(params => {
                        this.isAttributesTabActive = params['type'] === 'attributes';
                    });
                }
            })
        );
    }

    ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    }
}