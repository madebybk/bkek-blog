import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/bkek_logo.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'BKEK Blog',
  keywords: 'tech, programming, community, startup, religion',
  description: 'Get the latest BKEK updates',
}

export default Meta