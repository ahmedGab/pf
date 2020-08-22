import  React,{useState} from 'react';
import  "./card.css"
 const card = ({user}) => {

    return (
        <div>
    <div className="card">
      <div className="media media--16-9">
      
        <div className="primary-title">
          <div className="secondary-text">{user.name}</div>
          <div className="primary-text">Hundreds of New Planets Found</div>
        </div>
        <img src="https://media.pixeltuner.de/wp-content/uploads/2018/06/aurora-1197755_640.jpg" alt="" width="640" height="426"/> </div>
      <div className="optional-header">
        <div className="thumbnail thumbnail--40x40"><img src="https://randomuser.me/api/portraits/men/99.jpg" alt="" width="40" height="40"/></div>
        <div className="primary-title">
          <div className="title">Dan West</div>
        </div>
     
      </div>
      <div className="supporting-text"> Supporting text include text like an article summary or a restaurant description. Lorem ipsum dolor sit amet, vel ea quis suscipit. Modus scriptorem at sit, vix malorum appellantur eu an nec assum mazim pericula.</div>
  
      <div className="actions">
      
        <div className="action-buttons float-right">
          <button className="button" type="button" disabled="">Post</button>
        </div>
      </div>
    </div>
  </div>

        
    );
};
export default card