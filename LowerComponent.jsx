function LowerComponent({ footerImage }){
    return(
     <article className={`lower-part`}
     style={{
            backgroundImage: `
            linear-gradient(rgba(var(--lower-part-background-color), 0.8),
                            rgba(var(--lower-part-background-color), 0.8)),
            url(${footerImage})`
            }}>
       <h1 className={`lower-part-h1-text`}>Experience more together</h1>
       <p className={`lower-part-p-text`}>Stay connected with reliable HD meetings
                    and unlimited one-on-one and group video sessions.</p>

       <button className={`lower-part-download-button`}>
                    <p className={`lower-part-download-button-text`}>Download 
                        <span className={`lower-part-download-button-second-text`}>v1.3</span></p>
       </button>
     </article>


    )
}