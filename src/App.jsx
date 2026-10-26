import GameHeader from './components/GameHeader';
import PlayerCard from './components/PlayerCard';
import MissionCard from './components/MissionCard';

function App() {
  return (
    <main style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Aqui usas tus componentes */}
      <GameHeader/>
      <PlayerCard
        nombre="🧙🏾‍♂️ Maga Oscura"
        nivel={3}
        vida="❤️❤️❤️"
      />
      <PlayerCard
        nombre="🧝🏽 Elfo oscuro"
        nivel={3}
        vida="❤️❤️❤️"
      />
      <PlayerCard
        nombre="🤺 Santo de Espada"
        nivel={3}
        vida="❤️❤️❤️"
      />
      <PlayerCard
        nombre="🥷🏾 Ninja"
        nivel={4}
        vida="❤️❤️❤️❤️"
      />
      <MissionCard
        nombre="Misión 1"
        descripcion="Derrota al dragón de fuego"
        simbolo="🐉🔥"
      />
      <MissionCard
        nombre="Misión 2"
        descripcion="Rescata a la princesa del castillo"
        simbolo="👸🏰"
      /> 
      <MissionCard
        nombre="Misión 3"
        descripcion="Encuentra el tesoro escondido en la cueva"
        simbolo="💎🗝️"
      />
      <MissionCard
        nombre="Misión 4"
        descripcion="Derrota al jefe final y salva el reino"
        simbolo="👑⚔️"
      />
    </main>
  );
}

export default App;