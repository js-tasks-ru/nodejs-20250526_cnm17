import { LoggerService } from "@nestjs/common";
import * as winston from "winston";

export function createWinstonLogger(): LoggerService {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
      new winston.transports.File({
        filename: "notification.log",
        level: "info",
      }),
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });

  return {
    log: (message) => logger.log({ level: "info", message }),
    error: (message) => logger.error(message),
    warn: (message) => logger.warn(message),
  };
}
