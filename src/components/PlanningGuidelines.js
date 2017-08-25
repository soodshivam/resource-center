// eslint-disable-next-line
/* global scrollToItem */
import _ from 'lodash'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { sliceHeaders } from './getTopCoord'
import {
  planningGuideData,
  servicesData
} from '../data/planningGuideServicesData'
import PlanningGuideNav from '../components/planningGuideNav'

class PlanningGuidelines extends PureComponent {
  componentDidMount () {
    this.props.setHeaders(sliceHeaders(this.refs))
  }

  scrollToItem = header => {
    this.refs[header].scrollIntoView()
  }

  render () {
    return (
      <span>
        <PlanningGuideNav
          scrollToItem={this.scrollToItem}
          activeSection={this.props.activeSection}
        />
        <div className='container'>
          <div className='row flow-text'>
            <h2 style={{ marginBottom: 0 }}>
              Please follow these guidelines before final approval.
            </h2>
            <div className='col s12'>
              {_.map(planningGuideData, ({ id, title, description }, key) => {
                return (
                  <span key={key}>
                    <h3 ref={title} id={id}>
                      {title}
                    </h3>
                    {description.split('\n').map((paragraph, key) => {
                      return (
                        <p key={key}>
                          {paragraph}
                        </p>
                      )
                    })}
                  </span>
                )
              })}
              <p>
                See <Link to='glossary'>Common MarCom Terms</Link> for more
                information.
              </p>
              <h3 ref='Services' id='services'>
                Services
              </h3>
              <p>
                MarCom provides many services to help you complete your
                marketing and communication projects.
              </p>
              {_.map(servicesData, ({ title, description }, key) => {
                return (
                  <dl key={key}>
                    <dt>
                      {title}
                    </dt>
                    <dd>
                      {description}
                    </dd>
                  </dl>
                )
              })}
            </div>
          </div>
        </div>
      </span>
    )
  }
}

export default PlanningGuidelines