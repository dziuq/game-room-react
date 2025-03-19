function GameCard({name, category, totalScore}) {

  return (
    <div className ="gameCard">
       <h2 className="neon-blue-text">{name}</h2>
       <p>{category}</p>
       <p>{totalScore}</p>
       
    </div>    
  )
}

export default GameCard;
