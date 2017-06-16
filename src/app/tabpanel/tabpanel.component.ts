import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Tab } from './tab/tab.component';

@Component({
    selector: 'tab-panel',
    templateUrl: './tabpanel.component.html'
})
export class TabPanel implements AfterContentInit {

    @ContentChildren(Tab) tabs: QueryList<Tab>;

    ngAfterContentInit() {
        let activeTabs = this.tabs.filter((tab) => tab.active);

        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: Tab) {
        this.tabs.toArray().forEach(tab => tab.active = false);
        tab.active = true;
    }

}