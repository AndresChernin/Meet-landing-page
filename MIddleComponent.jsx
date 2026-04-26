function MiddleComponent({img1,img2,img3,img4})
{
    return(
        <article className={`middle-part`}>
            <div className={`foto-part`}>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
            </div>
            <h1 className={`middle-part-h1`}>BUILT FOR MODERN USE</h1>
            <h2 className={`middle-part-h2`}>Smarter meetings, all in one place</h2>
            <p className={`middle-part-p-tag`}>Send messages, share files, show your screen, and record your meetings — all in one 
  workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
        </article>
    )
}