function createAddQuoteForm() {
    // Create form elements
    const form = document.createElement('form');
    form.setAttribute('id', 'quoteForm');
    
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter a quote');
    form.appendChild(input);
    
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add Quote';
    form.appendChild(submitBtn);
    
    // Add the form to the body or any other container
    document.body.appendChild(form);
  }
  