'use strict'

import {Colors} from './Colors.js';

export default class VertPatternSprite {

  constructor(app){
    if(!app){
      throw new Error('no app reference provided, need access to app.renderer');
    }
    let container = new PIXI.Container();
    let strip1 = new PIXI.Graphics();
    strip1.beginFill(Colors.C5);
    strip1.drawRect(0, 0, 1000, 63);
    let strip2 = new PIXI.Graphics();
    strip2.beginFill(Colors.C6);
    strip2.drawRect(0, 63, 1000, 64);
    let strip3 = new PIXI.Graphics();
    strip3.beginFill(Colors.C7);
    strip3.drawRect(0, 64+63, 1000, 63);
    let strip4 = new PIXI.Graphics();
    strip4.beginFill(Colors.C8);
    strip4.drawRect(0, 64+63+63, 1000, 103);
    let strip5 = new PIXI.Graphics();
    strip5.beginFill(Colors.C5);
    strip5.drawRect(0, 64+63+63+103, 1000, 100);
    let strip6 = new PIXI.Graphics();
    strip6.beginFill(Colors.C6);
    strip6.drawRect(0, 64+63+63+103+100, 1000, 100);
    let strip7 = new PIXI.Graphics();
    strip7.beginFill(Colors.C7);
    strip7.drawRect(0, 64+63+63+103+100+100, 1000, 101);
    let strip8 = new PIXI.Graphics();
    strip8.beginFill(Colors.C8);
    strip8.drawRect(0, 64+63+63+103+100+100+101, 1000, 166);
    let strip9 = new PIXI.Graphics();
    strip9.beginFill(Colors.C10);
    strip9.drawRect(0, 64+63+63+103+100+100+264, 1000, 113);
    container.addChild(
      strip1,
      strip2,
      strip3,
      strip4,
      strip5,
      strip6,
      strip7,
      strip8,
      strip9
    );
    let texture = app.renderer.generateTexture(container);
    let sprite = new PIXI.Sprite(texture);
    return sprite;
  }

}
