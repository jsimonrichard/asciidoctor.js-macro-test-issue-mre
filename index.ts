import asciidoctor, { Extensions, type Registry, type Document } from 'asciidoctor';

export const componentMacros = (registry: Registry) => {
  registry.inlineMacro("c", function (this: Extensions.InlineMacroProcessorDsl) {
    this.process(function (parent: Document, target: string, attrs: any) {
      return this.createInlinePass(
        parent,
        `<custom-component type="${target}" />`
      );
    });
  });
};

export const Asciidoctor = asciidoctor()
export const registry = Asciidoctor.Extensions.create()
componentMacros(registry)

const html = Asciidoctor.convert('c:blank[]', { 'to_file': false, 'extension_registry': registry })
console.log(html)