import React from 'react';
import PostField from './PostField/PostField';
import Post from './posts/Post';
import StoryReels from './storyReels/StoryReels';
import './Fields.css'

const Fields = () => {
    return ( 
        <div className='middleField'>
            <StoryReels/>
            <PostField/>
            <Post/>
        </div>
     );
}
 
export default Fields;