import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { EntitiesService } from '../entities/shared/entities.service';
import { ActivatedRoute } from '@angular/router';
import { IEntity } from '../entities/shared/model/entity.model';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MdOptionSelectionChange } from '@angular/material';

@Component({
  selector: 'app-search-combo',
  templateUrl: './search-combo.component.html',
  styleUrls: ['./search-combo.component.css']
})
export class SearchComboComponent {
  searchControl: FormControl;
  searhResults: any;
  options = [];


  constructor(private entitiesService: EntitiesService, private router:Router) {
    this.searchControl = new FormControl();
    this.searhResults = this.searchControl.valueChanges
      .startWith(null)
      .map(searchTerm => this.search(searchTerm));

  }

  search(searchTerm: string) {
    return this.entitiesService.search(searchTerm);
  }

  onSelectHandler(event: MdOptionSelectionChange, result) {

    if (result.attribute) {
      this.router.navigate(['/', result.entity, 'attributes'], {fragment: result.attribute});
    } else if (result.relationship) {
      this.router.navigate(['/', result.entity, 'relationships'], {fragment: result.relationship});
    } else {
      this.router.navigate(['/', result.entity]);
    }
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
