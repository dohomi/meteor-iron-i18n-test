TP = {};
TP.Core = {};
TP.Core.Functions = {};
TP.Const = {};
TP.Const.AllowedLangKey = ["es", "en", "it"];

/**
 *
 * @param string
 * @returns {string}
 */
TP.Core.Functions.getLangKeyFromLocale = function (string) {
    var substring = string.substring(0, 2);
    if (_.indexOf(TP.Const.AllowedLangKey, substring) !== -1) {
        return substring;
    }
    // default key for all not-found locale
    return 'en';
};

/**
 *
 * @returns {string}
 */
TP.Core.Functions.getInitLanguage = function () {
    var meteorUser = Meteor.userId && Meteor.user();
    var language = window.navigator.userLanguage || window.navigator.language;
    var langLocale = TP.Core.Functions.getLangKeyFromLocale(language);
    return meteorUser ? meteorUser.languageKey : langLocale;
};

TP.Core.Functions.getLanguageKey = function () {
    return TP.Core.languageKey;
};

TP.Core.Functions.setLanguageKey = function (lang) {
    TP.Core.languageKey = lang;
};

// config
Router.configure({
     layoutTemplate: 'layout',
    //   loadingTemplate: 'loading',
    //   notFoundTemplate: "page404",

    i18n: {
        languages: TP.Const.AllowedLangKey,
        getLanguage: function () {
            if (Meteor.isClient) {
                return TP.Core.Functions.getLanguageKey();
            } else {
                return 'en';
            }
        },

        setLanguage: function (lang) {
            if (Meteor.isClient) {
                TP.Core.Functions.setLanguageKey(lang);
            }
        },

        missingLangCodeAction: function (path, options) {
            if (options.i18n.getLanguage) {
                var lang = options.i18n.getLanguage();
                if (Meteor.isClient) {
                    lang = TP.Core.Functions.getInitLanguage();
                }
                if (lang) {
                    if (Meteor.isClient) {
                        Router.go('/' + lang + path);
                    }
                } else {
                    console.log("Can't redirect to i18n path, no current language set.");
                }
            } else {
                console.log("Can't retrieve current language: missing Router.options.i18n.getLanguage function.");
            }
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