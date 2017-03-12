import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import Gandalf from 'gandalf-validator';
import styles from './styles.css';
import { browserHistory } from 'react-router';

class PostForm extends Gandalf {
  constructor({ selectControlItems }) {
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
      },
      /* category: {
        component: SelectField,
        // validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Select a category',
          floatingLabelText: 'Category',
          style: {
            width: '100%',
          },
        },
        selectFieldValue: null,
      },*/
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
      },
    };

    super(fields, selectControlItems);

    // this.formatDate = this.formatDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange = (
    (e, index, categoryId) => {
      e.preventDefault();
      this.setState({ categoryId });
    }
  );

  formatDate = () => {
  // formatDate() {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const post = this.getCleanFormData();

    if (!post) return;

    // create combined post object
    const categoryId = this.state.categoryId;
    const userId = this.props.userId;
    const postDate = this.formatDate();
    const fullPost = { ...post, categoryId, userId, postDate };

    // submit to redux
    this.props.onSubmitClick({ post: fullPost });
    browserHistory.push('/');
  }

  render() {
    const { categoryId } = this.state;
    const fields = this.state.fields;
    const { title } = this.props;

    return (
      <div className={styles['new-post']}>
        <Card
          style={{
            width: '480px',
          }}
        >
          <Paper>
            <Toolbar>
              <ToolbarTitle text={title} />
            </Toolbar>
            <CardText>
              <form>
                { fields.title.element }
                { fields.description.element }

                <SelectField
                  style={{
                    width: '100%',
                  }}
                  value={categoryId}
                  onChange={this.handleSelectChange}
                  floatingLabelText="Select a category"
                >
                  {this.props.selectControlItems}
                </SelectField>

                { /* fields.category.element */ }

                { fields.link.element }
                { fields.tag.element }

                <RaisedButton
                  backgroundColor="rgb(183, 28, 28)"
                  labelColor="white"
                  label="Submit"
                  onClick={this.handleSubmit}
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

PostForm.propTypes = {
  selectControlItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitClick: PropTypes.func.isRequired,
};

export default PostForm;

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
