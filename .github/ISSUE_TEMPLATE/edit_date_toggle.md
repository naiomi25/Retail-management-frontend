---
name: Add "Editar fecha" toggle in edit modal
about: Show calendar only when user explicitly enables editing the date in the edit modal
title: "FE: Add 'Editar fecha' toggle in edit modal"
labels: frontend, enhancement
assignees: ""
---

## Summary

Replace the always-hidden calendar in the edit modal with a small toggle (checkbox or button) labelled "Editar fecha". When enabled, reveal the calendar (or date picker) inline so the user can change the date.

## Acceptance criteria

- [ ] Edit modal shows an "Editar fecha" toggle when opening.
- [ ] When toggle is off, date is displayed as read-only text; when on, the calendar/date picker appears.
- [ ] Toggling does not reset other form fields.
- [ ] Tests/manual checks verify toggling and submit behavior.

## Files to change (suggested)

- `src/components/Form.jsx` — add `showCalendar` toggle logic and UI.
- `src/pages/EditEntry.jsx` — ensure `showCalendar` prop is flexible.

## How to test

1. Open edit modal on an entry.
2. Toggle "Editar fecha" and verify calendar appears.
3. Modify date and save; confirm backend stores the updated date.

## Estimate

- 1–2 story points
