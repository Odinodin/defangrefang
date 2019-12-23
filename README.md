# Defang! Refang!
Defang and fang your dangerous URLs, IPs and emails! No dependencies, you only get the dentist.

# Install

Add `"url-dentist" : "0.0.1"` to your dependencies.

# Usage

```typescript
import * as dr from "./defangrefang";

dr.defang("http://dr.evils.lair/");

=> "hXXp://dr[.]evils[.]lair/"
```