import dr from "./defangrefang";

test('can handle prefixes', () => {

    const prefixes = [
        {danger: 'http://we-are-evil.com', defanged: 'hXXp://we-are-evil[.]com'},
        {danger: 'https://we-are-evil.com', defanged: 'hXXps://we-are-evil[.]com'},
        {danger: 'ssh://localhost', defanged: 'sXh://localhost'},
        {danger: 'ftp://please.download.free.stuffs', defanged: 'fXp://please[.]download[.]free[.]stuffs'}];

    prefixes.forEach(({danger, defanged}) => {
        expect(dr.defang(danger)).toBe(defanged);
        expect(dr.refang(defanged)).toBe(danger);
    });
});

test('can handle domains', () => {

    const url = 'we.are.Totally.legit.org';
    const defangedUrl = "we[.]are[.]Totally[.]legit[.]org";

    expect(dr.defang(url)).toBe(defangedUrl);
    expect(dr.refang(defangedUrl)).toBe(url);

    const urlWithPath = 'we.are.Totally.legit.org/do/not/touch';
    const defangedUrlWithPath = "we[.]are[.]Totally[.]legit[.]org/do/not/touch";
    expect(dr.defang(urlWithPath)).toBe(defangedUrlWithPath);
    expect(dr.refang(defangedUrlWithPath)).toBe(urlWithPath);
});

test('can handle special domains', () => {
    const url = 'bare.üku.ørken.ærlig.is';
    const defangedUrl = 'bare[.]üku[.]ørken[.]ærlig[.]is';
    expect(dr.defang(url)).toBe(defangedUrl);
    expect(dr.refang(defangedUrl)).toBe(url);
});

test('can handle email addresses', () => {
    const email = 'bleh@Bleh.com';
    const emailDefanged = 'bleh[at]Bleh[.]com';

    expect(dr.defang(email)).toBe(emailDefanged);
    expect(dr.refang(emailDefanged)).toBe(email);

    const specialEmail = 'bleæ@üleh.com';
    const defangedSpecialEmail = 'bleæ[at]üleh[.]com';

    expect(dr.defang(specialEmail)).toBe(defangedSpecialEmail);
    expect(dr.refang(defangedSpecialEmail)).toBe(specialEmail);
});

test('can handle ipv4', () => {
    const ipv4 = '192.168.1.0';
    const ipv4Defanged = '192[.]168[.]1[.]0';
    expect(dr.defang(ipv4)).toBe(ipv4Defanged);
    expect(dr.refang(ipv4Defanged)).toBe(ipv4)
});