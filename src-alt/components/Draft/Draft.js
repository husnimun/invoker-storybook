import styles from './Draft.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.setDomEditorRef = ref => (this.domEditor = ref);
  }

  componentDidMount() {
    this.domEditor.focus();
    let { note } = this.props;
    if (note === null || !note) {
      this.setState({
        displayedNote: 'new',
        editorState: EditorState.createEmpty()
      });
    } else {
      this.setState({
        displayedNote: note.id,
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(note.content))
        )
      });
    }
  }

  onChange = editorState =>
    this.setState({ editorState }, () => {
      let { createNote, updateNote } = this.props;
      let contentState = this.state.editorState.getCurrentContent();
      if (this.state.displayedNote === 'new') {
        let note = { content: convertToRaw(contentState) };
        // console.log(note.content);
        note['content'] = JSON.stringify(note.content);
        if (createNote) {
          createNote(note.content);
        }
      } else {
        let note = { content: convertToRaw(contentState) };
        // console.log(note.content);
        note['content'] = JSON.stringify(note.content);
        if (updateNote) {
          updateNote(this.state.displayedNote, note.content);
        }
      }
    });

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.note == null && !!this.props.note) {
      this.props.loadNote();
      this.setState({
        displayedNote: this.props.note.id,
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(this.props.note.content))
        )
      });
    }
  }

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  render() {
    return (
      <div className={styles.root} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          ref={this.setDomEditorRef}
        />
      </div>
    );
  }
}

export default Draft;
