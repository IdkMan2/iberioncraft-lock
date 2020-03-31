
export class UnauthorizedException extends Error {
  public static code = 401;

  constructor(message: string = '') {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, UnauthorizedException);
  }

  getMessage(): string {
    return this.message;
  }

}