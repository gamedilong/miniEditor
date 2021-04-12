import Menu,{
    MenuActive
} from '..'
import { createElemByHtml } from '../../domUtil' 
import Editor from '../../editor/index'

const HeadList = [
    { level: 1, name: 'h1', command: '<h1>' },
    { level: 2, name: 'h2', command: '<h2>' },
    { level: 3, name: 'h3', command: '<h3>' },
    { level: 4, name: 'h4', command: '<h4>' }
] 

class Head extends Menu implements MenuActive {
    public _dropListShow: boolean;
    private droplistContainer: HTMLElement;

    constructor(editor: Editor){
        const elem = createElemByHtml(`
            <div class="mini-menu-item" data-title="标题">
                <i class="mini-e-icon-header"></i>
            </div>
        `)[0];
        super(elem, editor)

        this.droplistContainer = createElemByHtml('<div class="mini-e-droplist" style="margin-top:40px;width:100px;display:none"></div>')[0];
        const title = createElemByHtml(`<p class="mini-e-dp-title">设置标题</p>`)[0];
        const ul = createElemByHtml('<ul class="mini-e-list"></ul>')[0];

        this.droplistContainer.appendChild(title);
        this.droplistContainer.appendChild(ul);

        HeadList.forEach(headListItem =>{
            const itemDom = createElemByHtml(`
                <li class="mini-e-item">
                    <h${headListItem.level}>
                        ${headListItem.name}
                    </h${headListItem.level}>
                </li>
            `)[0];
            itemDom.addEventListener('click',(event:Event)=>{
                event.stopPropagation();
                this.editorInstance.selectionApi.restoreSelection();
                document.execCommand('formatBlock', false, headListItem.command);
                this.droplistContainer.style.display = 'none';
            },false)
            ul.appendChild(itemDom);
        })


        elem.appendChild(this.droplistContainer);

        this._dropListShow = false;


    }
    public clickHandler(): void {
        this.droplistContainer.style.display = this._dropListShow ? 'none' : 'block';
        this._dropListShow = !this._dropListShow;
    }
    
    public changeActive(): void {
        const editor = this.editorInstance
    }
}

export default Head
