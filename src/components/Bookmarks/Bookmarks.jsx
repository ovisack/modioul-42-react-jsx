
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";








 
 const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-8">
           
           
           <h2 className="text-3xl text-center">Bookmarked:{bookmarks.length}</h2> 
       {
         bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
       }
       
       
        </div>
    );
 };

 Bookmarks.PropTypes={
bookmarks:PropTypes.array

 }
 
 export default Bookmarks;