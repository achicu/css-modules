define(["buttonview"], function(ButtonView) {

    $(function() {
        var buttonModel = new Backbone.Model({
            label: "Click me!"
        });
        buttonModel.on("click", function() {
            buttonModel.set("label", "Ok!");
        });

        var button = new ButtonView({
            model: buttonModel
        });
                
        $("body").append(button.render().$el);
    });
});
