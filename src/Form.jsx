

let submitForm = (eve) => {
    eve.preventDefault();
    console.log("Submitting the form...");
    
}

function Form() {
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Write Something..."/>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Form;