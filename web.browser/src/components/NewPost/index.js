import React, { PropTypes } from 'react';
import styles from './styles.css'
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';

const NewPost = ( { selectControlItems, selectFieldValue, handleSelectChange }) => {
    return(
        <Card className={ styles[ 'new-post' ] }>
          <Paper>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Share a new link" />
              </ToolbarGroup>
            </Toolbar>
            <CardText>
              <TextField
                hintText="Title"
                errorText="Please provide a title"
                floatingLabelText="Title"
                multiLine={ true }
                rows={ 1 }
              /><br />

              <TextField
                hintText="Description"
                errorText="Please provide a description"
                floatingLabelText="Description"
                multiLine={ true }
                rows={ 1 }
              /><br />
              
              <SelectField
                value={ selectFieldValue }
                onChange={ handleSelectChange }
                floatingLabelText="Select a lesson"
              >
              { selectControlItems }
              </SelectField><br />

              <TextField
                hintText="Link"
                errorText="You're sharing a link, provide a link"
                floatingLabelText="Link"
                multiLine={ true }
                rows={ 1 }
              /><br />

              <TextField
                hintText="Tags"
                floatingLabelText="Tags"
                multiLine={ true }
                rows={ 1 }
              /><br />
              <RaisedButton label="Submit"/>
            </CardText>
          </Paper>
        </Card>

    )
}

NewPost.propTypes = {
    selectControlItems: PropTypes.array.isRequired,
    //selectFieldValue: PropTypes.array.isRequired,
    handleSelectChange: PropTypes.func.isRequired
}
 
export default NewPost;