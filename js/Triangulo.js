/**
 * Clase Triángulo.
 * @author: José Gaspar Sánchez García.
 */
class Triangulo extends Figura{
    base=0;
    altura=0;
    /**
     * Constructor del Triángulo.
     * @param {Punto2D} o 
     * @param {int} b: base.
     * @param {int} h: altura.
     */
    constructor(o,b,h)
    {
        super(o);
        this.base=b;
        this.altura=h;
        // COMPLETA EL CÓDIGO
    }
    /**
     * Calcula el área del Triángulo.
     * @returns float: area
     */
    calcularArea()
    {
        let area;
        area=(this.base*this.altura)/2;
        return area;
        // COMPLETA Y CORRIGE EL CÓDIGO
        
    }
    /**
     * Obtiene base del Triángulo.
     * @returns int: base.
     */
    getBase()
    {
        return this.base;
    }
    /**
     * Obtiene altura del Triángulo.
     * @returns int: altura.
     */
    getAltura()
    {
        return this.altura;
    }
    /**
     * Establece la base del Triángulo.
     * @param {int} b: base. 
     */
    setBase(b)
    {
        this.base=b;
    }
    /**
     * Establce altura del Triángulo.
     * @param {int} h: altura. 
     */
    setAltura(h)
    {
        this.altura=h;
    }
    /**
     * Información del triángulo.
     * @returns string
     */
    toString()
    {
        return `Origen: ${this.origen} Base: ${this.base} Altura: ${this.altura}`;
    }
    
    /**
     * Dibuja el Triángulo.
     * @param {Context} ct: contexto del Canvas. 
     */
    dibujar(ct)
    {
        ct.fillStyle=this.getColor();
        
        ct.strokeStyle=this.getColorBorde();
        ct.lineWidth=this.getAnchoBorde();

        let pto=this.getOrigen();
        // Nos situamos en el origen (esquina izda)
        ct.moveTo(pto.getX(),pto.getY());
        // Dibujamos linea hacia abajo
        ct.lineTo(pto.getX(),pto.getY()+this.altura);
        // Dibujamos linea hacia la derecha
        ct.lineTo(pto.getX()+this.base,pto.getY()+this.altura);
        ct.closePath();
        
        if(this.getBorde())
            ct.stroke();

        if(this.getRelleno())
            ct.fill();
    }
}