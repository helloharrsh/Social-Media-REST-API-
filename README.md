# Social-Media-REST-API
This Social Media REST API is built with Node.js, Express, and MongoDB. It provides endpoints for user accounts, posts, comments, and likes, with authentication and authorization middleware to ensure security. Ideal for building or adding social media features to web or mobile applications.


# Table of Contents:

  -> Technologies Used

  -> Features

  -> API Endpoints

  -> How to Use

  -> Contributing

  -> License

#  Technologies Used:
  -> Node.js
  
  -> Express.js
  
  -> MongoDB
  
  -> JWT
  
  -> bcrypt
  
# Features:
  -> User authentication

  -> Create, read, update, and delete posts
  
  -> Create, read, and delete comments on posts
  
  -> Like and dislike posts

# API Endpoints:
  -> The following endpoints are available:

  `POST /auth/login`: Authenticate a user and retrieve a JSON Web Token (JWT).
  
  `POST /posts`: Create a new post.
  
  `GET /posts`: Retrieve a list of all posts.
  
  `GET /posts/`:postId: Retrieve a specific post by ID.
  
  `PUT /posts/`:postId: Update a specific post by ID.
  
  `DELETE /posts/`:postId: Delete a specific post by ID.
  
  `POST /posts/`:postId/comments: Create a new comment on a post.
  
  `GET /posts/`:postId/comments: Retrieve all comments on a post.
  
`DELETE /posts/`:postId/comments/:commentId: Delete a specific comment on a post.

`POST /posts/`:postId/likes: Like a post.

`DELETE /posts/`:postId/likes/:likeId: Unlike a post.

# How to Use:

To use the API, you will need to have Node.js and MongoDB installed on your machine.

  -> Clone the repository: `git clone https://github.com/your-username/social-media-rest-api.git`
  
  -> Install the dependencies: `npm install`
  
  -> Create a `.env` file in the root directory of the project and add the following environment variables:
    `PORT=3000`
    
    `MONGODB_URI=mongodb://localhost/social-media-rest-api`
    
    `JWT_SECRET=your-jwt-secret`
    
    
  -> Start the server: `npm start`
  
  -> Use a tool like Postman to send requests to the API endpoints.

# License:
  -> This project is licensed under the MIT License.
