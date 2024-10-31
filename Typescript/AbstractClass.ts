//*Abstract classes in TypeScript serve as a base class and cannot be instantiated. 
// They can, however, be extended. 
// Abstract classes can contain real implementation for some methods,.
// But they can also have abstract methods, which don't have an implementation in the abstract class and must be implemented by any concrete (non-abstract) subclass.

abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log('Moving...');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Bark!');
    }
}

const myDog = new Dog();
myDog.makeSound();  // Outputs: Bark!
myDog.move();       // Outputs: Moving...