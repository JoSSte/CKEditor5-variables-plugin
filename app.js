import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Variables from './ckeditor5-variables-plugin/variables';

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [
            Autoformat,
            BlockQuote,
            Bold,
            Essentials,
            FontBackgroundColor,
            FontColor,
            FontFamily,
            FontSize,
            Heading,
            Indent,
            Italic,
            Link,
            List,
            Paragraph,
            PasteFromOffice,
            RemoveFormat,
            TextTransformation,
            Variables
        ],
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'fontFamily',
                'fontSize',
                'fontColor',
                'fontBackgroundColor',
                'removeFormat',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                'blockQuote',
                'undo',
                'redo',
                '|',
                'variables'
            ]
        },
        variablePlugin: { source: 'defaultvars.json' }
    }
    )
    .then(editor => {
        console.log('Editor was initialized', editor);
    })
    .catch(error => {
        console.error(error.stack);
    });