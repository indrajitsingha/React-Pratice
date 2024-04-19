/* eslint-disable react/prop-types */
const Pill = ({index, image, text, clearFn }) => {
    return (
        <span className="user-pill" onClick={()=>clearFn(index)}>
            <img src={image} alt={text} />
            <span>{text} &times;</span>
        </span>
    );
};

export default Pill;