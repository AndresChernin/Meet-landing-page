function UpperComponent2({logo,participants_left,participants_right})
{
    return(
    <article className={`upper-part`}>

     <img src={logo} alt="" className={`logo-settings`}/>
         <div className={`participants-part`}>
               <img src={participants_left} alt="" className={`participants-left`}/>
               <img src={participants_right} alt="" className={`participants-right`}/>
         
         </div>
         <div className={`chat-part`}>
              <h1 className={`chat-part-h-tag`}>Group Chat for Everyone</h1>
              <p className={`chat-part-p-tag`}>Meet makes it easy to connect with others 
                 face-to-face virtually and collaborate across any device.</p>
              <div className={`buttons-part`}>
                <button className={`download-button`}>
                    <p className={`download-button-text`}>Download 
                        <span className={`download-button-second-text`}>v1.3</span></p>
                </button>
                <button className={`what-button`}>
                    <p className={`what-button-text`}>What is it?</p>
                </button>
              </div>
         </div>


     </article>
       )
}