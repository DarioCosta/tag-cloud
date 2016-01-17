import {Component, OnInit} from 'angular2/core';
import {TagCloudComponent} from './tag-cloud.component';
import {TagCloudService} from './tag-cloud.service';


@Component({
	selector: 'simple-tag-cloud',
	template: `
    	<tag-cloud (selectedTag)="true" [text]="text" [showSize]="showSize" [maxWords]="maxWords" [ignore]="ignore" [highlight]="highlight"></tag-cloud>
	`,
	inputs: ['text', 'maxWords', 'minLength', 'highlight', 'ignore', 'masSizeRatio','showSize'],
	outputs: ['selectedTag'],
	directives: [TagCloudComponent],
	providers: [TagCloudService]
})
export class SimpleTagCloudComponent extends TagCloudComponent {

	constructor(_tagCloudService: TagCloudService) {
		super(_tagCloudService);
	}

}
