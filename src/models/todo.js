export class Todo{
    constructor(obj) {
        obj = obj != null ? obj : {}
        this.id = obj.id != null ? obj.id : ''
        this.text = obj.text != null ? obj.text : ''
        this.fecha = obj.fecha != null ? obj.fecha : ''
        this.categoriaId = obj.categoriaId != null ? obj.categoriaId : '';
        this.completado = false
    }
}