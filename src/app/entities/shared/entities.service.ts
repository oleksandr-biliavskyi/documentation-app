import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IEntity } from './model/entity.model';
import { Jsonp } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class EntitiesService {
    private modelDescription: IEntity[];
    private isDataReadySource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isDataReady: Observable<boolean> = this.isDataReadySource.asObservable();

    constructor(private jsonp: Jsonp) {

    }

    fetchEntities(): Observable<IEntity[]> {

        if (this.modelDescription) {
            return Observable.of(<IEntity[]>this.modelDescription);
        }

        return this.jsonp.request('http://cxdev50staffing.carerix.dev/Trunk/Carerix/cx5/cgi-bin/WebObjects/cxdev50staffing.woa/wa/ExtJS/modelDescription?pwd=Johxei7S&callback=JSONP_CALLBACK', { method: 'Get' })
            .map((response: Response) => {
                this.modelDescription = response.json().rows;
                this.isDataReadySource.next(true);
                return <IEntity[]>this.modelDescription;
            });
    };

    getEntities(): IEntity[] {
        return this.modelDescription;
    }

    getEntityNames() {
        return this.modelDescription.map(entity => entity.name);
    };

    search(searchTerm: string): any[] {
        let results = [],
            searchRegExp;

        if (!searchTerm) {
            return results;
        }

        searchRegExp = new RegExp(`^${searchTerm}`, 'gi');

        this.modelDescription.forEach(entity => {
            if (searchRegExp.test(entity.name)) {
                results.push({entity: entity.name});
            }

            entity.attributes.forEach(attribute => {
                if (searchRegExp.test(attribute.name)) {
                    results.push({
                        entity: entity.name,
                        attribute: attribute.name
                    });
                }

            });

            entity.relationships.forEach(relationship => {
                if (searchRegExp.test(relationship.name)) {
                    results.push({
                        entity: entity.name,
                        relationship: relationship.name
                    });
                }
            });
        });

        return results;
    };
}