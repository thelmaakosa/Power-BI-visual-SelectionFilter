import powerbi from "powerbi-visuals-api";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
// import { BarChartDataPoint } from "./barChart";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import ValidatorType = powerbi.visuals.ValidatorType;

export class SearchBarSettings extends FormattingSettingsCard {
  onOff = new formattingSettings.ToggleSwitch({
    name: "onOff",
    displayName: "On/Off",
    topLevelToggle: true,
    value: true,
  });

  fillColor = new formattingSettings.ColorPicker({
    name: "fillColor",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  outlineColor = new formattingSettings.ColorPicker({
    name: "outlineColor",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness = new formattingSettings.NumUpDown({
    name: "outlineThickness",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft = new formattingSettings.ToggleSwitch({
    name: "outlineLeft",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight = new formattingSettings.ToggleSwitch({
    name: "outlineRight",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop = new formattingSettings.ToggleSwitch({
    name: "outlineTop",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom = new formattingSettings.ToggleSwitch({
    name: "outlineBottom",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft",
    displayName: "Outline Radius Top Left",
    value: 0,
  });

  outlineRadiusTopRight = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight",
    displayName: "Outline Radius Top Right",
    value: 0,
  });

  outlineRadiusBottomLeft = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft",
    displayName: "Outline Radius Bottom Left",
    value: 0,
  });

  outlineRadiusBottomRight = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight",
    displayName: "Outline Radius Bottom Right",
    value: 0,
  });

  focusOutlineColor = new formattingSettings.ColorPicker({
    name: "focusOutlineColor",
    displayName: "Focus outline color",
    value: { value: "#00458f" },
  });

  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Font Size",
    value: 10,
  });

  fontColor = new formattingSettings.ColorPicker({
    name: "fontColor",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  searchedFontColor = new formattingSettings.ColorPicker({
    name: "searchedFontColor",
    displayName: "Searched font color",
    value: { value: "#000000" },
  });

  fontBold = new formattingSettings.ToggleSwitch({
    name: "fontBold",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic = new formattingSettings.ToggleSwitch({
    name: "fontItalic",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline = new formattingSettings.ToggleSwitch({
    name: "fontUnderline",
    displayName: "Font Underline",
    value: false,
  });

  searchIconColor = new formattingSettings.ColorPicker({
    name: "searchIconColor",
    displayName: "Search icon color",
    value: { value: "#00458f" },
  });

  name: string = "searchBar";
  displayName: string = "Search Bar";
  slices: Array<FormattingSettingsSlice> = [
    this.onOff,
    this.fillColor,
    this.outlineColor,
    this.outlineThickness,
    this.outlineLeft,
    this.outlineRight,
    this.outlineTop,
    this.outlineBottom,
    this.outlineRadiusTopLeft,
    this.outlineRadiusTopRight,
    this.outlineRadiusBottomLeft,
    this.outlineRadiusBottomRight,
    this.focusOutlineColor,
    this.fontFamily,
    this.fontSize,
    this.fontColor,
    this.searchedFontColor,
    this.fontBold,
    this.fontItalic,
    this.fontUnderline,
    this.searchIconColor
  ];
}

export class SelectedCountSettings extends FormattingSettingsCard {

  onOff = new formattingSettings.ToggleSwitch({
    name: "onOff",
    displayName: "On/Off",
    topLevelToggle: true,
    value: true,
  });
  
  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Font Size",
    value: 10,
  });

  fontColor = new formattingSettings.ColorPicker({
    name: "fontColor",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold = new formattingSettings.ToggleSwitch({
    name: "fontBold",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic = new formattingSettings.ToggleSwitch({
    name: "fontItalic",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline = new formattingSettings.ToggleSwitch({
    name: "fontUnderline",
    displayName: "Font Underline",
    value: false,
  });

  name: string = "selectedCount";
  displayName: string = "Selected Count";
  slices: Array<FormattingSettingsSlice> = [
    this.onOff,
    this.fontFamily,
    this.fontSize,
    this.fontColor,
    this.fontBold,
    this.fontItalic,
    this.fontUnderline,
  ];
}

export class ListSettings extends FormattingSettingsCard {
  fillColor = new formattingSettings.ColorPicker({
    name: "fillColor",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  outlineColor = new formattingSettings.ColorPicker({
    name: "outlineColor",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness = new formattingSettings.NumUpDown({
    name: "outlineThickness",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft = new formattingSettings.ToggleSwitch({
    name: "outlineLeft",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight = new formattingSettings.ToggleSwitch({
    name: "outlineRight",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop = new formattingSettings.ToggleSwitch({
    name: "outlineTop",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom = new formattingSettings.ToggleSwitch({
    name: "outlineBottom",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft",
    displayName: "Outline Radius Top Left",
    value: 0,
  });

  outlineRadiusTopRight = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight",
    displayName: "Outline Radius Top Right",
    value: 0,
  });

  outlineRadiusBottomLeft = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft",
    displayName: "Outline Radius Bottom Left",
    value: 0,
  });

  outlineRadiusBottomRight = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight",
    displayName: "Outline Radius Bottom Right",
    value: 0,
  });

  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Font Size",
    value: 10,
  });

  fontColor = new formattingSettings.ColorPicker({
    name: "fontColor",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  searchedFontColor = new formattingSettings.ColorPicker({
    name: "searchedFontColor",
    displayName: "Searched font color",
    value: { value: "#000000" },
  });

  fontBold = new formattingSettings.ToggleSwitch({
    name: "fontBold",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic = new formattingSettings.ToggleSwitch({
    name: "fontItalic",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline = new formattingSettings.ToggleSwitch({
    name: "fontUnderline",
    displayName: "Font Underline",
    value: false,
  });

  name: string = "list";
  displayName: string = "List";
  slices: Array<FormattingSettingsSlice> = [
    this.fillColor,
    this.outlineColor,
    this.outlineThickness,
    this.outlineLeft,
    this.outlineRight,
    this.outlineTop,
    this.outlineBottom,
    this.outlineRadiusTopLeft,
    this.outlineRadiusTopRight,
    this.outlineRadiusBottomLeft,
    this.outlineRadiusBottomRight,
    this.fontFamily,
    this.fontSize,
    this.fontColor,
    this.searchedFontColor,
    this.fontBold,
    this.fontItalic,
    this.fontUnderline,
  ];
}

export class DropdownSettings extends FormattingSettingsCard {
  onOff = new formattingSettings.ToggleSwitch({
    name: "onOff",
    displayName: "On/Off",
    topLevelToggle: true,
    value: true,
  });

  fillColor = new formattingSettings.ColorPicker({
    name: "fillColor",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  outlineColor = new formattingSettings.ColorPicker({
    name: "outlineColor",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness = new formattingSettings.NumUpDown({
    name: "outlineThickness",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft = new formattingSettings.ToggleSwitch({
    name: "outlineLeft",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight = new formattingSettings.ToggleSwitch({
    name: "outlineRight",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop = new formattingSettings.ToggleSwitch({
    name: "outlineTop",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom = new formattingSettings.ToggleSwitch({
    name: "outlineBottom",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft",
    displayName: "Outline Radius Top Left",
    value: 0,
  });

  outlineRadiusTopRight = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight",
    displayName: "Outline Radius Top Right",
    value: 0,
  });

  outlineRadiusBottomLeft = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft",
    displayName: "Outline Radius Bottom Left",
    value: 0,
  });

  outlineRadiusBottomRight = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight",
    displayName: "Outline Radius Bottom Right",
    value: 0,
  });

  focusOutlineColor = new formattingSettings.ColorPicker({
    name: "focusOutlineColor",
    displayName: "Focus outline color",
    value: { value: "#00458f" },
  });

  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Font Size",
    value: 10,
  });

  fontColor = new formattingSettings.ColorPicker({
    name: "fontColor",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold = new formattingSettings.ToggleSwitch({
    name: "fontBold",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic = new formattingSettings.ToggleSwitch({
    name: "fontItalic",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline = new formattingSettings.ToggleSwitch({
    name: "fontUnderline",
    displayName: "Font Underline",
    value: false,
  });

  chevronColor = new formattingSettings.ColorPicker({
    name: "chevronColor",
    displayName: "Chevron color",
    value: { value: "#00458f" },
  });

  name: string = "dropdown";
  displayName: string = "Dropdown";
  slices: Array<FormattingSettingsSlice> = [
    this.onOff,
    this.fillColor,
    this.outlineColor,
    this.outlineThickness,
    this.outlineLeft,
    this.outlineRight,
    this.outlineTop,
    this.outlineBottom,
    this.outlineRadiusTopLeft,
    this.outlineRadiusTopRight,
    this.outlineRadiusBottomLeft,
    this.outlineRadiusBottomRight,
    this.focusOutlineColor,
    this.fontFamily,
    this.fontSize,
    this.fontColor,
    this.fontBold,
    this.fontItalic,
    this.fontUnderline,
    this.chevronColor
  ];
}

export class SelectionSettings extends FormattingSettingsCard {
  multiSelect = new formattingSettings.ToggleSwitch({
    name: "onOff",
    displayName: "Multi Select",
    value: false,
  });

  selectedFillColor = new formattingSettings.ColorPicker({
    name: "selectedFillColor",
    displayName: "Selected Fill Color",
    value: { value: "#fafafa" },
  });

  selectedOutlineColor = new formattingSettings.ColorPicker({
    name: "selectedOutlineColor",
    displayName: "Selected Outline Color",
    value: { value: "#3f464b" },
  });

  unselectedFillColor = new formattingSettings.ColorPicker({
    name: "unselectedFillColor",
    displayName: "Unselected Fill Color",
    value: { value: "#fafafa" },
  });

  unselectedOutlineColor = new formattingSettings.ColorPicker({
    name: "unselectedOutlineColor",
    displayName: "Unselected Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness = new formattingSettings.NumUpDown({
    name: "outlineThickness",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineRadius = new formattingSettings.NumUpDown({
    name: "outlineRadius",
    displayName: "Outline Radius",
    value: 2,
  });

  checkColor = new formattingSettings.ColorPicker({
    name: "checkColor",
    displayName: "Check color",
    value: { value: "#ffffff" },
  });

  name: string = "select";
  displayName: string = "Multiselect/Single Select";
  slices: Array<FormattingSettingsSlice> = [
    this.multiSelect,
    this.selectedFillColor,
    this.selectedOutlineColor,
    this.unselectedFillColor,
    this.unselectedOutlineColor,
    this.outlineThickness,
    this.outlineRadius,
    this.checkColor,
  ];
}

export class ToggleSettings extends FormattingSettingsCard {
  onOff = new formattingSettings.ToggleSwitch({
    name: "onOff",
    displayName: "On/Off",
    topLevelToggle: true,
    value: true,
  });

  trackRadius = new formattingSettings.NumUpDown({
    name:"trackRadius",
    displayName:"Track radius",
    value:15
  })

  trackUnselectedFillColor = new formattingSettings.ColorPicker({
    name: "trackUnselectedFillColor",
    displayName: "Track Unselected Fill Color",
    value: { value: "#d9dadb" },
  });

  trackUnselectedOutlineColor = new formattingSettings.ColorPicker({
    name: "trackUnselectedOutlineColor",
    displayName: "Track Unselected Outline Color",
    value: { value: "#ffffff" },
  });

  trackSelectedFillColor = new formattingSettings.ColorPicker({
    name: "trackSelectedFillColor",
    displayName: "Track Selected Fill Color",
    value: { value: "#00458f" },
  });

  trackSelectedOutlineColor = new formattingSettings.ColorPicker({
    name: "trackSelectedOutlineColor",
    displayName: "Track Selected Outline Color",
    value: { value: "#ffffff" },
  });

  trackOutlineThickness = new formattingSettings.NumUpDown({
    name: "trackOutlineThickness",
    displayName: "Track Outline Thickness",
    value: 1,
  });

  knobActiveFillColor = new formattingSettings.ColorPicker({
    name: "knobActiveFillColor",
    displayName: "Knob Active Fill Color",
    value: { value: "#00458f" },
  });

  knobActiveOutlineColor = new formattingSettings.ColorPicker({
    name: "knobActiveOutlineColor",
    displayName: "Knob Active Outline Color",
    value: { value: "#00458f" },
  });

  knobInactiveFillColor = new formattingSettings.ColorPicker({
    name: "knobInactiveFillColor",
    displayName: "Knob Inactive Fill Color",
    value: { value: "#8c9093" },
  });

  knobInactiveOutlineColor = new formattingSettings.ColorPicker({
    name: "knobInactiveOutlineColor",
    displayName: "Knob Inactive Outline Color",
    value: { value: "#8c9093" },
  });

  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Segoe UI",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Font Size",
    value: 8,
  });

  fontColor = new formattingSettings.ColorPicker({
    name: "fontColor",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold = new formattingSettings.ToggleSwitch({
    name: "fontBold",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic = new formattingSettings.ToggleSwitch({
    name: "fontItalic",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline = new formattingSettings.ToggleSwitch({
    name: "fontUnderline",
    displayName: "Font Underline",
    value: false,
  });

  name: string = "toggle";
  displayName: string = "Toggle";
  slices: Array<FormattingSettingsSlice> = [
    this.onOff,
    this.trackRadius,
    this.trackSelectedFillColor,
    this.trackSelectedOutlineColor,
    this.trackUnselectedFillColor,
    this.trackUnselectedOutlineColor,
    this.trackOutlineThickness,
    this.knobActiveFillColor,
    this.knobActiveOutlineColor,
    this.knobInactiveFillColor,
    this.knobInactiveOutlineColor,
    this.fontFamily,
    this.fontSize,
    this.fontColor,
    this.fontBold,
    this.fontItalic,
    this.fontUnderline,
  ];
}

export class ChartSettingsModel extends FormattingSettingsModel {
  // Create formatting settings model formatting cards
  searchBarSettings = new SearchBarSettings();
  selectedCountSettings = new SelectedCountSettings();
  listSettings = new ListSettings();
  dropdownSettings = new DropdownSettings();
  selectionSettings = new SelectionSettings();
  toggleSettings = new ToggleSettings();

  cards = [ this.searchBarSettings, this.selectedCountSettings, this.listSettings, this.dropdownSettings, this.selectionSettings, this.toggleSettings];
}