function updateTime() {
  const timeElement = document.getElementById("current-time");
  const currentTime = Date.now();
  timeElement.textContent = currentTime;
}

updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// Form validation using Constraint Validation API
    const form = document.getElementById('contactForm');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('mail');
    const subject = document.getElementById('mailTitle');
    const message = document.getElementById('msgBody');
    const successMsg = document.getElementById('successMsg');

    // Show error for a specific input
    function showError(input) {
      const errorElement = document.getElementById(input.id + '-error');
      
      if (input.validity.valueMissing) {
        errorElement.textContent = 'This field is required.';
      } else if (input.validity.typeMismatch) {
        errorElement.textContent = 'Please enter a valid email address.';
      } else if (input.validity.tooShort) {
        errorElement.textContent = `Message must be at least ${input.minLength} characters long.`;
      }
      
      errorElement.style.display = 'block';
    }

    // Hide error for a specific input
    function hideError(input) {
      const errorElement = document.getElementById(input.id + '-error');
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }

    // Check if input is valid
    function validateInput(input) {
      if (!input.validity.valid) {
        showError(input);
        return false;
      } else {
        hideError(input);
        return true;
      }
    }

    // real-time validation
    fullname.addEventListener('blur', function() {
      validateInput(fullname);
    });

    email.addEventListener('blur', function() {
      validateInput(email);
    });

    subject.addEventListener('blur', function() {
      validateInput(subject);
    });

    message.addEventListener('blur', function() {
      validateInput(message);
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Hide success message initially
      successMsg.style.display = 'none';
      
      const isFullnameValid = validateInput(fullname);
      const isEmailValid = validateInput(email);
      const isSubjectValid = validateInput(subject);
      const isMessageValid = validateInput(message);
      
      if (isFullnameValid && isEmailValid && isSubjectValid && isMessageValid) {
        successMsg.style.display = 'block';
        form.reset();
        
        // Remove all the error msgs once the form is submitted
        hideError(fullname);
        hideError(email);
        hideError(subject);
        hideError(message);
      }
    });
