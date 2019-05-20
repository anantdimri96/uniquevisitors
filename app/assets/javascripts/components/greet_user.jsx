// window.GreetUser = React.createClass({
 // import MyImage from '${/app/assets/images/}/imag_1.svg'

class GreetUser extends React.Component {

  render() {
    return (<div>
    			<h1 className="text-center"> Hi Human, You are visitor number {this.props.name}! .</h1>
  				<img className="temp" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/teaching_f1cm.svg" />

		    </div>  
    	)
	}
}