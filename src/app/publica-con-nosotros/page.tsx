"use client";
import { EyeIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/20/solid'
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';

const features = [
  {
    name: 'Amplia visibilidad.',
    description:
      'Tus publicaciones llegarán a una audiencia más amplia y comprometida.',
    icon: EyeIcon,
  },
  {
    name: 'Comunidad apasionada',
    description: 'Únete a una comunidad de amantes de los animales que comparten tu pasión y propósito.',
    icon: UserGroupIcon,
  },
  {
    name: 'Recursos útiles.',
    description: ' Te proporcionaremos herramientas y recursos para asegurarte de que cada adopción sea un éxito.',
    icon: WrenchIcon,
  },
]

export default function PublishWithUs() {

  return (
    <main className="bg-white scrollbar">
        <NavBar />
        <div  className="relative inset-0 px-6 pt-14 lg:px-8 min-h-screen overflow-hidden ">
            <div className="mx-auto grid max-w-2xl py-24 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg ">
                  <header>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Únete en nuestra misión de salvar vidas</h1>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                      En Paw adoption, estamos dedicados a cambiar vidas: las de los animales sin hogar y 
                      las de quienes los cuidan. Nuestra misión es simple pero poderosa: encontrar hogares llenos de amor 
                      para todas las mascotas necesitadas.
                      </p>
                  </header>
                  <section >
                    <p className="mt-2 text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-12">
                      Colabora con nosotros</p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                      <article key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                          {feature.name}
                          </dt>{' '}
                          <dd className="inline">{feature.description}</dd>
                      </article>
                      ))}
                    </dl>
                  </section>
                </div>
              </div>
                <img
                src="https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2200}
                height={1442}
            />
            </div>
        </div>
        <Footer/>
    </main>
  )
}
