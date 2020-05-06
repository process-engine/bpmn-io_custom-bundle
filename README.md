# bpmn-js custom bundle

This project creates a bundle of the bpmn.io components, at the end of
the bundling process there is one JavaScript file and one CSS file ready to use.

The bundle is created with [rollup.js](https://rollupjs.org/).

## What are the goals of this project?

**Motivation**: We created this project to solve a bundling issue, when using
Aurelia and bpmn-js there are some dependencies that cannot be resolved. For
example some parts of bpmn-js require the NodeJS `fs` module.

To get around this issue we tried using the [`bower-bpmn-js`](https://github.com/bpmn-io/bower-bpmn-js)
module via bower in our aurelia application. This worked but we also needed
the [`bpmn-js-properties-panel`](https://github.com/bpmn-io/bpmn-js-properties-panel)
module, but there was no bower version for that (See [bpmn-io/bpmn-js-properties-panel#197](https://github.com/bpmn-io/bpmn-js-properties-panel/issues/197)).

This projects aims to solve the problem by bundling `bower-bpmn-js` and
`bpmn-js-properties` into a single file.

Now this package bundles the JS and CSS of:
- [bpmn-js](https://github.com/bpmn-io/bpmn-js)
- [@process-engine/bpmn-js-bpmnlint](https://github.com/process-engine/bpmn-js-bpmnlint)
- [camunda-bpmn-moddle](https://github.com/camunda/camunda-bpmn-moddle)
- [diagram-js](https://github.com/bpmn-io/diagram-js)
- [diagram-js-minimap](https://github.com/bpmn-io/diagram-js-minimap)

It is used by the [BPMN Studio](https://github.com/process-engine/bpmn-studio).

## Relevant URLs

* [bpmn-js example for custom bundles](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-bower-bundle)
* [bpmn-js](https://github.com/bpmn-io/bpmn-js)
* [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel)

## How do I set this project up?

### Prerequesites

* Node latest LTS

### Setup/Installation

```shell
$ npm install
```

### Building

```shell
$ npm run build
```

This creates all bundled files in the `dist` folder.

## How do I use this project?

### Usage

```shell
$ npm install --save @process-engine/bpmn-js-custom-bundle
```

This will install the project in `node_modules`, we need to tell Aurelia
how to load this bundle into the application:

```javascript
{
  "name": "@process-engine/bpmn-js-custom-bundle",
  "path": "../node_modules/@process-engine/bpmn-js-custom-bundle/dist",
  "main": "bpmn-modeler-custom.js",
  "resources": [
    "bpmn-modeler-custom.css",
    "bpmn-modeler-custom.js"
  ]
}
```

Inside your templates you can now use:

```html
<template>
  <require from="@process-engine/bpmn-js-custom-bundle/bpmn-modeler-custom.css"></require>  
  ...
</template>
```

And inside your javascript files:

```javascript
import * as BPMNModeler from '@process-engine/bpmn-js-custom-bundle';
```

### Authors/Contact information

- Alexander Kasten <alexander.kasten@5minds.de>
- Steffen Knaup <steffen.knaup@5minds.de>
- Christian Werner <christian.werner@5minds.de>
- René Föhring <rene.foehring@5minds.de>
