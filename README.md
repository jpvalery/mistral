# Mistral

Mistral is the component library I built for my projects both as a challenge and as a way to make my life easier by having a set of ready-to-use components.

## Installing

Start by adding the dependency
`yarn add @jpvalery/mistral`

Update `tailwind.config.js` in your project to include the library files in `content`:

```
module.exports = {
  content: [
    ...
    "./node_modules/@jpvalery/mistral/**/*.js"
  ],
```