import Card from './Card'

function CardList( props ) {

    return  (
        <div>{ props.cards.map((card, index) => (
            <Card key={ index } { ...card } />
            ))}
        </div>
    )
}

export default CardList