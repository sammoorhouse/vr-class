import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import PropTypes from 'prop-types';

class Student extends React.Component{
    render(){
        return(
            <Text
                style={{
                  color: '#777879',
                  fontSize: 0.2,
                  fontWeight: '400',
                  layoutOrigin: [0.5, 0.5],
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  transform: [
                    {rotateY : this.props.rotateY},
                    {rotateX : this.props.rotateX},
                    {translate: [0, 0, this.props.distance]}
                  ],
                }}>
                {this.props.name}
            </Text>
        )
    }
}

AppRegistry.registerComponent('Student', () => Student);

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('class.jpg')}/>
        <Student name="Samuel" rotateX="-20.0deg" rotateY="-30.0deg" distance="-2" />
        <Student name="James" rotateX="4.0deg" rotateY="40.0deg" distance="-3" />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
