<div id="register-dialog" class="register-class"
    title="Registration Dialog Form" style="display: none;">
    <form id="register-form" action="" method="post" role="form">
        <div class="input-row">
            <span id="first-name-info"></span> <input type="text"
                name="first-name" id="first-name" class="input-field"
                placeholder="First Name" value="">
        </div>
        <div class="input-row">
            <span id="last-name-info"></span> <input type="text"
                name="last-name" id="last-name" class="input-field"
                placeholder="Last Name" value="">
        </div>
        <div class="input-row">
            <span id="register-email-info"></span> <input type="email"
                name="register-email-id" id="register-email-id"
                class="input-field" placeholder="Email ID" value="">
        </div>
        <div class="input-row">
            <span id="contact-no-info"></span> <input type="text"
                name="contact-number" id="contact-number" maxlength="10"
                class="input-field" placeholder="Contact Number">
        </div>
        <div class="input-row">
            <span id="register-passwd-info"></span> <input
                type="password" name="register-password"
                id="register-password" class="input-field"
                placeholder="Password">
        </div>
        <div class="input-row">
            <span id="confirm-passwd-info"></span> <input
                type="password" name="confirm-password"
                id="confirm-password" class="input-field"
                placeholder="Confirm Password">
        </div>
        <div class="submit-button">
            <input type="button" class="btn-submit" value="Register"
                onclick="ajaxRegistration()">
        </div>

    </form>

    <div class="success-message" id="register-success-message"
        style="display: none"></div>
    <div class="error-message" id="register-error-message"
        style="display: none"></div>

</div>