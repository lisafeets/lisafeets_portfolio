import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm Lisa Orr,<br />Product Leader
        </h1>
        <p className="text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.</p>
        <button className="button mt-8">Download Resume</button>
      </div>
      <Image title={"lisafeets"} src={"/assets/blog/authors/lisa.png"} height={295} width={293}
      />
    </section>
  )
}
