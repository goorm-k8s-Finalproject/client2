import { useNavigate } from "react-router";

const DlcItem = (props) => {
    const navigate = useNavigate();

    return(
        <tr onClick={() => navigate(`/${props.id}`)}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.releaseDate}</td>
        </tr>
    );
};

export default DlcItem;