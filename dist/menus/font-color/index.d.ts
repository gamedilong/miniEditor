import Menu, { MenuActive } from '..';
import Editor from '../../editor/index';
declare class FontColor extends Menu implements MenuActive {
    _dropListShow: boolean;
    private droplistContainer;
    private titleIcon;
    constructor(editor: Editor);
    clickHandler(): void;
    changeActive(): void;
}
export default FontColor;
