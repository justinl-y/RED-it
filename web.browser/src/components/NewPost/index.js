import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import Gandalf from 'gandalf-validator';
import styles from './styles.css';

// const NewPost = ({ selectFieldValue, handleSelectChange, selectControlItems }) => (
class NewPost extends Gandalf {
  constructor({ selectFieldValue, handleSelectChange, selectControlItems }) {
    const fields = {
      title: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Title',
          floatingLabelText: 'Title',
          style: {
            width: '100%',
          },
        },
        debounce: 300,
      },
      description: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Description',
          floatingLabelText: 'Description',
          style: {
            width: '100%',
          },
        },
        debounce: 300,
      },
      link: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Link',
          floatingLabelText: 'Link',
          style: {
            width: '100%',
          },
        },
        debounce: 300,
      },
      tag: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Tag',
          floatingLabelText: 'Tag',
          style: {
            width: '100%',
          },
        },
        debounce: 300,
      },
    };

    super(fields, selectFieldValue, handleSelectChange, selectControlItems);
  }

  handleSubmit() {
    const data = this.getCleanFormData();

    if (!data) return;
    console.log(data);

    // submit to redux
    console.log('Going to redux');
  }

  render() {
    const fields = this.state.fields;

    return (
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
                { fields.title.element }
                { fields.description.element }

                <SelectField
                  style={{
                    width: '100%',
                  }}
                  value={this.props.selectFieldValue}
                  onChange={this.props.handleSelectChange}
                  floatingLabelText="Select a lesson"
                >
                  {this.props.selectControlItems}
                </SelectField><br />

                { fields.link.element }
                { fields.tag.element }

                <RaisedButton
                  backgroundColor="rgb(183, 28, 28)"
                  labelColor="white"
                  label="Submit"
                  onClick={(e) => { e.preventDefault(); this.handleSubmit(); }}
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

NewPost.propTypes = {
  selectControlItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  // selectFieldValue: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default NewPost;

/*
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
*/
