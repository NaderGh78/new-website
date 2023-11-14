const Spinner = () => {
    return (
        <div className="spinner-holder py-5 my-5 d-flex justify-content-center align-items-center">
            <div
                className="spinner-border"
                role="status"
                style={{ width: "5rem", height: "5rem", color: "var(--light_blue)" }}
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;