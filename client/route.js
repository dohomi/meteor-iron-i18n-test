Router.configure({
    i18n: {
        autoConfLanguage: true,
        missingLangCodeAction: function (path, options) {
            console.log("langCode is missing"); //never called
        }
    }
});
