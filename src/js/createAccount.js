const createAccount = () => (
	{
		key: "",
		email: "",
		lastName: "",
		firstName: "",
		createPassword: "",
		confirmPassword: "",
		termsOfService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, mollitia aperiam. Aliquid, accusamus? Tempora reiciendis sint rerum, veniam officia numquam, nam non libero in distinctio, molestias omnis architecto voluptates laborum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, mollitia aperiam. Aliquid, accusamus? Tempora reiciendis sint rerum, veniam officia numquam, nam non libero in distinctio, molestias omnis architecto voluptates laborum?",
		isAgreeTermsOfService: false,

		hasErrors: false,
		isNameError: false,
		isPassError: false,
		isEmailError: false,
		isAgreeError: false,

		emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

		/** Checks a valid email using regular expressions */
		check: function () {
			this.isAgreeError = !this.isAgreeTermsOfService;

			this.hasErrors = !this.checkName() || !this.checkPassword() || !this.checkEmail() || this.isAgreeError;

			if ( this.hasErrors ) {
				this.$event.preventDefault();
			}
		},

		/** Checks if the name is valid */
		checkName: function () {
			const last = this.lastName.trim().toLowerCase();
			const first = this.firstName.trim().toLowerCase();

			return !( this.isNameError = first.length < 2 || last.length < 2 );
		},

		/** Checks if the email is valid using regular expressions */
		checkEmail: function () {
			const eMail = this.email.trim().toLowerCase();

			return !( this.isEmailError = !this.emailRegex.test( eMail ) );
		},

		/** Checks if the password is valid and is match */
		checkPassword: function () {
			const newPass = this.createPassword.trim().toLowerCase();
			const confirmPass = this.confirmPassword.trim().toLowerCase();
			
			this.isPassError = newPass.length < 3 || confirmPass.length < 3 || newPass !== confirmPass;

			return !this.isPassError;
		},

		/** Reset all validations */
		resetValidation: function () {
			this.hasErrors = this.isNameError = this.isEmailError = this.isPassError = false;
		}
	}
);