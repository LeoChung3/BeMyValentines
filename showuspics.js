export default class showuspics {
    constructor() 
    {
        this.numberofpic = 0
    }
    draw(ctx)
        {
            
            const imagePath1 = './images/elevator.png';
            const imagePath2 = './images/hand.png';
            const imagePath3 = './images/golf.png';
            const imagePath4 = './images/kissing.png';
            const imagePath5 = './images/usascats.png';

            const imagePath6 = './images/elevatorlines.png';
            const imagePath7 = './images/hugginglines.png';
            const imagePath8 = './images/kissinglines.png';

            
            if(this.numberofpic == 0)
                {
            const img = new Image();
            img.src = imagePath1;
            ctx.drawImage(img, 1500 - (2094 / 2), 0, 2094, 2824);
            ctx.font = "100px Arial";
            ctx.fillStyle = "pink";
            ctx.fillText("      this is us in the elevator in highcross :( you look so cute", 110, 2900);
                }
            
            if(this.numberofpic == 1)
            {
            const img2 = new Image();
            img2.src = imagePath2;
            ctx.drawImage(img2, 1500 - (1728 / 2), 0, 1728, 2400);

            ctx.font = "100px Arial";
            ctx.fillStyle = "pink";
            ctx.fillText("              this one you know where we are hehe", 110, 2700);
                    }

            if(this.numberofpic == 2)
            {
            const img3 = new Image();
            img3.src = imagePath3;
            ctx.drawImage(img3, 1500 - (3089 / 2), 0, 3089, 2776);
            ctx.font = "100px Arial";
            ctx.fillStyle = "pink";
            ctx.fillText("us during minigolf :(( i want to do stuff like this with you more :(", 110, 2900);
                        }

            if(this.numberofpic == 3)
            {
            const img4 = new Image();
            img4.src = imagePath4;
            ctx.drawImage(img4, 1500 - (2996 / 2), 0, 2996, 2762);

            ctx.font = "100px Arial";
            ctx.fillStyle = "pink";
            ctx.fillText("                      can you guess where we are :)", 110, 2900);
                            }

            if(this.numberofpic == 4)
             {
            const img5 = new Image();
            img5.src = imagePath5;
            ctx.drawImage(img5, 1500 - (3237 / 2), 0, 3237, 2176);

            ctx.font = "100px Arial";
            ctx.fillStyle = "pink";
            ctx.fillText("      this is us as cats lol, can you guess which one is who", 110, 2500);

            }
            if(this.numberofpic == 5)
                {
                const img5 = new Image();
                img5.src = imagePath6;
                ctx.drawImage(img5, 1500 - (2062 / 2), 0, 2062, 2764);
                                    }
            if(this.numberofpic == 6)
                {
                const img5 = new Image();
                img5.src = imagePath7;
                ctx.drawImage(img5, 1500 - (3170 / 2), 0, 3170, 2820);
                                    }        

            if(this.numberofpic == 7)
                {
                const img5 = new Image();
                img5.src = imagePath8;
                ctx.drawImage(img5, 1500 - (2983 / 2), 0, 2983, 2789);
                                    }
                                
                                
                                
                                
    }

    next()
    
    {
        this.numberofpic += 1;
        if(this.numberofpic == 8)
        {
            this.numberofpic = 0;
        }
    }
    back()
    {
        this.numberofpic -= 1;

        if(this.numberofpic == -1)
        {
            this.numberofpic = 7;
        }
    }
}