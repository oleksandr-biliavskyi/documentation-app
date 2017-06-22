import { Component, OnInit, OnDestroy} from '@angular/core';
import { EntitiesService } from '../../entities/shared/entities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAttribute } from '../shared/model/entity.model';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit, OnDestroy {

  attributes: IAttribute[];

  private sub1: any;
  private sub2: any;
  private dataReady: Boolean = false;
  private fragment: string;
  private entityName: string;
  private type: string;

  constructor(private entitiesService: EntitiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.entitiesService.isDataReady.subscribe((
      (dataReady: Boolean) => {
        this.dataReady = dataReady;
        if (dataReady) {
          const entities = this.entitiesService.getEntities();
          this.sub1 = this.route.parent.params.subscribe(params => {
            this.entityName = params['entityName'];
            this.assignAttributes();
          });

          this.sub2 = this.route.params.subscribe(params => {
            this.type = params['type'];
            this.assignAttributes();
          });
        }
      })
    );
  }

  assignAttributes() {
    const tree = this.router.parseUrl(this.router.url);

    if (this.entityName && this.type) {
      const entities = this.entitiesService.getEntities();
      this.attributes = entities.find(entity => entity.name === this.entityName)[this.type];
    }

    if (tree.fragment) {
      setTimeout(() => {
        const element = document.querySelector('#' + tree.fragment);
        if (element) { element.scrollIntoView(element); }
      }, 100);
    } else {
      setTimeout(() => {
        const element = document.querySelector('#toplink');
        if (element) { element.scrollIntoView(element); }
      }, 100);
    }
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();

  }
}
