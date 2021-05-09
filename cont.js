class Cont {
    constructor (a,b) {
        var options = {
            bodyA : a,
            pointB : b,
            stiffness : 0.5,
            lenth : 10
       }
       this.pointB = b
       this.cont = control.create (options)
       World.add (world,this.cont)
    }

    fly (){
        this.cont.bodyA = null
    }
    display (){
        if (this.cont.bodyA){
            strokeWeight (5)
            line (this.cont.bodyA.position.x,this.cont.bodyA.position.y,
                  this.pointB.x,this.pointB.y)
        }
       
    }
}