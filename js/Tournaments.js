import React from 'react'
import Rule from './Rule'
import preload from '../public/rules.json'

const Tournaments = React.createClass({
  getInitialState () {
    return {
      ruletype: 'general'
    }
  },
  handleRuleFilterClick (event) {
    this.setState({ ruletype: event.target.value })
  },
  render () {
    const rules = preload.rules
    return (
      <div className='container tournaments main-content'>
        <div className='rules-section'>
          <div className='container rules-filter-bar'>
            <div className='row'>
              <h2 className='col-md-4 section-title'>Rules</h2>
              <div className='col-md-8'>
                <div className='row mdbtn-toolbar'>
                  {Object.keys(rules).map((type) => {
                    let colSize = Math.floor(12 / Object.keys(rules).length)
                    return (
                      <button
                        value={type}
                        onClick={this.handleRuleFilterClick}
                        className={`btn btn-default rule-filter col-sm-${colSize}`}>
                        {type}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='row t-5'>
            {rules[this.state.ruletype].map((rule) => {
              return (
                <Rule rule={rule} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
})

export default Tournaments
