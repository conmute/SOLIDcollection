interface Shape {
    area(): number;
}

function calcArea(obj: Shape) {
    return obj.area();
}

class Square implements Shape {
    private side: number = 1;

    public area(): number {
        return Math.pow(this.side, 2);
    }

}

class Circle implements Shape {
    private radius: number = 1;

    public area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

}

var s = new Square();
var c = new Circle();
console.log(calcArea(s), calcArea(c));
