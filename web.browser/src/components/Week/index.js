import React, { PropTypes} from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const Week = ({ weekItems }) => {
  return (
    <div>
      <List>
        <Subheader>{ weekItems.title }</Subheader>
        <Divider />
        {
          weekItems.categories.map(( e ) => ( 
            <ListItem 
              key={ `${e}-${Date.now()}` }
              primaryText={ e } /> 
          ))
        }
      </List>
      <Divider />
    </div>
  );
}

Week.propTypes = {
  weekItems: PropTypes.object.isRequired,
};

export default Week;