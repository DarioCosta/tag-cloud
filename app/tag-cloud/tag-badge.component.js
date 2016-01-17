System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TagBadgeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TagBadgeComponent = (function () {
                function TagBadgeComponent() {
                    this.showSize = false;
                    this.sizeRatio = 10;
                    this.selected = new core_1.EventEmitter();
                }
                TagBadgeComponent.prototype.ngOnInit = function () {
                    this.classes = {
                        badge: true,
                        highlight: this.tag.highlight
                    };
                    this.styles = {
                        fontSize: 100 - this.sizeRatio + (this.tag.size * this.sizeRatio) + '%',
                        opacity: this.tag.highlight ? 1 : (1 - (1 / this.tag.size)) > 0.5 ? 1 - (1 / this.tag.size) : 0.5
                    };
                };
                TagBadgeComponent.prototype.setStyles = function () {
                    return this.styles;
                };
                TagBadgeComponent.prototype.setClasses = function () {
                    return this.classes;
                };
                TagBadgeComponent.prototype.tagSelected = function () {
                    this.selected.emit(this.tag);
                };
                TagBadgeComponent = __decorate([
                    core_1.Component({
                        selector: 'tag-badge',
                        template: "\n\t\t\t<span [ngStyle]=\"setStyles()\" [ngClass]=\"setClasses()\" (click)=\"tagSelected()\">{{tag.name}} </span><span *ngIf=\"showSize\">({{tag.size}})</span>\n\t",
                        inputs: ['tag', 'showSize', 'sizeRatio'],
                        outputs: ['selected']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TagBadgeComponent);
                return TagBadgeComponent;
            })();
            exports_1("TagBadgeComponent", TagBadgeComponent);
        }
    }
});
//# sourceMappingURL=tag-badge.component.js.map