import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.css';

const NewPost = ({ selectFieldValue, handleSelectChange, selectControlItems }) => (
  <div className={styles['new-post']}>
    <Card
      style={{
        width: '480px',
      }}
    >
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Share a new link" />
        </Toolbar>
        <CardText>
          <form>
            <TextField
              style={{
                width: '100%',
              }}
              hintText="Title"
              errorText="Please provide a title"
              floatingLabelText="Title"
              rows={1}
            /><br />

            <TextField
              style={{
                width: '100%',
              }}
              hintText="Description"
              errorText="Please provide a description"
              floatingLabelText="Description"
              rows={1}
            /><br />

            <SelectField
              style={{
                width: '100%',
              }}
              value={selectFieldValue}
              onChange={handleSelectChange}
              floatingLabelText="Select a lesson"
            >
              {selectControlItems}
            </SelectField><br />

            <TextField
              style={{
                width: '100%',
              }}
              hintText="Link"
              errorText="You're sharing a link, provide a link"
              floatingLabelText="Link"
              rows={1}
            /><br />

            <TextField
              style={{
                width: '100%',
              }}
              hintText="Tags"
              floatingLabelText="Tags"
              rows={1}
            /><br />
            <RaisedButton label="Submit" />
          </form>
        </CardText>
      </Paper>
    </Card>
  </div>
);

NewPost.propTypes = {
  selectControlItems: PropTypes.array.isRequired,
  // selectFieldValue: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default NewPost;
