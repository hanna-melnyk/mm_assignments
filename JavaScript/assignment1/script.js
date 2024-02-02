
// Heart emoji cursor

// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Target the "Tell me about yourself" section
  const aboutSection = document.getElementById('star-content-form');

  // Function to add the emoji cursor class
  const addEmojiCursor = (event) => {
    event.target.classList.add('emoji-cursor');
  };

  // Function to remove the emoji cursor class
  const removeEmojiCursor = (event) => {
    event.target.classList.remove('emoji-cursor');
  };

  // Add event listeners to change the cursor on hover
  aboutSection.addEventListener('mouseover', addEmojiCursor);

  // Revert to the default cursor when not hovering
  aboutSection.addEventListener('mouseout', removeEmojiCursor);
});
// Heart emoji cursor^^^^^


// Skills for-loop
const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
const skillsList = document.querySelector('.content ul');

for (let skill of skills) {
  let listItem = document.createElement('li');
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
}
