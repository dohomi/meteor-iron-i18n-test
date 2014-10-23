Package.describe({
    name: "route-b",
    summary: "Test for route b"
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    api.use(['blaze', 'templating'], 'client');
    api.use(['iron:router', 'martino:iron-router-i18n'], ['client', 'server']);

    api.addFiles('route-b.html', 'client');
    api.addFiles('client.js', 'client');

});

Package.onTest(function (api) {

});
