import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
    const { id } = useParams(); // useParams is a hook that allows you to access the URL parameters in the component.
    const [postObject, setPostObject] = React.useState({}); // useState hook to store the post object
    const [comments, setComments] = React.useState([]); // useState hook to store the comments
    const [newComment, setNewComment] = React.useState(""); // useState hook to store the new comment

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
          setPostObject(response.data);
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
          setComments(response.data);
        });
    }, [id]); 

    // function to add a new comment
    const addComment = () => {
      axios.post("http://localhost:3001/comments", {
        commentBody: newComment, 
        postId: id}, {
          // added access token to the headers of the request
          headers: { accessToken: sessionStorage.getItem("accessToken") },
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error); // check if the response has an error
          } else {
          const commentToAdd = {commentBody: newComment};
          setComments([...comments, commentToAdd]);
          setNewComment(""); // clear the input field after adding the comment
          }
    });
  };
  return (
    
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
        <div className="title"> {postObject.title} </div>
        <div className="postText"> {postObject.postText} </div>
        <div className="footer"> {postObject.username} </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input 
            type="text" 
            placeholder="Comment..."  
            autoComplete="off"
            id="commentText"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value) //grab data to be used later
            }} />
          <button onClick={addComment}> Add Comment </button> 
          </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment"> {comment.commentBody} </div>
            );
          })}
        </div>
      </div>
    </div>);
}

export default Post
