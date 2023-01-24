import { Divider, Input, Row, Select, Space, Switch } from "antd";
import * as React from "react";
import { FC, useRef, useState } from "react";
import { filterStyle } from "./tool";
import { SearchOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { ChartSettingsModel } from "../settings";
import { searchBarDiv } from "./StyledDiv";
import { genFontStyleObj, genBorderStyleObj } from "./styleUtils";
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
const options = [
  {
    value: "appleWatch",
    label: "Apple Watch",
  },
  {
    value: "fitbit",
    label: "Fitbit",
  },
  {
    value: "garmin",
    label: "Garmin",
  },
  {
    value: "myFitnessPal",
    label: "My Fitness Pal",
  },
];
export const SelectionFilter: FC<IProps> = ({
  settings,
  multiple,
  options,
  applyFilter,
  width,
  height,
}) => {
  const [opValue, setOpValue] = useState<string[]>([]);
  const [selOp, setSelOp] = useState([...options]);
  const [selectState, setSelectState] = useState("");
  const [show, setShow] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingHovered, setIsSearchingHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isKnobHovered, setIsKnobHovered] = useState(false);
  const callback = (val: string[]) => {
    applyFilter({ values: val, requireSingleSelection: multiple });
  };
  const selectedCountStyle = filterStyle(settings.selectedCountSettings);
  const toggleStyle = filterStyle(settings.toggleSettings);

  const valueChange = (ev: React.ChangeEvent<HTMLInputElement>|MouseEvent) => {
    console.log(ev.target)
    const val = (ev.target as any).value;
    let newVal = [val];
    if (multiple) {
      const checked = ev.target;
      if (checked) {
        newVal = [...opValue.filter((op) => op !== val), val];
      } else {
        newVal = [...opValue.filter((op) => op !== val)];
      }
    }
    setOpValue(newVal);
    callback(newVal);
  };
  const renderTitle = () => {
    switch (opValue.length) {
      case 0:
        return "None";
      case 1:
        return opValue.at(0);
      case options.length:
        return "All";
      default:
        return "Multiple";
    }
  };
  const switchClick = (type) => {
    let newVal: string[] = [];

    if (type=='none') {
      setOpValue([]);
    } else if(type=='all'){
      newVal = options.map((op) => op.value);
      setOpValue(newVal);
    }
      callback(newVal);
    };

  const renderSwitch = () => {
    return (
      <div
        style={{ display: "flex", alignItems: "center", ...genFontStyleObj(settings.toggleSettings.fontBold.value,
          settings.toggleSettings.fontColor.value.value,
          settings.toggleSettings.fontFamily.value,
          settings.toggleSettings.fontItalic.value,
          settings.toggleSettings.fontSize.value,
          settings.toggleSettings.fontUnderline.value) }}
        onClick={switchClick}
      >
        <span>None</span>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            margin: "0 5px",
            cursor: "pointer",
            alignItems: "center",
            position: "relative",
            ...toggleStyle,
            height: settings.toggleSettings.trackRadius.value,
            width: 45,
            background: "#d9d9d9",
          }}
          
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: opValue.length == 0 ? settings.toggleSettings.trackSelectedFillColor.value.value : "",
              border:`${opValue.length == 0 ?settings.toggleSettings.trackSelectedOutlineColor.value.value:settings.toggleSettings.trackUnselectedFillColor.value.value} ${settings.toggleSettings.trackOutlineThickness.value}px solid`
            }}
            onClick={()=>switchClick('none')}
          ></div>
          <div
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: opValue.length == options.length ? settings.toggleSettings.trackSelectedFillColor.value.value : "",
              border:`${opValue.length == options.length ?settings.toggleSettings.trackSelectedOutlineColor.value.value:settings.toggleSettings.trackUnselectedFillColor.value.value} ${settings.toggleSettings.trackOutlineThickness.value}px solid`
            }}
            onClick={()=>switchClick('all')}
          ></div>
          <div
            onMouseEnter={() => setIsKnobHovered(true)}
            onMouseLeave={() => setIsKnobHovered(false)}
            onClick={(e)=>console.log(e)}
            style={{
              borderRadius: 999,
              height: "100%",
              background: isKnobHovered?settings.toggleSettings.knobActiveFillColor.value.value:settings.toggleSettings.knobInactiveFillColor.value.value,
              border:`${isKnobHovered?settings.toggleSettings.knobActiveOutlineColor.value.value:settings.toggleSettings.knobInactiveOutlineColor.value.value} 1px solid`,
              width: 15,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          ></div>
        </div>
        <span>All</span>
      </div>
    );
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          onMouseEnter={() => setIsDropdownHovered(true)}
          onMouseLeave={() => setIsDropdownHovered(false)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            // padding: '0 10px',
            alignItems: "center",
            width: width,
            height: 30,
            backgroundColor: settings.dropdownSettings.fillColor.value.value,
            ...genFontStyleObj(
              settings.dropdownSettings.fontBold.value,
              settings.dropdownSettings.fontColor.value.value,
              settings.dropdownSettings.fontFamily.value,
              settings.dropdownSettings.fontItalic.value,
              settings.dropdownSettings.fontSize.value,
              settings.dropdownSettings.fontUnderline.value
            ),
            ...genBorderStyleObj(
              settings.dropdownSettings.outlineTop.value,
              settings.dropdownSettings.outlineRight.value,
              settings.dropdownSettings.outlineBottom.value,
              settings.dropdownSettings.outlineLeft.value,
              settings.dropdownSettings.outlineRadiusTopLeft.value,
              settings.dropdownSettings.outlineRadiusTopRight.value,
              settings.dropdownSettings.outlineRadiusBottomRight.value,
              settings.dropdownSettings.outlineRadiusBottomLeft.value,
              isDropdownHovered
                ? settings.dropdownSettings.focusOutlineColor.value.value
                : settings.dropdownSettings.outlineColor.value.value,
              settings.dropdownSettings.outlineThickness.value
            ),
          }}
          onClick={() => setShow(!show)}
        >
          <span style={{ textIndent: "10px"}}>{renderTitle()}</span>
          {show ? <UpOutlined style={{color:settings.dropdownSettings.chevronColor.value.value}}/> : <DownOutlined />}
        </div>
        <div
          className="popup-layer"
          style={{
            width: width,
            height: height - 40,
            position: "absolute",
            top: 40,
            left: 0,
            display: show ? "block" : "none",
          }}
        >
{ settings.searchBarSettings.onOff.value?          <div
            onMouseEnter={() => setIsSearchingHovered(true)}
            onMouseLeave={() => setIsSearchingHovered(false)}
            style={{
              padding: "0 10px",
              display: "flex",
              alignItems: "center",
              height: 30,
              backgroundColor: settings.searchBarSettings.fillColor.value.value,
              ...genFontStyleObj(
                settings.searchBarSettings.fontBold.value,
                settings.searchBarSettings.fontColor.value.value,
                settings.searchBarSettings.fontFamily.value,
                settings.searchBarSettings.fontItalic.value,
                settings.searchBarSettings.fontSize.value,
                settings.searchBarSettings.fontUnderline.value
              ),
              ...genBorderStyleObj(
                settings.searchBarSettings.outlineTop.value,
                settings.searchBarSettings.outlineRight.value,
                settings.searchBarSettings.outlineBottom.value,
                settings.searchBarSettings.outlineLeft.value,
                settings.searchBarSettings.outlineRadiusTopLeft.value,
                settings.searchBarSettings.outlineRadiusTopRight.value,
                settings.searchBarSettings.outlineRadiusBottomRight.value,
                settings.searchBarSettings.outlineRadiusBottomLeft.value,
                isSearchingHovered
                  ? settings.searchBarSettings.focusOutlineColor.value.value
                  : settings.searchBarSettings.outlineColor.value.value,
                settings.searchBarSettings.outlineThickness.value
              ),
            }}
          >
            <SearchOutlined
              style={{
                color: settings.searchBarSettings.searchIconColor.value.value,
              }}
            />
            <input
              defaultValue={""}
              onChange={(ev) => {
                ev.stopPropagation();
                const val = ev.target.value.trim();

                if (val) {
                  const newOp = options.filter((op) => {
                    return (
                      op.value.toLowerCase().indexOf(val.toLowerCase()) > -1
                    );
                  });
                  setIsSearching(true);
                  setSelOp(newOp);
                } else {
                  setSelOp(options);
                  setIsSearching(false);
                }
              }}
              placeholder="Search"
              style={{
                flexGrow: 1,
                borderWidth: 0,
                outline: "none",
                marginLeft: 10,
              }}
            />
          </div>:null}
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              height: 40,
            }}
          >
            <span
              style={{...genFontStyleObj(
                settings.selectedCountSettings.fontBold.value,
                settings.selectedCountSettings.fontColor.value.value,
                settings.selectedCountSettings.fontFamily.value,
                settings.selectedCountSettings.fontItalic.value,
                settings.selectedCountSettings.fontSize.value,
                settings.selectedCountSettings.fontUnderline.value,
              ),opacity:settings.selectedCountSettings.onOff?1:0}}
            >
              Selected({opValue.length}/{options.length})
            </span>
            {settings.toggleSettings.onOff.value?renderSwitch():null}
          </Row>
          {/* option */}
          <form
            className="popup-layer-options"
            ref={form}
            style={{ padding: "0 10px", height: height - 40 - 30 - 40 }}
          >
            {selOp.map((op) => {
              return (
                <div
                  key={op.value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:
                      settings.listSettings.fillColor.value.value,
                    ...genBorderStyleObj(
                      settings.listSettings.outlineTop.value,
                      settings.listSettings.outlineRight.value,
                      settings.listSettings.outlineBottom.value,
                      settings.listSettings.outlineLeft.value,
                      settings.listSettings.outlineRadiusTopLeft.value,
                      settings.listSettings.outlineRadiusTopRight.value,
                      settings.listSettings.outlineRadiusBottomRight.value,
                      settings.listSettings.outlineRadiusBottomLeft.value,
                      settings.listSettings.outlineColor.value.value,
                      settings.listSettings.outlineThickness.value
                    ),
                    ...genFontStyleObj(
                      settings.listSettings.fontBold.value,
                      settings.listSettings.fontColor.value.value,
                      settings.listSettings.fontFamily.value,
                      settings.listSettings.fontItalic.value,
                      settings.listSettings.fontSize.value,
                      settings.listSettings.fontUnderline.value
                    ),
                  }}
                >
                  <label
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      padding:'2px 0px'
                    }}
                    // onClick={valueChange}
                  >
                    <input
                      checked={opValue.includes(op.value)}
                      value={op.value}
                      name="selected"
                      type={multiple ? "checkbox" : "radio"}
                      style={{ marginRight: 10,display:"none" }}
                      onChange={valueChange}
                    />
                    {
                      !multiple ?
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="6" fill={opValue.includes(op.value)?'none':settings.selectionSettings.unselectedFillColor.value.value} stroke={settings.selectionSettings.unselectedOutlineColor.value.value} strokeWidth={settings.selectionSettings.outlineThickness.value}/>
                        <circle cx="7" cy="7" r="4" fill={opValue.includes(op.value)?settings.selectionSettings.selectedOutlineColor.value.value:"none"}/>
                      </svg>
                      :<svg width="14" height="14" viewBox="0 0 14 14"  xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="14" rx={settings.selectionSettings.outlineRadius.value} fill={opValue.includes(op.value)?settings.selectionSettings.selectedFillColor.value.value:settings.selectionSettings.unselectedFillColor.value.value}
                          stroke={opValue.includes(op.value)?settings.selectionSettings.selectedOutlineColor.value.value:settings.selectionSettings.unselectedOutlineColor.value.value}
                          strokeWidth={settings.selectionSettings.outlineThickness.value}
                        />
                        <path d="M2 7.5L5.5 10L11.5 3" stroke={opValue.includes(op.value)?settings.selectionSettings.checkColor.value.value:"none"} stroke-width="2" fill="none"/>
                      </svg>
                      
                    }
                    <span
                      style={
                        {textIndent:'10px',...isSearching
                        ? {
                            color:
                              settings.searchBarSettings.searchedFontColor
                                .value.value,
                          }
                        : {}}
                        
                      }
                    >
                      {op.label}
                    </span>
                  </label>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
};

// export default SelectionFilter
