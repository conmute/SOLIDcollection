function calcArea(obj) {
    if (obj instanceof Square) {
        return Math.pow(obj.side, 2);
    } else if (obj instanceof Circle) {
        return Math.PI * Math.pow(obj.radius, 2);
    }
    // ...
}
/**
 * Problems:
 *
 * - To extend the functionality we must edit the function.
 * - If this will be as module, it cannot be updated after modification.
 *
 */
