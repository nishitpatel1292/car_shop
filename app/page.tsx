import Image from 'next/image'
import Hero from '../components/Hero'
import {CustomFilter, SearchBar} from '../components/.'
export default function Home() {
  return (
    <main>
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width">
        <h1 className='text-4xl font-extrabold'>Car catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home-filters padding-x">
        <SearchBar/>
      </div>
      <div className="home-filters-container padding-x">
        <CustomFilter/>
        <CustomFilter/>
      </div>
    </main>
  )
}
