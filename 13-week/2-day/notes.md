# Intro to Mod 3

## Web Design

- This is not a UX/UI design course.
- Some modern design principles we should be familiar with:
  - White space
  - Colors
    - Aesthetics (Complementary Colors)
    - Accessibility (Color Blindness/Contrast)
  - Typography

## Accessibility

### WCAG - Web Content Accessibility Guidelines

Frontend dev bible for how to not get sued

4 Main Principles of the WCAG Guidelines:

1. Perceivable - All information and UI components, must be presentable to users in ways that they can perceive
2. Operable - All UI and Navigation components must be operable
3. Understandable - The UI and all info it holds must be understandable
4. Robust - Content must be robust enough to be interpreted by a wide variety of user agents

There are [online tools](https://www.accessibilitychecker.org/) that can help check the accessibility of your websites.

## Web Basics

- HTML: Provides structure and layout
- CSS: Provides look, feel, and positioning
- JavaScript: Provides interactivity and complex functionality

## HTML Basics

There are 3 main components to HyperText Markup Language:

### Tags

- Two types of tags: Opening and closing
  - Tags are wrapped in angled brackets `<>`
  - Closing tags start with a forward slash `</>`
- Tags have names, which are always lower case (e.g. h1, h2, p, etc.)
- Any text INSIDE of the angled brackets will NOT be displayed in the browser
  - Instead they tell the browser HOW to display information

### Elements

- An element is a set of opening and closing tags and everything inside of it

```html
<h1>I'm a top-level heading</h1>
<h2>I'm a sub-heading</h2>
<p>I'm a paragraph</p>
```

### Attributes

They are used to define additional info on our tags

```html
<h1 id="main-header">Hello World</h1>
<img class="main" src="img.jpg" />
```

## Semantic HTML

Why can't we just use a div?

- Accessibility

  - For the disabled
  - For Search Engine Optimization(SEO)
  - For the developer

## Wireframing

- The practice of mapping out your sites content before actually coding
- In a professional workspace this is going to be done for you by a designer
- A great tool for getting your ideas out before you write a bunch of code