import React, { Component } from 'react';
import {loadAds} from './actions'
import {connect} from 'react-redux'

class AdsList extends Component {
    componentDidMount() {
        this.props.loadAds()
    }

    render() {
        return this.props.ads.map(i => <div>{i.title}</div>)
    }
}

const mapStateToProps = (state) => {
    return {
        ads: state.ads
    }
}

export default connect(mapStateToProps, {loadAds})(AdsList)