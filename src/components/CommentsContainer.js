import React from 'react'

const commentsData=[
    {
        name:'Anjali Dixit',
        text:'lorem ipsum dolor sit amet ,ahakafkfj suut',
        replies:[

        ]
    },
    {
        name:'Anjali Dixit',
        text:'lorem ipsum dolor sit amet ,ahakafkfj suut',
        replies:[
           {
            name:'Anjali Dixit',
            text:'lorem ipsum dolor sit amet ,ahakafkfj suut',
            replies:[],
           },
           {
            name:'Anjali Dixit',
            text:'lorem ipsum dolor sit amet ,ahakafkfj suut',
            replies:[
                {
                        name:'Anjali Dixit',
                        text:'lorem ipsum dolor sit amet ,ahakafkfj suut',
                        replies:[],
                },
                {
                    name:'Anjali Dixit',
                    text:'lorem ipsum dolor sit amet ,ahakafkfj suut',
                    replies:[],
            },
            ],
           },   

        ]
    },  
]

const Comment =({data}) =>{
    const {name,text,replies}=data;

    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className="w-12 h-12"src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"alt="user"></img>
        <div className='px-3' >
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
    </div>   
}
const CommentList=({comments})=>{
    //descliamer dont use index as key
return comments.map((comment,index) => (
    <div key={index}>
<Comment  data={comment} /> 
<div className='pl-5 border border-l-black ml-5'>
<CommentList comments={comment.replies}/>

</div>
    </div>

)); 
}
const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'>comments:</h1>
       <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer