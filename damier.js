
var canvas = document.querySelector('#monCanvas')
var ctx = canvas.getContext('2d');

for (var i=0;i<8;i++) {
    for (var j=0;j<8;j++) {
        var r = Math.floor(Math.random()*256);
        var v = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        ctx.fillStyle = 'rgb('+r+','+v+','+b+')';
        ctx.fillRect(i*20,j*20,20,20);
        ctx.fill();
    }
}