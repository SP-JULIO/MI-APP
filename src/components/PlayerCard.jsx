function PlayerCard({nombre, nivel, vida}) {
    return (
        <section className="player-card">
            <h2>{nombre}</h2>
            <p>Nivel: {nivel}</p>
            <p>Vida: {vida}</p>
        </section>
    );
}

export default PlayerCard;