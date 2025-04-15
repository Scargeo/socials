import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik"; // Formik is a library that helps with forms in React
import * as Yup from "yup"; // Yup is a library that helps with form validation
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate is a hook that allows you to navigate to a different URL in the application.


function CreatePost() {

    const navigate = useNavigate(); 

    /* initialValues is an object that contains the initial values of the form fields */
    const initialValues = {
        title: "",
        postTest: "", 
        username: ""
    }
    /* rules for validation*/
    const validationSchema = Yup.object({
        title: Yup.string().required("You must input a title"),
        postText: Yup.string().required("You must input a post"),
        username: Yup.string().min(3).max(15).required()
    }); 

    /* onSubmit is a function that is called when the form is submitted */
    const onSubmit = (data) => {
      axios.post("http://localhost:3001/posts", data).then((response) => {
        navigate("/"); // navigate to the post page after creating the post
    });
    }; 

  return (
    <div classname="createPostPage">
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
            <lable>Title </lable> 
            <ErrorMessage name="title" component="span"
            />
            <Field 
                autocomplete="off"
                id="inputCreatePost"
                name="title"
                placeholder="(Eg. Title...)"
            />
            <lable>Post: </lable> 
            <ErrorMessage name="postText" component="span"/>
            <Field 
                autocomplete="off"
                id="inputCreatePost"
                name="postText"
                placeholder="(Eg. Post...)"
            /> 
            <lable>Username: </lable> 
            <ErrorMessage name="username" component="span"/>
            <Field 
                autocomplete="off"
                id="inputCreatePost"
                name="username"
                placeholder="(Eg. John123...)"
            />
            <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
