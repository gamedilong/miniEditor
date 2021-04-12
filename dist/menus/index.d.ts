import Editor from '../editor/index';
export interface MenuActive {
    changeActive(): void;
}
declare class Menu {
    key: string | undefined;
    domEle: HTMLElement;
    editorInstance: Editor;
    private _active;
    constructor(domEle: HTMLElement, editorInstance: Editor);
    protected active(): void;
    protected unActive(): void;
    protected clickHandler(e: Event): void;
    get isActive(): boolean;
}
export default Menu;
