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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var TestUI = /** @class */ (function (_super) {
        __extends(TestUI, _super);
        function TestUI() {
            return _super.call(this) || this;
        }
        TestUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TestUI.uiView);
        };
        TestUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Sprite", "props": { "visible": true, "var": "NODE_LEFT" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "visible": true, "text": "L1", "fontSize": 60, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 540, "x": 0, "visible": true, "text": "L2", "fontSize": 60, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 1020, "x": 0, "visible": true, "text": "L3", "fontSize": 60, "color": "#ffffff" } }] }, { "type": "Sprite", "props": { "y": 540, "x": 960, "var": "NODE_CENTER" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "comp/image.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Sprite", "props": { "x": 960, "var": "NODE_BOTTOM" }, "child": [{ "type": "Image", "props": { "y": 830, "x": -75, "skin": "comp/image.png" } }] }, { "type": "Sprite", "props": { "var": "NODE_UP" } }] };
        return TestUI;
    }(View));
    ui.TestUI = TestUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map