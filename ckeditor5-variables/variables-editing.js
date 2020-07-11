import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

import InsertVariableCommand from './insertVariableCommand'; 

export default class VariablesEditing extends Plugin {
    init() {
        console.log( 'VariablesEditing#init() got called' );
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add( 'insertVariable', new InsertVariableCommand( this.editor ) );
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'variable', {
            // Behaves like a self-contained object (e.g. an image).
            isObject: true,

            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block'
        } );
    }

    _defineConverters() {
        const conversion = this.editor.conversion;
        conversion.for( 'upcast' ).elementToElement( {
            model: 'variable',
            view: {
                name: 'section',
                classes: 'variables'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'variable',
            view: {
                name: 'section',
                classes: 'variables'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'variable',
            view: ( modelElement, viewWriter ) => {
                const section = viewWriter.createContainerElement( 'section', { class: 'variables' } );

                return toWidget( section, viewWriter, { label: 'variable widget' } );
            }
        } );
    }
}