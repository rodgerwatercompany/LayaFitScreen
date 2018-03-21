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
    }
    Test.prototype.doResize = function () {
        console.log("--- doResize log start ---");
        console.log(Laya.Browser.width + "," + Laya.Browser.pixelRatio + "," + Laya.Browser.height);
        console.log("w " + (Laya.Browser.width / Laya.Browser.pixelRatio) + ",h " + (Laya.Browser.height / Laya.Browser.pixelRatio));
        //console.log("w/h "  + ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio)));
        // 紀錄原始位置
        this._recordInitialPosition();
        var aspectRation = ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio));
        console.log("aspectRation " + aspectRation);
        // Set scale mode to show all or noborder.
        if (aspectRation > 1.78 || aspectRation < 1.32) {
            if (Laya.stage.scaleMode !== 'showall') {
                Laya.timer.frameOnce(1, this, function () {
                    console.log("set to showall !");
                    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                });
            }
            this._resetToPosition();
            return;
        }
        else {
            if (Laya.stage.scaleMode !== 'noborder') {
                Laya.timer.frameOnce(1, this, function () {
                    console.log("set to noborder !");
                    Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
                });
            }
            this._modifiedForNorborder();
        }
    };
    Test.prototype._recordInitialPosition = function () {
        if (this.NODE_LEFT) {
            if (this.NODE_LEFT.oriX == null) {
                this.NODE_LEFT.oriX = this.NODE_LEFT.x;
            }
        }
        if (this.NODE_RIGHT) {
            if (this.NODE_RIGHT.oriX == null)
                this.NODE_RIGHT.oriX = this.NODE_RIGHT.x;
        }
        if (this.NODE_UP) {
            for (var i = 0; i < this.NODE_UP._childs.length; i++) {
                var child = this.NODE_UP._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }
        }
        if (this.NODE_CENTER) {
            for (var i = 0; i < this.NODE_CENTER._childs.length; i++) {
                var child = this.NODE_CENTER._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }
        }
        if (this.NODE_BOTTOM) {
            for (var i = 0; i < this.NODE_BOTTOM._childs.length; i++) {
                var child = this.NODE_BOTTOM._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }
        }
    };
    Test.prototype._resetToPosition = function () {
        // 回復到原始位置
        if (this.NODE_LEFT)
            this.NODE_LEFT.x = this.NODE_LEFT.oriX;
        console.log("1 NODE_LEFT " + this.NODE_LEFT.x);
        if (this.NODE_RIGHT)
            this.NODE_RIGHT.x = this.NODE_RIGHT.oriX;
        if (this.NODE_UP) {
            for (var i = 0; i < this.NODE_UP._childs.length; i++) {
                var child = this.NODE_UP._childs[i];
                child.x = child.oriX;
            }
        }
        if (this.NODE_CENTER) {
            for (var i = 0; i < this.NODE_CENTER._childs.length; i++) {
                var child = this.NODE_CENTER._childs[i];
                child.x = child.oriX;
            }
        }
        if (this.NODE_BOTTOM) {
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
        console.log("2 NODE_LEFT " + this.NODE_LEFT.x);
        // NODE_RIGHT
        this.NODE_RIGHT.x = -(960 - (halfW / ratio));
        // 調整子物件的水平間隔
        var modofiedPosition = function (parent) {
            for (var i = 0; i < parent._childs.length; i++) {
                var child = parent._childs[i];
                if (child.x < 0) {
                    child.x = child.oriX + (960 - (halfW / ratio));
                }
                else if (child.x > 0) {
                    child.x = child.oriX - (960 - (halfW / ratio));
                }
            }
        };
        // NODE_CENTER
        if (this.NODE_CENTER) {
            modofiedPosition(this.NODE_CENTER);
        }
        // NODE_CENTER
        if (this.NODE_UP) {
            modofiedPosition(this.NODE_UP);
        }
        // NODE_BOTTOM        
        if (this.NODE_BOTTOM) {
            modofiedPosition(this.NODE_BOTTOM);
        }
    };
    return Test;
}(ui.TestUI));
//# sourceMappingURL=Test.js.map