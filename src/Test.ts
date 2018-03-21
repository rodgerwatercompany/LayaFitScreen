/*
* name;
*/
class Test extends ui.TestUI {

    constructor () {

        super();

        console.log("Test");
        
        this.doResize();
        Laya.stage.on(Laya.Event.RESIZE,this,this.doResize.bind(this));

    }

    doResize () {
        
        
        console.log("--- doResize log start ---");
        console.log(Laya.Browser.width + "," + Laya.Browser.pixelRatio + "," + Laya.Browser.height);
        console.log("w " + (Laya.Browser.width / Laya.Browser.pixelRatio) + ",h " + (Laya.Browser.height / Laya.Browser.pixelRatio));
        //console.log("w/h "  + ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio)));

        // 紀錄原始位置
        this._recordInitialPosition();

        let aspectRation = ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio));
        console.log("aspectRation " + aspectRation);

        // Set scale mode to show all or noborder.
        if (aspectRation > 1.78 || aspectRation < 1.32) {

            if (Laya.stage.scaleMode !== 'showall') {
             
                Laya.timer.frameOnce(1,this,() => {

                    console.log("set to showall !");
                    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                });
            }
            this._resetToPosition();
            return;
        }else {

            if (Laya.stage.scaleMode !== 'noborder') {


                Laya.timer.frameOnce(1,this,() => {

                    console.log("set to noborder !");
                    Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
                });
            }
            this._modifiedForNorborder();

        }

    }

    _recordInitialPosition () {

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

            for (let i = 0; i < this.NODE_UP._childs.length; i++) {

                let child = this.NODE_UP._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }                
        }
        

        if (this.NODE_CENTER) {

            for (let i = 0; i < this.NODE_CENTER._childs.length; i++) {

                let child = this.NODE_CENTER._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }                
        }


        if (this.NODE_BOTTOM) {

            for (let i = 0; i < this.NODE_BOTTOM._childs.length; i++) {

                let child = this.NODE_BOTTOM._childs[i];
                if (child.oriX == null)
                    child.oriX = child.x;
            }                
        }
    }

    _resetToPosition () {

        // 回復到原始位置
        if (this.NODE_LEFT)
            this.NODE_LEFT.x = this.NODE_LEFT.oriX;


        console.log("1 NODE_LEFT " + this.NODE_LEFT.x);
            
        if (this.NODE_RIGHT)
            this.NODE_RIGHT.x = this.NODE_RIGHT.oriX;

        if (this.NODE_UP) {

            for (let i = 0; i < this.NODE_UP._childs.length; i++) {

                let child = this.NODE_UP._childs[i];
                child.x = child.oriX;
            }
        }

        if (this.NODE_CENTER) {

            for (let i = 0; i < this.NODE_CENTER._childs.length; i++) {

                let child = this.NODE_CENTER._childs[i];
                child.x = child.oriX;
            }
        }

        if (this.NODE_BOTTOM) {

            for (let i = 0; i < this.NODE_BOTTOM._childs.length; i++) {

                let child = this.NODE_BOTTOM._childs[i];
                child.x = child.oriX;
            }
        }
    }

    _modifiedForNorborder () {
        
        let ratioW = (Laya.Browser.width / Laya.Browser.pixelRatio) / 1920;
        let ratioH = (Laya.Browser.height / Laya.Browser.pixelRatio) / 1080;

        // noborder 會使用最大的比例
        let ratio = Math.max(ratioH,ratioW);


        console.log("ratio " + ratio + ",ratioW " + ratioW + ",ratioH " + ratioH);


        let halfW = (Laya.Browser.width / Laya.Browser.pixelRatio) * 0.5;

        // NODE_LEFT
        this.NODE_LEFT.x = 960 - (halfW / ratio);
        console.log("2 NODE_LEFT " + this.NODE_LEFT.x);

        // NODE_RIGHT
        this.NODE_RIGHT.x = - (960 - (halfW / ratio));


        // 調整子物件的水平間隔
        let modofiedPosition = function (parent) {

            for (let i = 0; i < parent._childs.length; i++) {

                let child = parent._childs[i];

                if (child.x < 0) {

                    child.x = child.oriX + (960 - (halfW / ratio));
                }else if (child.x > 0) {

                    child.x = child.oriX - (960 - (halfW / ratio));
                }

            }
        }

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
    }
}