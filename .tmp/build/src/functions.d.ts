interface IFilterProps {
    values: string[];
    requireSingleSelection: boolean;
}
export declare const applyFilter: (categories: any, visualHost: any) => (filterProps: IFilterProps) => void;
export {};
