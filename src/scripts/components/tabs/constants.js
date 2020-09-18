// Define tab bar constants
const UI_TAB_BAR = {
  EVENT: {
    CHANGE: 'update:modelValue'
  }
};

// Define tab scroller constants
const UI_TAB_SCROLLER = {
  ALIGN: ['start', 'center', 'end'],
  EVENT: {
    CHANGE: 'update:scrollX' // TODO
  }
};

// Define tab indicator constants
const UI_TAB_INDICATOR = {
  UNDERLINE: 'underline',
  ICON: 'icon'
};

// Define tab constants
const UI_TAB = {
  TYPES: {
    text: 0,
    iconOnly: 1,
    textWithIcon: 2
  },
  cssClasses: {
    active: 'mdc-tab--active',
    icon: 'mdc-tab__icon'
  },
  idPrefix: 'mdc-tab-'
};

export { UI_TAB_BAR, UI_TAB_SCROLLER, UI_TAB_INDICATOR, UI_TAB };
