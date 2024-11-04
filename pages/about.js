import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
            <>
              <Layout>
                <Container>
                  <Header />
                </Container>
                <div className="bg-sky-50 pt-16 pb-16">
                  <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div>
                        <Image title={"lisafeets"} src={"/assets/blog/authors/tuba.png"} height={295} width={293} />
                      </div>
                      <div className="md:pr-8 md:col-span-2">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-12">
                          Hi, I'm Lisa (aka lisafeets)!
                        </h1>
                        <p className="text-lg block text-slate-500 mb-4">My journey into product management started like everyone else... not in product! I spent 
                           many years in academia studying animals (coots! lizards! damselfies!) and human evolution. I've picked up some pretty silly animal stories along the way. </p>
                        <p className="text-lg block text-slate-500 mb-4">I jumped from academia straight into a data science role. I learned a lot about how tech companies work but mostly 
                          that I wanted more of a say on what we decided to build, not just the how. And so I moved into product management and have had a lot of fun creating software.</p>
                        <p className="text-lg block text-slate-500 mb-4">Besides product life, I also enjoy watching water flow while sitting on a dock, twirling in a marching band, 
                           and reading too many Jack Reacher novels.</p>
                        <p className="text-lg block text-slate-500 mb-4">If you're wondering where the nickname "lisafeets" came from... welp you'll just have to drop me a line and ask :D</p>
                      </div>
                    </div>
                  </Container>
              </div>
              </Layout>
            </>
        //   )

    );
}

export default About;