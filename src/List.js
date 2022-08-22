import ListItem from './ListItem';

function List(props) {

    const {listItems} = props;

    return (
        <div className='list'>
            {listItems.map((item, index) => (
                <ListItem key={index} {...item}/>
            ))}
        </div>
    )

}

export default List;