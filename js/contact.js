/**
 * Contact Form Validation & Toast Notification System
 */

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' 
    ? '<i class="fa-solid fa-circle-check text-green"></i>' 
    : '<i class="fa-solid fa-triangle-exclamation text-rose"></i>';

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const subjectInput = document.getElementById('userSubject');
  const messageInput = document.getElementById('userMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || name.length < 2) {
      nameError.textContent = 'Please enter your name (minimum 2 characters).';
      isValid = false;
    }

    if (!email || !validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!subject || subject.length < 3) {
      subjectError.textContent = 'Please enter a subject (minimum 3 characters).';
      isValid = false;
    }

    if (!message || message.length < 10) {
      messageError.textContent = 'Please write a message (minimum 10 characters).';
      isValid = false;
    }

    if (!isValid) {
      showToast('Please correct the highlighted fields.', 'error');
      return;
    }

    // Submit Simulation
    const submitBtn = document.getElementById('submitFormBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      showToast(`Thank you, ${name}! Your message has been prepared for Dilip Kumar.`);

      // Also trigger mailto so user can send real email seamlessly
      const mailtoLink = `mailto:dilipkumarmehra100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      
      const confirmSend = window.confirm("Your message is ready! Would you like to open your email client to send it directly to dilipkumarmehra100@gmail.com?");
      if (confirmSend) {
        window.location.href = mailtoLink;
      }
    }, 1000);
  });
});
