class FileLogger {
    log: (message: string) => void;
}

class Customer {

    private logger:

    constructor() {
        this.logger = new FileLogger();
    }

    addOrder(): void {
        // ...
        this.logger.log("Added orded with id " + id);
    }

}
