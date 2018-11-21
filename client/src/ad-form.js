import React, { Component } from 'react';
import {connect} from 'react-redux'
import {saveAd} from './actions'

class AdForm extends Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = (event) => {
        const newStuff = {}
        newStuff[event.target.name] = event.target.value
        this.setState(newStuff)
    }

    render() {
        return <div>
            <div><label>Title: <input name="title" onChange={this.handleChange} value={this.state.title} /></label></div>
            <div><label>Description: <input name="description" onChange={this.handleChange} value={this.state.description} /></label></div>
            <div><button onClick={() => this.props.saveAd(this.state)}>Save!</button></div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {saveAd})(AdForm)