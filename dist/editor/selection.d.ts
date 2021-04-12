import Editor from './index';
declare class SelectionApi {
    editor: Editor;
    private currentRange;
    constructor(editor: Editor);
    getRange(): Range | null | undefined;
    saveRange(): void;
    restoreSelection(): void;
}
export default SelectionApi;
