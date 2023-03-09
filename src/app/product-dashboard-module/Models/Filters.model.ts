import { IFilterSettings } from "./Interface/IFiltersSettings";

export class Filters implements IFilterSettings{
    private _productType: string[];
    private _cpmTotal: number[];

    constructor(productType: string[], cpmTotal:number[]){
        this._productType = productType;
        this._cpmTotal = cpmTotal;
    };
    
    public get productType() : string[] {
        return this._productType
    };
    
    public set productType(v : string[]) {
        this._productType = v;
    };
    
    
    public get cpmTotal() : number[] {
        return this._cpmTotal;
    };

    
    public set cpmTotal(v : number[]) {
        this._cpmTotal = v;
    }
    
    
    

}