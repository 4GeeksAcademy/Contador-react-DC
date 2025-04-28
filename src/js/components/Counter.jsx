

function SecondsCounter({ seconds }){

    return(
        <div className="container">
        <div className="row bg-dark mt-5">
        <div className="col-2 bg-light"></div>
        <div className="col-1 ">🕒</div>
        <div className="col-1 text-light">{Math.floor(seconds / 100000) % 10}</div>
        <div className="col-1 text-light">{Math.floor(seconds / 10000) % 10}</div>
        <div className="col-1 text-light">{Math.floor(seconds / 1000) % 10}</div>
        <div className="col-1 text-light">{Math.floor(seconds / 100) % 10}</div>
        <div className="col-1 text-light">{Math.floor(seconds / 10) % 10}</div>
        <div className="col-1 text-light">{Math.floor(seconds / 1) % 10}</div>
        <div className="col-3 bg-light"></div>
        </div>
        </div>
    )

}



export default SecondsCounter