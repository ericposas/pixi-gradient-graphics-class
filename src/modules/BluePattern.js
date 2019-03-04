'use strict'

import {Colors} from './Colors.js';
import BlueSubPattern from './BlueSubPattern.js';
import LinearGradientShape from './LinearGradientShape.js';

export default class BluePattern {

  constructor(app){
    let container = new PIXI.Container();
    let pattern_shapes = [];
    for(let i = 0; i < 3; i++){
      let pattern_base = new BlueSubPattern();
      let pattern_texture = app.renderer.generateTexture(pattern_base);
      let pattern = new PIXI.Sprite(pattern_texture);
      container.addChild(pattern);
      console.log(pattern.y);
      pattern_shapes.push(pattern);
    }
    pattern_shapes[1].y = 240;
    pattern_shapes[2].y = 480;
    let extra_strip1 = new LinearGradientShape('horizontal', Colors.C8, Colors.C5, {x:0,y:0,w:1000,h:72});
    let extra_strip2 = new LinearGradientShape('horizontal', Colors.C6, Colors.C8, {x:0,y:0,w:1000,h:33});
    let extra_strip3 = new LinearGradientShape('horizontal', Colors.C5, Colors.C8, {x:0,y:0,w:1000,h:51});
    extra_strip1.y = 792;
    extra_strip2.y = 817;
    extra_strip3.y = 868;
    container.addChild(extra_strip1,extra_strip2,extra_strip3);
    return container;
  }

}
