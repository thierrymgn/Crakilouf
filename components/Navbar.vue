<template>
    <nav class="bg-gray-900 border-gray-200" itemscope itemtype="http://schema.org/SiteNavigationElement">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse" itemprop="url">
                <NuxtImg
                    src="/images/logo.webp"
                    sizes="28px sm:28px md:32px"
                    alt="Crakilouf Logo"
                    itemprop="image"
                    class="rounded-lg"
                />
                <span class="self-center text-3xl font-bold text-transparent bg-clip-text bg-indigo-400" itemprop="name">Crakilouf</span>
            </NuxtLink>

            <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                    <li itemscope itemtype="http://schema.org/SiteNavigationElement">
                        <NuxtLink
                            to="/"
                            class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-300"
                            aria-current="page"
                            itemprop="url"
                        ><span itemprop="name">Accueil</span></NuxtLink>
                    </li>
                  <li itemscope itemtype="http://schema.org/SiteNavigationElement">
                        <NuxtLink
                            to="/all-articles"
                            class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-300"
                            aria-current="page"
                            itemprop="url"
                        ><span itemprop="name">Articles</span></NuxtLink>
                    </li>
                    <li itemscope itemtype="http://schema.org/SiteNavigationElement">
                        <NuxtLink
                            to="/about"
                            class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-300"
                            itemprop="url"
                        ><span itemprop="name">Histoire</span></NuxtLink>
                    </li>
                    <li itemscope itemtype="http://schema.org/SiteNavigationElement">
                        <NuxtLink
                            to="/testimonials"
                            class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-300"
                            itemprop="url"
                        ><span itemprop="name">Témoignages</span></NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
