// Return true if the object belongs to the class

class Rabbit { }
let rabbit = new Rabbit()

// is it an object of Rabbit class?
alert(rabbit instanceof Rabbit)

// Using fuctions constructor

// instead of class
function Rabbit() { }

alert(new Rabbit() instanceof Rabbit)
