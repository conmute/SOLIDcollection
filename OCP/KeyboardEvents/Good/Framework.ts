export module ApplicationFramework {

    class KeyboardEvents {

        private handlerList: {
            [name: string]: {
                keys: string[];
                handler: IHandler;
            }
        }= {};

        public register(name: string, keys: string[], handler: IHandler) {
            this.handlerList[name] = {
                keys: keys,
                handler: handler
            };
        }

        public keyPress(event: KeyboardEvent) {
            for (var handlerName in this.handlerList) {
                if (this.handlerList.hasOwnProperty(handlerName)) {
                    if (event.key in this.handlerList[handlerName].keys) {
                        this.handlerList[i].handler.run(event);
                    }
                }
            }
        }

    }

    export var keyboardEvents = new KeyboardEvents();

    export interface IHandler {
        run(event: KeyboardEvent);
    }

    export interface IKeyboardEvents {
        register(name: string, keys: string[], handler: IHandler);
        keyPress(event: KeyboardEvent);
    }

}
