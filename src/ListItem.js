import './listItem.css';
function ListItem(props) {

    return (
        <div className='item'>
            <h2>{props.itemTitle}</h2>
            <img src={props.itemImage} alt='no-data'/>
        </div>
    )

}

export default ListItem;