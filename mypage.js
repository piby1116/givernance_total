document.addEventListener("DOMContentLoaded", function() {
  const updateButton = document.getElementById('updateButton');
  const nicknameInputElement = document.getElementById('nicknameInput');
  const uploadButton = document.getElementById('uploadButton');
  const uploadProfilePicElement = document.getElementById('uploadProfilePic');
  const profilePicElement = document.getElementById('profilePic');

  function updateNickname() {
    const nickname = nicknameInputElement.value;
    console.log('Nickname updated to:', nickname); // For demonstration
    alert('Nickname updated to: ' + nickname);
  }

  function uploadProfilePic() {
    const file = uploadProfilePicElement.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        profilePicElement.src = e.target.result;
        alert('Profile picture uploaded successfully.');
      };
      reader.readAsDataURL(file);
    }
  }

  updateButton.addEventListener('click', updateNickname);
  uploadButton.addEventListener('click', uploadProfilePic);
});
