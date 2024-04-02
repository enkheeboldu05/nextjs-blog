import Head from 'next/head';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';




export default function FirstPost() {
  return (
    
     <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Enkhbold Myagmarjav.</p>
        <p>
          I am an international student who lives in South Korea, Seoul. Currently I am freshman student of Information Systems Department in Hanyang University.
        </p>
      </section>

    </Layout>
  );
}


