function preload()
{

}
function setup()
{
    canvas= createCanvas(640,480);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw()
{
    image(video,0,0,640,480);
   fill(0,0,120);
   stroke(0,0,120);
   rect(90,40,460,20)
   rect(90,420,460,20)
   rect(40,90,20,300)
   rect(588,98,20,300);

}
function take_snapshot()
{
    save(' student_name.png');

}
