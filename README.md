# css-objectifier

## WIP - not ready for use yet!
creates javascript ojects from a css style sheet

## How?
- `npm test` To run tests

## Why?
- Computational CSS
- Complete component bundles - scematics, style and behavior
- https://www.youtube.com/watch?v=ERB1TJBn32c
- https://www.youtube.com/watch?v=NoaxsCi13yQ

## Place?
In time, it is likely that CSS framework providers (bootstrap, foundation etc) will supply their stylesheets as javascript objects, but until then, I hope this project can help users who wish to use these frameworks but doesn't want to mix inline and external styles.
This is not the permanent answer to this problem though - the better solution is for CSS providers to provide their CSS as javascript objects.

This project also serves as the base of [two (or one) upcomming project(s)] that will extract these styles and automatically apply them to a html string or React Component, in a similar way that using an external stylesheet would.

## TODO
- [ ] selectors
- [ ] formalize object structure