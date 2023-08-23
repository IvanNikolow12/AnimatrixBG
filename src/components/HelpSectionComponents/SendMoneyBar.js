import { Link } from 'react-router-dom';
import './SendMoneyBar.css'

function SendMoneyBar() {
    return <>
    <div className="send-money-bar">
        <Link to="/"><img className="revolut-card" src="https://1.bp.blogspot.com/-U0-uZBCfkGo/XkqydPOGvFI/AAAAAAAAANA/B9JOG9nic2Irc558aKiBw-1tgfrpzK_hgCLcBGAsYHQ/s1600/Revolut-Pre-Paid-Mastercard-Review.png" alt="revolut-card"/></Link>
        <Link to="/"><img className="paypal-card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBl4JXh5Ittff7M4DZ5XRwyGJFZgbZwL-hhg&usqp=CAU" alt="paypal-card"/></Link>
    </div>
    </>
}

export default SendMoneyBar;