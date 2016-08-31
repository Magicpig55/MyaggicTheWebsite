$(function () {
    scene = $("#scene")
    smoothState = scene.smoothState({
        onStart: {
            duration: 200,
            render: function (container) {
                container.addClass('is-exiting');
                smoothState.restartCSSAnimations();
            }
        },
        onReady: {
            duration: 0,
            render: function (container, newContent) {
                container.removeClass('is-exiting');
                container.html(newContent);
                console.log("done");
            }
        }
    }).data('smoothState');
});