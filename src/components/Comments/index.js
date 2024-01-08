import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const onchangeName = event => setName(event.target.value)
  const [commentText, setCommentText] = useState('')
  const onChangeCommentText = event => setCommentText(event.target.value)

  const [commentsList, setCommentsList] = useState([])
  const onAddComment = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onchangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
