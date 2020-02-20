import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Raniery Sales',
          avatar: 'https://avatars3.githubusercontent.com/u/54423337?s=460&v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Somebody',
              avatar:
                'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
            },
            content: 'Perhaps buddy.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Unknown male',
          avatar:
            'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png',
        },
        date: '09 Jun 2019',
        content: 'What is Lorem Ipsum?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Unknown female',
              avatar:
                'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png',
            },
            content:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Another male',
          avatar:
            'https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215__340.jpg',
        },
        date: '09 Jun 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Another female',
              avatar:
                'https://cdn.pixabay.com/photo/2014/04/03/10/53/girl-311628__340.png',
            },
            content: 'Okaaaay...',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
