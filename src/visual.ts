/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
"use strict";

import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { dataRoleHelper } from "powerbi-visuals-utils-dataviewutils";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { ChartSettingsModel } from "./settings";
import { ReactVisual, initialState } from "./ReactVisual";
import { applyFilter } from "./functions";
import { getCapability } from "./utils"

export class Visual implements IVisual {
    private target: HTMLElement;
    private updateCount: number;
    private formattingSettings: ChartSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    private textNode: Text;
    private host: IVisualHost;
    private reactRoot: React.ComponentElement<any, any>;

    constructor(options: VisualConstructorOptions) {
        console.log('Visual constructor', options);
        this.target = options.element;
        const localizationManager = options.host.createLocalizationManager();
        this.formattingSettingsService = new FormattingSettingsService(
            localizationManager
          );
          console.log("Visual constructor", options);
          this.host = options.host;
          this.reactRoot = React.createElement(ReactVisual, initialState);
          ReactDOM.render(this.reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {
        this.formattingSettings =
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel (ChartSettingsModel, options.dataViews);
        console.log(this.formattingSettings)
        console.log('Visual update', options);

        console.log(this.formattingSettings)

        console.log(getCapability(this.formattingSettings.dropdownSettings))
        console.log(getCapability(this.formattingSettings.listSettings))
        console.log(getCapability(this.formattingSettings.searchBarSettings))
        console.log(getCapability(this.formattingSettings.selectedCountSettings))
        console.log(getCapability(this.formattingSettings.selectionSettings))
        console.log(getCapability(this.formattingSettings.toggleSettings))

        // const visualHost = this.host;
        if (
          dataRoleHelper.hasRoleInDataView(options.dataViews[0], "category")
        ) {
            const values = options.dataViews[0].categorical.categories[0].values.map(d=>({value:d as string,label: d as string}))
            ReactVisual.update({
                options:values,
                multiple:this.formattingSettings.selectionSettings.multiSelect.value,
                settings:this.formattingSettings,
                applyFilter:applyFilter(options.dataViews[0].categorical.categories[0], this.host),
                width:options.viewport.width-20,
                height:options.viewport.height
              });
        } else {
            ReactVisual.update(initialState);
        }
    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

}