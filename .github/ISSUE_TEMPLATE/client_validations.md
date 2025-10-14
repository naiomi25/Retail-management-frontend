---
name: Client-side validations for EntryForm
about: Add input validation and disable submit when invalid in EntryForm
title: "FE: Add client-side validations to EntryForm"
labels: frontend, enhancement, good-first-issue
assignees: ""
---

## Summary

Add client-side validation to `src/components/Form.jsx` (`EntryForm`) so required fields are validated, numeric bounds enforced, and the submit button is disabled when the form is invalid.

## Background

Currently the form relies on backend validation. Adding client-side checks improves UX and reduces round trips.

## Acceptance criteria

- [ ] `date` is required and must be a valid `YYYY-MM-DD` string.
- [ ] `transactions`, `articles`, `accessories`, `apparel`, `footfall` are integers ≥ 0.
- [ ] `net_sales` is a number ≥ 0 (allow 0.00).
- [ ] Submit button is disabled while the form is invalid.
- [ ] Inline error messages are shown next to invalid fields.
- [ ] Existing tests (if any) still pass.

## Files to change (suggested)

- `src/components/Form.jsx` — implement validation and disable submit.

## How to test

1. Run frontend (`pnpm dev` or `npm run dev`).
2. Open Create Entry page and try invalid inputs (empty date, negative numbers) — submit should be blocked and errors shown.
3. Submit valid payload and confirm backend accepts it.

## Estimate

- 2–4 story points

## Notes

Keep error strings concise and follow existing Spanish localization in other messages.
