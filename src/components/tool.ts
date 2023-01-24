const string2cssProperty = (key: string) => {
  switch (key) {
    case 'fontItalic':
      return 'fontStyle';
    case 'fillColor':
      return 'background';
    case 'fontBold':
      return 'fontWeight';
    case 'fontColor':
      return 'color';
    case 'position':
      return 'textAlign';
    case 'trackRadius':
      return 'borderRadius';
    default:
      return key
  }
}
export const filterStyle = (columnStyle: Record<string, any>) => {
  const style: Record<string, any> = {}

  const keys = ['wordWrap', 'trackRadius', 'position', 'fillColor', 'fontFamily', 'fontSize', 'fontColor', 'fontBold', 'fontItalic'];
  for (const key in columnStyle) {
    if (Object.prototype.hasOwnProperty.call(columnStyle, key)) {
      const [styleName] = key.split('_');
      if (keys.includes(styleName)) {
        const element = columnStyle[key];
        let val: any;
        const valueType = typeof element.value
        if (valueType == "object") {
          val = element.value?.value;
        } else {
          val = element.value
        }
        if (styleName === "fontBold") {
          val = val ? "bold" : 'normal'
        } else if (styleName === "fontItalic") {
          val = val ? "italic" : 'normal'
        } else if (styleName === "position") {
          val = val.toLowerCase()
        } else if (styleName === "wordWrap") {
          val = val ? "break-word" : 'normal'
        }
        style[`${string2cssProperty(styleName)}`] = val;
      }
    }
  }
  return style
}