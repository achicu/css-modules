require([
        "htmlrewrite",
        "css-module!../assets/css/button",
        "text!../templates/button.html"], function(HtmlRewrite, buttonCSS, buttonTemplate) {

    var html = HtmlRewrite.linkCSS(buttonTemplate, buttonCSS);
    console.log(buttonCSS, html);

    var button = document.createElement("div");
    button.innerHTML = html;
    document.body.appendChild(button);
});
