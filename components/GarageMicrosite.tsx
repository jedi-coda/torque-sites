'use client';

function mailtoBooking(fd: FormData) {
  const to = "za.akhtar@gmail.com"; // Temporary for testing
  const subject = "Booking request via demo microsite";
  const body = `Hi Newtown Garage,

I'd like to book:

Name: ${fd.get('name')}
Phone: ${fd.get('phone')}
Vehicle Reg: ${fd.get('reg')}
Service: ${fd.get('service')}

Preferred date/time: ${fd.get('when') || 'Any'}
Notes: ${fd.get('notes')}

Thanks!`;

  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export default function GarageMicrosite() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-white text-blue-700 grid place-items-center font-bold">NG</div>
            <h1 className="text-lg font-bold leading-tight">Newtown Garage</h1>
            <p className="text-sm opacity-80">Chesham · MOT · Servicing · Diagnostics · Tyres</p>
          </div>
          <div className="flex gap-2">
            <a href="tel:01494772277" className="px-3 py-2 bg-white text-blue-700 rounded-xl font-medium shadow">
              Call: 01494 772277
            </a>
            <a href="#booking" className="px-3 py-2 border border-white rounded-xl font-medium">
              Book MOT
            </a>
          </div>
        </div>
      </header>

      {/* Hero & Booking */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6 md:p-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700">
              Book your MOT or SERVICE in minutes
            </h2>
            <p className="mt-4 text-sm text-gray-700">
              Local family-run garage in Chesham offering MOT testing, servicing, diagnostics & tyres.
            </p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>Convenient location: Unit A3, Alma Road Industrial Estate, Chesham, HP5 3HB</li>
              <li>Experienced technicians, servicing all makes and models</li>
              <li>Cars, vans, motorhomes, hybrids & EVs</li>
            </ul>
          </div>

          {/* Booking form */}
          <div id="booking" className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Quick booking</h3>
            <form action={mailtoBooking} className="space-y-3">
              <input name="name" placeholder="Your name" className="w-full p-2 border rounded" required />
              <input name="phone" placeholder="Phone" className="w-full p-2 border rounded" required />
              <input name="reg" placeholder="VEHICLE REG (E.G. AB12 CDE)" className="w-full p-2 border rounded" required />
              <select name="service" className="w-full p-2 border rounded">
                <option>MOT</option>
                <option>Car Service</option>
                <option>Diagnostics</option>
                <option>Tyres</option>
              </select>
              <input name="when" placeholder="Preferred date/time (optional)" className="w-full p-2 border rounded" />
              <textarea name="notes" placeholder="Notes (optional)" className="w-full p-2 border rounded" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded font-medium shadow">
                Send booking by email
              </button>
              <p className="text-xs text-gray-600 mt-2">Or call: 01494 772277</p>
            </form>
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="bg-white p-6 md:p-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Find us</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl shadow">
            <h4 className="font-medium">Newtown Garage (Chesham)</h4>
            <p>Unit A3, Alma Road Industrial Estate, Chesham, HP5 3HB</p>
            <p>Mon–Fri: 08:00–17:30</p>
            <p>Sat: 08:00–13:00</p>
            <p>Sun: Closed</p>
            <a href="tel:01494772277" className="block mt-2 px-3 py-2 bg-blue-500 text-white rounded-xl shadow">
              Call 01494 772277
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.938875057387!2d-0.609!3d51.705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766f7ac8cb27ef%3A0x1234567890abcdef!2sNewtown%20Garage%20Chesham!5e0!3m2!1sen!2uk!4v1234567890"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}


