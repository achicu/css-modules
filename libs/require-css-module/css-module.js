define(['css', 'require'], function(css, require) {
  
    var cssModule = {};

    cssModule.pluginBuilder = './css-module-builder';

    if (typeof window == 'undefined') {
        cssModule.load = function(n, r, load) { load(); };
        return cssModule;
    }

    var uniqueNames = 0;
    function nextName() {
        return "cssModule" + (uniqueNames++);
    }

    var regexp = /\$([\w-_\.]+)/g;

    function parseCSSModule(content) {
        var result = {};
        result.variables = {};
        result.content = content.replace(regexp, function(match, name) {
            var translatedName;
            if (result.variables.hasOwnProperty(name)) {
                translatedName = result.variables[name];
            } else {
                translatedName = nextName();
                result.variables[name] = translatedName;
            }
            return "." + translatedName;
        });
        return result;
    }

    cssModule.load = function(id, req, loadCallback, config) {
        var result,
            parse = function(content, callback) {
                var parseResult = parseCSSModule(content);
                result = parseResult.variables;
                callback(parseResult.content);
            },
            load = function() {
                loadCallback(result);
            };
        css.load(id, req, load, config, parse, ".css");
    };

    return cssModule;
});
