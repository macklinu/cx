import { test, expect } from "vitest";

import { cx } from ".";

test("returns empty string when passed no args", () => {
  expect(cx()).toBe("");
});

test("returns empty string when passed falsy arguments", () => {
  expect(cx(null, undefined, 0, false, void 0)).toBe("");
});

test("concatenates truthy string arguments into classNames string", () => {
  expect(
    cx(
      "kareem",
      "abdul",
      "jabbar",
      // @ts-expect-error - Testing undefined behavior
      // oxlint-disable-next-line no-constant-binary-expression
      void 0 && "larry-bird",
      123,
    ),
  ).toBe("kareem abdul jabbar 123");
});
