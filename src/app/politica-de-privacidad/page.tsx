"use client";

import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function PrivacyPolicy(){

    return(
        <main className="bg-white">
            <NavBar />
            <article className="relative inset-0 pt-28 px-12 lg:px-40 min-h-screen flex flex-col align-middle">
                <header className="mx-auto gap-x-10">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Política de privacidad</h1>
                    <div className="text-gray-800 font-medium flex-row flex justify-center space-x-1 mt-4">
                        <p>Última actualización: </p>
                        <p>09 de abril del 2024</p> {/* Date to be updated */}
                    </div>
                </header>  
                <section className="my-6 text-gray-800">
                    <p className=" text-base font-normal">En Paw adoption, respetamos y valoramos 
                        tu privacidad. Esta Política de Privacidad describe 
                        cómo recopilamos, utilizamos y protegemos la información 
                        personal que nos proporcionas a través de nuestro sitio web y 
                        cualquier servicio relacionado. Al utilizar nuestro sitio web, 
                        aceptas las prácticas descritas en esta política.</p>
                </section>
                <section data-testid="data-recopilation" className="my-6 text-gray-800 space-y-2">
                    <h2 className="font-bold text-xl">Recopilación de la información personal</h2>
                    <p className="text-base">Recopilamos información personal que tú nos proporcionas voluntariamente cuando interactúas con nuestro sitio web, como al completar formularios de contacto o prerregistro del app. La información personal que podemos recopilar incluye, entre otros, tu nombre y dirección de correo electrónico.</p>
                </section>
                <section data-testid="personal-data-protection" className="my-6 text-gray-800 space-y-2">
                    <h2 className="font-bold text-xl">Protección de la Información Personal</h2>
                    <p className="text-base">Tomamos medidas razonables para proteger la información personal contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración o destrucción. Sin embargo, debes tener en cuenta que ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.</p>        
                </section>
                <section data-testid="third-party-data" className="my-6 text-gray-800 space-y-2">
                    <h2 className="font-bold text-xl">Divulgación de Información a Terceros</h2>
                    <p className="text-base">No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para proporcionarte nuestros servicios o cumplir con requisitos legales.</p>
                </section>
                <section data-testid="third-party-links" className="my-6 text-gray-800 space-y-2">
                    <h2 className="font-bold text-xl">Enlaces a Sitios de Terceros</h2>
                    <p className="text-base">Nuestro sitio web puede contener enlaces a sitios web de terceros. Ten en cuenta que no somos responsables de las prácticas de privacidad de estos sitios web. Te recomendamos que revises las políticas de privacidad de dichos sitios antes de proporcionarles tu información personal.</p>
                </section>
                <section data-testid="changes-in-policy" className="my-6 text-gray-800 space-y-2">
                    <h2 className="font-bold text-xl">Cambios en la política</h2>
                    <p className="text-base">
                    Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Te notificaremos cualquier cambio mediante la publicación de la Política de Privacidad actualizada en nuestro sitio web. El uso continuado de nuestro sitio web después de la publicación de los cambios constituirá tu aceptación de dichos cambios.
                    </p>
                </section>
            </article>
            <Footer />
        </main>
    )

}