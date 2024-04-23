// window.blazorArrowKeyPressed = function(dotnetHelper) {
//     document.addEventListener('keydown', function(event) {
//         dotnetHelper.invokeMethodAsync('OnArrowKeyPressed', event.key);
//         if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
//         }
//     });
// };
window.blazorArrowKeyPressed = function(dotnetHelper) {
    document.addEventListener('keyup', function(event) {
        dotnetHelper.invokeMethodAsync('OnArrowKeyPressed', event.key);
    });
};
// not working
// window.blazorArrowKeyPressed = function(dotnetHelper) {
//     document.addEventListener('keypress', function(event) {
//         dotnetHelper.invokeMethodAsync('OnArrowKeyPressed', event.key);
//     });
// };

