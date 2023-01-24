import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var TriskeleSelectionFilterA1E9660581274C8B9771C1ADED6A1650: IVisualPlugin = {
    name: 'TriskeleSelectionFilterA1E9660581274C8B9771C1ADED6A1650',
    displayName: 'Triskele SelectionFilter',
    class: 'Visual',
    apiVersion: '5.2.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["TriskeleSelectionFilterA1E9660581274C8B9771C1ADED6A1650"] = TriskeleSelectionFilterA1E9660581274C8B9771C1ADED6A1650;
}
export default TriskeleSelectionFilterA1E9660581274C8B9771C1ADED6A1650;