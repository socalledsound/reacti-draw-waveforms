import React, { Component } from 'react'
import { connect } from 'react-redux'
import Canvas from './components/Canvas'

const canvasWidth = 500;
const canvasHeight = 500;

class App extends Component {
  state = {  }

  draw(){

  }


  render() { 
    return ( 

      <div>
        <Canvas draw={this.draw} width={canvasWidth} height={canvasHeight} />
      </div>

     );
  }
}
 

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);