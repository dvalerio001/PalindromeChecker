# Palindrome Checker

A simple web application that checks if a given word is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

## Features

- Interactive web interface with a modal for word input
- Real-time form validation
- Clear visual feedback on palindrome status

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Programming Styles and Methods

### HTML

- Semantic HTML5 structure
- BEM (Block Element Modifier) naming convention for classes

### CSS

- Flexbox for layout
- Custom properties (CSS variables) for color scheme
- Media queries for responsive design
- CSS transitions for interactive elements

### JavaScript

- ES6+ features (arrow functions, template literals)
- Event delegation for efficient event handling
- DOM manipulation
- Regular expressions for input validation

## Key Components

### Modal

The application uses a modal dialog for word input.

### Form Validation

Real-time form validation is implemented to ensure user input meets the following criteria:

- Contains at least two characters
- Uses only alphabetic characters

Validation feedback is provided through error messages.

## How It Works

1. User clicks the "CLICK HERE" button to open the modal.
2. The modal presents an input field for the word.
3. As the user types, real-time validation provides feedback.
4. Upon submission, the application checks if the word is a palindrome.
5. The result is displayed on the main page, indicating whether the word is a palindrome or not.
