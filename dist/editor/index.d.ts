import Menu from '../menus';
import SelectionApi from './selection';
declare class Editor {
    editorSelector: HTMLElement;
    toolbarElem: HTMLElement;
    textContainerElem: HTMLElement;
    textElem: HTMLElement;
    menus: Menu[];
    selectionApi: SelectionApi;
    constructor(textSelector: HTMLElement);
    /**
     *  create myeditor instance
     */
    create(): void;
    private initFramework;
    private initMenu;
    initText(): void;
}
export default Editor;
