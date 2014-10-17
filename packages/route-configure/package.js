Package.describe({
    name: "route-configure",
    summary: "Router configure package"
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    api.use(['blaze', 'templating'], 'client');
    api.use(['iron:router', 'martino:iron-router-i18n'], ['client', 'server']);
    api.imply(['iron:router', 'martino:iron-router-i18n']);

    api.addFiles('route.js', ['client', 'server']);

});

Package.onTest(function (api) {

});