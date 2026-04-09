import PropTypes from "prop-types";

function Controls({onClear})
{
    return <button onClick="{onClear}">Clear Bouquet</button>
}

Controls.propTypes=
{
    onClear: PropTypes.func.isRequired,
};

export default Controls