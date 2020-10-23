import useTextAlign from './align';
import useDirection from './direction';
import useIndent from './indent';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';
import useDivider from './divider';

function useDefaultFormats(Quill, { font, size, lineheight }) {
  useTextAlign(Quill);
  useDirection(Quill);
  useIndent(Quill);

  font && useFontFamliy(Quill, font);
  size && useFontSize(Quill, size);
  lineheight && useLineHeight(Quill, lineheight);

  useDivider(Quill);
}

export default useDefaultFormats;
