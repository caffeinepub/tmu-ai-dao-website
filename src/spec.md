# Specification

## Summary
**Goal:** Unify typography styling across all Projects/SubDAOs project cards and add a new TeleMeetUp & TMU-Notes card image.

**Planned changes:**
- Update `frontend/src/pages/ProjectsPage.tsx` project card description typography so all cards use brighter/clearer text (no muted/washed-out styles), with white text for all description content (including bullet points) and consistent font size/style across every card.
- Add a new generated image asset for the “TeleMeetUp & TMU-Notes” project card under `frontend/public/assets/generated` and update that project’s `imageUrl` in `frontend/src/pages/ProjectsPage.tsx` to use it.

**User-visible outcome:** On the Projects/SubDAOs page, all project card descriptions appear consistently styled with clear white text, and the TeleMeetUp & TMU-Notes card shows a new virtual meeting-themed image.
