
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class TestUI extends View {
		public NODE_LEFT:Laya.Sprite;
		public NODE_RIGHT:Laya.Sprite;
		public NODE_CENTER:Laya.Sprite;
		public NODE_BOTTOM:Laya.Sprite;
		public NODE_UP:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Sprite","props":{"x":0,"visible":true,"var":"NODE_LEFT"},"child":[{"type":"Label","props":{"y":0,"x":0,"visible":true,"text":"L1","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":540,"x":0,"visible":true,"text":"L2","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":1020,"x":0,"visible":true,"text":"L3","fontSize":60,"color":"#ffffff"}}]},{"type":"Sprite","props":{"y":0,"x":0,"var":"NODE_RIGHT"},"child":[{"type":"Label","props":{"y":0,"x":1850,"visible":true,"text":"L1","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":540,"x":1850,"visible":true,"text":"L2","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":1020,"x":1850,"visible":true,"text":"L3","fontSize":60,"color":"#ffffff"}}]},{"type":"Sprite","props":{"y":540,"x":960,"var":"NODE_CENTER"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/image.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Sprite","props":{"y":0,"x":960,"var":"NODE_BOTTOM"},"child":[{"type":"Image","props":{"y":954,"x":0,"width":150,"skin":"comp/image.png","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":854,"x":-958,"text":"abcd","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-820,"text":"efghi","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-681,"text":"jklmn","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-541,"text":"opqr","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-405,"text":"stuv","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-289,"text":"wxyz","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-151,"text":"label","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":-17,"text":"123456","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":831,"text":"label","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":696,"text":"label","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":552,"text":"label","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":851,"x":406,"text":"label","fontSize":60,"color":"#ffffff"}}]},{"type":"Sprite","props":{"x":960,"var":"NODE_UP"},"child":[{"type":"Image","props":{"y":0,"x":-75,"skin":"comp/image.png","name":"upImage"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TestUI.uiView);

        }

    }
}
