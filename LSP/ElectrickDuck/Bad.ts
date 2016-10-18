interface Animal {
    sayTo(obj: Animal): {
        message: string;
        feeling: "sad" | "happy"; // ...
    };
}

class Duck implements Animal {

    public sayTo(obj: Animal): string {
        // ...
        return "QUACK";
    }

}

class ElectricDuck extends Duck {

    private turnedOn: boolean = false;

    public sayTo(encoded: boolean = true) {
        if (!this.turnedOn) return;
        // ...
        return encoded ? "81,85,65,67,75" : "QUACK";
    }

}

var donald = new Duck();
var cappuccino = new ElectricDuck();

donald.sayTo();
cappuccino.sayTo();
