import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { createDropdown, addListToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Model from '@ckeditor/ckeditor5-ui/src/model';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import variableIcon from './theme/icons/variable2.svg';

export default class VariablesUI extends Plugin {
    init() {
        console.log('VariablesUI#init() got called');
        const editor = this.editor;
        const t = editor.t;
        const Vars = 'variables';

        const command = editor.commands.get('insertVariable');

        // The button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add(Vars, locale => {
            const dropdownView = createDropdown(locale);
            dropdownView.buttonView.set({
                label: 'Insert Variable',
                icon: variableIcon,
                withText: false
            });

            const items = new Collection();
            items.add( {
                type: 'button',
                model: new Model({
                    description: 'Name of recipient',
                    withText: true,
                    label: 'Name',
                    variable: '[name]'
                })
            } );
            items.add( {
                type: 'button',
                model: new Model({
                    description: 'recipient email',
                    withText: true,
                    label: 'Email',
                    variable: '[email]'
                })
            } );

            addListToDropdown(dropdownView, items);

            dropdownView.on('execute', (eventInfo) => {
                const { variable, label } = eventInfo.source;
                    console.log('Selected Variable:', variable, ' label: ', label);
                    editor.execute( 'insertVariable', { value: eventInfo.source.commandParam } );
				editor.editing.view.focus();
            });

            return dropdownView;
        });
    }
}
