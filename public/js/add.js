$(document).ready(() => {
  // Getting references to our form and inputs
  const addForm = $("#addmat");
  const titleInput = $("#title");
  const bodyInput = $("#body");
  const clearanceInput = $("#clearance");
  const positionInput = $("#position");

  // When the form is submitted, we validate there's an email and password entered
  addForm.on("submit", event => {
    event.preventDefault();
    const articleData = {
      title: titleInput.val(),
      body: bodyInput.val(),
      clearance: clearanceInput.val(),
      position: positionInput.val()
    };

    if (!articleData) {
      return;
    }
    addMaterial(articleData);
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function addMaterial(title, body, clearance, position) {
    $.post("/api/add-material", {
      title: title,
      body: body,
      clearance: clearance,
      position: position
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
