

function PaillasseZone(id,style) {
 
   var canvas = document.getElementById('paillasse');
	var context = canvas.getContext('2d');
		
    this.id  = id;
    this.context = context;
    this.dragable = false;

	var x = style.x,
		y = style.y,
		height = style.height,
		width = style.width; //closure
		
    var imageObj = new Image();
    imageObj.onload = function() {
        context.drawImage(imageObj, x, y,width,height);
    };
    imageObj.src = style.src;
	
	this.imageObj = imageObj;
 	this.x = style.x;
	this.y =  style.y;
	this.height = style.height;
	this.width = style.width; 
}

PaillasseZone.prototype.drawElement = function(){
	this.context.drawImage(this.imageObj, this.x, this.y,this.width,this.height);
}


PaillasseZone.prototype.changeState = function (state) {
	this.state = state;
	console.log('state of element '+this.id+' is '+this.state);
};



PaillasseZone.prototype.isDragable = function(){ 
	return this.dragable;
}

