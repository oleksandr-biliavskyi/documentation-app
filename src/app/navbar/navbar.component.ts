import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {

    searchForm: FormGroup;

    @Input() dataReady: Boolean;

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.searchForm = new FormGroup({
            searchControl: new FormControl()
        });

        this.searchForm.controls.searchControl.valueChanges.subscribe(value => {
            console.log(value);
        });
    }
}