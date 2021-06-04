class Cannon
{
    constructor(x,y,w,h,angle)
    {
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     this.angle=angle;
    }
display()
{
 if(keyIsDown(RIGHT_ARROW))
{
this.angle += 0.2;
}
if(keyIsDown(LEFT_ARROW))
{
this.angle -=0.2;
}

 fill("brown");
 push();
 translate(this.x,this.y);
 rotate(this.angle);
 rect(-10,-20,this.w,this.h);
 pop();
 arc(this.x-40,this.y+80,180,230,PI,TWO_PI);
 noFill();
}
}