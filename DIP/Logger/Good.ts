interface ILogger {
    log: (message: string) => void;
}

class FileLogger implements ILogger {
    log: (message: string) => void;
}
class EmailLogger implements ILogger {
    log: (message: string) => void;
}
class EverViewerLogger implements ILogger {
    log: (message: string) => void;
}

class User {

    public logger: ILogger:

    register(): void {
        // ...
        if (this.logger) {
            this.logger.log("New user registered: " + id);
        }
    }

}
var bob = new User();
bob.logger = new EmailLogger();

class ShirtBuilder {

    private logger: ILogger:

    setLogger(logger: ILogger) {
        this.logger = logger;
    }

    register(): void {
        // ...
        if (this.logger) {
            this.logger.log("New user registered: " + id);
        }
    }

}
var MilitaryShirt = new ShirtBuilder();
MilitaryShirt.setLogger(new EverViewerLogger());

class Customer {

    private logger: ILogger:

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    addOrder(): void {
        // ...
        this.logger.log("Added orded with id " + id);
    }

}
var charls = new Customer(new FileLogger());
