import React from "react";

class Test extends React.Component {

  render(){
    return(
      <div>
        <Diallog 
          message="error_message" 
          error_level = "level"
          onChange={this.onChange}
          >
            <p>{this.props.errorContent}</p>
        </Diallog>
      </div>
    )
  }
}
export default Test;