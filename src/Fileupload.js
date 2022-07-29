import React from 'react'

const Fileupload = ({ height }) => {

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };


    return (
        <form >
            <div className="">
                <input 
                type="file" 
                className="form-control" 
                 onChange={handleFileChange} 
                 accept=".mov, .mp4" />
                {source  && (
                    <video
                        className="VideoInput_video"
                        width="100%"
                        height={height}
                        controls autoPlay
                        src={source}
                    />
                )}
            </div>
        </form >
    )
}

export default Fileupload
