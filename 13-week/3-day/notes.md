# CSS

## The Basics

- **CSS** stands for Cascading Style Sheets
- It's a language for styling web pages
- Separates content (HTML) from presentation (CSS)
- Offers developers control over appearance and layout

## CSS Selectors

- Selectors are the targeting mechanism in CSS
- They target specific elements on a webpage
- Allow us to apply styles to those elements
- Different selector types for different targeting needs

### Type Selector

- Target HTML elements by their tag name
- Example: `h1`, `p`, `div`, `button`
- Useful for styling common elements across a page

### Class Selector

- Target elements with a specific class name
- Class names are prefixed with a dot (`.`)
- Allow for reusable styles across multiple elements

### ID Selector

- Target unique elements with a specific ID
- ID selector is prefixed with a hashtag/pound sign/octothorpe (`#`)
- Use case: Styling unique elements on a page (e.g., hero section, main button)

### Attribute Selector

- Target elements based on their specific attributes or attribute values
- More precise way to style elements compared to just using element type selectors or class selectors
- Particularly useful when you need to target elements based on dynamic content or user interactions
- Example: `a[title]` targets all anchor (**\<a\>**) elements with a *title* attribute

### Descendant Selectors

- Target elements nested within other elements
- Selectors are separated by spaces
- Example: `div p` targets all paragraphs (**\<p\>**) that are descendants of a **div** element

### Pseudo-class Selector

- Target elements based on their state or behavior
- Use a colon (`:`) followed by the pseudo-class name
- Common examples:
  - `:hover` applies to elements that currently have the cursor directly over it
  - `:focus` applies to elements that have the current focus, like inputs and buttons

## CSS Rule Specificity

- Sometimes you might encounter situations where multiple selectors target the same element.
  - In those cases, CSS has a built-in mechanism called *specificity* to determine which style rule is applied.
  - Understanding *specificity* is essential for writing maintainable and predictable CSS.

Different CSS selectors have different weights when determining which selector to apply in case of conflicts. From most important to least important:

1. Inline styles
2. ID selectors
3. Class, attribute, and pseudo-class/element selectors
4. Element tag selectors

The algorithm to determine the most specific rule goes like this. When comparing two selectors:

1. If one has a greater number of ids, then it wins. If there is a winner, STOP.
2. They must have the same number of ids, so the one with the greater number of classes, pseudo-classes, and attributes wins. If there is a winner, STOP.
3. They must have the same number of ids and the same number of classes, too. The rule with the greatest number of tags wins. If there is a winner, STOP.
4. They have the same number of ids, classes, and tags. The rule that the browser read last wins.

## Importing CSS Files into HTML

1. In the `<head>` of your HTML document, place a `<link>` element.
  - That `<link>` element needs to have 2 attributes set:
    1. **rel** should be set to `stylesheet`
    2. **href** should be set to the filepath to your local CSS files, or the url of web-hosted CSS files
