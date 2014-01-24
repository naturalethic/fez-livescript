A [LiveScript](http://livescript.net/) operation for the [Fez](http://fez.github.io/) build system.

Install:

```
npm install fez-livescript
```

Example:

```
livescript = require 'fez-livescript'

build = (stage) ->
  stage (rule) ->
    rule 'source/*.ls', 'target/index.js', livescript()
```
