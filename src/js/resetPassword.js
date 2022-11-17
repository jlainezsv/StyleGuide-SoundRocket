const resetPassword = () => (
	{
		newPassword: "",
		confirmNewPassword: "",
		hasErrors: false,

		/** Checks if password are valid and match */
		checkPasswords: function () {
			const newPass = this.newPassword.trim().toLowerCase();
			const confirmPass = this.confirmNewPassword.trim().toLowerCase();

			this.hasErrors = newPass.length < 3 || confirmPass.length < 3 || newPass !== confirmPass;

			if ( this.hasErrors ) {
				this.$event.preventDefault();
			}
		}
	}
);