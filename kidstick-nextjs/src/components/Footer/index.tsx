import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-center bg-cover lg:bg-[url('/images/footer/bg-footer.png')]">
            <div className='relative md:pt-[14rem] pt-20 lg:bg-inherit bg-[#2d4073]'>
                <div className="container mx-auto px-20 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-32 gap-8 text-white">
                        {/* Logo and About Section */}
                        <div className="space-y-6">
                            <img
                                src="/images/footer/logo.png"
                                alt="KidStick Logo"
                                width={120}
                                height={40}
                                className="mb-4"
                            />
                            <p className="text-sm opacity-90 max-w-xs">
                                Empowering kids through fun, skill-building adventures. Stay connected for updates and support. © KidStick. All rights reserved.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#" className="hover:text-red-400 transition-colors">
                                    <FaLinkedin size={20} />
                                </Link>
                                <Link href="#" className="hover:text-red-400 transition-colors">
                                    <FaFacebook size={20} />
                                </Link>
                                <Link href="#" className="hover:text-red-400 transition-colors">
                                    <FaPinterest size={20} />
                                </Link>
                                <Link href="#" className="hover:text-red-400 transition-colors">
                                    <FaTwitter size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links and Support Links */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <nav className="grid grid-cols-1 gap-2">
                                    {['Home', 'About', 'Pricing', 'Event', 'Shop', 'Teacher'].map((item) => (
                                        <Link
                                            key={item}
                                            href="#"
                                            className="text-sm hover:text-gray-300 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="space-y-4">
                                <nav className="grid grid-cols-1 gap-2">
                                    {['Contact Us', 'FAQ', 'Privacy Policy', 'Blog'].map((item) => (
                                        <Link
                                            key={item}
                                            href="#"
                                            className="text-sm hover:text-gray-300 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/footer/Home_Icon.png"
                                    alt="Location icon"
                                    width={20}
                                    height={20}
                                    className="mt-1 flex-shrink-0"
                                />
                                <p className="text-sm">
                                    50 Outer Bypass Road, Sonadanga, Khulna 9001, Bangladesh
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/footer/Phone_Icon.png"
                                    alt="Phone icon"
                                    width={20}
                                    height={20}
                                />
                                <p className="text-sm">+8801404049797</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/footer/Email_Icon.png"
                                    alt="Email icon"
                                    width={20}
                                    height={20}
                                />
                                <p className="text-sm">info@gymstick.com.bd</p>
                            </div>

                            {/* Payment Methods */}
                            <div className="flex gap-2 mt-4">
                                <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                    <img
                                        src={`/images/footer/visa.jpg`}
                                        alt={`payment method`}
                                        width={32}
                                        height={20}
                                    />
                                </div>
                                <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                    <img
                                        src={`/images/footer/paypal.jpg`}
                                        alt={`payment method`}
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                    <img
                                        src={`/images/footer/gpay.jpg`}
                                        alt={`payment method`}
                                        width={32}
                                        height={20}
                                    />
                                </div>
                                <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                    <img
                                        src={`/images/footer/mastercard.jpg`}
                                        alt={`payment method`}
                                        width={32}
                                        height={20}
                                    />
                                </div>
                                <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                    <img
                                        src={`/images/footer/applepay.jpg`}
                                        alt={`payment method`}
                                        width={32}
                                        height={20}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <img
                            src="/images/footer/backpack.png"
                            alt="Backpack Icon"
                            width={60}
                            height={60}
                            className='absolute lg:-left-28 lg:bottom-0 md:hidden lg:block'
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mt-8 flex justify-center items-center">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[20rem] bg-transparent border-b border-t-0 border-x-0 rounded-none px-0 placeholder:text-white/70 placeholder:text-[0.875rem] focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                </div>
                {/* Copyright */}
                <div className="py-4 border-t bg-[#223668] border-white/10 text-center text-sm text-white/70">
                    <p>2024-2025 All right received by © <span className='text-[#FE5C45]'>KidStick</span></p>
                </div>
            </div>
        </footer>
    )
}