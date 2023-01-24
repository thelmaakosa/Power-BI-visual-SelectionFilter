import powerbi from "powerbi-visuals-api";
import * as React from "react";

import { SelectionFilter, IProps } from "./components/SelectionFilter";
// import { StyledDiv } from "./components/StyledDiv"
import { ChartSettingsModel } from "./settings";


export interface State extends IProps  {

}

export const initialState: State = {
  multiple:null,
  options:null,
  settings:null,
  applyFilter:null,
  width:null,
  height:null,
};

export class ReactVisual extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  private static updateCallback: (data: any) => void;

  public static update(newState: State) {
    if (typeof ReactVisual.updateCallback === "function") {
      ReactVisual.updateCallback(newState);
    }
  }

  public state: State = initialState;

  public componentWillMount() {
    ReactVisual.updateCallback = (newState: State): void => {
      this.setState(newState);
    };
  }

  public componentWillUnmount() {
    ReactVisual.updateCallback = () => null;
  }

  render() {        
      return (
        <>
        {this.state.settings != null?
              // <StyledDivComponent>
                <SelectionFilter
                    settings={this.state.settings}
                    options = {this.state.options}
                    multiple = {this.state.settings.selectionSettings.multiSelect.value}
                    applyFilter = {this.state.applyFilter}
                    width = {this.state.width}
                    height = {this.state.height}
                />
            // </StyledDivComponent>
            :<div></div>
            }
        </>
      );
    } 
    // else {
      // return <div></div>;
    // }
  // }
}

export default ReactVisual;
