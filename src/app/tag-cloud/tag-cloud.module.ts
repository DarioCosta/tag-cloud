import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCloudComponent } from './tag-cloud.component';
import { TagBadgeComponent } from './tag-badge/tag-badge.component';

import { TagCloudService } from './tag-cloud.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TagCloudComponent,
    TagBadgeComponent
  ],
  providers: [TagCloudService],
  exports: [ TagCloudComponent ]
})
export class TagCloudModule { }
