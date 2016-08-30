$(function () {
    content = $("#scene").smoothState({
        onStart: {
            duration: 200,
            render: function () {
                content.toggleAnimationClass('is-exiting');
            }
        }
    }).data('smoothState');
});