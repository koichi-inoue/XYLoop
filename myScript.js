
var cnvs, dc;
var r = 40, step = 80;

window.onload = function(){

  cnvs = document.getElementById("myCanvas");
  cnvs.addEventListener("mousemove", GetPosition, false);
  dc = cnvs.getContext("2d");

  init();

}

function Draw(){

  dc.fillStyle = "rgb(0,0,0)";
  dc.fillRect(0, 0, 640, 480);

  dc.strokeStyle = "rgb(255,255,255)";

  for( var y=0; y<=cnvs.height; y+=step ){
    for( var x=0; x<=cnvs.width; x+=step ){

      dc.beginPath();
      dc.arc(x, y, r, 0, Math.PI*2, false);
      dc.stroke();
    }
  }

  // requestAnimationFrame(Draw);
}

function init(){

  Draw();
}


// マウスイベント対応
function GetPosition(e) {

  // マウスの座標からパラメータを取得
  var rect = e.target.getBoundingClientRect();
  r = Math.floor( e.clientX - rect.left );
  step =  Math.floor( e.clientY - rect.top );

  // パラメータ、数式を描画
  var obj = document.getElementById("parameter").querySelectorAll(".value");
  obj[0].innerHTML = r;
  obj[1].innerHTML = step;

  Draw();

}

// ボタンイベント対応
function ChangeParameter(e){

  // nothing to do

  /*
  switch (e.target.eventParam) {
    case "Fx":
      fx++;
      break;
    case "Fy":
      fy++;
      break;
    default:
      break;
  }

  init();
  */

}
