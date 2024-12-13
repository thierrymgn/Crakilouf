export default defineAppConfig({
    ui: {
        primary: 'purple',
        gray: 'stone',
        button: {
            base: 'transition ease-in',
        },
        card: {
            shadow: '',
            divide: '',
            ring: '',
            background: 'bg-white dark:bg-gray-200',
        },
    },
    app: {
        name: 'Crakilouf : Découvrez la Vérité sur cette Créature Mythique',
        description: 'Découvrez tout sur le Crakilouf, une créature rare et insaisissable. Explorez son habitat, ses caractéristiques uniques, et apprenez comment l\'observer.',
    },
    page: {
        article: {
            cta: {
                label: 'Contact Us',
                to: '/#',
            },
        },
    },
})
