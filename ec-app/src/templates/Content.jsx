import React from "react";
import Test from "./Test";

class Content extends React.Component(){
  constructor(props){
    super(props);

    this.state = {
      modalVisible: false
    }

    onChange = () => {
      this.setState({
        modalVisible: true
      })
    }

  }
  render(){
    return(
      <div>
        <header>

        </header>


        <Test 
          errorConetet={"エラー内容"}
        >

        </Test>
      </div>

    )
  }
}

export default Content;