# MRE: Asciidoctor.js Macro Extensions don't work with vitest / bun:test

To install dependencies:

```bash
bun install
```

To run (this should run correctly):

```bash
bun run index.ts
```

## Running Tests

...but the test fails.

With `bun:test`:
```bash
bun test
```

With `vitest`:
```bash
bunx vitest
```
or
```bash
npm run test
```


This project was created using `bun init` in bun v1.1.38. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
