import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Card, CardSection, Input, Button, Picker} from './common'
import {employeeUpdate, employeeCreate} from '../actions'
import { connect } from 'tls';

class EmployeeCreate extends Component {

  onButtonPress(){
    const {name, phone, shift}=this.props
    this.props.employeeCreate({name, phone, shift:shift || 'Monday'})
  }


  render() {
    return (
      <View>
        <CardSection>
          <Card>
            <Input label="Name" placeholder="Jane" value={this.props.name}
              onChangeText={value=>this.props.employeeUpdate({prop:'name', value})}/>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
          <Input label="Phone" placeholder="Jane" value={this.props.phone} 
          onChangeText={value=>this.props.employeeUpdate({prop:'phone', value})}/>
          </Card>
        </CardSection>
        <CardSection>
          <Picker
          selectedValue={this.props.shift}
          onValueChange={value=>this.props.employeeUpdate({prop:'shift', value})}
          >
          <Picker.Item label="Monday" value="Monday"/>
          <Picker.Item label="Tuesday" value="Tuesday"/>
          <Picker.Item label="Wednesday" value="Wednesday"/>
          <Picker.Item label="Thursday" value="Thursday"/>
          <Picker.Item label="Friday" value="Friday"/>
          </Picker>
        </CardSection>
        <CardSection>
          <Card>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </Card>
        </CardSection>
      </View>
    )
  }
}

const mapStateToProps=(state)=>{
  const{name, phone, shift}=state.employeeForm

  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);