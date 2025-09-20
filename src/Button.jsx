


let onBtnClick = (eve) => {
    console.log("Button Clicked");
    console.log(eve);
    
    
};

function Button() {
    return (
        <button onClick={onBtnClick}> Click me! </button>
    );
}



export default Button;

