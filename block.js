class Block{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,20,20)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,20,20)
        fill("red")
        pop()
    }

}