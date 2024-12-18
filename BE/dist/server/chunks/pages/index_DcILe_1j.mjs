import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/somad/OneDrive/Desktop/Programming/Astro/myAstro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="text-center w-full font-bold text-red-500">Hello World</div> </main> ` })}`;
}, "C:/Users/somad/OneDrive/Desktop/Programming/Astro/myAstro/src/pages/index.astro", void 0);

const $$file = "C:/Users/somad/OneDrive/Desktop/Programming/Astro/myAstro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
