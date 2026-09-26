# Parking lot

## Conversational recommendation flow

Deferred from the package-page visual pass. Do not partially implement this in the current hero work.

### Direction

- Start with the visitor's website URL.
- Provide useful guidance before asking for more commitment.
- Progressively collect additional information such as first name, phone, email, budget, and goals.
- Eventually recommend a package or next step based on the site and answers.

### Decisions still required

- Exact field list and collection order.
- Which fields are required versus optional.
- Recommendation logic and package-matching rules.
- Conversation UX, transitions, validation, and error states.
- Whether different packages require different form types.
- Backend, storage, notification, privacy, and consent behaviour.
- How the flow changes package-specific CTA labels and completion states.

### Current boundary

Keep the existing package form workflow and the current `Get my starting point` label until this work is designed as a dedicated task.
