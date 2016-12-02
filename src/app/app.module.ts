import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';
import { TagBadgeComponent } from './tag-cloud/tag-badge/tag-badge.component';

import { TagCloudService } from './tag-cloud/tag-cloud.service';

@NgModule({
  declarations: [
    AppComponent,
    TagCloudComponent,
    TagBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TagCloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
