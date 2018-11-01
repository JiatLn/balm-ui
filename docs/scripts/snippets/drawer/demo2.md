```html
<ui-top-app-bar contentSelector=".demo-main">
  <template slot="nav-icon">
    <ui-toolbar-anchor type="menu"
      @click.native="() => { $router.back(); }">&#xE5C4;</ui-toolbar-anchor>
  </template>
  Permanent Drawer Below Toolbar
</ui-top-app-bar>

<main class="demo-main">
  <ui-permanent-drawer>
    <ui-drawer-header>
      <ui-drawer-title>{{ title }}</ui-drawer-title>
      <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list-nav>
        <template v-for="(item, index) in menu">
          <ui-divider v-if="item === '-'" :key="`divider-${index}`"></ui-divider>
          <template v-else>
            <ui-list-group-subheader v-if="item.subheader" :key="`subheader-${index}`">
              {{ item.subheader }}
            </ui-list-group-subheader>
            <ui-item-a v-for="(subItem, subIndex) in item.items"
              :key="`item-${index}-${subIndex}`"
              :firstIcon="subItem.icon">
              {{ subItem.name }}
            </ui-item-a>
          </template>
        </template>
      </ui-list-nav>
    </ui-drawer-content>
  </ui-permanent-drawer>

  <div :class="[$tt('body1'), 'demo-content']">
    <div :class="$tt('body2')">
      <h1 :class="$tt('headline4')">Permanent Drawer</h1>
      <p>It sits to the left of this content.</p>
    </div>
  </div>
</main>
```
