

function PaillasseElem(id,style) {
 
   var canvas = document.getElementById('paillasse');
	var context = canvas.getContext('2d');
		
    this.id  = id;
    this.context = context;
    this.state = 'resting';
     this.dragable = true;

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
 	this.x = this.xOrig = style.x;
	this.y = this.yOrig = style.y;
	this.height = style.height;
	this.width = style.width; 
}

PaillasseElem.prototype.drawElement = function(){
	this.context.drawImage(this.imageObj, this.x, this.y,this.width,this.height);
}

PaillasseElem.prototype.isDragable = function(){ 
	return this.dragable;
}



PaillasseElem.prototype.reset = function () {
	this.x = this.xOrig;
	this.y = this.yOrig;
};

PaillasseElem.prototype.setPosition = function (x,y) {
	this.x = x;
	this.y = y;
};

PaillasseElem.prototype.changeState = function (state) {
	this.state = state;
	console.log('state of element '+this.id+' is '+this.state);
};


