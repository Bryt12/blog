import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <div className="text-center pt-10">
        The repository for this website can be found on{' '}
        <a
          className="text-blue-800"
          href="https://github.com/Bryt12/blog"
          target="_blank"
          rel="noreferrer"
        >
          my github
        </a>
        .<br />
        <p>
          This site was created with{' '}
          <a
            className="text-blue-800"
            href="https://redwoodjs.com"
            target="_blank"
            rel="noreferrer"
          >
            Redwood js
          </a>
          .<br />
          My artwork can be found on{' '}
          <a
            className="text-blue-800"
            href="https://www.instagram.com/illiiillliililliiili/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
          . <br />
          Decentilized Website -{' '}
          <a
            className="text-blue-800"
            href="https://illiiillliililliiili.eth.link"
            target="_blank"
            rel="noreferrer"
          >
            https://illiiillliililliiili.eth.link
          </a>{' '}
          <span className="text-red-700">*VERY EXPERIMENTAL</span> (may take a
          bit to load)
        </p>
      </div>
    </>
  )
}

export default AboutPage
