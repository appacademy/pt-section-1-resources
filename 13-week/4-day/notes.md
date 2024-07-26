# CSS: The Box Model and Element Position

## Box Model

- It represents every HTML element as a rectangular box, composed of four main areas:
  1. content
     - The actual content of the element (text, images, etc.)
  2. padding
     - The space between the content and the border
  3. border
     - The border that surrounds the padding and content
  4. margin
     - The space outside the border, separating the element from other elements

![box model](https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png)

### Adjusting Size

|Property	| Description |	Example |
| --------- | ------ | ----- |
| width	    | Sets the width of the content area	| width: 200px; |
| height	| Sets the height of the content area	| height: 150px; |
| padding	| Sets the space between the content and the border	 | padding: 10px; |
| border	| Sets the style, width, and color of the border	| border: 2px solid black; |
| margin	| Sets the space outside the border	| margin: 20px; |

### Box-sizing

There are 2 ways to measure a boxes size:

1. `content-box` is the default method.
    - The **width** and **height** properties refer to the width and height of the content area only
2. `border-box` is an alternative method.
    - The **width** and **height** properties refer to the width and height of the content area + any padding and border
    - This typically makes it much easier to size elements

![box-sizing](https://pbs.twimg.com/media/FpJhABAXgAEsVia?format=png&name=small)

## Position

CSS positioning allows you to control the exact placement of elements on a webpage. Here are the main positioning values:

- **static**: This is the default position, where elements are placed in the normal flow of the document.
- **relative**: Elements are positioned relative to their original position. You can then use properties like `top`, `right`, `bottom`, and `left` to offset the element from its original position.
- **absolute**: Elements are removed from the normal document flow and positioned relative to the nearest positioned ancestor or the viewport.  
- **fixed**: Elements are positioned relative to the viewport and stay in the same place even when the page is scrolled.
- **sticky**: Elements are positioned relative to the viewport until they reach a specified offset, then become fixed. This is useful for creating elements that stick to the top or bottom of the page when scrolled past a certain point.