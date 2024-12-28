// import { expect, test } from "bun:test";
import { expect, test } from "vitest";
import { Asciidoctor, registry } from ".";

test("asciidoc with extension", () => {
  const html = Asciidoctor.convert("c:blank[]", { extension_registry: registry});
  expect(html).toBe(`
<div class="paragraph">
<p><custom-component type="blank" /></p>
</div>
    `.trim());
});