define([
    "cssmodules",
    "css-module!../assets/css/button",
    "text!../templates/button.html"
],
function(CSSModules, ButtonCSS, ButtonTemplate) {

    var ButtonView = Backbone.View.extend({

        template: _.template(CSSModules.linkHtml(ButtonTemplate, ButtonCSS)),

        events: CSSModules.linkEvents(ButtonCSS, {
            "click $button": "handleButtonClick"
        }),

        initialize: function() {
            this.model.on("change:label", this.updateLabel, this);
        },

        remove: function() {
            this.model.off(this);
        },

        render: function() {
            this.$el.html(this.template({
                label: this.model.get("label")
            }));
            return this;
        },

        updateLabel: function() {
            this.$el.find("." + ButtonCSS.button).text(this.model.get("label"));
        },

        handleButtonClick: function() {
            this.model.trigger("click");
        }
    });

    return ButtonView;

});
