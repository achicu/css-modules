requirejs.config({
    packages: [
        {
            name: 'css',
            location: '../libs/require-css',
            main: 'css'
        },
        {
            name: 'less',
            location: '../libs/require-less',
            main: 'less'
        },
        {
            name: 'css-module',
            location: '../libs/require-css-module',
            main: 'css-module'
        },
        {
            name: 'text',
            location: '../libs/require-text',
            main: 'text'
        }
    ]
});
