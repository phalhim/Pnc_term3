// Define an enum for different types of shapes
enum ShapeType {
    food,
    drink,
    Triangle
}

// Define a class for a shape
class Shape {
    constructor(public type: ShapeType) {}

    // Method to get the description of the shape
    getDescription(): string {
        switch (this.type) {
            case ShapeType.food:
                return "nutritional, fungal";
            case ShapeType.drink:
                return "coca.";
            case ShapeType.Triangle:
                return "This is a triangle.";
            default:
                return "Unknown shape.";
        }
    }
}

// Usage
const circle = new Shape(ShapeType.food);
console.log(circle.getDescription()); // Output: This is a circle.

const square = new Shape(ShapeType.drink);
console.log(square.getDescription()); // Output: This is a square.
