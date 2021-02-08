class Dog{
    constructor(x, y, width,length){
       this.Dog = Bodies.rectangle(x, y ,width ,length) 
       World.add(world,this.Dog)
       this.image = loadImage("dog.jpg")
    }
  
  



  Display(){
   imageMode(CENTER)
    image(this.image,this.Dog.position.x, this.Dog.position.y,150,50)


  }
  }