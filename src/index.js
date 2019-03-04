import './scss/style.scss';
import $ from 'jquery';
import * as PIXI from 'pixi.js';
import {Colors} from './modules/Colors.js';


let app = new PIXI.Application(innerWidth, innerHeight, {antialias:true,transparent:false});
document.body.appendChild(app.view);
app.stage.interactive = true;
app.renderer.backgroundColor = '0x000000';
app.renderer.autoResize = true;
app.renderer.view.style.margin = 'auto';
app.renderer.view.style.display = 'block';
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.top = app.renderer.view.style.bottom = 0;
$('html').css('margin', 0);
$('body').css({'margin':0,'overflow':'hidden'});

let loader = PIXI.loader;

// global vars


loader
  .on('progress', load_progress)
  .load(start);

function load_progress(loader, resource){
  console.log(
    `loading: ${resource.url},`,
    `overall progress: ${loader.progress}`,
  );
}

function start(){
  // start creating our sprites, graphics, etc. once all the images/spritesheets are loaded
  // console.log(C1,C2);
  let gfc = new PIXI.Graphics();
  gfc.beginFill(Colors.C9);
  gfc.drawRect(0,0,200,400);
  app.stage.addChild(gfc);

  $(window).resize(()=>{
    // check to make sure all items are initialized before calling to resize them
    app.renderer.resize(innerWidth, innerHeight);
  })
  $(window).trigger('resize');
}