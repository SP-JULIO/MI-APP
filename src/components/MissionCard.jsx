function MissionCard({nombre, descripcion, simbolo}) {
    return (
        <section className="mission-card">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>{simbolo}</p>
        </section>
    );
}

export default MissionCard;