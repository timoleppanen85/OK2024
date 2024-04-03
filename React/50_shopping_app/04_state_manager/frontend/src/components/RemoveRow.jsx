const RemoveRow = (props) => {
    return (
        <tr>
            <td>{props.item.type}</td>
            <td>{props.item.count}</td>
            <td>{props.item.price}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => props.changeMode("cancel", 0)}>
                    Cancel
                </button>
            </td>
            <td>
                <button
                    className="btn btn-secondary"
                    onClick={() => props.removeItem(props.item._id)}>
                    Confirm
                </button>
            </td>
        </tr>
    );
};

export default RemoveRow;
