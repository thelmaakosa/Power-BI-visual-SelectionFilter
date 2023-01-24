import { FC } from "react";
import { ChartSettingsModel } from "../settings";
export interface IProps {
    settings: ChartSettingsModel;
    multiple?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    applyFilter: Function;
    width: number;
    height: number;
}
export declare const SelectionFilter: FC<IProps>;
