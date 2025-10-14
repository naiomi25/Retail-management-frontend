---
name: Improve FetchData UX and error messages
about: Surface backend validation errors, improve loading/empty states and messaging in the entries dashboard
title: "FE: Improve FetchData UX and error messages"
labels: frontend, enhancement
assignees: ""
---

## Summary

Improve the UX in `src/components/FetchData.jsx` for handling loading states, empty lists, and showing backend validation errors to users.

## Acceptance criteria

- [ ] Show a prominent loading indicator while fetching.
- [ ] When `entries` is empty, display helpful text + an action (e.g., "Crear nueva entrada").
- [ ] If backend returns validation errors (400), display the error message text to the user instead of a generic message.
- [ ] Failures (500) show a retry button.

## Files to change (suggested)

- `src/components/FetchData.jsx`

## How to test

1. Simulate network errors and backend validation failures and confirm UI shows correct messages and actions.

## Estimate

- 2–3 story points
