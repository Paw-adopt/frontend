"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import { MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, MapIcon, HeartIcon } from "@heroicons/react/20/solid";

const features = [
    {
      name: 'Explora',
      description:
        'Descubre adorables mascotas esperando por ti.',
      icon: MagnifyingGlassIcon,
    },
    {
      name: 'Contacta',
      description:
        'Habla directamente con el refugio o rescatista si necesitas más información.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Visita',
      description:
        'Programa una visita para conocer a tu futura mascota.',
      icon: MapIcon,
    },
    {
      name: 'Adopta',
      description:
        'Envía tu solicitud de adopción y lleva a casa a tu nuevo compañero.',
      icon: HeartIcon,
    },
  ]

export default function Adoptions(){
    return (
        <main className="bg-white">
            <NavBar/>
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <header className="mx-auto max-w-2xl lg:text-center">
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            ¡Encuentra a tu nuevo mejor amigo aquí!
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        ¡Encuentra a tu compañero ideal y da el primer paso hacia una vida llena de aventuras juntos!
                        </p>
                    </header>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFB350]">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
            </section>
            <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                    <span className="block">¡Haz feliz a una mascota hoy!</span>
                </h2>
                <button className="space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                    <a href="#"
                        className="w-full flex items-center justify-center px-6 py-2.5 border text-base font-medium rounded-full text-white bg-pink-700 hover:bg-pink-800 md:py-4 md:text-lg md:px-10">
                        ¡Adopta!
                    </a>
                </button>
            </section>
            <Footer/>
        </main>
    )
}