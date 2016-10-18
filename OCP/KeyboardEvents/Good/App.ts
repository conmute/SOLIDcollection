import { ApplicationFramework } from "./Framework";

module Tekken {

    class MoveHandler {

        public run(event: Event) {
            var Cage : Fighter;
            switch (event.key) {
                case "W":
                    Cage.moveUp();
                    break;
                case "A":
                    Cage.moveLeft();
                    break;
                case "S":
                    Cage.moveDown();
                    break;
                case "D":
                    Cage.moveRight();
                    break;
            }
        }

    }
    ApplicationFramework.keyboardEvents.register("MoveHandler", [
        "W", "S", "A", "D"
    ], new MoveHandler());

    class AtackHandler {

        public run(event: Event) {
            var Bob:Fighter;
            switch (event.key) {
                case "Enter":
                    Bob.kick();
                    break;
            }
        }

    }
    ApplicationFramework.keyboardEvents.register("AtackHandler", [
        "Enter"
    ], new AtackHandler());


}