import { Icon } from '../atoms'

export function Footer() {
  return (
    <footer className="bg-black50 col-span-4 p-24 w-full" id="contact">
      <div className="flex flex-col justify-center items-center gap-16">
        <div>
          <p className="text-black50 text-2xl font-semibold bg-yellow inline-block">
            Get in touch...
          </p>
          <h3 className="block text-white text-6xl font-bold">CONTACT</h3>
        </div>
        <div>
          <p className="text-white text-lg font-semibold">
            <Icon src="gmail.svg" alt="gmail" className="inline" />{' '}
            milianordelcanto@gmail.com
          </p>
        </div>
        <div className="flex gap-3">
          <Icon
            src="linkedin.svg"
            alt="linkedin"
            href="https://www.linkedin.com/in/max-miliano-del-canto-quezada-81373123b/"
          />
          <Icon
            src="twitter.svg"
            alt="twitter"
            href="https://twitter.com/Milianor1"
          />
          <Icon
            src="youtube.svg"
            alt="youtube"
            href="https://www.youtube.com/channel/UCJjz-gqjmkoqXmWTUSU_kgQ"
          />
        </div>
        <div>
          <p className="text-white cursor-pointer">
            Portfolio designed by{' '}
            <a
              href="https://www.behance.net/Abdulrahman_Ahmed"
              target="_blank"
              rel="noopener"
              className="bg-yellow text-black50"
            >
              Abdulrahman Alsharkawy
            </a>{' '}
            and develop by Me
          </p>
        </div>
      </div>
    </footer>
  )
}
