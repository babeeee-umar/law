
  document.addEventListener('DOMContentLoaded', function () {
    const langSelector = document.getElementById('lan');
    const navLinks = document.querySelectorAll('.nav-link');

    langSelector.addEventListener('change', function () {
      const selectedLang = this.value;

      navLinks.forEach(link => {
        link.textContent = link.getAttribute(`data-${selectedLang}`);
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const langSelector = document.getElementById('lan'); // Use the same language selector ID as before
    const heroElements = document.querySelectorAll('#hero [data-en], #hero [data-ur]');

    langSelector.addEventListener('change', function () {
      const selectedLang = this.value;

      heroElements.forEach(element => {
        element.textContent = element.getAttribute(`data-${selectedLang}`);
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const langSelector = document.getElementById('lan'); // Ensure this matches your language selector ID

    function updateTextContent(language) {
      // Select all elements with data-en or data-ur attributes
      const elements = document.querySelectorAll('.about [data-en], .about [data-ur]');

      elements.forEach(element => {
        // Update the text content based on the selected language
        element.textContent = element.getAttribute(`data-${language}`);
      });
    }

    // Add event listener to the language selector
    langSelector.addEventListener('change', function () {
      const selectedLang = this.value; // Get the selected language value
      updateTextContent(selectedLang); // Update text content based on selected language
    });

    // Initialize text content to default language (English in this case)
    updateTextContent('en');
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.textContent = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  document.getElementById('lan').addEventListener('change', function () {
    const isUrdu = this.value === 'ur';
  
    // Switch text content based on selected language
    document.querySelectorAll('[data-en]').forEach(function (element) {
      element.innerHTML = isUrdu ? element.getAttribute('data-ur') : element.getAttribute('data-en');
    });
  
    // Apply RTL class if Urdu is selected
    document.body.classList.toggle('rtl', isUrdu);
  });
  function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-ur]');
    elements.forEach(element => {
        if (lang === 'ur') {
            element.innerHTML = element.getAttribute('data-ur');
            element.classList.add('urdu');
        } else {
            element.innerHTML = element.getAttribute('data-en');
            element.classList.remove('urdu');
        }
    });
}
function switchLanguage(language) {
  document.querySelectorAll('[data-en]').forEach(function(element) {
      if (language === 'ur') {
          element.placeholder = element.getAttribute('data-ur');
      } else {
          element.placeholder = element.getAttribute('data-en');
      }
  });
}

// Example of triggering the language switch
document.getElementById('switchToUrdu').addEventListener('click', function() {
  switchLanguage('ur');
});

document.getElementById('switchToEnglish').addEventListener('click', function() {
  switchLanguage('en');
});
function switchLanguage() {
  const currentLang = document.body.getAttribute('data-lang');
  const newLang = currentLang === 'ur' ? 'en' : 'ur';
  document.body.setAttribute('data-lang', newLang);

  const formElements = document.querySelectorAll('#subscription-form input');
  formElements.forEach(element => {
      if (element.placeholder) {
          element.placeholder = element.getAttribute(`data-${newLang}`);
      }
      if (element.type === 'submit') {
          element.value = element.getAttribute(`data-${newLang}`);
      }
  });
}

// Initialize language
document.body.setAttribute('data-lang', 'en');
function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-en], [data-ur]');
  elements.forEach(function(element) {
    if (lang === 'ur') {
      element.textContent = element.getAttribute('data-ur');
      document.getElementById('testimonial-section').classList.add('urdu-active');
    } else {
      element.textContent = element.getAttribute('data-en');
      document.getElementById('testimonial-section').classList.remove('urdu-active');
    }
  });
}
function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-en], [data-ur]');
  elements.forEach(function(element) {
    if (lang === 'ur') {
      element.textContent = element.getAttribute('data-ur');
      if (element.placeholder) {
        element.placeholder = element.getAttribute('data-ur');
      }
      if (element.value) {
        element.value = element.getAttribute('data-ur');
      }
    } else {
      element.textContent = element.getAttribute('data-en');
      if (element.placeholder) {
        element.placeholder = element.getAttribute('data-en');
      }
      if (element.value) {
        element.value = element.getAttribute('data-en');
      }
    }
  });
}

              




