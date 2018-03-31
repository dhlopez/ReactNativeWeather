import React, { Component } from 'react';
import { AppRegistry, Button, Text, View, Image, StyleSheet } from 'react-native';

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
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,ca&units=metric&APPID=71c31da7413938a93700ab6547f02be4')
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
    {var icon = '03d';
    icon = this.state.weather[0].icon.toString()=='01n'? require('./img/01n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='02n'? require('./img/02n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='03n'? require('./img/03n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='04n'? require('./img/04n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='09n'? require('./img/09n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='10n'? require('./img/10n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='11n'? require('./img/11n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='13n'? require('./img/13n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='50n'? require('./img/50n.png') : icon;
    icon = this.state.weather[0].icon.toString()=='01d'? require('./img/01d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='02d'? require('./img/02d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='03d'? require('./img/03d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='04d'? require('./img/04d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='09d'? require('./img/09d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='10d'? require('./img/10d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='11d'? require('./img/11d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='13d'? require('./img/13d.png') : icon;
    icon = this.state.weather[0].icon.toString()=='50d'? require('./img/50d.png') : icon;}
    return(
      <View name="info" style={{flex: 2, backgroundColor: 'steelblue'}}>
        <View style={{flexDirection: 'row', flex:1}}>
          <View>
            <Text>
              {this.state.name}
            </Text>
            <Text>
              {new Date(this.state.dt*1000).toString().substring(0,15)}
            </Text>
            <Text>
              {'Current: ' + Math.round(this.state.main.temp)}
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
            {/*<Text>
              {'Icon: a' + this.state.weather[0].icon.toString()+'b'}
            </Text>*/}
            
            <Image 
              source={icon} 
            />
          </View>
          <View>
             {/*
            
            <Button 
              onPress={this.GetByCity}
              title= "By City"
              />
            
            <Text>
              {this.state.sys.type}
            </Text>
            <Text>
              {this.state.sys.id}
            </Text>
            <Text>
              {this.state.sys.message}
            </Text>*/}
            <Text>
              {this.state.sys.country}
            </Text>
            <Text>
              {'Sunrise: \n'+ new Date(this.state.sys.sunrise*1000).toString().substring(0,21)}
            </Text>
            <Text>
              {'Sunset: \n'+ new Date(this.state.sys.sunset*1000).toString().substring(0,21)}
            </Text>
            
            <Text>
              {'Pressure '+this.state.main.pressure}
            </Text>

            <Text>
              {'Wind Speed: '+this.state.wind.speed*3.6 + ' Km/Hour'}
            </Text>
            {/*<Text>
              {'Direction '+ this.state.wind.deg}
            </Text>*/}
            {/*<Text>
              {this.state.id}
            </Text>*/}
          </View>
        </View>
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
        weather:[{}],
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
    this.GetIconImage = this.GetIconImage.bind(this);
  }
  componentDidMount(){
  // For initial data
    this.GetDaysByCity();
    //this.ConvertToHumanDate();
  }
  GetIconImage(icondata)
  {
    var icon = '03d';
    icon = icondata=='01n'? require('./img/01n.png') : icon;
    icon = icondata=='02n'? require('./img/02n.png') : icon;
    icon = icondata=='03n'? require('./img/03n.png') : icon;
    icon = icondata=='04n'? require('./img/04n.png') : icon;
    icon = icondata=='09n'? require('./img/09n.png') : icon;
    icon = icondata=='10n'? require('./img/10n.png') : icon;
    icon = icondata=='11n'? require('./img/11n.png') : icon;
    icon = icondata=='13n'? require('./img/13n.png') : icon;
    icon = icondata=='50n'? require('./img/50n.png') : icon;
    icon = icondata=='01d'? require('./img/01d.png') : icon;
    icon = icondata=='02d'? require('./img/02d.png') : icon;
    icon = icondata=='03d'? require('./img/03d.png') : icon;
    icon = icondata=='04d'? require('./img/04d.png') : icon;
    icon = icondata=='09d'? require('./img/09d.png') : icon;
    icon = icondata=='10d'? require('./img/10d.png') : icon;
    icon = icondata=='11d'? require('./img/11d.png') : icon;
    icon = icondata=='13d'? require('./img/13d.png') : icon;
    icon = icondata=='50d'? require('./img/50d.png') : icon;
    return icon;
  }
  //London ID 6058560
  GetDaysByCity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,CA&units=metric&APPID=71c31da7413938a93700ab6547f02be4')
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
    viewsFiveDays = new Array();
    icons = new Array();
    textAndIcon = new Array();
    i=0;
    w=0;
    for (item in data)
    {
      //for(j=0; j<data[item].weather.length;j++){
      icon = this.GetIconImage(data[item].weather[0].icon)
      icons[w] = <Image source={icon}/>
      //}
      //day of the week in 3 digits, Mon-Sun
      b = new Date(data[item].dt*1000).toString().substring(0,3).split(" ")
      //different day
      if(a.indexOf(b)==-1)
      {
        if(a!="")
        {
          viewsFiveDays[i] = <View style={styles.roundBorderWhite}><Text style={styles.whiteMediumFont}>{a}{icons}</Text></View>
          icons = [];
        }
        i++;
        a="";
        a += new Date(data[item].dt*1000).toString().substring(0,3).split(" ") + " " +  
            new Date(data[item].dt*1000).toString().substring(16,21).split(" ") + " " + 
            Math.round(data[item].main.temp) 
        
      }
      //same day, do not add line break
      else
      {
        a += new Date(data[item].dt*1000).toString().substring(16,21).split(" ") + " " + Math.round(data[item].main.temp) + " ";
      }
      w++;
    }
    return (<View style={{flex: 3, backgroundColor: 'powderblue'}}>{viewsFiveDays}</View>);//<View style={styles.roundBorderWhite}><Text style={styles.whiteMediumFont}>{a}</Text></View>
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
              {a == "Mon"?Math.round(item.main.temp):""}
              {/*item.main.temp*/
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
      <View style={{flex: 10, backgroundColor: 'powderblue'}}>
        <City/* city="London" temp="2"*//>
        <FiveDaysByCity/* city="London"*//>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  logoStyle: {
    width: 200,
    height: 200,
    marginLeft: 10,
    marginRight: 5,
    alignSelf: 'center',
  },
  whiteMediumFont: {
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  roundBorderWhite:{
    borderRadius:10,
    borderColor: '#fff',
    borderWidth: 1,
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);