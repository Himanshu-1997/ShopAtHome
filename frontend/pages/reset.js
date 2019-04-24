import Reset from '../components/Reset';

const Sell = props => (
    <div> 
        <p>reset a password {props.query.resetToken}!!</p>
        <Reset resetToken={props.query.resetToken}/>
    </div>
)

export default Sell;