import React from 'react'
import user from './user.png'

const commentsData = [
    {
        name : "veeru",
        text : "lorem ispu rn rserty sfkf skjlwp efdcec",
        replies : [
            {
                name : "veeru",
                text : "lorem ispu rn rserty sfkf skjlwp efdcec",
            },
            {
                name : "veeru",
                text : "lorem ispu rn rserty sfkf skjlwp efdcec",
            },
            {
                name : "veeru",
                text : "lorem ispu rn rserty sfkf skjlwp efdcec",
                replies : [
                    {
                        name : "veeru",
                        text : "lorem ispu rn rserty sfkf skjlwp efdcec",
                    },
                    {
                        name : "veeru",
                        text : "lorem ispu rn rserty sfkf skjlwp efdcec",
                    },
                ]
            },
           
            
        ]

}
]

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
<img
					className="h-8"
					alt="user-logo"
					src={user}
				/>
                <div className='px-3'>
                <p>{name}</p>
                <p>{text}</p>
                <CommentsList />
                </div>
                

    </div>
}

const CommentsList = ({comments}) => {
    return comments?.map((comment, index) => (
        <div>
 <Comment key = {index} data={comment} />
        <div className='pl-5 border border-l-black'>
            <CommentsList comments={comment.replies} />
            </div>
            </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='flex flex-col'>
       <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer