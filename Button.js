export default class myButton {
    constructor() 
    {

        this.numOfNo = 0
        this.numOfYes = 0;
        this.noWords = 
        [
        "why did you say no :(", 
        "but you're mine :(", 
        "please stop saying no :((", 
        "you better say yes eventually",
        "are you going to click yes? :((", 
        "the correct answer is to the left", 
        "kamila :( be my valentine",
        "kamilaaaaaaaaaa :(((", 
        "be my valentines", 
        "is it really a no? :(",
         "yes???", 
         "be my valentines baby",
         ":((("
        ]
        this.button1 = 
        {
            x:1000,
            y:1500,
            sizex:300,
            sizey:200
        };

        this.button2 = 
        {
            x:1700,
            y:1500,
            sizex:300,
            sizey:200
        };
          this.colliding;
    }
    draw(ctx, scale)
    {

        if(this.numOfNo >= 1 && this.numOfYes == 0)
        {   
            if(this.numOfNo <= 12)
            {
                ctx.fillText( this.noWords[ this.numOfNo - 1], 330, 1000);
            }
            else{
                ctx.fillText( this.noWords[ 12], 330, 1000);

            }
        }
        if(this.numOfYes >= 1)
        {
            ctx.fillText("you are my valentine <3", 330, 1000);

        }
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(this.button1.x, this.button1.y, this.button1.sizex, this.button1.sizey);
        ctx.stroke();
        ctx.restore();
        ctx.fillText("YES", this.button1.x + (this.button1.sizex/2) - 100, this.button1.y+(this.button1.sizey/2) + 10);


        if(this.numOfYes == 0)
        {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(this.button2.x, this.button2.y, 300, 200);
        ctx.stroke();
        ctx.restore();
        ctx.fillText("NO", this.button2.x + (this.button2.sizex/2) - 100, this.button2.y+(this.button2.sizey/2) + 10);
        }


        if((this.button1.x +  this.button1.sizex) > this.button2.x)
            {
                console.log("aaaa")
                this.button2.x += 10
            }
    }
    check(x,y, scale)
    {

        
        console.log(x * scale, y * scale)
        if ((x*scale) <= this.button1.x + this.button1.sizex)
            {
                if ((x*scale) >= this.button1.x)
                {
                    if ((y*scale) <= this.button1.y+ this.button1.sizey)
                    {
                        if ((y*scale) >= this.button1.y){
                            console.log("hit yes")
                            this.numOfYes += 1;

                        }else{this.colliding = false;}
                    }else{this.colliding = false;}
                }else{this.colliding = false;}
            }else{this.colliding = false;}




        if(this.numOfYes == 0)
        {
            if ((x*scale) <= this.button2.x + 300)
                {
                    if ((x*scale) >= this.button2.x)
                    {
                        if ((y*scale) <= this.button2.y+ 200)
                        {
                            if ((y*scale) >= this.button2.y){
                                this.numOfNo += 1;
                                console.log("hit no")
                                this.button1.x -= 5;
                                this.button1.y -= 5;

                                this.button1.sizex *= 1.05;
                                this.button1.sizey *= 1.05;

                                console.log(this.button1.x)
                            }else{this.colliding = false;}
                        }else{this.colliding = false;}
                    }else{this.colliding = false;}
                }else{this.colliding = false;}
        }
        
    }
}