import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm Lisa Orr 👋<br />
        </h1>
        <p className="text-2xl block text-slate-500">I build products that customers ❤️</p>
        <a href="/assets/resume/lisafeets_resume.pdf"
          className="bg-accent-1 hover:bg-white hover:text-accent-1 border border-accent-1 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-6 inline-block"
        >
          Download Resume
        </a>
      </div>
      <Image title={"lisafeets"} src={"/assets/blog/authors/lisa.png"} height={295} width={293}
      />
    </section>
  )
}
