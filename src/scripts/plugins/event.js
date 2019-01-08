import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';
import '../polyfills/resize';

// Define constants
const DEFAULT_NAMESPACE = 'balmUI';

const noop = () => {};
const callback = fn => {
  let result;
  let type = getType(fn);

  if (type === 'function' || type === 'generatorfunction') {
    fn();
  } else {
    result = fn;
  }

  return result;
};

const EventMethods = {
  onChange(_property, value, fn = noop) {
    new Function('value', `this.${_property} = value;`).call(this, value);
    return callback(fn);
  },
  onOpen(_property, fn = noop) {
    new Function(`this.${_property} = true;`).call(this);
    return callback(fn);
  },
  onClose(_property, fn = noop) {
    new Function(`this.${_property} = false;`).call(this);
    return callback(fn);
  },
  onShow(_property, fn = noop) {
    new Function(`this.${_property} = true;`).call(this);
    return callback(fn);
  },
  onHide(_property, fn = noop) {
    new Function(`this.${_property} = false;`).call(this);
    return callback(fn);
  }
};

const BalmUI_EventPlugin = {
  install(Vue, customNamespace = DEFAULT_NAMESPACE) {
    if (customNamespace) {
      Object.defineProperty(Vue.prototype, `$${customNamespace}`, {
        get() {
          let balmUI = {};

          Object.keys(EventMethods).forEach(key => {
            balmUI[key] = EventMethods[key].bind(this);
          });

          return balmUI; // Return new object for every vm !important
        }
      });
    } else {
      console.error('[BalmUI] The namespace of the event plugin is required.');
    }
  }
};

autoInstall(BalmUI_EventPlugin);

export default BalmUI_EventPlugin;
