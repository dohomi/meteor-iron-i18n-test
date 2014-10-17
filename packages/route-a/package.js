Package.describe({
    name:"route-a",
    summary: "Test for route a"
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    api.use(['iron:router@0.9.3', 'martino:iron-router-i18n@0.3.3'], ['client', 'server']);
    api.addFiles('route-a.html', 'client');
    api.addFiles('client.js', 'client');

});

