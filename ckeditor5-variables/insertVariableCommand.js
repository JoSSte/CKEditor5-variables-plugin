import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertVariableCommand extends Command {

    execute() {
        this.editor.model.change( writer => {
            this.editor.model.insertContent( createVariable( writer ) );
        } );
    }

    refresh() {
        console.log( 'InsertVariableCommand#refresh() got called' );
        this.isEnabled = true;
    }
}

function createVariable( writer ) {
    const variable = writer.createElement( 'variable' );
    writer.appendElement( 'paragraph', variable );

    return variable;
}