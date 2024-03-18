// public/js/authCheck.js
//checks whether the user is authenticated
document.addEventListener('DOMContentLoaded', function() {
  function checkAuthStatus() {
    fetch('/auth/status')
      .then(response => response.json())
      .then(data => {
        if (!data.isAuthenticated) {
          const inputs = document.querySelectorAll('#postSubmissionForm input, #postSubmissionForm textarea');
          const messageBox = document.getElementById('authMessage');
          inputs.forEach(input => {
            input.disabled = true;
            input.addEventListener('click', () => {
              messageBox.innerText = 'In order to submit a post, please login/register.';
              messageBox.style.display = 'block';
            });
          });
        }
      })
      .catch(error => console.error('Error checking authentication status:', error));
  }

  checkAuthStatus();
  const form = document.getElementById('postSubmissionForm');
  form.addEventListener('click', checkAuthStatus);
});
