import Editor from './index'
class SelectionApi{
    public editor: Editor
    private currentRange:  Range | null | undefined

    constructor(editor: Editor){
        this.editor = editor;
    }

    public getRange():  Range | null | undefined {
        return this.currentRange;
    }

    public saveRange(){
        const selection = window.getSelection() as Selection
        if (selection.rangeCount === 0) {
            return
        }
        this.currentRange = selection.getRangeAt(0)
    }

    public restoreSelection():void{
        const selection = window.getSelection()
        const range = this.currentRange;
        if(selection && range){
            selection.removeAllRanges()
            selection.addRange(range)
        }
    }
}


export default SelectionApi