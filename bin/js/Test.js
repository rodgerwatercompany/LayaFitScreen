var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        console.log("Test");
        _this.doResize();
        Laya.stage.on(Laya.Event.RESIZE, _this, _this.doResize.bind(_this));
        return _this;
        //this.on(Laya.Event.RESIZE,this,this.doResize.bind(this));
    }
    Test.prototype.doResize = function () {
        console.log("--- doResize ---");
        console.log(Laya.Browser.width + "," + Laya.Browser.pixelRatio + "," + Laya.Browser.height);
        console.log("w " + (Laya.Browser.width / Laya.Browser.pixelRatio) + ",h " + (Laya.Browser.height / Laya.Browser.pixelRatio));
        console.log("w/h " + ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio)));
        var ratioW = (Laya.Browser.width / Laya.Browser.pixelRatio) / 1920;
        var ratioH = (Laya.Browser.height / Laya.Browser.pixelRatio) / 1080;
        var ratio = Math.max(ratioH, ratioW);
        console.log("ratioW " + ratioW + ",ratioH " + ratioH);
        //this.NODE_LEFT.x = (960 - (Laya.Browser.width / Laya.Browser.pixelRatio)) * ratio;
        var halfW = (Laya.Browser.width / Laya.Browser.pixelRatio) * 0.5;
        this.NODE_LEFT.x = 960 - (halfW / ratio);
        this.NODE_RIGHT.x = -(960 - (halfW / ratio));
        //this.NODE_BOTTOM.x = 960 - (halfW / ratio);
        //this.NODE_CENTER.x = 960 * ratio;
        //this.NODE_CENTER.y = 540 * ratio;
        console.log(this.NODE_CENTER.x + "," + this.NODE_CENTER.y);
    };
    return Test;
}(ui.TestUI));
//# sourceMappingURL=Test.js.map