```html
<ui-item><!-- the item child components --></ui-item>
<ui-item-a><!-- the item child components --></ui-item-a>
```

#### Props

| Name             | Type      | Default | Description                                           |
| ---------------- | --------- | ------- | ----------------------------------------------------- |
| selected         | `Boolean` | `false` | Optional, styles the row in an selected state.        |
| activated        | `Boolean` | `false` | Optional, styles the row in an activated state.       |
| firstPlaceholder | `Boolean` | `false` | Optional, a placeholder of the first tile in the row. |
| firstIcon        | `String`  | `null`  | Optional, an icon of the first tile in the row.       |
| firstImage       | `String`  | `null`  | Optional, an image of the first tile in the row.      |
| lastPlaceholder  | `Boolean` | `false` | Optional, a placeholder of the last tile in the row.  |
| lastText         | `String`  | `''`    | Optional, a small text of the last tile in the row.   |
| lastIcon         | `String`  | `null`  | Optional, an icon of the last tile in the row.        |
| lastImage        | `String`  | `null`  | Optional, an image of the last tile in the row.       |

#### Slots

| Name      | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| (default) | The default slot holds the item child components and can contain HTML. |

**Item child components:**

- `<ui-item-text>`
- `<ui-item-subtext>`

```html
<!-- Default List -->
<ui-list>
  <ui-item>
    <ui-item-text><!-- Primary text --></ui-item-text>
  </ui-item>
</ui-list>

<!-- Two-Line List -->
<ui-list type="2">
  <ui-item>
    <ui-item-text><!-- Primary text --></ui-item-text>
    <ui-item-subtext><!-- Secondary text --></ui-item-subtext>
  </ui-item>
</ui-list>
```
