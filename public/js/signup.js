$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("#signup-form");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const clearanceInput = $("input#clearance-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      clearance: clearanceInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.clearance) {
      return;
    }

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.clearance);
    emailInput.val("");
    passwordInput.val("");
    clearanceInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, clearance) {
    $.post("/api/signup", {
      email: email,
      password: password,
      clearance: clearance
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
