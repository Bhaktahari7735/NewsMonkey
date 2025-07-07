import React from 'react'

 const Newsitem = (props)=> {
  
   let  {title,description,imageUrl,NewsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
            <div className="card" >
              <div style={{display : 'flex',
                           justifyContent :'flex-end',
                           position:'absolute',
                           right:'0'
                          }}>
              <span className=' badge rounded-pill bg-danger'>{source}</span>
              </div>
                    <img src= {!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg/1200px-Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on { new Date (date).toUTCString()}</small></p>
                      <a rel='noreferrer' href={NewsUrl} target='_blank' className="btn btn-sm btn-success">Read More</a>
                    </div>
                  </div>
      </div>
      
    )
  
}

export default Newsitem
