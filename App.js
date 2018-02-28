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
          {this.state.main.temp}
        </Text>
        <Text>
          {this.state.main.temp_min}
        </Text>
        <Text>
          {this.state.main.temp_max}
        </Text>
         {/*<Text>
          Image?
        </Text>
       <Text>
          {this.props.city}
        </Text>
        <Text>
          {this.props.temp}
        </Text>
        <Button 
          onPress={this.GetByCity}
          title= "By City"
          />*/}
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
          {this.state.main.humidity}
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
        <Text>
          {this.state.dt}
        </Text>
        <Text>
          {this.state.id}
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
      /*list1:[{dt:"",main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], weather:[{main:"",description:"",icon:""}], clouds:"", wind:[{speed:""}]}], 
      list2:[{dt:"",main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], weather:[{main:"",description:"",icon:""}], clouds:"", wind:[{speed:""}]}], 
      list3:[{dt:"",main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], weather:[{main:"",description:"",icon:""}], clouds:"", wind:[{speed:""}]}], 
      list4:[{dt:"",main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], weather:[{main:"",description:"",icon:""}], clouds:"", wind:[{speed:""}]}], 
      list5:[{dt:"",main:[{temp:"",temp_min:"",temp_max:"",humidity:""}], weather:[{main:"",description:"",icon:""}], clouds:"", wind:[{speed:""}]}],
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
        /*list1: data.list[0],
        list2: data.list[1],
        list3: data.list[2],
        list4: data.list[3],
        list5: data.list[4],
        dt1: new Date(data.list[0].dt*1000).toString().substring(0,30),
        dt2: new Date(data.list[1].dt*1000).toString().substring(0,30),
        dt3: new Date(data.list[2].dt*1000).toString().substring(0,30),
        dt4: new Date(data.list[3].dt*1000).toString().substring(0,30),
        dt5: new Date(data.list[4].dt*1000).toString().substring(0,30)*/
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
        <View style={{flex: 1}}>
          <Text>
            {this.state.dt2}
            {this.state.list2.temp_min}
            {this.state.list2.temp_max}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text>
            {this.state.dt3}
            {this.state.list3.temp_min}
            {this.state.list3.temp_max}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text>
            {this.state.dt4}
            {this.state.list4.temp_min}
            {this.state.list4.temp_max}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text>
            {this.state.list5.temp_min}
            {this.state.list5.temp_max}
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