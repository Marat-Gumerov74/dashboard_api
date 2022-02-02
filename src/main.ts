import { LoggerService } from "../logger/logger.service";
import { App } from "./app";

function start(): void {
    const app = new App(new LoggerService());
    app.init();
}

start();