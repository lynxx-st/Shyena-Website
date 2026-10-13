# Shyena landing page plan

## Evidence and design diagnosis

The three supplied screenshots show two pieces of decorative metadata that do
not help visitors choose a next step: a narrow row of category labels and a
small company/location line repeated above the hero heading. The previous
hero also confined the 3D art to a bordered panel, making it read like a
separate widget instead of the main visual for the landing page.

The supplied Ez-SaaS archive uses a conventional landing-page sequence,
asymmetrical bento cards, a contact form, FAQs, and a final conversion action.
Its logo wall, marketing statistics, and example company/contact details do
not belong on Shyena’s site. The useful parts are its clear hero-to-feature
hierarchy, varied card proportions, and accessible action modules.

## Target page structure

1. **Hero:** Keep the direct headline, two clear actions, and dark Shyena
   palette. Remove the tiny duplicate company/location kicker. Let the 3D
   artwork fill an open, frameless scene beside the heading.
2. **Capabilities:** Use an asymmetrical bento grid for software security,
   hardware and OT security, and products and learning. Remove category-only
   labels; every card must contain a clear title, short explanation, and
   relevant link.
3. **Projects:** Keep the FlagForge and SecYourFlow brand assets and
   accurately state their public and private availability.
4. **Questions:** Keep the NextForge Accordion for service and project
   questions.
5. **Contact:** Place the existing inquiry form on the landing page so the
   primary conversion path is usable without navigating away. Reuse the form
   server action and use NextForge Card, Label, Input, Textarea, and Button
   components. Keep the contact page as a direct route as well.

## Three.js implementation

The referenced [FreeFrontend floating-books example](https://freefrontend.com/three-js/#2025-10-06-3d-floating-books-composition-with-three-js-and-gsap-l)
links to a [CodePen implementation](https://codepen.io/hollandblumer/pen/QwWzyqm).
That demo builds floating book meshes and slowly cycles rotations. It loads
Three.js r100, TweenMax 2, and legacy global OrbitControls while also taking
over body styles and page scrolling. Those are unsuitable dependencies for
the Next.js app.

Port the recognizable composition, not its old runtime: use the already
installed Three.js and GSAP packages, keep three distinct covers tied to
Shyena’s work, and arrange smaller floating books around them. Use one gentle
cyclic group motion plus slower per-book drift. Keep the canvas lazy-loaded,
pause it when hidden or when reduced motion is requested, cap device pixel
ratio, release GPU resources on cleanup, and retain a legible CSS fallback.

## Boilerplate module map

- `Button` for hero, card, form, and contact actions.
- `Card`, `CardHeader`, `CardAction`, `CardContent`, and `CardFooter` for
  capability and contact surfaces.
- `Accordion` for the FAQ.
- `Label`, `Input`, and `Textarea` for accessible form controls.
- Existing server action for the inquiry form; do not replace it with a
  pretend client-only submission.
- Existing theme tokens for both color modes and the reduced-motion
  presentation.

## Acceptance checks

- Neither screenshot complaint remains: no label-only strip and no tiny
  repeated company/location line above the hero.
- The Three.js hero visibly uses a layered floating-book composition inspired
  by the reference and does not appear as a boxed widget.
- The landing-page form submits through the same server action as `/contact`;
  its errors and pending/success states remain accessible.
- Cards, actions, FAQ, and the contact form are readable and keyboard
  accessible in dark and light themes at desktop and mobile widths.
- Reduced motion keeps a still scene; browsers without WebGL get the CSS
  illustration; no horizontal overflow or browser console errors.
- Biome, TypeScript, and production build pass. Capture desktop/mobile and
  dark/light screenshots and obtain independent design/QA review.
