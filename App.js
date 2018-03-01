import React, { Component } from 'react';
import { AppRegistry, Button, Text, View, Image } from 'react-native';

class City extends Component{
  constructor(props)
  {
    super(props)    
    this.state={coord: ["",""], iteration:0, sys: ["","","","","",""], main:["","","","",""], weather:[{id:"",main:"",description:"",icon:""}], wind:["",""], clouds:[""], dt:[""], id:"", name:"",  cod:""};
    //bind your instance method to the method itself to update data.
    this.GetByCity = this.GetByCity.bind(this);
  }
  componentDidMount(){
  // For initial data
    this.GetByCity();
  }
  //London ID 6058560
  GetByCity() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,ca&APPID=71c31da7413938a93700ab6547f02be4')
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
          {this.state.name}
        </Text>
        <Text>
          {new Date(this.state.dt*1000).toString().substring(0,15)}
        </Text>
        <Text>
          {'Current: ' + Math.round(this.state.main.temp-273)}
        </Text>
        
        <Text>
          {'Humidity: ' + this.state.main.humidity}
        </Text>
        <Text>
          {'Weather: ' + this.state.weather[0].main}
        </Text>
        <Text>
          {'Description: ' + this.state.weather[0].description}
        </Text>
        <Text>
          {'Icon: ' + this.state.weather[0].icon.toString()}
        </Text>
        {/*var icon = this.state.weather[0].icon ? '04n' : require('./img/04n.png');*/}
        <Image source={require('./img/04n.png')} />
         {/*
        
        <Button 
          onPress={this.GetByCity}
          title= "By City"
          />
        */}
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
          {this.state.weather.description}
        </Text>
        <Text>
          {this.state.weather.icon}
        </Text>
        
        <Text>
          {this.state.main.pressure}
        </Text>

        <Text>
          {this.state.wind.speed}
        </Text>
        <Text>
          {this.state.wind.deg}
        </Text>
        {/*<Text>
          {this.state.id}
        </Text>*/}
      </View>
    );
  }
}
class FiveDaysByCity extends Component{
  constructor(props)
  {
    super(props)    
    this.state={
      /*list5:[{dt:"",main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], weather:[{main:"",description:"",icon:""}], clouds:"", wind:[{speed:""}]}],
      dt1:"",dt2:"",dt3:"",dt4:"",dt5:"", test:""*/
      list:[{
        dt:"", 
        main:[],
        weather:[],
        clouds: "",
        wind:[]

        /*{
          dt:"",
          main:[/*{temp:"",temp_min:"",temp_max:"",humidity:""}], 
          weather:[/*{main:"",description:"",icon:""}], 
          clouds:"", 
          wind:[{speed:""}]
        }*/
      }]
    };
    //bind your instance method to the method itself to update data.
    this.GetDaysByCity = this.GetDaysByCity.bind(this);
    this.resultsFormat = this.resultsFormat.bind(this);
  }
  componentDidMount(){
  // For initial data
    this.GetDaysByCity();
    //this.ConvertToHumanDate();
  }
  //London ID 6058560
  GetDaysByCity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,CA&APPID=71c31da7413938a93700ab6547f02be4')
    .then((response) =>  {
      return response.json()
    })
    .then((data)=>{
      this.setState({
        /*list1:[{
          dt:"",
          main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], 
          weather:[{main:"",description:"",icon:""}], 
          clouds:"", 
          wind:[{speed:""}]
        }]*/
        /*list1: data.list[0]
        dt1: new Date(data.list[0].dt*1000).toString().substring(0,30)*/
        list:data.list
      })
    })
    .catch((error)=> {
      console.error(error);
    });
  }
  resultsFormat(data)
  {
    a=""
    for (item in data)
    {
      {/*a += new Date(item.dt*1000).toString().substring(0,10).split(" ")} 
      {' '}
      {a == "Mon"?Math.round(item.main.temp-273):""*/}
      b = new Date(data[item].dt*1000).toString().substring(0,3).split(" ")
      if(a.indexOf(b)==-1)
      {
        a += "\n" + new Date(data[item].dt*1000).toString().substring(0,3).split(" ") + " " + new Date(data[item].dt*1000).toString().substring(16,21).split(" ") + " "
      }
      else
      {
        a += Math.round(data[item].main.temp-273) + " " + new Date(data[item].dt*1000).toString().substring(16,21).split(" ") + " "
      }
      
    }
    return <View><Text>{a}</Text></View>
  }
  render(){
    return (this.resultsFormat(this.state.list));
   /* contents = this.state.list.map((item) => {
      //We need to return the corresponding mapping for each item too.
      return (
          <View key={new Date(item.dt*1000).toString().substring(0,3).split(" ")}>
            <Text>
              {a = new Date(item.dt*1000).toString().substring(0,3).split(" ")} 
              {' '}
              {a == "Mon"?Math.round(item.main.temp-273):""}
              {/*item.main.temp-273*/
  /*          </Text>
          </View>
        );
     });
    return (
      <View>
        {contents}
      </View>
    );*/
  }
}
    /*
    return(
      <View name="info" style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row'}}>
        <View style={{flex: 1}}>

        </View>
        <View style={{flex: 1}}>
          <Text>
            {this.state.dt1} 
            {this.state.list1.main.temp_min}
            {this.state.test}
            {this.state.list1.temp_max}
          </Text>
        </View>
      </View>
    );*/


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