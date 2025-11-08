// Изменение имени и аватара
$(document).ready(function () {
  $("#editForm").submit(function (event) {
    event.preventDefault();

    const newName = $("#editName").val().trim();
    const newAvatar = $("#editAvatar").val().trim();

    if (newName) {
      $("#username").text(newName);
    }
    if (newAvatar) {
      $(".profile-avatar").attr("src", newAvatar);
    }

    $("#editModal").modal("hide");

    alert("Profile updated successfully!");
  });
});
