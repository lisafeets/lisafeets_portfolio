import Image from 'next/image'
export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={64}
        height={64}
        className="w-12 h-12 rounded-full"
        alt={name}
      />
      <div className="text-xl font-bold ml-2">{name}</div>
    </div>
  )
}
