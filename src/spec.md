# Specification

## Summary
**Goal:** Update the Projects/SubDAOs page cards by removing the “TMU-Notes WST” entry and adding a new first-position “TeleMeetUp & TMU-Notes” card with a “Watch Video” button.

**Planned changes:**
- Remove the staticProjects entry with `project.name` = "TMU-Notes-WST" from `frontend/src/pages/ProjectsPage.tsx` so the card no longer appears.
- Add a new staticProjects entry as the first item titled "TeleMeetUp & TMU-Notes" with the provided multi-line/bulleted description and a single card button labeled "Watch Video" linking to `https://www.youtube.com/watch?v=pk2TtlglNno` (opens in a new tab using the existing button pattern).

**User-visible outcome:** The Projects/SubDAOs page no longer shows “TMU-Notes WST”, and the first card is “TeleMeetUp & TMU-Notes” with a “Watch Video” button that opens the specified YouTube video in a new tab.
