import React from 'react';
// import Comment from './Comment';

const Comment = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting the form');
    console.log(this.refs);
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log({ postId, author, comment })
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset()
  },
  render() {
    return (
      <div className="comment">
        {this.props.postComments.map((comment, i) => {
          console.log(comment)
          return (
            <div className='comment' key={i}>
              <strong>{comment.user}</strong>
              {comment.text}
              <button className='remove-comment' onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
            </div>
          )
        })}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
});

export default Comment;