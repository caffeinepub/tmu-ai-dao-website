# Specification

## Summary
**Goal:** Add a visible EN/FR language toggle button to the top navigation bar of the TMU AI DAO frontend.

**Planned changes:**
- Add an EN/FR toggle button to `frontend/src/components/Header.tsx` that appears in both desktop and mobile navigation menus
- Style the button using existing TMU AI DAO color tokens, showing the active language as visually highlighted (e.g., bold or different color) with a separator format like "EN | FR"
- Implement a language context or lifted state so the selected language value is accessible to page components

**User-visible outcome:** Users can see and click an EN/FR toggle button in the navigation bar on both desktop and mobile, switching the active language indicator between English and French.
