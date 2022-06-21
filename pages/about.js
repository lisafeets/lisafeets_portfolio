import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'

const About = () => {
    return (
        // <div>
        //     <h1>About</h1>
        //     <p>I build products!</p>
        //     <Image title={"lisafeets"} src={"/assets/about/lisa_tuba_2.png"} height={255} width={210}/>
        // </div>
        // (
            <>
              <Layout>
                <Head>
                  <title>Lisa Orr's Product Portfolio</title>
                </Head>
                <Container>
                <div>
                    <h1>About</h1>
                    <p>I build products!</p>
                    <Image title={"lisafeets"} src={"/assets/about/lisa_tuba_2.png"} height={255} width={210}/>
                </div>
                </Container>
              </Layout>
            </>
        //   )

    );
}

export default About;