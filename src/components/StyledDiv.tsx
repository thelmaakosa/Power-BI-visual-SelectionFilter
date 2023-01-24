import styled from "styled-components";
import { ChartSettingsModel } from "../settings";
import { genBorder, genFontStyle, genBackground } from "./styleUtils";

export const searchBarDiv = (settings: ChartSettingsModel) => styled.div`
    padding: 0px 10px;
    display: flex;
    align-items: center;
    height: 30px;
    background-color:${settings.searchBarSettings.fillColor.value.value}
    ${genFontStyle(
        settings.searchBarSettings.fontBold.value,
        settings.searchBarSettings.fontColor.value.value,
        settings.searchBarSettings.fontFamily.value,
        settings.searchBarSettings.fontItalic.value,
        settings.searchBarSettings.fontSize.value,
        settings.searchBarSettings.fontUnderline.value
    )}
    ${genBorder(
        settings.searchBarSettings.outlineTop.value,
        settings.searchBarSettings.outlineRight.value,
        settings.searchBarSettings.outlineBottom.value,
        settings.searchBarSettings.outlineLeft.value,
        settings.searchBarSettings.outlineRadiusTopLeft.value,
        settings.searchBarSettings.outlineRadiusTopRight.value,
        settings.searchBarSettings.outlineRadiusBottomRight.value,
        settings.searchBarSettings.outlineRadiusBottomLeft.value,
        settings.searchBarSettings.outlineColor.value.value,
        settings.searchBarSettings.outlineThickness.value
    )}
    &:hover{
        border-color:${settings.searchBarSettings.focusOutlineColor.value.value}
    }
    > span{
        color:${settings.searchBarSettings.searchIconColor.value.value}
    }
`;


// export const styledHandlerDiv = (settings:ChartSettingsModel)=>{
//     return  styled.div`    
//     & div {
//         ${genBackground(settings.sliderSettings.knobInactiveFillColor.value.value,settings.sliderSettings.knobInactiveFillOpacity.value)}
//         outline: ${settings.sliderSettings.knobInactiveOutlineColor.value.value} solid ${1}px;
//         margin-top:${-(settings.sliderSettings.knobSize.value/2 - settings.sliderSettings.trackHeight.value/2)}px;
//         &:active{
//             ${genBackground(settings.sliderSettings.knobActiveFillColor.value.value,settings.sliderSettings.knobActiveFillOpacity.value)}
//             outline: ${settings.sliderSettings.knobActiveOutlineColor.value.value} solid ${1}px;
//         }
//     }`
// }

// export const styledDropdown = (settings:ChartSettingsModel)=>{
//     return styled.div`
//         background-color: ${settings.dropdownSettings.fillColor.value.value};
//         ${genBorder(
//         settings.dropdownSettings.outlineTop.value,
//         settings.dropdownSettings.outlineRight.value,
//         settings.dropdownSettings.outlineBottom.value,
//         settings.dropdownSettings.outlineLeft.value,
//         settings.dropdownSettings.outlineRadiusTopLeft.value,
//         settings.dropdownSettings.outlineRadiusTopRight.value,
//         settings.dropdownSettings.outlineRadiusBottomRight.value,
//         settings.dropdownSettings.outlineRadiusBottomLeft.value,
//         settings.dropdownSettings.outlineColor.value.value,
//         settings.dropdownSettings.outlineThickness.value
//         )}
//         ${genFontStyle(
//         settings.dropdownSettings.fontBold.value,
//         settings.dropdownSettings.fontColor.value.value,
//         settings.dropdownSettings.fontFamily.value,
//         settings.dropdownSettings.fontItalic.value,
//         settings.dropdownSettings.fontSize.value,
//         settings.dropdownSettings.fontUnderline.value
//         )}
//         &:hover {
//             border-color: ${settings.dropdownSettings.focusOutlineColor.value.value};
//         }
//     `
// }
