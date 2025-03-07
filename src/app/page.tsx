import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Ciao, sono <span className="text-indigo-600 dark:text-indigo-400">Andreas Unterholzner</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">
              Sviluppatore Web & Designer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Creo soluzioni web moderne, intuitive e performanti. Specializzato in React, Next.js e design responsive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/progetti" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Vedi Progetti
              </Link>
              <Link href="/contatti" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                Contattami
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-4 border-indigo-200 dark:border-indigo-900">
              {/* Inserisci qui la tua immagine di profilo */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                <Image
                src="/images/profile.png"
                alt="Andreas Unterholzer"
                fill
                style={{ objectFit: 'cover' }}
              />
              </div>
              
              
        
            </div>
          </div>
        </div>
        
        {/* Skills Preview Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Le Mie Competenze</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Flutter'].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="font-medium text-gray-800 dark:text-gray-200">{skill}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/skills" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Vedi tutte le competenze →
            </Link>
          </div>
        </div>
        
        {/* Featured Projects Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Progetti in Evidenza</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  {/* Qui inserisci l'immagine di anteprima del progetto */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg font-medium">
                    Anteprima Progetto {project}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Progetto {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Descrizione breve del progetto {project}. Spiega cosa fa e quali tecnologie hai utilizzato.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'TailwindCSS', 'Firebase'].map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/progetti/progetto-${project}`} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                    Vedi dettagli →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/progetti" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Vedi tutti i progetti →
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
}