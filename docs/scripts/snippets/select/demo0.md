Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-select>` props.
  UiSelect: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiSelect from 'balm-ui/components/select';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/select.css';
import 'balm-ui/components/menu.css';
import 'balm-ui/components/list.css';

// Optional. Overwrite `<ui-select>` props.
Vue.use(UiSelect, {
  // some props
});
```
