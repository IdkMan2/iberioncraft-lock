
export class BadRequestException extends Error {
  public static code = 400;

  constructor(message: string = '') {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, BadRequestException);
  }

  getMessage(): string {
    return this.message;
  }

}