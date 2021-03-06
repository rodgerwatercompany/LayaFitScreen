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
        _this.onResize();
        Laya.stage.on(Laya.Event.RESIZE, _this, _this.onResize.bind(_this));
        return _this;
    }
    Test.prototype.onResize = function () {
        console.log("--- doResize log start ---");
        // console.log(Laya.Browser.width + "," + Laya.Browser.pixelRatio + "," + Laya.Browser.height);
        // console.log("w " + (Laya.Browser.width / Laya.Browser.pixelRatio) + ",h " + (Laya.Browser.height / Laya.Browser.pixelRatio));
        // console.log("w/h "  + ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio)));
        // 紀錄原始位置
        this._recordInitialPosition();
        var aspectRation = ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio));
        console.log("aspectRation " + aspectRation);
        // Set scale mode to show all or noborder.
        if (aspectRation > 1.78 || aspectRation < 1.32) {
            if (Laya.stage.scaleMode !== 'showall') {
                console.log("set to showall !");
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            this._resetToPosition();
            return;
        }
        else {
            if (Laya.stage.scaleMode !== 'noborder') {
                console.log("set to noborder !");
                Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
            }
            this._modifiedForNorborder();
        }
    };
    Test.prototype._recordInitialPosition = function () {
        if (typeof (this.NODE_LEFT) !== 'undefined') {
            if (this.NODE_LEFT.oriX == null) {
                this.NODE_LEFT.oriX = this.NODE_LEFT.x;
            }
        }
        if (typeof (this.NODE_RIGHT) !== 'undefined') {
            if (this.NODE_RIGHT.oriX == null)
                this.NODE_RIGHT.oriX = this.NODE_RIGHT.x;
        }
        if (typeof (this.NODE_UP) !== 'undefined') {
            for (var i = 0; i < this.NODE_UP._childs.length; i++) {
                var child = this.NODE_UP._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }
        }
        if (typeof (this.NODE_CENTER) !== 'undefined') {
            for (var i = 0; i < this.NODE_CENTER._childs.length; i++) {
                var child = this.NODE_CENTER._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }
        }
        if (typeof (this.NODE_BOTTOM) !== 'undefined') {
            for (var i = 0; i < this.NODE_BOTTOM._childs.length; i++) {
                var child = this.NODE_BOTTOM._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }
        }
    };
    Test.prototype._resetToPosition = function () {
        // 回復到原始位置
        if (typeof (this.NODE_LEFT) !== 'undefined')
            this.NODE_LEFT.x = this.NODE_LEFT.oriX;
        console.log("1 NODE_LEFT " + this.NODE_LEFT.x);
        if (typeof (this.NODE_RIGHT) !== 'undefined')
            this.NODE_RIGHT.x = this.NODE_RIGHT.oriX;
        if (typeof (this.NODE_UP) !== 'undefined') {
            for (var i = 0; i < this.NODE_UP._childs.length; i++) {
                var child = this.NODE_UP._childs[i];
                child.x = child.oriX;
            }
        }
        if (typeof (this.NODE_CENTER) !== 'undefined') {
            for (var i = 0; i < this.NODE_CENTER._childs.length; i++) {
                var child = this.NODE_CENTER._childs[i];
                child.x = child.oriX;
            }
        }
        if (typeof (this.NODE_BOTTOM) !== 'undefined') {
            for (var i = 0; i < this.NODE_BOTTOM._childs.length; i++) {
                var child = this.NODE_BOTTOM._childs[i];
                child.x = child.oriX;
            }
        }
    };
    Test.prototype._modifiedForNorborder = function () {
        var ratioW = (Laya.Browser.width / Laya.Browser.pixelRatio) / 1920;
        var ratioH = (Laya.Browser.height / Laya.Browser.pixelRatio) / 1080;
        // noborder 會使用最大的比例
        var ratio = Math.max(ratioH, ratioW);
        console.log("ratio " + ratio + ",ratioW " + ratioW + ",ratioH " + ratioH);
        var halfW = (Laya.Browser.width / Laya.Browser.pixelRatio) * 0.5;
        // NODE_LEFT
        this.NODE_LEFT.x = 960 - (halfW / ratio);
        console.log((halfW / ratio));
        console.log("2 NODE_LEFT " + this.NODE_LEFT.x);
        // NODE_RIGHT
        this.NODE_RIGHT.x = -(960 - (halfW / ratio));
        // 調整子物件的水平間隔
        var modofiedPosition = function (parent) {
            var aspectRation = ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio));
            for (var i = 0; i < parent._childs.length; i++) {
                var child = parent._childs[i];
                child.x = child.oriX * (aspectRation / 1.77);
            }
        };
        // NODE_CENTER
        if (typeof (this.NODE_CENTER) !== 'undefined') {
            modofiedPosition(this.NODE_CENTER);
        }
        // NODE_CENTER
        if (typeof (this.NODE_UP) !== 'undefined') {
            modofiedPosition(this.NODE_UP);
        }
        // NODE_BOTTOM        
        if (typeof (this.NODE_BOTTOM) !== 'undefined') {
            modofiedPosition(this.NODE_BOTTOM);
        }
    };
    return Test;
}(ui.TestUI));
//# sourceMappingURL=Test.js.map