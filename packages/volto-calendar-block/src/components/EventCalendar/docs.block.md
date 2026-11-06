---
block: eventCalendar
---

Shows the Plone events that match a query, as a searchable and filterable list of cards.

The block searches the catalog with the query stored in its `query` field, and adds the facets, the search text and the sorting chosen by the visitor.
Only events are listed, whatever the stored query says.

### Fields

- `headline`: text shown above the search controls.
- `query`: the base query, an object with the `query` list of criteria, and optionally `sort_on`, `sort_order`, `b_size` and `limit`.
  Each criterion has `i` (the index), `o` (the operation) and `v` (the value).
  The operations and the indexes are the ones that the `@querystring` endpoint of the Plone REST API returns.
- `showSearchInput`: whether the visitor can type a search text.
- `searchInputPrompt`: the label of the search input.
- `showSearchButton`: whether a search button is shown. The search then runs when the visitor presses the button or the Enter key, and not while typing.
- `searchButtonLabel`: the label of the search button.
- `showTotalResults`: whether the number of results is shown.
- `showSortOnEvent`: whether the visitor can change the sort order.
- `sortOnOptions`: the list of indexes the visitor can sort on.
- `facets`: a list of facets. Each facet has a `field`, the index to filter on, and a `type`, the widget of the facet: `selectFacet` or `checkboxFacet`.
  The facet also has `title`, `multiple`, `hidden` and `advanced`.
  A `field` is an object with the `value` and the `label` of the index.
  A hidden facet still filters the results when its value is in the URL.
- `facetsTitle`: the title of the facets section.
- `listingBodyTemplate`: the ID of the listing variation that renders the results, when the site has one.

### Example

A block that lists the events of a site, with the search input, a search button, and a facet on the subject of the events.

```json
{
  "@type": "eventCalendar",
  "headline": "Upcoming events",
  "query": {
    "query": [
      {
        "i": "portal_type",
        "o": "plone.app.querystring.operation.selection.any",
        "v": ["Event"]
      }
    ],
    "sort_on": "start",
    "sort_order": "ascending",
    "b_size": 12
  },
  "showSearchInput": true,
  "searchInputPrompt": "Search events",
  "showSearchButton": false,
  "showSortOnEvent": true,
  "sortOnOptions": ["start", "sortable_title"],
  "showTotalResults": true,
  "facets": [
    {
      "title": "Subject",
      "field": { "value": "Subject", "label": "Subject" },
      "type": "checkboxFacet",
      "multiple": true,
      "hidden": false,
      "advanced": false
    }
  ],
  "facetsTitle": "Filter by subject"
}
```
