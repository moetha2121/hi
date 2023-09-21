(() => {
  'use strict'; /* strict mode, this will throw an error, making it impossible to accidentally create a global variable */

  // Get the form element
  const form = document.querySelector('.needs-validation'); /* select .needs-validtion */

  // Function to handle form submission
  function handleFormSubmission(event) { /* events are things that happen to html elements */
    event.preventDefault();  /* cancels default event so that can manually validate */
    if (!form.checkValidity()) { /* checks whether the element has any constraints and whether it satisfies them */
      event.stopPropagation(); /* prevent other event listeners attached to ancestor elements from being triggered */
      form.classList.add('was-validated'); /*add 'was-validated' to class */
    } else {
      const successModal = new bootstrap.Modal(document.getElementById('successModal')); /* code for modal */
      successModal.show(); /* makes modal visble to user */

      resetForm();
    }
  }

  // Function to reset the form elements and remove validation classes
  function resetForm() {
    form.reset(); /* resetting values */
    form.classList.remove('was-validated'); /* removes the CSS class 'was-validated' from the form element's class list */
  }

  // Attach the handleFormSubmission function to the form's submit event
  form.addEventListener('submit', handleFormSubmission); /* run 'handleFormSubmission()' function when 'submit' is clicked */
})();