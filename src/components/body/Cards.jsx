import Card1 from './Card1';
import Card2 from './Card2';
import './cards.css'

const Cards = () => {
    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <h1>Choose a plan that's just fit for you !</h1>
                <div className="d-btn_box">
                    <div id="btn">
                        <button className="active">Monthly</button>
                        <button>
                            Annually <sup style={{ color: "#97d295" }}>-10%</sup>
                        </button>
                    </div>
                </div>
            </div>
            <Card1/>
            <Card2/>
          
            <p id="sub">*some unique features are provided as add-ons with individual plans for each feature </p>
        </div>
    );
};

export default Cards;