import React, { PropTypes} from 'react';

const Week = ({ weekItems }) => {
  return (
    <div>
      <h2>{ weekItems.title }</h2>
      {
        weekItems.categories.map(( e ) => ( 
          <p key={ `${e}-${Date.now()}` } >{ e }</p> 
        ))
      }
    </div>
  );
}

Week.propTypes = {
  weekItems: PropTypes.object.isRequired,
};

export default Week;