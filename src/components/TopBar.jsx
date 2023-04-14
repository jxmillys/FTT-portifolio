/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import LogoFtt from '../public/assets/preto-sem-fundo.png'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Projetos', href: '/projetos', current: false },
  { name: 'Fale Conosco', href: 'faleconosco', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopBar() {
  return (
    <Disclosure as="nav" className="z-10  bg-dark-red fixed w-full overflow-hidden">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="w-full flex justify-center sm:justify-start sm:items-start">
                <div className="flex flex-shrink-0">
                    <img
                    className="block lg:hidden h-12 w-auto"
                    src={LogoFtt}
                    alt="Logo Ftt"
                    />
                    <img
                    className="hidden lg:block h-12 w-auto"
                    src={LogoFtt}
                    alt="Logo Ftt"
                    />
                    <div className="flex justify-center items-center">
                        <h1 className='text-white font-header text-lg pl-5'>Fábrica de Tecnologias Turning (FTT)</h1>
                    </div>
                </div>
                 </div>
                 <div className="justify-center items-center hidden sm:block sm:justify-center">
                  <div className="justify-center items-center flex space-x-4 w-max">
                    {navigation.map((item) => {
                        if (item.name === "") {
                          return null;
                        }
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-white-hover text-black' : 'text-gray-300 hover:bg-white-hover hover:text-black',
                              'px-3 py-2 rounded-md text-sm font-medium justify-center items-center'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-purple-hover text-white' : 'text-gray-300 hover:bg-black hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
