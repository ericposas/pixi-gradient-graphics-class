
'use strict';

import {Colors} from './Colors.js';
import LinearGradientShape from './LinearGradientShape.js';

export default class BlueSubPattern {

  constructor(){
    let pattern1 = new Array(5);
    pattern1[0] = new LinearGradientShape('horizontal', Colors.C8, Colors.C5, {x:0,y:0,w:1000,h:72});
    pattern1[1] = new LinearGradientShape('horizontal', Colors.C6, Colors.C8, {x:0,y:0,w:1000,h:33});
    pattern1[2] = new LinearGradientShape('horizontal', Colors.C5, Colors.C8, {x:0,y:0,w:1000,h:51});
    pattern1[3] = new LinearGradientShape('horizontal', Colors.C1, Colors.C1, {x:0,y:0,w:1000,h:39});
    pattern1[4] = new LinearGradientShape('horizontal', Colors.C5, Colors.C8, {x:0,y:0,w:1000,h:47});
    let pattern1_shape = new PIXI.Container();
    pattern1.forEach(stripe => {
      pattern1_shape.addChild(stripe);
    });
    pattern1[1].y = 105;
    pattern1[2].y = 156;
    pattern1[3].y = 193;
    pattern1[4].y = 240;
    //pattern1_shape.total_height = 105+156+193+240;
    return pattern1_shape;
  }

}
