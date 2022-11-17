const forgotPassword = () => (
	{
		email: "",
		isSent: false,
		hasErrors: false,
		emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

		/** Checks a valid email using regular expressions */
		checkEmail: function () {
			
			// Get email and transform it
			const eMail = this.email.trim().toLowerCase();

			// Test regular expression
			this.hasErrors = !this.emailRegex.test( eMail );

			// If has no errors, then, is sent
			this.isSent = !this.hasErrors;

			// Prevent from submitting
			this.$event.preventDefault();
		}
	}
);