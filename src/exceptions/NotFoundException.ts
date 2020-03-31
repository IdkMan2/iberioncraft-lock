
export class NotFoundException extends Error {
  public static code = 404;

  constructor(message: string = '') {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, NotFoundException);
  }

  getMessage(): string {
    return this.message;
  }

}