import Head from 'next/head';
import SearchBar from '../src/components/SearchBar';
import ComparisonPanel from '../src/components/ComparisonPanel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 to-amber-900 p-8">
      <Head>
        <title>Content Hub Comparison</title>
        <meta name="description" content="Compare Wikipedia, Grokipedia, and Britannica" />
      </Head>
      <main className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Content Hub Comparison</h1>
        <SearchBar onSearch={(query) => console.log(query)} />
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <ComparisonPanel title="Wikipedia" content="" onWordSearch={() => {}} />
          <ComparisonPanel title="Britannica" content="" onWordSearch={() => {}} />
          <ComparisonPanel title="Grokipedia" content="" onWordSearch={() => {}} />
        </div>
      </main>
    </div>
  );
}