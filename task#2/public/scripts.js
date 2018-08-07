$(document).ready(function() {
  $(".btn.btn.btn-primary").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    if (!name || !email) {
      alert("Please fill out the form with name and a valid email id");
    } else {
      $.post(
        "http://localhost:3333/user/register",
        {
          name: name,
          email: email
        },
        function(response, status) {
          alert("Form Updated Successfully !!!");
          $("#form")[0].reset();
        }
      ).fail(function() {
        alert("Form Update Failed !!!");
      });
    }
  });
});
