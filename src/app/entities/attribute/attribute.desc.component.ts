import { Component, Input } from '@angular/core';
import { IAttribute } from '../shared/model/entity.model'

@Component({
    selector: 'app-attribute-desc',
    templateUrl: './attribute.desc.component.html',
    styles: ['div.attribute-type { color: grey; margin-bottom:5px;}', 'div.attribute-label > span {color : #0275d8; }']
})
export class AttributeDesc {
    @Input('attributeDesc') attributeDesc: IAttribute;

    hasLabel(): Boolean {
        return this.attributeDesc.name !== this.attributeDesc.label;
    }
}