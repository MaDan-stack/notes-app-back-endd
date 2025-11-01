class CLientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCOde = statusCode;
    this.name = 'ClientError';
  }
}

module.exports = CLientError;
