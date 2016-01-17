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
    var TagCloudService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TagCloudService = (function () {
                function TagCloudService() {
                }
                TagCloudService.prototype.getTagCloud = function (text, maxWords, highlight, minLength, ignore) {
                    for (var i = 0; i < ignore.length; i++) {
                        ignore[i] = ignore[i].toLowerCase();
                    }
                    for (var i = 0; i < highlight.length; i++) {
                        highlight[i] = highlight[i].toLowerCase();
                    }
                    var highlightFunction = function (word) {
                        return highlight.indexOf(word.toLowerCase()) >= 0;
                    };
                    var ignoreFunction = function (word) {
                        if (highlightFunction(word)) {
                            return false;
                        }
                        else {
                            return (ignore.indexOf(word.toLowerCase()) >= 0) || (word.length <= minLength);
                        }
                    };
                    return this.getTagCloudF(text, maxWords, highlightFunction, ignoreFunction);
                    //	return Promise.resolve(this.getTagCloudAsync(text, maxWords, minLength, ignore, highlight));
                };
                TagCloudService.prototype.getTagCloudF = function (text, maxWords, highlightFunction, ignoreFunction) {
                    if (!ignoreFunction) {
                        ignoreFunction = function (word) {
                            return false;
                        };
                    }
                    if (!highlightFunction) {
                        highlightFunction = function (word) {
                            return false;
                        };
                    }
                    return Promise.resolve(this.getTagCloudAsync(text, maxWords, highlightFunction, ignoreFunction));
                };
                TagCloudService.prototype.getTagCloudAsync = function (text, maxWords, highlightFunction, ignoreFunction) {
                    //		var highlightMap = this.buildMap(highlight, (word: string) :  boolean => { return false;});
                    //		var ignoreMap = this.buildMap(ignore, highlightMap, minLength);
                    //		return this.buildTagCloud(text, maxWords, highlightMap, minLength, ignoreMap);
                    return this.buildTagCloudF(text, maxWords, highlightFunction, ignoreFunction);
                };
                TagCloudService.prototype.buildTagCloudF = function (text, maxWords, highlightFunction, ignoreFunction) {
                    text = text.replace(/\W+/g, " ");
                    var words = text.split(" ");
                    var map = this.buildMapF(words, ignoreFunction);
                    var tags = [];
                    var highlightVal = 0;
                    for (var key in map) {
                        tags.push({ "name": key, "size": map[key], "highlight": highlightFunction(key) });
                    }
                    tags.sort(function (a, b) {
                        if (a.highlight)
                            return -1;
                        if (b.highlight)
                            return 1;
                        if (a.size == b.size)
                            return 0;
                        if (a.size > b.size)
                            return -1;
                        return 1;
                    });
                    tags = tags.slice(0, maxWords);
                    var max = 0;
                    if (tags.length > 0) {
                        var index = 0;
                        while (tags[index].highlight) {
                            index++;
                        }
                        max = tags[index].size;
                    }
                    tags.sort(function (a, b) {
                        if (a.name == b.name)
                            return 0;
                        if (a.name > b.name)
                            return 1;
                        return -1;
                    });
                    return { "tags": tags, "max": max };
                };
                TagCloudService.prototype.buildMapF = function (words, ignoreFunction) {
                    var map = {};
                    for (var i = words.length - 1; i >= 0; i--) {
                        if (!ignoreFunction(words[i])) {
                            words[i] = words[i].toLowerCase();
                            if (map[words[i]]) {
                                map[words[i]]++;
                            }
                            else {
                                map[words[i]] = 1;
                            }
                        }
                    }
                    return map;
                };
                TagCloudService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TagCloudService);
                return TagCloudService;
            })();
            exports_1("TagCloudService", TagCloudService);
        }
    }
});
//# sourceMappingURL=tag-cloud.service.js.map