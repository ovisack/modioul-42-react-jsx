import PropTypes from 'prop-types';
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {

    const {title,cover,author,author_img,posted_time,reading_time} =blog;

    return (
        <div className='mb-20 space-y-4'>
            <img  className='w-full mb-8' src={cover} alt={`cover pic the title${title}`} />

            <div  className='flex justify-between mb-4'>
                <div className='flex'>
<img className='w-14' src={author_img} alt="" />

<div className='ml-6'>
    <h3 className='text-2xl'>{author}</h3>
    <p>{posted_time}</p>
</div>
                </div>
                <div>
                    <span>{reading_time}min red</span>

                    <button onClick={()=>handleAddToBookmark(blog)}
                     className='ml-2 text-2xl text-green-800 bg-green-100'>
                        <CiBookmarkCheck></CiBookmarkCheck></button>
                </div>
            </div>
           <h2 className="text-4xl">{title}</h2> 
           <p>

             {/* <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-cyan-600 bg-red-100 '>Mark As Read</button>
            {
             */}
            
             {/* { 
             hashtags.map(hash=><span><a href="">#{hash}</a></span>)
            }   */}
           </p>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
    // handleMarkAsRead:PropTypes.func

}

export default Blog;