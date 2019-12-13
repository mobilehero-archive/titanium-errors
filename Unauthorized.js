class Unauthorized extends Error {

	constructor(...args) {
		super(...args);
		this.name = 'Unauthorized';
		this.scope = this.message;
		this.message = `Unauthorized for this resource.`;
		// Error.captureStackTrace(this, Unauthorized);
	}

	toJSON() {

		return {
		  error: {
				name:       this.name,
				message:    this.message,
				scope:      this.scope,
				stacktrace: this.stack.split('\n'),
		  },
		};
	}
}
module.exports = Unauthorized;
