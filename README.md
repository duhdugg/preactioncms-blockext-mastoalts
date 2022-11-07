# Preaction CMS MastoAlts Extension Block

This is an extension block for [Preaction CMS](https://github.com/duhdugg/preaction-cms) for Mastodon alt links.

## Installing in Preaction CMS (compile from source)

### clone this repo into your `cms/src/ext` directory

```bash
cd /path/to/preactioncms/src/ext
git clone https://github.com/duhdugg/preactioncms-blockext-mastoalts blockext-mastoalts
```

### build the extension

```bash
cd /path/to/preactioncms/src/ext/blockext-mastoalts
yarn
yarn build
rm -r node_modules # IMPORTANT to not skip this cleanup step
```

### register the extension (and its settings) in `cms/src/ext/index.js`

```javascript
import React, { Suspense } from 'react'
import { Spinner } from '@preaction/bootstrap-clips'
import MastoAlts from './blockext-mastoalts/dist/preactioncms-blockext-mastoalts.esm.js'
MastoAltsSettings = loadable(
  () =>
    import(
      './blockext-mastoalts/dist/preactioncms-blockext-mastoalts-settings.esm.js'
    ),
  {
    fallback: <Spinner />,
  }
)
MastoAlts.Settings = MastoAltsSettings
const blockExtensions = { MastoAlts }
// ...
```

### rebuild CMS client

```bash
cd /path/to/preactioncms
yarn build
```
