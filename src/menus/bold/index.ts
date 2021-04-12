import Menu,{
    MenuActive
} from '..'
import { createElemByHtml } from '../../domUtil' 
import Editor from '../../editor/index'

class Bold extends Menu implements MenuActive {
    constructor(editor: Editor){
        const elem = createElemByHtml(`
        <div class="mini-menu-item" data-title="加粗">
            <i class="mini-e-icon-bold"></i>
        </div>
        `);
        super(elem[0], editor)
    }
    public clickHandler(): void {
        this.editorInstance.selectionApi.restoreSelection();
        document.execCommand('bold', false);
    }
    public changeActive(): void {
        const editor = this.editorInstance
    }
}

export default Bold
