import React, { useEffect, useState ,ChangeEvent} from 'react';
import axios from 'axios';
import styled from 'styled-components';
//import React, {  } from 'react'; // Import ChangeEvent

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0a66c2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PostList = styled.div`
  width: 400px;
`;

const PostItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
`;

const PostTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PostBody = styled.p`
  color: #333;
`;

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_URL');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('API_ENDPOINT_URL', newPost);
      const createdPost = response.data; // Assuming the API returns the created post object
      setPosts((prevPosts) => [...prevPosts, createdPost]);
      setNewPost({ title: '', body: '' });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <Title>Welcome to My Blog</Title>

      <FormContainer>
        <FormTitle>Create a New Post</FormTitle>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <TextArea
          name="body"
          placeholder="Body"
          value={newPost.body}
          onChange={handleInputChange}
        />
        <Button onClick={handleCreatePost}>Create Post</Button>
      </FormContainer>

      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
};

export default Home;