function validateEmailId(input) {
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (emailFormat.test(input)) {
		return true;
	} else {
		return false;
	}
}

function pregMatch(input) {
	var regExp = /^[a-zA-Z ]*$/;

	if (regExp.test(input)) {
		return true;
	} else {
		return false
	}
}

function ajaxRegistration() {
	$(".error").text("");
	$('#first-name-info').removeClass("error");
	$('#last-name-info').removeClass("error");
	$('#register-email-info').removeClass("error");
	$('#contact-no-info').removeClass("error");
	$('#register-passwd-info').removeClass("error");
	$('#confirm-passwd-info').removeClass("error");

	var firstName = $('#first-name').val();
	var lastName = $('#last-name').val();
	var emailId = $('#register-email-id').val();
	var contactNumber = $('#contact-number').val();
	var password = $('#register-password').val();
	var confirmPassword = $('#confirm-password').val();
	var actionString = 'registration';

	if (firstName == "") {
		$('#first-name-info').addClass("error");
		$(".error").text("required");
	} else if (!pregMatch(firstName)) {
		$('#first-name-info').addClass("error");
		$(".error").text('Alphabets and white space allowed');
	} else if (lastName == "") {
		$('#last-name-info').addClass("error");
		$(".error").text("required");

	} else if (!pregMatch(lastName)) {
		$('#last-name-info').addClass("error");
		$(".error").text('Alphabets and white space allowed');
	} else if (emailId == "") {
		$('#register-email-info').addClass("error");
		$(".error").text("required");
	} else if (!validateEmailId(emailId)) {
		$('#register-email-info').addClass("error");
		$(".error").text("Invalid");
	} else if (contactNumber == "") {
		$('#contact-no-info').addClass("error");
		$(".error").text("required");
	} else if (isNaN(contactNumber) || (contactNumber.indexOf(" ") != -1) || contactNumber.length > 10) {
		$('#contact-no-info').addClass("error");
		$(".error").text("Invalid");
	} else if (password == "") {
		$('#register-passwd-info').addClass("error");
		$(".error").text("required");
	} else if (confirmPassword == "") {
		$('#confirm-passwd-info').addClass("error");
		$(".error").text("required");
	} else if (password != confirmPassword) {
		$('#confirm-passwd-info').addClass("error");
		$(".error").text("Your confirm password does not match.");
	} else {
		$('#loaderId').show();
		$.ajax({
			url : 'ajax-login-registration.php',
			type : 'POST',
			data : {
				firstName : firstName,
				lastName : lastName,
				emailId : emailId,
				contactNumber : contactNumber,
				password : password,
				confirmPassword : confirmPassword,
				action : actionString
			},
			success : function(response) {
				if (response.trim() == 'error') {
					$('#register-success-message').hide();
					$('#ajaxloader').hide();
					$('#register-error-message').html(
							"Invalid Attempt. Try Again.");
					$('#register-error-message').show();
				} else {
					$(".thank-you-registration").show();
					$(".thank-you-registration").text(response);
					$("#register-dialog").dialog("close");
				}
			}

		});
		this.close();
	}// endif
}

// Function for user login
function ajaxLogin() {
	$(".error").text("");
	$('#email-info').removeClass("error");
	$('#password-info').removeClass("error");

	var emailId = $('#login-email-id').val();
	var password = $('#login-password').val();
	var actionString = 'login';

	if (emailId == "") {
		$('#email-info').addClass("error");
		$(".error").text("required");
	} else if (!validateEmailId(emailId)) {
		$('#email-info').addClass("error");
		$('.error').text("Invalid");
	} else if (password == "") {
		$('#password-info').addClass("error");
		$(".error").text("required");
	} else {
		// show loader
		$('#loaderId').show();
		$.ajax({
			url : 'ajax-login-registration.php',
			type : 'POST',
			data : {
				emailId : emailId,
				password : password,
				action : actionString
			},
			success : function(response) {
				if (response.trim() == 'error') {
					$('#login-success-message').hide();
					$('#ajaxloader').hide();
					$('#login-error-message').html(
							"Invalid Attempt. Try Again.");
					$('#login-error-message').show();
				} else {
					$('.demo-container').html(response);
					//register_window.dialog("close");
					$("#login-dialog").dialog("close");
				}
			}
		});
		this.close();
	}// endif
}