import Menu,{
    MenuActive
} from '..'
import { createElemByHtml } from '../../domUtil' 
import Editor from '../../editor/index'

const ColorList = [
    { color: "#000000" },
    { color: "#ffffff" },
    { color: "#f9963b" },
    { color: "#1c487f" },
    { color: "#4d80bf" },
    { color: "#c24f4a" },
] 

class FontColor extends Menu implements MenuActive {
    public _dropListShow: boolean;
    private droplistContainer: HTMLElement;
    private titleIcon: HTMLElement;

    constructor(editor: Editor){

        const elem = createElemByHtml(`
            <div class="mini-menu-item" data-title="标题">
            </div>
        `)[0];
        super(elem, editor)
        
        this.titleIcon =  createElemByHtml(`
            <i class="mini-e-icon-pencil2"></i>
        `)[0];
        elem.appendChild( this.titleIcon);

        this.droplistContainer = createElemByHtml('<div class="mini-e-droplist" style="margin-top:40px;width:100px;display:none"></div>')[0];
        const title = createElemByHtml(`<p class="mini-e-dp-title">文字颜色</p>`)[0];
        const ul = createElemByHtml('<ul class="mini-e-block"></ul>')[0];

        this.droplistContainer.appendChild(title);
        this.droplistContainer.appendChild(ul);

        ColorList.forEach(colorItem =>{
            const itemDom = createElemByHtml(`
                <li class="mini-e-item">
                    <i style="color:${colorItem.color}" class="mini-e-icon-pencil2"></i>
                </li>
            `)[0];
            itemDom.addEventListener('click',(event:Event)=>{
                event.stopPropagation();
                this.editorInstance.selectionApi.restoreSelection();
                document.execCommand('foreColor', false, colorItem.color);
                this.droplistContainer.style.display = 'none';
                this.titleIcon.style.color = colorItem.color;
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

export default FontColor
