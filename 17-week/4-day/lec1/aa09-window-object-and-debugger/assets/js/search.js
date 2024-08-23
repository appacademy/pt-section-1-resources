export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    return document.getElementById(id);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    return document.querySelector(tag);
    return document.getElementsByTagName(tag)[0]
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    return document.querySelector("." + cls);
    return document.getElementsByClassName(cls);
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    const tagElements = document.getElementsByTagName(tag);
    return Array.from(tagElements);
    const tagElements2 = document.querySelectorAll(tag);
    return Array.from(tagElements2)
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    const classEls = document.getElementsByClassName(cls);
    return Array.from(classEls);
    const classEls2 = document.querySelectorAll("." + cls);
    return Array.from(classEls2)
}