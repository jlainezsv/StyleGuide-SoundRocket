const haveAKey = () => (
	{
		key: "",
		email: "",
		hasErrors: false,
		isKeyError: false,
		isEmailError: false,
		emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

		/** Checks if the key is valid */
		checkKey: function () {
			this.resetValidation();
			
			this.hasErrors = this.isKeyError = this.key.trim().length < 4;
			
			if ( this.hasErrors ) {
				this.$event.preventDefault();
			}
		},

		/** Checks a valid email using regular expressions */
		checkEmail: function () {
			this.resetValidation();

			const eMail = this.email.trim().toLowerCase();

			this.hasErrors = this.isEmailError = !this.emailRegex.test( eMail );

			if ( this.hasErrors ) {
				this.$event.preventDefault();
			}
		},

		/** Reset all validations */
		resetValidation: function () {
			this.hasErrors = this.isEmailError = this.isKeyError = false;
		}
	}
);