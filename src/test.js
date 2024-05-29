import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"My new Website", body: 'lorem ipsum...', author:'mario', id:1},
        {title:"My other Website party", body: 'lorem ipsum...', author:'Luigi', id:2},
        {title:"My monsters", body: 'lorem ipsum...', author:'badman', id:3},
    ]);
    const [name, setName] = useState('mario');

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('useeffect ran');
       
    }, [name]);
    return ( 
        <div className="home">
          <Bloglist blogs ={blogs} title="All Blogs" handleDelete={handleDelete}/>
          
          <button onClick={ ()=> setName('luigi')}>changeName</button>
           <p>{name}</p>
        </div>
     );
}
 
export default Home;

// const Bloglist = ({blogs, title, handleDelete}) => {
//     // const blogs = props.blogs;
//     // const title =props.title;
    
    
//     return ( 
//         <div>
//             <h2>{title}</h2>
//              {blogs.map((blog) => (
//             <div className="blog-preview" key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <p>written by {blog.author}</p>
//                 <button onClick={() =>{handleDelete(blog.id)}}>delete</button>
//             </div>
//             ) 
//         )} 
//         </div>
//     );
// }
 
// export default Bloglist;

//////fetching normally without custom hook///////

// import { useState, useEffect } from "react";
// import Bloglist from "./Bloglist";

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
   
//     useEffect(()=>{
//         fetch('http://localhost:8000/blogs')
//         .then(res => {
//             if(!res.ok){
//                 throw Error('could not fetch the data for that resource');
//             }
//             return res.json();
            
//         })
//         .then(data =>{
//             setBlogs(data);
//             setIsPending(false);
//             setError(null);
//         })
//         .catch(err => {
//             setIsPending(false);
//             setError(err.message);
//         })
       
//     }, []);
//     return ( 
//         <div className="home">
//         {error && <div>{error}</div>}
//           {isPending && <div>loading....</div>}
//           {blogs && <Bloglist blogs ={blogs} title="All Blogs" />}
          
          
//         </div>
//      );
// }
 
// export default Home;