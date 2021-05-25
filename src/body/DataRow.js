import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DataRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.ageGroup}</td>
            <td>{props.data}</td>
            <td>
                <FontAwesomeIcon icon={['fas', props.icon]}/>
            </td>
        </tr>
    );
}

export default DataRow;