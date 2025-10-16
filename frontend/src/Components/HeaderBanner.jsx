import React from 'react'

function Headerbanner({ title, image }) {
    return (
        <>
            <section
                style={{
                    backgroundImage: `url("/images/${image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "450px",
                    position: "relative",
                }}
            >
                <div className="inner-wrapper">
                    <h1>{title}</h1>
                </div>
            </section>
            <div className="clearfix"></div>
        </>
    );
}

export default Headerbanner;
