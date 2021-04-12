import Editor from '../editor/index'

export interface MenuActive {
    changeActive(): void
}


class Menu {
    public key: string | undefined
    public domEle: HTMLElement
    public editorInstance: Editor
    private _active: boolean

    constructor(domEle : HTMLElement, editorInstance: Editor){
        this._active = false;
        this.editorInstance = editorInstance;
        this.domEle = domEle;
        // 绑定点击事件
        domEle.addEventListener('click',(event:Event)=>{
            event.stopPropagation()
            this.clickHandler(event)
        },false)
    }

    protected active(): void {
        this._active = true
        this.domEle.classList.add('m-menu-active')
    }

    protected unActive(): void {
        this._active = false
        this.domEle.classList.remove('m-menu-active')
    }

    protected clickHandler(e: Event): void {}

    public get isActive() {
        return this._active
    }
}

export default Menu