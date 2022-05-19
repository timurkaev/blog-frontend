import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';

export default {
  header: {
    class: Header,
    config: {
      placeholder: 'Заголовок',
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
};
