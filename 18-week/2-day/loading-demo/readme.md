## DOMContentLoaded vs window.onLoad
Use **DOMContentLoaded** to ensure the HTML is parsed without waiting for all resources, speeding up script execution for faster interactivity.
 - Key: DomContentLoaded "waits for the HTML to be **parsed**"

Use **window.onload** when you need to ensure all page resources, including images and stylesheets, are fully loaded.
 - Key: window.onLoad "waits for the **all** resources to load"
