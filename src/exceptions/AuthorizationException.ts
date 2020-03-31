
export class AuthorizationException extends Error {
  constructor(message: string = '') {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, AuthorizationException);
  }

  getMessage(): string {
    return this.message;
  }

}