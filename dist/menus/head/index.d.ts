import Menu, { MenuActive } from '..';
import Editor from '../../editor/index';
declare class Head extends Menu implements MenuActive {
    _dropListShow: boolean;
    private droplistContainer;
    constructor(editor: Editor);
    clickHandler(): void;
    changeActive(): void;
}
export default Head;
