
export enum DeauthenticationExceptionReason {
  INVALID_TOKEN
}

export class DeauthenticationException extends Error {
  private readonly reason: DeauthenticationExceptionReason;

  constructor(reason: DeauthenticationExceptionReason, message: string = '') {
    super(message);
    this.name = this.constructor.name;
    this.reason = reason;
    Error.captureStackTrace(this, DeauthenticationException);
  }

  getMessage(): string {
    return this.message;
  }

  getReason(): DeauthenticationExceptionReason {
    return this.reason;
  }

}