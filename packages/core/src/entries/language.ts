export enum Language {
    EN = 0,
    RU = 1,
    IT = 2,
    'zh_CN' = 3,
    TR = 4
}

export const defaultLanguage: Language = Language.EN;

export const languages = [Language.EN, Language.RU, Language.IT, Language['zh_CN'], Language.TR];

export const localizationText = (lang?: Language) => {
    switch (lang) {
        case Language.EN:
            return 'en';
        case Language.RU:
            return 'ru';
        case Language.IT:
            return 'it';
        case Language['zh_CN']:
            return 'zh_CN';
        case Language.TR:
            return 'tr';
        default:
            return 'en';
    }
};

export const localizationFrom = (lang: string) => {
    switch (lang) {
        case 'en':
            return Language.EN;
        case 'ru':
            return Language.RU;
        case 'it':
            return Language.IT;
        case 'zh_CN':
            return Language['zh_CN'];
        case 'tr':
            return Language.TR;
        default:
            return Language.EN;
    }
};
