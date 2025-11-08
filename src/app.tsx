import './app.css'
import { GameCard } from './components/GameCard'
import matatena from './assets/matatena.png'
import mosquettuti from './assets/mosquettuti.png'
import magicType from './assets/magicType.png'
import rosco from './assets/rosco.png'

const games = [
  {
    title: 'Matatena',
    description: 'Tira los dados e intenta sumar el mayor puntaje posible',
    image: matatena,
    url: 'https://matatena.paku.com.ar/',
    category: 'Dados',
  },
  {
    title: 'Mosquetutti',
    description: 'Completa las palabras segun la consigna',
    image: mosquettuti,
    url: 'https://mosquetutti.vercel.app/',
    category: 'Tuttifruti',
  },
  {
    title: 'Magic Type',
    description:
      'Castea poderosos hecizos escribiendo más rapido que tu oponente!',
    image: magicType,
    url: 'https://magictype.paku.com.ar/',
    category: 'Mecanografia',
  },

  {
    title: 'Rosco',
    description: 'Adivina la palabra con su descripción',
    image: rosco,
    url: 'https://rosco.paku.com.ar/',
    category: 'Adivinanza',
  },
]

export function App() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 px-4 flex flex-col items-center justify-center'>
        <div className='container flex flex-col items-center  text-center space-y-6'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4'>
            <span className='text-sm font-semibold text-primary'>
              Dale like y subscribite
            </span>
          </div>
          <h2 className='text-5xl md:text-7xl font-bold'>
            <span className='bg-linear-to-r from-primary to-secondary  bg-clip-text text-transparent'>
              Paku Games
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            A darle atomos
          </p>
        </div>
      </section>

      <section
        id='games'
        className=' py-12 px-4 flex flex-col items-center justify-center'
      >
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border mt-20 py-8'>
        <div className='container mx-auto px-4 text-center text-muted-foreground'>
          <p>
            © 2024 Paku Games. All rights reserved. Play responsibly and have
            fun!
          </p>
        </div>
      </footer>
    </div>
  )
}
