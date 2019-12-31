# Defang! Refang!
Defang and fang your dangerous URLs, IPs and emails! No dependencies, you only get the dentist.

<a href="https://www.npmjs.com/package/defang-refang"><img src="https://img.shields.io/npm/v/defang-refang.svg?style=flat" alt="npm version"></a>

# Install

`$ npm install defang-refang`

# Usage

```typescript
import * as dr from "./defangrefang";

dr.defang("http://dr.evils.lair/");

=> "hXXp://dr[.]evils[.]lair/"
```