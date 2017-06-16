import { Component } from '@angular/core';
import { EntitiesService } from './entities/shared/entities.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dataReady:boolean = false;

  constructor(private entitiesService: EntitiesService) {

  }

  ngOnInit() {
    this.entitiesService.fetchEntities().subscribe(entities => {this.dataReady = true;});
  }

  showProgress():Boolean {
    return !this.dataReady;
  }

}
