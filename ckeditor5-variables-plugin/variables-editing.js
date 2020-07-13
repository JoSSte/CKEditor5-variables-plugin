import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';

import InsertVariableCommand from './insertVariableCommand';

export default class VariablesEditing extends Plugin {
    init() {
        console.log('VariablesEditing#init() got called');
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('insertVariable', new InsertVariableCommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('variable', {
            // Cannot be split or left by the caret.
            isLimit: true,
            isBlock: false,
            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block'
        });
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement({
            model: 'variable',
            view: {
                name: 'section',
                classes: 'variables'
            }
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'variable',
            view: {
                name: 'section',
                classes: 'variables'
            }
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'variable',
            view: (modelElement, viewWriter) => {
                console.log('InsertVariableEditing#editingDowncast got called');
                const section = viewWriter.createContainerElement( 'div', { id: 'foo-bar', innerHTML: '123' } );
                console.log(section);
                return toWidget(section, viewWriter, { label: 'variable widget' });
            }
        });
    }
}