import powerbi from "powerbi-visuals-api";
import DataViewCategoricalColumn = powerbi.DataViewCategoricalColumn;
import DataViewValueColumn = powerbi.DataViewValueColumn;
import FilterAction = powerbi.FilterAction;
import IVisualHost = powerbi.extensibility.visual.IVisualHost
import { IBasicFilter,  IAdvancedFilterCondition, BasicFilter } from 'powerbi-models';

interface IFilterColumnTarget{
    table:string,
    column:string
}

interface IFilterProps{
    values: string[];
    requireSingleSelection:boolean
}

export const applyFilter = (categories,visualHost)=>(filterProps:IFilterProps)=>{
    console.log(filterProps,"filterProps")
    const {values, requireSingleSelection} = filterProps

    let target: IFilterColumnTarget = {
        table: categories.source.queryName?.substr(0, categories.source.queryName.indexOf('.'))!, // table
        column: categories.source.displayName
    };

    // let filter: IBasicFilter = {
    //     $schema: "http://powerbi.com/product/schema#basic",
    //     ...(new BasicFilter(target,"In",values)),
    //     ...{requireSingleSelection:requireSingleSelection}
    // }

    const filter = (new BasicFilter(target,"In",values))
    console.log(filter)



    // invoke the filter
    if(values.length>0){
        visualHost.applyJsonFilter(filter, "general", "filter", FilterAction.merge);
    } else {
        visualHost.applyJsonFilter(filter, "general", "filter", FilterAction.remove);
    }
    

}