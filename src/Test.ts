/*
* name;
*/
class Test extends ui.TestUI {

    constructor () {

        super();

        console.log("Test");
        
        this.doResize();
        Laya.stage.on(Laya.Event.RESIZE,this,this.doResize.bind(this));

        //this.on(Laya.Event.RESIZE,this,this.doResize.bind(this));
    }

    doResize () {

        
        
        console.log("--- doResize ---");
        console.log(Laya.Browser.width + "," + Laya.Browser.pixelRatio + "," + Laya.Browser.height);
        console.log("w " + (Laya.Browser.width / Laya.Browser.pixelRatio) + ",h " + (Laya.Browser.height / Laya.Browser.pixelRatio));

        console.log("w/h "  + ((Laya.Browser.width / Laya.Browser.pixelRatio) / (Laya.Browser.height / Laya.Browser.pixelRatio)));
        
        let ratioW = (Laya.Browser.width / Laya.Browser.pixelRatio) / 1920;
        let ratioH = (Laya.Browser.height / Laya.Browser.pixelRatio) / 1080;

        let ratio = Math.max(ratioH,ratioW);


        console.log("ratioW " + ratioW + ",ratioH " + ratioH);

        //this.NODE_LEFT.x = (960 - (Laya.Browser.width / Laya.Browser.pixelRatio)) * ratio;
        let halfW = (Laya.Browser.width / Laya.Browser.pixelRatio) * 0.5;
        this.NODE_LEFT.x = 960 - (halfW / ratio);
        this.NODE_RIGHT.x = - (960 - (halfW / ratio));

        //this.NODE_BOTTOM.x = 960 - (halfW / ratio);
        //this.NODE_CENTER.x = 960 * ratio;
        //this.NODE_CENTER.y = 540 * ratio;

        console.log(this.NODE_CENTER.x + "," + this.NODE_CENTER.y);

    }

    
}