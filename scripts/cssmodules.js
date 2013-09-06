define(function() {

    var regexp = /\$([\w-_\.]+)/g;

    var CSSModules = {
        linkHtml: function(html, css) {
            return html.replace(regexp, function(match, name) {
                return css.hasOwnProperty(name) ? css[name] : match;
            });
        },

        linkCSS: function(html, css) {
            return html.replace(regexp, function(match, name) {
                return css.hasOwnProperty(name) ? "." + css[name] : match;
            });
        },

        linkEvents: function(css, events) {
            var mappedEvents = {};
            _.each(events, function(value, key) {
                key = CSSModules.linkCSS(key, css);
                mappedEvents[key] = value;
            });
            return mappedEvents;
        }
    };

    return CSSModules;

});