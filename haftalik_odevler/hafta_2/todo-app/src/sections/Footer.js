import Link from "next/link"

// linkler için bir navigations dizisi oluşturuyoruö
// create a navigations list for 
const navigations = [
    { label: 'Github', url: 'https://github.com/mtfsahin' },
    { label: 'Linkedin', url: 'https://www.linkedin.com/in/mustafa-sahin-dev/' },
];

const Footer = () => {
    return (
        <footer className="py-6 flex">
            <span className="font-bold text-comet-100 dark:text-comet-800 cursor-no-drop">Mustafa Şahin</span>
            {/* Burada yukarıda tanımladığım navigaston dizisini mapliyorum */}
            {/* Mapping the navigations array */}
            <div className="flex-1"></div> {/* Boş bir div ekleyerek navigasyonları sağ tarafa yaslayabilirsiniz */}
            <div className="flex justify-end ">
                {navigations.map((nav, i) => (
                    <Link key={i} href={nav.url} legacyBehavior>
                        <a target="_blank" id="link" className='text-comet-100 dark:text-comet-800 hover:text-cherokee-200 dark:hover:text-cherokee-800  px-4 justify-end'>
                            {nav.label}
                        </a>
                    </Link>
                ))}
            </div>
        </footer>

    )
}

export default Footer