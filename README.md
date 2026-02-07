# hachimi_lib (JS/WASM)

WebAssembly bindings for the Hachimi common components library. Provides high-performance, tag-aware text wrapping for web and Node.js environments.

## Installation

```bash
pnpm add hachimi_lib
# or
npm install hachimi_lib
```

## Usage

This package provides a WebAssembly module. You must initialize it before calling its functions.

```javascript
import init, { wrapText, isolateTags } from "hachimi_lib";

async function run() {
  // Initialize the WASM module
  await init();

  // Wrap text with Unity-style tags
  const lines = wrapText("Hello <color=red>Hachimi</color>!", 20, 1.0);
  console.log(lines);

  // Isolate tags from content
  const sections = isolateTags("Some <size=12>small</size> text");
  sections.forEach((s) => console.log(s.chunk, s.is_tag));
}

run();
```

## Features

- **JS/WASM Interop**: Seamless bindings for high-performance Rust logic.
- **Tag Preservation**: Correctly handles formatting tags during wrapping.
- **Type Definitions**: Includes full TypeScript declarations (`.d.ts`).

## Source

The core Rust implementation is maintained in the [hachimi_lib](https://github.com/THShafi170/hachimi_lib) repository.

## License

[MIT](LICENSE)
