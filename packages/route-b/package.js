Package.describe({
    name: "route-b",
    summary: "Test for route b"
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    api.use(['iron:router@0.9.3', 'martino:iron-router-i18n@0.3.3'], ['client', 'server']);
    api.addFiles('route-b.html', 'client');
    api.addFiles('client.js', 'client');

});

Package.onTest(function (api) {

});
