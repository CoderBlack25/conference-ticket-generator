# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Key features](#key-features)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

The project is a **Conference Ticket Generator**. Users can fill in a form with their name, email, GitHub username, and upload an avatar image. After submission, a personalized conference ticket is generated and displayed.

### Screenshot

(Screenshot 2025-08-28 at 02.02.31.png)

### Links

- Solution URL: (https://github.com/CoderBlack25/conference-ticket-generator)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Flexbox, responsive design)
- Vanilla JavaScript (form validation, DOM manipulation, localStorage)
- Mobile-first workflow

### Key features

- **Drag & Drop Image Upload**  
  Users can upload an avatar by clicking the upload icon or dragging and dropping an image.

- **Form Validation**  
  Checks for:

  - Full name (letters only with spaces allowed).
  - Valid email format.
  - GitHub username format (must start with `@`).
  - Image upload required, max size 500KB.

- **Ticket Generation**  
  On successful form submission:
  - Data is stored in `localStorage`.
  - Ticket page (`ticket.html`) displays the personalized ticket with name, email, GitHub handle, and uploaded avatar.

### What I learned

I learned how to combine **form validation**, **image upload handling**, and **localStorage** to build a small but interactive app.

Example: validating GitHub username format with regex:

```js
const githubPattern = /^@[a-zA-Z0-9-]{1,39}$/;
if (!githubPattern.test(githubUsername)) {
  setError("username-error", "Please enter a valid GitHub address.");
}
```

### Continued development

In future projects, I want to focus on:

- Improving accessibility with ARIA attributes.

- Using CSS Grid for more flexible layouts.

- Replacing localStorage with a backend (Node/Express) for real persistence.

- Adding QR code generation on the ticket for extra realism.

### Useful resources

- MDN documentation (https://developer.mozilla.org) Helped me revisit some flexbox and gradient properties.

- [W3Schools HTML, CSS and JS Tutorials] (https://www.w3schools.com)

### Author

Frontend Mentor - [@CoderBlack25](https://www.frontendmentor.io/profile/CoderBlack25)
Twitter - [@dWeb3Oracle](https://x.com/dWeb3Oracle)

### Acknowledgments

Thanks to Frontend Mentor for providing these challenges, they’re a great way to sharpen frontend skills.
