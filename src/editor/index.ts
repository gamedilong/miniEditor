import Menu from '../menus'
import SelectionApi from './selection';
import MenuTypeListData,{ MenuTypeList } from '../menus/menu-type-list'

const styleSettings = {
    border: '1px solid #c9d8db',
    toolbarBgColor: '#FFF',
    toolbarBottomBorder: '1px solid #EEE',
}
const defaultConfig = {
    toolbar : {
        width: '200px',
        height: '100px'
    },
    textContainer : {
        height: '300px'
    },
    textElem: {
        height: '300px'
    },
    menuKeys:[
        'head',
        'bold',
        'font-color'
    ]
}

class Editor {
    public editorSelector: HTMLElement 

    public toolbarElem : HTMLElement
    public textContainerElem : HTMLElement
    public textElem : HTMLElement

    public menus : Menu[]

    public selectionApi : SelectionApi
    constructor(textSelector: HTMLElement){
        this.editorSelector = textSelector;
        this.toolbarElem =  document.createElement('div');
        this.textContainerElem = document.createElement('div');
        this.textElem = document.createElement('div');

        this.menus = [];
        this.selectionApi = new SelectionApi(this);

        this.initFramework();

        this.initMenu();

        this.initText();
    }

    /**
     *  create myeditor instance
     */
    public create(): void {
        console.log('create myeditor')
    }

    private initFramework():void{
        // 创建工具栏，富文本比编辑区域 
        this.toolbarElem.id = "toolbarElem";
        this.toolbarElem.className = "mini-toolbar";
        this.toolbarElem.style.border = styleSettings.border;

        this.textContainerElem.id = "textContainerElem";
        this.textContainerElem.className = "mini-text-con";
        this.textContainerElem.style.border = styleSettings.border;
        this.textContainerElem.style.height = defaultConfig.textContainer.height;

        this.textElem.id = "textElem";
        this.textElem.className = "mini-text-ele";
        this.textElem.style.height = '100%';
        this.textElem.style.width = '100%';
        this.textElem.contentEditable = 'true';
        this.textContainerElem.appendChild(this.textElem);
        
        this.editorSelector.appendChild(this.toolbarElem);
        this.editorSelector.appendChild(this.textContainerElem);
    }

    private initMenu(): void{
        // 初始化菜单
       const menuTypeList: MenuTypeList = MenuTypeListData;
       
        defaultConfig.menuKeys.forEach((menuKey:string)=>{
            const MenuType =  menuTypeList[menuKey];
            const m = new MenuType(this)
            m.key = menuKey
            this.menus.push(m)
        })

        // 渲染到菜单栏
        this.menus.forEach((menu) => {
            this.toolbarElem.appendChild(menu.domEle);
        })

    }

    initText(): void{
        this.textElem.addEventListener('keyup',(event:Event)=>{
            this.selectionApi.saveRange();
        },false)
        this.textElem.addEventListener('mouseup',(event:Event)=>{
            this.selectionApi.saveRange();
        },false)
    }
}

export default Editor