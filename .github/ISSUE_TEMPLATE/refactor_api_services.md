---
name: Refactor API calls to services
about: Move API fetch logic from components to `src/services/entries.jsx`
title: "FE: Refactor entries API calls into services"
labels: refactor, frontend
assignees: ""
---

## Summary

Centralize API calls for entries (create, modify, delete, range) into `src/services/entries.jsx`. Components should call these services instead of using `apiUser` directly.

## Acceptance criteria

- [ ] `src/services/entries.jsx` provides `createEntry`, `modifyEntry`, `deleteEntry`, `fetchEntriesRange` functions.
- [ ] Components (`CreateEntry.jsx`, `FetchData.jsx`, edit modal) use the new service functions.
- [ ] Existing behavior unchanged; tests (if any) pass.

## Files to change (suggested)

- `src/services/entries.jsx` (create)
- `src/pages/CreateEntry.jsx`, `src/components/FetchData.jsx`, `src/pages/EditEntry.jsx` (use services)

## How to test

Run through create/edit/delete flows and ensure network calls are the same and UI behaves as before.

## Estimate

- 3–5 story points
