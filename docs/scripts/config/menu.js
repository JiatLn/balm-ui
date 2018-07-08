const MATERIAL_COMPONENTS = [
  {
    name: 'Layout',
    children: [
      {
        icon: 'card',
        name: 'Layout grid',
        description: 'Grid and gutter support',
        url: 'grid'
      },
      {
        icon: 'tabs',
        name: 'Tabs',
        description: 'Tabs with support for icon and text labels'
      },
      {
        icon: 'toolbar',
        name: 'Toolbar',
        description: 'Header and footers'
      },
      {
        icon: 'toolbar',
        name: 'Top App Bar',
        description:
          'Container for application title, navigation icon, and action items',
        url: 'top-app-bar'
      }
    ]
  },
  '-',
  {
    name: 'Drawers',
    children: [
      {
        icon: 'side_navigation',
        name: 'Temporary',
        url: 'temporary-drawer'
      },
      {
        icon: 'side_navigation',
        name: 'Persistent',
        url: 'persistent-drawer'
      },
      {
        icon: 'side_navigation',
        name: 'Permanent I',
        description: 'Permanent drawer above toolbar',
        url: 'permanent-drawer-above-toolbar'
      },
      {
        icon: 'side_navigation',
        name: 'Permanent II',
        description: 'Permanent drawer below toolbar',
        url: 'permanent-drawer-below-toolbar'
      }
    ]
  },
  '-',
  {
    name: 'Buttons',
    children: [
      {
        icon: 'button',
        name: 'Button',
        description: 'Raised and flat buttons'
      },
      {
        icon: 'button',
        name: 'Floating action', // Floating action button
        description: 'The primary action in an application',
        url: 'fab'
      },
      {
        icon: 'component',
        name: 'Icon button',
        description: 'Icon buttons and toggles',
        url: 'icon-button'
      }
    ]
  },
  '-',
  {
    name: 'Data View',
    children: [
      {
        icon: 'card',
        name: 'Card',
        description: 'Various card layout styles'
      },
      {
        icon: 'component',
        name: 'Chips',
        description: 'Chips for actions, selection, and input '
      },
      {
        icon: 'card',
        name: 'Grid list',
        description: '2D grid layouts',
        url: 'grid-list'
      },
      {
        icon: 'card',
        name: 'Image list',
        description: 'Displays a collection of images in a repeated pattern',
        url: 'image-list'
      },
      {
        icon: 'list',
        name: 'List',
        description: 'Item layouts in lists'
      },
      {
        icon: 'progress',
        name: 'Linear Progress',
        description: 'Fills from 0% to 100%, represented by bars',
        url: 'linear-progress'
      }
    ]
  },
  '-',
  {
    icon: 'icons',
    name: 'Icons',
    description: 'Material Icons'
  },
  '-',
  {
    name: 'Inputs and Controls',
    children: [
      {
        icon: 'text_field',
        name: 'Text Field',
        description: 'Single and multiline text fields',
        url: 'textfield'
      },
      {
        icon: 'selection_control',
        name: 'Checkbox',
        description: 'Multi-selection controls'
      },
      {
        icon: 'radio_button',
        name: 'Radio', // Radio buttons
        description: 'Single selection controls'
      },
      {
        icon: 'menu',
        name: 'Select',
        description: 'Popover selection menus'
      },
      {
        icon: 'switch',
        name: 'Switch',
        description: 'On off switches'
      },
      {
        icon: 'slider',
        name: 'Slider',
        description: 'Range Controls'
      }
    ]
  },
  '-',
  {
    name: 'Modal',
    children: [
      {
        icon: 'dialog',
        name: 'Dialog',
        description: 'Secondary text'
      },
      {
        icon: 'toast',
        name: 'Snackbar',
        description: 'Transient messages'
      }
    ]
  },
  '-',
  {
    icon: 'menu',
    name: 'Menu',
    description: 'Pop over menus'
  },
  '-',
  {
    name: 'Others',
    children: [
      {
        icon: 'typography',
        name: 'Typography',
        description: 'Type hierarchy'
      },
      {
        icon: 'theme',
        name: 'Theme',
        description: 'Using primary and accent colors'
      },
      {
        icon: 'shadow',
        name: 'Elevation',
        description: 'Shadow for different elevations'
      },
      {
        icon: 'component',
        name: 'Shape',
        description: 'Mixins for angled corners on unelevated components'
      }
    ]
  }
];

const getComponentIcon = component => {
  let icon = '';
  if (component.icon) {
    switch (component.icon) {
      case 'icons':
        icon = 'icons_light.svg';
        break;
      case 'progress':
        icon = 'ic_progress_activity.svg';
        break;
      case 'slider':
        icon = 'slider.svg';
        break;
      default:
        icon = `ic_${component.icon}_24px.svg`;
        break;
    }
  }
  return icon;
};

let menu = [];
for (let component of MATERIAL_COMPONENTS) {
  if (component === '-') {
    menu.push('-');
  } else {
    menu.push({
      icon: getComponentIcon(component),
      name: component.name,
      description: component.description,
      url: component.icon
        ? component.url || component.name.toLowerCase()
        : false
    });
    if (component.children) {
      for (let subComponent of component.children) {
        menu.push({
          icon: getComponentIcon(subComponent),
          name: subComponent.name,
          description: subComponent.description,
          url: subComponent.url || subComponent.name.toLowerCase(),
          isSubmenu: true
        });
      }
    }
  }
}

export default menu;
