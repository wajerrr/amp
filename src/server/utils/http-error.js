export default class HttpError extends Error {
  constructor(message, status = 500, data = {}) {
    super(message);
    this.name = 'HttpError';
    Error.captureStackTrace(this, this.constructor);
    this.status = status;
    this.data = data;
  }
}
