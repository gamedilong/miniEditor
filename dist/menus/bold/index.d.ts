import Menu, { MenuActive } from '..';
import Editor from '../../editor/index';
declare class Bold extends Menu implements MenuActive {
    constructor(editor: Editor);
    clickHandler(): void;
    changeActive(): void;
}
export default Bold;
