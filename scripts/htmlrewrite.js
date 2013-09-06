define(function() {

    var regexp = /\$([\w-_\.]+)/g;

    return {
        linkCSS: function(html, css) {
            return html.replace(regexp, function(match, name) {
                return css.hasOwnProperty(name) ? css[name] : match;
            });
        }
    };

});