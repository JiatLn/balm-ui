```html
<ui-banner><!-- the banner message --></ui-banner>
```

### Props

| Name                  | Type    | Default | Description                                                                                                              | Version |
| --------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| `open` (`v-model`)    | boolean | `false` | Mandatory.                                                                                                               |         |
| `centered`            | boolean | `false` | Displayed centered. By default, banners are positioned as leading.                                                       | 8.27.0  |
| `fixed`               | boolean | `false` | When used below top app bars, banners should remain fixed at the top of the screen.                                      | 8.27.0  |
| `withImage`           | boolean | `false` | Images can help communicate a banner’s message.                                                                          | 8.27.0  |
| `mobileStacked`       | boolean | `false` | On mobile view, banners with long text should have their action(s) be positioned below the text instead of alongside it. | 8.27.0  |
| `primaryButtonText`   | boolean | `'OK'`  | The primary action text.                                                                                                 |         |
| `secondaryButtonText` | boolean | `''`    | The secondary action text.                                                                                               |         |

### Slots

| Name      | Props | Description                                             |
| --------- | ----- | ------------------------------------------------------- |
| `default` |       | The default slot holds the message text for the banner. |
| `image`   |       | The icon slot holds the icon or image for the banner.   |
| `actions` |       | The custom action buttons.                              |

### Events

| Name     | Type                       | Description                      |
| -------- | -------------------------- | -------------------------------- |
| `change` | `function(open: boolean)`  | Emits when the banner is hidden. |
| `closed` | `function(reason: string)` | Emits when the banner is closed. |

> NOTE: If you are not using `v-model`, you should listen for the banner using `@change` and update the `open` prop.

- Automatic

  ```html
  <ui-banner v-model="open"></ui-banner>
  ```

- Manual

  ```html
  <ui-banner
    :open="open"
    @change="$balmUI.onChange('open', $event)"
  ></ui-banner>
  ```
