import React, { Component } from 'react';
import { AppRegistry, Button, Text, View } from 'react-native';

class City extends Component{
  constructor(props)
  {
    super(props)    
    this.state={coord: ["",""], iteration:0, sys: ["","","","","",""], main:["","","","",""], weather:["","","",""], wind:["",""], clouds:[""], dt:[""], id:"", name:"",  cod:""};
    //bind your instance method to the method itself to update data.
    this.GetByCity = this.GetByCity.bind(this);
  }
  componentDidMount(){
  // For initial data
    this.GetByCity();
  }
  //London ID 6058560
  GetByCity() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=71c31da7413938a93700ab6547f02be4')
    .then((response) =>  {
      return response.json()
    })
    .then((data)=>{
      this.setState({
        coord: data.coord,
        sys: data.sys,
        weather: data.weather,
        main: data.main,
        wind: data.wind,
        clouds: data.clouds,
        dt: data.dt,
        id: data.id,
        name:data.name,
        cod:data.cod
      })
    })
    .catch((error)=> {
      console.error(error);
    });
    this.setState(prevState=>({
      iteration: prevState.iteration + 1
    }));
  }
  render(){
    return(
      <View name="info" style={{flex: 4, backgroundColor: 'steelblue'}}>
        <Text>
          {this.props.city}
        </Text>
        <Text>
          {this.props.temp}
        </Text>
        <Button 
          onPress={this.GetByCity}
          title= "By City"
          />
       <Text>
          {this.state.coord.lon}
        </Text>
        <Text>
          {this.state.coord.lat}
        </Text>
        <Text>
          {this.state.iteration}
        </Text>
        <Text>
          {this.state.sys.type}
        </Text>
        <Text>
          {this.state.sys.id}
        </Text>
        <Text>
          {this.state.sys.message}
        </Text>
        <Text>
          {this.state.sys.country}
        </Text>
        <Text>
          {this.state.sys.sunrise}
        </Text>
        <Text>
          {this.state.sys.sunset}
        </Text>

        <Text>
          {this.state.weather.id}
        </Text>
        <Text>
          {this.state.weather.main}
        </Text>
        <Text>
          {this.state.weather.description}
        </Text>
        <Text>
          {this.state.weather.icon}
        </Text>
        <Text>
          {this.state.main.temp}
        </Text>
        <Text>
          {this.state.main.humidity}
        </Text>
        <Text>
          {this.state.main.pressure}
        </Text>

        <Text>
          {this.state.main.temp_min}
        </Text>
        <Text>
          {this.state.main.temp_max}
        </Text>
        <Text>
          {this.state.wind.speed}
        </Text>
        <Text>
          {this.state.wind.deg}
        </Text>
        <Text>
          {this.state.dt}
        </Text>
        <Text>
          {this.state.id}
        </Text>
        <Text>
          {this.state.name}
        </Text>
        <Text>
          {this.state.cod}
        </Text>
      </View>
    );
  }
}
class FiveDaysByCity extends Component{
  constructor(props)
  {
    //var list1, list2, list3, list4, list5 = [{dt:"",main:["","","","","","","",""], weather:["","","",""], clouds:"", wind:["",""]}];
    super(props)    
    this.state={
      list1:[{dt:"",main:["","","","","","","",""], weather:["","","",""], clouds:"", wind:["",""]}], 
      list2:[{dt:"",main:["","","","","","","",""], weather:["","","",""], clouds:"", wind:["",""]}], 
      list3:[{dt:"",main:["","","","","","","",""], weather:["","","",""], clouds:"", wind:["",""]}], 
      list4:[{dt:"",main:["","","","","","","",""], weather:["","","",""], clouds:"", wind:["",""]}], 
      list5:[{dt:"",main:["","","","","","","",""], weather:["","","",""], clouds:"", wind:["",""]}]
    };
    //bind your instance method to the method itself to update data.
    this.GetDaysByCity = this.GetDaysByCity.bind(this);
  }
  componentDidMount(){
  // For initial data
    this.GetDaysByCity();
  }
  //London ID 6058560
  GetDaysByCity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=71c31da7413938a93700ab6547f02be4')
    .then((response) =>  {
      return response.json()
    })
    .then((data)=>{
      this.setState({
        list1: data.list[0],
        list2: data.list[1],
        list3: data.list[2],
        list4: data.list[3],
        list5: data.list[4]
        /*main: data.list[0].main,
        weather: data.list[0].weather,
        main: data.main,
        wind: data.wind,
        clouds: data.clouds,
        dt: data.dt,
        id: data.id,
        name:data.name,
        cod:data.cod*/
      })
    })
    .catch((error)=> {
      console.error(error);
    });
    /*this.setState(prevState=>({
      iteration: prevState.iteration + 1
    }));*/
  }
  render(){
    return(
      <View name="info" style={{flex: 1, backgroundColor: 'skyblue'}}>
        <Text>
          {this.state.list1.dt} {this.state.list2.dt} {this.state.list3.dt} {this.state.list4.dt} {this.state.list5.dt}
        </Text>
        <Text>
          
        </Text>
        <Text>
         
        </Text>
        <Text>
          
        </Text>
        <Text>
          
        </Text>        
      </View>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <City city="London" temp="2"/>
        <FiveDaysByCity city="London"/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);