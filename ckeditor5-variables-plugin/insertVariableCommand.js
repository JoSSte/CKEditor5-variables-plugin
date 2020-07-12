import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertVariableCommand extends Command {

    execute(event) {
        this.editor.model.change(writer => {
            console.log('commandEvent', event);
            //this.editor.model.insertContent(createVariable(writer, event.param, this.editor.model.document.selection.getFirstPosition()));
            writer.insertText( event.param, {}, this.editor.model.document.selection.getFirstPosition() );
        });
    }

    refresh() {
        //console.log('InsertVariableCommand#refresh() got called');
        
        //const model = this.editor.model;
        //const selection = model.document.selection;
        //const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'p');
        //this.isEnabled = allowedIn !== null;

        this.isEnabled = true;//TODO make sure that this is true only if the cursor position is set
    }
}