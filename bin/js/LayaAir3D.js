// 程序入口
var LayaAir3D = /** @class */ (function () {
    function LayaAir3D() {
        this.lastSetScaleMode = false;
        //初始化引擎
        Laya3D.init(1920, 1080, true);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        //开启统计信息
        //Laya.Stat.show();
        //添加3D场景
        var scene = Laya.stage.addChild(new Laya.Scene());
        //添加照相机
        var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(0, 3, 3));
        camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearColor = null;
        //添加方向光
        var directionLight = scene.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.direction = new Laya.Vector3(1, -1, 0);
        //添加自定义模型
        var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1, 1, 1)));
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        var material = new Laya.StandardMaterial();
        material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
        box.meshRender.material = material;
        Laya.loader.load([{ url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoaded));
        Laya.stage.on(Laya.Event.RESIZE, this, this.doResize.bind(this));
    }
    LayaAir3D.prototype.onLoaded = function () {
        //实例UI界面
        var testUI = new Test();
        Laya.stage.addChild(testUI);
    };
    LayaAir3D.prototype.doResize = function () {
        if (this.lastSetScaleMode == true) {
            this.lastSetScaleMode = false;
            return;
        }
        if (((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio)) > 1.77) {
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
            this.lastSetScaleMode = true;
        }
        else {
            Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
            this.lastSetScaleMode = true;
        }
    };
    return LayaAir3D;
}());
new LayaAir3D();
//# sourceMappingURL=LayaAir3D.js.map