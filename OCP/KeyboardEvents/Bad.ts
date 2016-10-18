class KeyboardEvents {

    public keyPress(event: KeyboardEvent) {
        var Bob: Fighter;
        switch (event.key) {
            case "W":
                Bob.moveUp();
                break;
            case "A":
                Bob.moveLeft();
                break;
            case "S":
                Bob.moveDown();
                break;
            case "D":
                Bob.moveRight();
                break;
            case "Enter":
                Bob.kick();
                break;
        }
    }

}
/**
 * Problems:
 *
 * - To extend the functionality we must edit the method.
 * - If this will be as module, it cannot be updated after modification.
 *
 */
