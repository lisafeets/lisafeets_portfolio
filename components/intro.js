import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Hi, I'm Lisa,<br />Product Leader
      </h1>
      <Image title={"Lisa Feets"} src={"/assets/blog/dynamic-routing/lisa.png"} height={295} width={293}
      />
    </section>
  )
}
