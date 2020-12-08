import { defineAsyncComponent } from 'vue';
const Button = defineAsyncComponent(() => import('@/views/components/button'));
const Fab = defineAsyncComponent(() => import('@/views/components/fab'));
const IconButton = defineAsyncComponent(() =>
  import('@/views/components/icon-button')
);
const SegmentedButton = defineAsyncComponent(() =>
  import('@/views/components/segmented-button')
);

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'general.button' };
    }
  },
  {
    path: 'button',
    name: 'general.button',
    component: Button
  },
  {
    path: 'fab',
    name: 'general.fab',
    component: Fab
  },
  {
    path: 'icon-button',
    name: 'general.icon-button',
    component: IconButton
  },
  {
    path: 'segmented-button',
    name: 'general.segmented-button',
    component: SegmentedButton
  }
];
