import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true, text: 'Subscribe'}

  onSubscribe = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      return this.setState({isSubscribed: false, text: 'Subscribed'})
    }
    return this.setState({isSubscribed: true, text: 'Subscribe'})
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
