
export enum AuthenticationExceptionReason {
  INVALID_LOGIN, INVALID_PASSWORD
}

export class AuthenticationException extends Error {
  private readonly reason: AuthenticationExceptionReason;

  constructor(reason: AuthenticationExceptionReason, message: string = '') {
    super(message);
    this.name = this.constructor.name;
    this.reason = reason;
    Error.captureStackTrace(this, AuthenticationException);
  }

  getMessage(): string {
    return this.message;
  }

  getReason(): AuthenticationExceptionReason {
    return this.reason;
  }

}