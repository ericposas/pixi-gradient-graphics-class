'use strict';

import radians from 'degrees-radians';
// depends on './images/white-to-alpha-gradient.png' gradient shape

export default class LinearGradientShape {

  constructor(direction, color1, color2, xywh){
    let container = new PIXI.Container();
    let gfc = new PIXI.Graphics();
    let gfc_t = new PIXI.Graphics();
    let mask = new PIXI.Sprite(PIXI.utils.TextureCache['white-alpha']);
    gfc_t.beginFill(color1);
    gfc.beginFill(color2);
    if(direction == 'horizontal'){
      gfc_t.drawRect(xywh.x,xywh.y,xywh.h,xywh.w);
      gfc.drawRect(xywh.x,xywh.y,xywh.h,xywh.w);
    }else{
      gfc_t.drawRect(xywh.x,xywh.y,xywh.w,xywh.h);
      gfc.drawRect(xywh.x,xywh.y,xywh.w,xywh.h);
    }
    gfc_t.mask = mask;
    mask.width = gfc.width;
    mask.height = gfc.height;
    container.addChild(gfc, gfc_t, mask);
    if(direction == 'horizontal'){
      container.rotation = radians(-90);
      container.y = container.width;
    }
    return container;
  }

}
