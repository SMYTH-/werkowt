import Image from 'next/image';

export function IconGrid() {
  return (
    <div className="py-16">
      <div>
        <div className="flex flex-col gap-4 max-w-[560px]">
          <p className="eyebrow">How it works</p>
          <h2 className="font-display text-h1 font-bold mb-10">Everything you need to run your coaching, in one place.</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <div>
            <div className="w-12 h-12 bg-jade-50 rounded-md flex items-center justify-center">
              <Image src='/icon/user-plus.svg' alt='Create your profile' width={24} height={24} />
            </div>
            <h3 className="text-h3 font-bold mb-2 mt-4.5">Create your profile</h3>
            <p className="text-sm text-gray-500">Add your bio, specialties, rates, and availability in minutes.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-jade-50 rounded-md flex items-center justify-center">
              <Image src='/icon/share.svg' alt='Share your profile' width={24} height={24} />
            </div>
            <h3 className="text-h3 font-bold mb-2 mt-4.5">Share your profile</h3>
            <p className="text-sm text-gray-500">Publish a public profile page and share it anywhere.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-jade-50 rounded-md flex items-center justify-center">
              <Image src='/icon/booking.svg' alt='Book your coaching' width={24} height={24} />
            </div>
            <h3 className="text-h3 font-bold mb-2 mt-4.5">Book your coaching</h3>
            <p className="text-sm text-gray-500">Clients book and pay through Werkowt. You keep coaching.</p>
          </div>
        </div>
      </div>
    </div>  
  );
}