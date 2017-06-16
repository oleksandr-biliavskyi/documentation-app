import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EntitiesService } from '../entities/shared/entities.service';
import { ActivatedRoute } from '@angular/router';
import { IEntity } from '../entities/shared/model/entity.model';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-combo',
  templateUrl: './search-combo.component.html',
  styleUrls: ['./search-combo.component.css']
})
export class SearchComboComponent {
  searchControl: FormControl;
  searhResults: any;
  options = [];


  constructor(private entitiesService: EntitiesService) {
    this.searchControl = new FormControl();
    this.searhResults = this.searchControl.valueChanges
      .startWith(null)
      .map(searchTerm => this.search(searchTerm));

  }

  search(searchTerm: string) {
    return this.entitiesService.search(searchTerm);
  }


  getDisplayValue(result) {
    if (result.attribute) {
      return result.entity + '.' + result.attribute;
    } else if (result.relationship) {
      return result.entity + '.' + result.relationship;
    } else {
      return result.entity;
    }

  }

}
