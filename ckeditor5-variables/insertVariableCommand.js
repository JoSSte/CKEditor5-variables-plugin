import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertVariableCommand extends Command {

    execute() {
        this.editor.model.change(writer => {
            this.editor.model.insertContent(createVariable(writer));
        });
    }

    refresh() {
        console.log('InsertVariableCommand#refresh() got called');
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'p');

        //this.isEnabled = allowedIn !== null;
        this.isEnabled = true;
    }
}

function createVariable(writer) {
    const variable = writer.createElement('variable');
    // There must be at least one paragraph for the description to be editable.
    // See https://github.com/ckeditor/ckeditor5/issues/1464.
    writer.appendElement('paragraph', variable);

    return variable;
}