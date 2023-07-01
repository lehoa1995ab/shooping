// import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);
//   // const handleCreate=(data)=>{
//   //   fetch("http://localhost:3000/posts",{
//   //     method:"POST",
//   //     headers:{'Content-Type':'application/json'},
//   //     body:JSON.stringify({
//   //     title:'ht',
//   //     author:"h"
//   //   })
//   // })
//   // .then(response=>response.json())
//   // .then(data=>setPosts([...posts, data]));
//   axios.post("http://localhost:3000/posts",
//   {
//     "title":"ht",
//     "author":""
//   })
//   .then((response)=> console.log(response.data))
//   .catch(error=>console.log(error));

//   };

//   useEffect(() => {
//     // fetch('http://localhost:3000/posts')
//     //   .then(res => res.json())
//     //   .then(data => setPosts(data));
//     axios.get("http://localhost:3000/posts")
//     .then(response=>console.log("response",response.data))
//   }, []);


//   return (
//     <div>
//       <ul>
//         {posts?.map(item => <li key={item.id}>{`${item.title}-${item.author}`}</li>)}
//         <button onClick={handleCreate}>Create Post</button>
//       </ul>
//     </div>
//   );
//   }


// export default App;
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);

//   const handleCreate = () => {
//     axios.post("http://localhost:3000/posts", {
//       title: 'klfk;',
//       author: 'hfjkdhsl'
//     })
//       .then(response => setPosts([...posts, response.data]))
//       .catch(error => console.log(error));
//   };

//   useEffect(() => {
//     axios.get("http://localhost:3000/posts")
//       .then(response => setPosts(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//      <ul>
//         {posts.map(item => (
//           <li key={item.id}>
//             {`${item.title}-${item.author}`}
//             <img
//               className='product-img'
//               src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
//               alt='photo'
//             />
//           </li>
//         ))}
//       </ul>
//       {/* <button onClick={handleCreate}>Create Post</button> */}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCreate = () => {
    axios.post("http://localhost:3000/posts", {
      backdrop_path: "/pncDLT2nMomixD6r8EClobFlc2p.jpg",
      original_title: "伴我闖天涯",
    })
      .then(response => setPosts([...posts, response.data]))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
 

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {posts.map(item => (
              <li key={item.id}>
                <img
                  className='product-img'
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt='photo'
                />
                <h3>{item.original_title}</h3>
              </li>
            ))}
          </ul>
          <button onClick={handleCreate}>Create Post</button>
        </div>
      )}
    </div>
  );
}

export default App;

