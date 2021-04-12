export function createElemByHtml(html: string):HTMLElement[]{
    const div = document.createElement('div')
    div.innerHTML = html
    const elems = div.children
    return Array.prototype.slice.call(elems);
}

export default {
    createElemByHtml
}