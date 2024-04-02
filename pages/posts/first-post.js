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
        <p>[Your Self Introduction]</p>
        <p>
          
        </p>
      </section>

    </Layout>
  );
}

