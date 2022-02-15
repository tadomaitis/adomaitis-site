import Image from 'next/image'

const Card = ({
  title,
  description,
  imagePath,
  imageDescription
}) => (
  <div className="card shadow-xl image-full">
    <figure className='block'>
      <Image 
        src={imagePath}
        alt={imageDescription}
        layout='intrinsic'
        width={2400}
        height={3600}
        className="rounded-xl"
      />
    </figure>
    <div className="justify-end card-body grid place-items-center">
      <h2 className="card-title text-3xl">{title}</h2>
      <p className='text-lg'>{description}</p>
    </div>
  </div>
)

export default Card
