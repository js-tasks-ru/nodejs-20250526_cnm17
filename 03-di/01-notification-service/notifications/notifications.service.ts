import { BadRequestException, Injectable, Logger } from "@nestjs/common";

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger();
  private errorMessage = "Not all parameters were passed";

  sendMessage(message: string) {
    this.logger.log(message);
    console.log(message);
  }

  async sendEmail(to: string, subject: string, message: string) {
    if (!to || !subject || !message) {
      throw new BadRequestException(null, this.errorMessage);
    }

    this.sendMessage(`Email sent to ${to}: ${subject} ${message}`);
  }

  async sendSMS(to: string, message: string) {
    if (!to || !message) {
      throw new BadRequestException(null, this.errorMessage);
    }

    this.sendMessage(`SMS sent to ${to}: ${message}`);
  }
}
