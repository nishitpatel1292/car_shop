import Image from 'next/image'
import Hero from '../components/Hero'
import { CustomFilter, SearchBar } from '../components/.'
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <h1 className='text-4xl font-extrabold'>Car catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home-filters padding-x">
        <SearchBar />

        <div className="home-filters-container padding-x">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>

          </section>
      ): (

        )}



    </main>
  );
}
