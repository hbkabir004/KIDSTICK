import Link from 'next/link'
import { SocialIcon } from './SocialIcon'

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          We&apos;re working hard to bring you something amazing!
        </p>
        
        <div className="mt-12">
          <p className="text-lg mb-4">Stay connected:</p>
          <div className="flex justify-center space-x-4">
            <SocialIcon href="https://twitter.com" icon="twitter" />
            <SocialIcon href="https://facebook.com" icon="facebook" />
            <SocialIcon href="https://instagram.com" icon="instagram" />
          </div>
        </div>
        
        <button className="mt-12 bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-3 rounded-full transition-colors duration-200">
          <Link href="/" className="hover:text-indigo-200 transition-colors">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  )
}

