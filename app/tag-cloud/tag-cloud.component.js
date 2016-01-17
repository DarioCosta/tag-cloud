System.register(['angular2/core', './tag-badge.component', './tag-cloud.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tag_badge_component_1, tag_cloud_service_1;
    var TagCloudComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tag_badge_component_1_1) {
                tag_badge_component_1 = tag_badge_component_1_1;
            },
            function (tag_cloud_service_1_1) {
                tag_cloud_service_1 = tag_cloud_service_1_1;
            }],
        execute: function() {
            TagCloudComponent = (function () {
                function TagCloudComponent(_tagCloudService) {
                    this._tagCloudService = _tagCloudService;
                    this.maxWords = 20;
                    this.highlight = [];
                    this.ignore = [];
                    this.minLength = 3;
                    this.showSize = true;
                    this.maxSizeRatio = 5;
                    this.selectedTag = new core_1.EventEmitter();
                    this.sizeRatio = 10;
                }
                TagCloudComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._tagCloudService.getTagCloud(this.text, this.maxWords, this.highlight, this.minLength, this.ignore).then(function (tagCloud) {
                        _this.tagCloud = tagCloud;
                        _this.sizeRatio = (_this.maxSizeRatio * 100 - 100) / (_this.tagCloud.max - 1);
                    });
                };
                TagCloudComponent.prototype.onTagSelected = function (tag) {
                    this.selectedTag.emit(tag.name);
                };
                TagCloudComponent = __decorate([
                    core_1.Component({
                        selector: 'tag-cloud',
                        template: "\n\t\t<div *ngIf=\"tagCloud\">\n\t\t\t<div>{{tagCloud.max}} - {{sizeRatio}}</div>\n\t\t\t<div [style.width]=\"'100%'\">\n\t\t\t\t<tag-badge *ngFor=\"#tag of tagCloud.tags\" [tag]=\"tag\" [sizeRatio]=\"sizeRatio\" [showSize]=\"showSize\" (selected)=\"onTagSelected($event)\"></tag-badge>\n\t\t\t</div>\n\t\t</div>\n\t",
                        inputs: ['text', 'maxWords', 'minLength', 'highlight', 'ignore', 'masSizeRatio', 'showSize'],
                        outputs: ['selectedTag'],
                        directives: [tag_badge_component_1.TagBadgeComponent],
                        providers: [tag_cloud_service_1.TagCloudService]
                    }), 
                    __metadata('design:paramtypes', [tag_cloud_service_1.TagCloudService])
                ], TagCloudComponent);
                return TagCloudComponent;
            })();
            exports_1("TagCloudComponent", TagCloudComponent);
        }
    }
});
//# sourceMappingURL=tag-cloud.component.js.map