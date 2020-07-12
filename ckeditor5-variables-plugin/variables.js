import VariablesEditing from './variables-editing';
import VariablesUI from './variables-ui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class Variables extends Plugin {
    static get requires() {
        return [ VariablesEditing, VariablesUI ];
    }
}