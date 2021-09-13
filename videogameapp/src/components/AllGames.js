

function AllGames(props){
    const gameItems = props.games.map((game, index) => {
        return <li key = {index}>Title: {game.title}  / ID# {game.gameID}</li>
        
    })

    return (
        <ul>{gameItems}</ul>
    )
    
}

export default AllGames