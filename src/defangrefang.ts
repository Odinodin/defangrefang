const defangRules: Array<[RegExp, string]> = [
    [/^http/, 'hXXp'],
    // Emails
    [/(\w|[À-ÿ])(@)(\w|[À-ÿ])/gi, '$1[at]$3'],
    // URLs
    [/(\.)(\w|-|[À-ÿ])/gi, '[.]$2' ],
    // ips
    [/(\d)(\.)/g, '$1[.]']
];

const refangRules: Array<[RegExp, string]> = [
    [/^hXXp/i, 'http'],
    // Emails
    [/\[at\]/gi, '@'],
    // ips + urls
    [/\[\.\]/gi, '\.']
];

const defang = (arg: string) => {
    return defangRules.reduce((acc: string, [reg, replaceStr]: [RegExp, string]) => {
        return acc.replace(reg, replaceStr)
    }, arg);
};

const refang = (arg: string) => {
    return refangRules.reduce((acc: string, [reg, replaceStr]: [RegExp, string]) => {
        return acc.replace(reg, replaceStr)
    }, arg);
};

export default {
    defang, refang
}