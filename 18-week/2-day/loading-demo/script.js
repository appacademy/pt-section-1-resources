// 100x100

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('largeImage');

    console.log(`Image dimensions on DOMContentLoaded: ${img.width}x${img.height}`);
});


window.onload = function() {
    const img = document.getElementById('largeImage');
    console.log(`Image dimensions on window.onload: ${img.width}x${img.height}`);
};
