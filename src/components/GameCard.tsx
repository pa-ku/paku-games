interface GameCardProps {
  title: string
  description: string
  image: string
  url: string
  category: string
}

export const GameCard = ({
  title,
  description,
  image,
  url,
  category,
}: GameCardProps) => {
  return (
    <div className='group overflow-hidden border-border bg-cyan-900/20 hover:shadow-cyan-900/50 shadow-lg ransition-all duration-300 rounded-3xl'>
      <div className='p-0'>
        <div className='relative aspect-video overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover transition-transform duration-300 '
          />
          <div className='absolute top-2 right-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-secondary text-white font-bold'>
              {category}
            </span>
          </div>
        </div>
        <div className='p-6 space-y-3'>
          <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
            {title}
          </h3>
          <p className='text-sm text-muted-foreground line-clamp-2'>
            {description}
          </p>
        </div>
        <button
          className=' px-8 rounded-b-xl font-bold  cursor-pointer py-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground '
          onClick={() => window.open(url, '_blank')}
        >
          Jugar
        </button>
      </div>
    </div>
  )
}
