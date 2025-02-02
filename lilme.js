export default class lilme {
    constructor() 
    {
        this.xpos = 100;
        this.ypos = 2500;
        this.xsize = 200;
        this.ysize = 270;
        this.direction = "right";
    }
    draw(ctx, time)
    {

        let frame = time % 2
        console.log(frame);
        const imagePath1 = './images/me1.png';
        const imagePath2 = './images/me2.png';
        if(frame == 0)
        {
        const img = new Image();
        img.src = imagePath1;
        ctx.drawImage(img, this.xpos, this.ypos, this.xsize, this.ysize);
        }
        if(frame == 1)
        {
            const img = new Image();
            img.src = imagePath2;
            ctx.drawImage(img, this.xpos, this.ypos, this.xsize, this.ysize);
        }


    }
    move(x,y, pressing, scale)
    {

        if ((x*scale) <= this.xpos + this.ysize)
            {
                if ((x*scale) >= this.xpos - 40)
                {
                    if ((y*scale) <= this.ypos+ this.ysize)
                    {
                        if ((y*scale) >= this.ypos - 40){
                            if(pressing)
                            {
                                this.xpos = (x * scale) - 100;
                                this.ypos = (y * scale) - 135;
                            }

                        }else{this.colliding = false;}
                    }else{this.colliding = false;}
                }else{this.colliding = false;}
            }else{this.colliding = false;}

    }

    moveitself()
    {
        if(this.xpos >= 2700)
        {
            this.direction = "left";
        }
        if(this.xpos <= 300)
        {
            this.direction = "right";
        }
        if(this.direction == "left")
        {
            
            this.xpos -= 2
        }
        if(this.direction == "right")
        {
            
            this.xpos += 2
        }
        
    }
}