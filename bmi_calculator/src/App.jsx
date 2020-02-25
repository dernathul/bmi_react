import React, { Component } from "react";
import Form from "./components/MetricForm";
import ImperialForm from "./components/ImperialForm";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiMetricHelper";
import { calculateBmi } from "./helpers/bmiImperialHelper"


class App extends Component {
  state = {
    metric_weight: "", 
    metric_height: "",
    imperial_weight: "", 
    imperial_height: "",
    bmiValue: "",
    bmiMessage: ""
  };
  

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
      
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
     
      <div>
        <Form calculateMetricBmi
          metric_weight={this.state.metric_weight}
          metric_height={this.state.metric_height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        </div>
        <div>
        <Form CalculateImperialBmi
                imperial_weight={this.state.imperial_weight}
                imperial_height={this.state.imperial_height}
                onChangeHandler={this.onChangeHandler}
                onSubmitHandler={this.onSubmitHandler}
              />
      </div>
      <div>
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}         
          />
      </div> 
     );
  
}

export default App;
