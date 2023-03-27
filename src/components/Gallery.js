import React from "react";

const Gallery = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <img
                        src="https://cdn.nba.com/teams/uploads/sites/1610612738/2023/03/Playoffs_2023_Tickets_Site_Mobile_Banner_740x420.jpg?imwidth=740&imheight=420"
                        className="card-img-top"
                        alt="Ticket"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            Single Game Tickets On-Sale Now
                        </h5>
                        <p className="card-text">
                            Cheer with us at the United Center all season long with matchups against the NBA's best teams and All-Stars.
                        </p>
                        <a href="https://www.nba.com/celtics/schedule?page=playoffs" target="_blank" rel="noopener noreferrer" className='secondary-button'>Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img
                        src="https://cdn.nba.com/teams/uploads/sites/1610612741/2022/11/Image-from-iOS-1.jpg"
                        className="card-img-top"
                        alt="shop"
                    />
                    <div className="card-body">
                        <h5 className="card-title">2022-23 City Edition Uniforms</h5>
                        <p className="card-text">
                        Learn more about the uniform and shop the collection.
                        </p>
                        <a href="https://www.nba.com/bulls/city-edition/2223" target="_blank" rel="noopener noreferrer" className='secondary-button'>Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img
                        src="https://cdn.nba.com/teams/uploads/sites/1610612749/2023/03/Partial-Plan.png"
                        className="card-img-top"
                        alt="ticket"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Build Your Ultimate Partial Ticket Package</h5>
                        <p className="card-text"> 
                        New this year, you can create your own stackable partial plan from eight unique five-game options. Each mini plan will feature two guaranteed opponents.
                        </p>
                        <a href="https://www.nba.com/bucks/tickets/partial" target="_blank" rel="noopener noreferrer" className='secondary-button'>Learn More</a>
                    </div>
                </div>
            </div>

          
        </div>

    );
};

export default Gallery;