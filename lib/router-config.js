TP = {};
TP.Core = {};
TP.Core.Functions = {};
TP.Const = {};
TP.Const.AllowedLangKey = ["es", "en", "it"];

TP.Core.Functions.setRouterLang = function (lang) {
    Router.setLanguage(lang);
}

TP.Core.Functions.setLanguageKey = function (lang) {
    TP.Core.languageKey = lang;
};

// config
Router.configure({
    layoutTemplate: 'layout',
    //   loadingTemplate: 'loading',
    notFoundTemplate: "page404",

    i18n: {
        languages: TP.Const.AllowedLangKey,

        setLanguage: function (lang) {
            if (Meteor.isClient) {
                TP.Core.Functions.setLanguageKey(lang);
            }
        },
        autoConfLanguage: true,
        missingLangCodeAction: function (path, options) {
            console.log("langCode is missing"); //never called
        }

    }
});

// some basic routes
Router.map(function () {
    this.route("login", {
        path: "/login"
    });
    this.route("start", {
        path: "/"
    });
});