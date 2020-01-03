# Defang! Refang!
Defang and fang your dangerous URLs, IPs and emails! No dependencies, you only get the dentist.

<a href="https://www.npmjs.com/package/defang-refang"><img src="https://img.shields.io/npm/v/defang-refang.svg?style=flat" alt="npm version"></a>

## Install

`$ npm install defang-refang`

## Usage

```typescript
import dr from "./defangrefang";

dr.defang("http://dr.evils.lair/");

=> "hXXp://dr[.]evils[.]lair/"

dr.refang("'192[.]168[.]1[.]0'");

=> "192.168.1.0"
```

## Features
Handles the following:

* Emails
* IPv4
* URLs
* Prefixes 
    * ftp
    * http
    * https
    * ssh

| Argument                | Defanged                    |
|:------------------------|:----------------------------|
|faust@evil.com           |faust[at]evil[.]com          |
|192.168.1.1              |192[.]168[.]1[.]1            |
|https://totally.legit.com|hXXps://totally[.]legit[.]com|

