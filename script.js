var img=null;
var canv;

function upload(){
  canv = document.getElementById('Pride');
  var fupload = document.getElementById('fup');
  img = new SimpleImage(fupload);
  canv.width = img.getWidth();
  canv.height = img.getHeight();
  img.drawTo(canv);
  
}

function makePride(){
  var val = (img.getHeight()/7)
  
  for(var pix of img.values()){
  if(pix.getY()<val){
    pix = colorsets(pix,148,0,211);
  }if((pix.getY()>=val) 
&& (pix.getY()<2*val)){pix = colorsets(pix,75,0,130);}if((pix.getY()>=2*val) 
&& (pix.getY()<3*val)){pix = colorsets(pix,0,0,255);}if((pix.getY()>=3*val) 
&& (pix.getY()<4*val)){pix = colorsets(pix,0,255,0);}if((pix.getY()>=4*val) 
&& (pix.getY()<5*val)){pix = colorsets(pix,255,255,0);}if((pix.getY()>=5*val) 
&& (pix.getY()<6*val)){pix = colorsets(pix,255,127,0);}if(pix.getY()>=6*val){pix = colorsets(pix,255,0,0);}  
  }
  img.drawTo(canv);
}

function colorsets(image,r,g,b){
  r = ((image.getRed()+r)/2)
  g = ((image.getGreen()+g)/2)
  b = ((image.getBlue()+b)/2)
  image.setRed(r);
  image.setGreen(g);
  image.setBlue(b);
  return image
}

function clrcanvas(){
  var x = document.getElementById("myAudio");
  canv.getContext('2d').clearRect(0,0,img.getWidth(),img.getHeight()) ;
  x.play(); 
}


function dobark(){
  var x = document.getElementById("myAudio");
  x.play();
}