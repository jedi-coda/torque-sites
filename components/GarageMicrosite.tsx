'use client';

type Props = {
  data: {
    name: string;
    phone: string;
    address: string;
    hours: string[];
    heroLine: string;
    mapEmbed: string;
    colors: { primary: string; secondary: string };
  };
};

export default function GarageMicrosite({ data }: Props) {
  const telHref = `tel:${data.phone.replace(/\s/g, '')}`;
  const initials = data.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  function mailtoBooking(fd: FormData) {
    const to = 'za.akhtar@gmail.com'; // TEMP: your inbox for testing
    const subject = 'Booking request via demo microsite';
    const body = `Hi ${data.name},

I'd like to book:

Name: ${fd.get('name')}
Phone: ${fd.get('phone')}
Vehicle Reg: ${fd.get('reg')}
Service: ${fd.get('service')}

Preferred date/time: ${fd.get('when') || 'Any'}
Notes: ${fd.get('notes')}

Thanks!`;

    const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = url;
  }

  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 shadow"
        style={{ background: data.colors.primary, color: data.colors.secondary }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div
              className="size-9 rounded-xl grid place-items-center font-bold"
              style={{ background: data.colors.secondary, color: data.colors.primary }}
            >
              {initials}
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">{data.name}</h1>
              <p className="text-sm opacity-80">MOT · Servicing · Diagnostics · Tyres</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={telHref}
              className="px-3 py-2 rounded-xl font-medium shadow"
              style={{ background: data.colors.secondary, color: data.colors.primary }}
            >
              Call: {data.phone}
            </a>
            <a
              href="#booking"
              className="px-3 py-2 rounded-xl font-medium border"
              style={{ borderColor: data.colors.secondary }}
            >
              Book MOT
            </a>
          </div>
        </div>
      </header>

      {/* Hero & Booking */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6 md:p-10">
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: data.colors.primary }}
            >
              {data.heroLine}
            </h2>
            <p className="mt-4 text-sm text-gray-700">
              Local family-run garage offering MOT testing, servicing, diagnostics & tyres.
            </p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>Convenient location: {data.address}</li>
              <li>Experienced technicians, servicing all makes and models</li>
              <li>Cars, vans, motorhomes, hybrids & EVs</li>
            </ul>
          </div>

          {/* Booking form */}
          <div id="booking" className="bg-white p-6 rounded-xl shadow">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: data.colors.primary }}
            >
              Quick booking
            </h3>
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
              <button
                type="submit"
                className="w-full p-2 rounded font-medium shadow"
                style={{ background: data.colors.primary, color: data.colors.secondary }}
              >
                Send booking by email
              </button>
              <p className="text-xs text-gray-600 mt-2">Or call: {data.phone}</p>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          <h3 className="text-xl font-semibold mb-4" style={{ color: data.colors.primary }}>
            Our services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border shadow-sm bg-gray-50">
              <div className="text-sm font-medium" style={{ color: data.colors.primary }}>MOT</div>
              <p className="text-sm text-gray-600 mt-1">Class 4 MOT testing while-you-wait.</p>
            </div>
            <div className="p-4 rounded-xl border shadow-sm bg-gray-50">
              <div className="text-sm font-medium" style={{ color: data.colors.primary }}>SERVICE</div>
              <p className="text-sm text-gray-600 mt-1">Interim & full servicing for all makes.</p>
            </div>
            <div className="p-4 rounded-xl border shadow-sm bg-gray-50">
              <div className="text-sm font-medium" style={{ color: data.colors.primary }}>DIAGNOSTICS</div>
              <p className="text-sm text-gray-600 mt-1">Warning lights, fault finding & repairs.</p>
            </div>
            <div className="p-4 rounded-xl border shadow-sm bg-gray-50">
              <div className="text-sm font-medium" style={{ color: data.colors.primary }}>TYRES</div>
              <p className="text-sm text-gray-600 mt-1">Supply, fit & balancing.</p>
            </div>
          </div>

          {/* Quick CTA under the grid */}
          <div className="mt-6 flex gap-3">
            <a
              href="#booking"
              className="px-4 py-2 rounded-xl shadow text-white"
              style={{ background: data.colors.primary }}
            >
              Book now
            </a>
            <a
              href={telHref}
              className="px-4 py-2 rounded-xl border"
              style={{ borderColor: data.colors.primary, color: data.colors.primary }}
            >
              Call {data.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          <h3 className="text-xl font-semibold mb-2" style={{ color: data.colors.primary }}>
            What customers say
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border bg-gray-50 shadow-sm">
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-2 text-sm text-gray-800">
                “Booked an MOT at short notice, friendly team and quick turnaround.”
              </p>
              <div className="mt-3 text-xs text-gray-500">— Alex P.</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50 shadow-sm">
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-2 text-sm text-gray-800">
                “Honest diagnostics and fair pricing. Will use again for servicing.”
              </p>
              <div className="mt-3 text-xs text-gray-500">— Priya S.</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50 shadow-sm">
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-2 text-sm text-gray-800">
                “Easy to book online, polite staff, and car ready on time.”
              </p>
              <div className="mt-3 text-xs text-gray-500">— Martin K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="bg-white p-6 md:p-10">
        <h3 className="text-xl font-semibold mb-4" style={{ color: data.colors.primary }}>
          Find us
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl shadow">
            <h4 className="font-medium">{data.name}</h4>
            <p>{data.address}</p>
            {data.hours.map(h => (
              <p key={h}>{h}</p>
            ))}
            <a
              href={telHref}
              className="block mt-2 px-3 py-2 rounded-xl shadow text-center"
              style={{ background: data.colors.primary, color: data.colors.secondary }}
            >
              Call {data.phone}
            </a>
          </div>
          <iframe
            src={data.mapEmbed}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}



