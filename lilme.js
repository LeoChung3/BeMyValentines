export default class lilme {
    constructor() 
    {
        this.xpos;
        this.ypos;

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
        ctx.drawImage(img, 1500 - (2094 / 2), 0, 200, 270);
        }
        if(frame == 1)
        {
            const img = new Image();
            img.src = imagePath2;
            ctx.drawImage(img, 1500 - (2094 / 2), 0, 200, 270);
        }

        
    }
    move()
    {

    }
}