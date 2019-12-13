class NetworkOffline extends Error {

	constructor(...args) {
		super(...args);
		this.name = 'NetworkOffline';
		this.scope = this.message;
		this.message = `The Internet connection appears to be offline.`;
		// Error.captureStackTrace(this, NetworkOffline);
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
module.exports = NetworkOffline;
