export default function Button({btnName}) {
    function changeBgColor () {
        document.body.style.backgroundColor = btnName;
    }
    return(
        <>
            <button className='m-1 shadow-lg btn rounded-lg btn-primary text-black' style={{backgroundColor : btnName}} onClick={changeBgColor}>{btnName}</button>
        </>
    );
}
// export default Button;