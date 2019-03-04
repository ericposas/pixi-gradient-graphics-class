'use strict'

import BluePattern from './BluePattern.js'

export default class BluePatternSprite{

  constructor(app){
    if(!app){
      throw new Error('No app reference provided, need access to app.renderer');
    }
    let blue_pattern_texture = app.renderer.generateTexture(new BluePattern(app));
    let blue_pattern = new PIXI.Sprite( blue_pattern_texture );
    return blue_pattern;
  }

}
