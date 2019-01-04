import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        // console.log(this.props);

        return (
            <div className="list">
                {this.props.pokemon.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default List;
