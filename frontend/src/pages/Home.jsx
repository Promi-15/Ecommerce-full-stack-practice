import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsletterBox'
import OurPolicy from '../components/OurPolicy'
import OurPlicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox/>
    </div>
  )
}

export default Home
