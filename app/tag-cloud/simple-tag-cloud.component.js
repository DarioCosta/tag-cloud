System.register(['angular2/core', './tag-cloud.component', './tag-cloud.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tag_cloud_component_1, tag_cloud_service_1;
    var SimpleTagCloudComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tag_cloud_component_1_1) {
                tag_cloud_component_1 = tag_cloud_component_1_1;
            },
            function (tag_cloud_service_1_1) {
                tag_cloud_service_1 = tag_cloud_service_1_1;
            }],
        execute: function() {
            SimpleTagCloudComponent = (function (_super) {
                __extends(SimpleTagCloudComponent, _super);
                function SimpleTagCloudComponent(_tagCloudService) {
                    _super.call(this, _tagCloudService);
                }
                SimpleTagCloudComponent = __decorate([
                    core_1.Component({
                        selector: 'simple-tag-cloud',
                        template: "\n    \t<tag-cloud (selectedTag)=\"true\" [text]=\"text\" [showSize]=\"showSize\" [maxWords]=\"maxWords\" [ignore]=\"ignore\" [highlight]=\"highlight\"></tag-cloud>\n\t",
                        inputs: ['text', 'maxWords', 'minLength', 'highlight', 'ignore', 'masSizeRatio', 'showSize'],
                        outputs: ['selectedTag'],
                        directives: [tag_cloud_component_1.TagCloudComponent],
                        providers: [tag_cloud_service_1.TagCloudService]
                    }), 
                    __metadata('design:paramtypes', [tag_cloud_service_1.TagCloudService])
                ], SimpleTagCloudComponent);
                return SimpleTagCloudComponent;
            })(tag_cloud_component_1.TagCloudComponent);
            exports_1("SimpleTagCloudComponent", SimpleTagCloudComponent);
        }
    }
});
//# sourceMappingURL=simple-tag-cloud.component.js.map