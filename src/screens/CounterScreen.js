import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state,action) =>{
  
  switch (action.type) {
    case 'increase':
      
      return state.counter + action.amount >10 
      ?state 
      :{...state,counter: state.counter + action.amount}
    case 'decrease':
      return  state.counter + action.amount<0
      ? state
      : {...state,counter: state.counter + action.amount}

    default:
      return state; 
  }
}


const CounterScreen = () => {
  const [state,dispatch] =useReducer(reducer, {counter:0})
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          // counter++;
          // counter = counter + 1;
          dispatch({type:'increase',
            amount:1
        })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type :'decrease',
            amount:-1
        })
        }}
      />

      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
