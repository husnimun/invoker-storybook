## [Unreleased]
<details>
  <summary>
    Changes that have landed in master but are not yet released.
    Click to see more.
  </summary>
</details>

## 1.0.0 (July 19, 2019)

### Hooks

* Add `useMediaQuery` hooks with SSR support and defaultQueries. Now we can detect the media-query in react component.
* Change default import and export of hooks to named-export, for consistency and tree-shaking support

### SCSS

* Add `responsive-font()` and also alias to `rf()` so now a large text like display or heading1 size will adjust with the screen size.