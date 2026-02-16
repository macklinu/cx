# @macklinu/cx

> A utility for creating className strings

## Installation

```sh
pnpm add @macklinu/cx
```

## Usage

This is a combination of two libraries that I always use with Tailwind:

- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

```ts
import { cx } from "@macklinu/cx";

cx("foo", "bar"); // "foo bar"

// say state === "loading"
cx("bg-red", "text-white", state === "loading" && "is-loading"); // "bg-red text-white is-loading"

cx(); // ""
```
