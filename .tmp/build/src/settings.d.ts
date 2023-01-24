import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
export declare class SearchBarSettings extends FormattingSettingsCard {
    onOff: formattingSettings.ToggleSwitch;
    fillColor: formattingSettings.ColorPicker;
    outlineColor: formattingSettings.ColorPicker;
    outlineThickness: formattingSettings.NumUpDown;
    outlineLeft: formattingSettings.ToggleSwitch;
    outlineRight: formattingSettings.ToggleSwitch;
    outlineTop: formattingSettings.ToggleSwitch;
    outlineBottom: formattingSettings.ToggleSwitch;
    outlineRadiusTopLeft: formattingSettings.NumUpDown;
    outlineRadiusTopRight: formattingSettings.NumUpDown;
    outlineRadiusBottomLeft: formattingSettings.NumUpDown;
    outlineRadiusBottomRight: formattingSettings.NumUpDown;
    focusOutlineColor: formattingSettings.ColorPicker;
    fontFamily: formattingSettings.FontPicker;
    fontSize: formattingSettings.NumUpDown;
    fontColor: formattingSettings.ColorPicker;
    searchedFontColor: formattingSettings.ColorPicker;
    fontBold: formattingSettings.ToggleSwitch;
    fontItalic: formattingSettings.ToggleSwitch;
    fontUnderline: formattingSettings.ToggleSwitch;
    searchIconColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class SelectedCountSettings extends FormattingSettingsCard {
    onOff: formattingSettings.ToggleSwitch;
    fontFamily: formattingSettings.FontPicker;
    fontSize: formattingSettings.NumUpDown;
    fontColor: formattingSettings.ColorPicker;
    fontBold: formattingSettings.ToggleSwitch;
    fontItalic: formattingSettings.ToggleSwitch;
    fontUnderline: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class ListSettings extends FormattingSettingsCard {
    fillColor: formattingSettings.ColorPicker;
    outlineColor: formattingSettings.ColorPicker;
    outlineThickness: formattingSettings.NumUpDown;
    outlineLeft: formattingSettings.ToggleSwitch;
    outlineRight: formattingSettings.ToggleSwitch;
    outlineTop: formattingSettings.ToggleSwitch;
    outlineBottom: formattingSettings.ToggleSwitch;
    outlineRadiusTopLeft: formattingSettings.NumUpDown;
    outlineRadiusTopRight: formattingSettings.NumUpDown;
    outlineRadiusBottomLeft: formattingSettings.NumUpDown;
    outlineRadiusBottomRight: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.FontPicker;
    fontSize: formattingSettings.NumUpDown;
    fontColor: formattingSettings.ColorPicker;
    searchedFontColor: formattingSettings.ColorPicker;
    fontBold: formattingSettings.ToggleSwitch;
    fontItalic: formattingSettings.ToggleSwitch;
    fontUnderline: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class DropdownSettings extends FormattingSettingsCard {
    onOff: formattingSettings.ToggleSwitch;
    fillColor: formattingSettings.ColorPicker;
    outlineColor: formattingSettings.ColorPicker;
    outlineThickness: formattingSettings.NumUpDown;
    outlineLeft: formattingSettings.ToggleSwitch;
    outlineRight: formattingSettings.ToggleSwitch;
    outlineTop: formattingSettings.ToggleSwitch;
    outlineBottom: formattingSettings.ToggleSwitch;
    outlineRadiusTopLeft: formattingSettings.NumUpDown;
    outlineRadiusTopRight: formattingSettings.NumUpDown;
    outlineRadiusBottomLeft: formattingSettings.NumUpDown;
    outlineRadiusBottomRight: formattingSettings.NumUpDown;
    focusOutlineColor: formattingSettings.ColorPicker;
    fontFamily: formattingSettings.FontPicker;
    fontSize: formattingSettings.NumUpDown;
    fontColor: formattingSettings.ColorPicker;
    fontBold: formattingSettings.ToggleSwitch;
    fontItalic: formattingSettings.ToggleSwitch;
    fontUnderline: formattingSettings.ToggleSwitch;
    chevronColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class SelectionSettings extends FormattingSettingsCard {
    multiSelect: formattingSettings.ToggleSwitch;
    selectedFillColor: formattingSettings.ColorPicker;
    selectedOutlineColor: formattingSettings.ColorPicker;
    unselectedFillColor: formattingSettings.ColorPicker;
    unselectedOutlineColor: formattingSettings.ColorPicker;
    outlineThickness: formattingSettings.NumUpDown;
    outlineRadius: formattingSettings.NumUpDown;
    checkColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class ToggleSettings extends FormattingSettingsCard {
    onOff: formattingSettings.ToggleSwitch;
    trackRadius: formattingSettings.NumUpDown;
    trackUnselectedFillColor: formattingSettings.ColorPicker;
    trackUnselectedOutlineColor: formattingSettings.ColorPicker;
    trackSelectedFillColor: formattingSettings.ColorPicker;
    trackSelectedOutlineColor: formattingSettings.ColorPicker;
    trackOutlineThickness: formattingSettings.NumUpDown;
    knobActiveFillColor: formattingSettings.ColorPicker;
    knobActiveOutlineColor: formattingSettings.ColorPicker;
    knobInactiveFillColor: formattingSettings.ColorPicker;
    knobInactiveOutlineColor: formattingSettings.ColorPicker;
    fontFamily: formattingSettings.FontPicker;
    fontSize: formattingSettings.NumUpDown;
    fontColor: formattingSettings.ColorPicker;
    fontBold: formattingSettings.ToggleSwitch;
    fontItalic: formattingSettings.ToggleSwitch;
    fontUnderline: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class ChartSettingsModel extends FormattingSettingsModel {
    searchBarSettings: SearchBarSettings;
    selectedCountSettings: SelectedCountSettings;
    listSettings: ListSettings;
    dropdownSettings: DropdownSettings;
    selectionSettings: SelectionSettings;
    toggleSettings: ToggleSettings;
    cards: (SearchBarSettings | SelectedCountSettings | ListSettings | DropdownSettings | SelectionSettings | ToggleSettings)[];
}
