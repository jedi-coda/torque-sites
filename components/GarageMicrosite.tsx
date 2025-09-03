'use client';

function mailtoBooking(fd: FormData) {
  const to = "service@swiftmotors.co.uk";
  const subject = "Booking request via demo microsite";
  const body = `Hi Swift Motor Services,

I'd like to book:

Name: ${fd.get('name')}
Phone: ${fd.get('phone')}
Vehicle Reg: ${fd.get('reg')}
Service: ${fd.get('service')}

Preferred date/time: ${fd.get('when') || 'Any'}
Notes: ${fd.get('notes') || ''}

Thanks!`;
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export default function GarageMicrosite() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-yellow-500 text-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-black/90 text-white grid place-items-center font-bold">SMS</div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Swift Motor Services</h1>
              <p className="text-xs opacity-80">Worthing · MOT · Servicing · Diagnostics · Tyres</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="tel:+441903237137" className="px-3 py-2 bg-black text-white rounded-xl font-medium shadow">Call Willowbrook: 01903 237137</a>
            <a href="#booking" className="px-3 py-2 border border-black rounded-xl font-medium">Book MOT</a>
          </div>
        </div>
      </header>

      {/* Hero + Booking */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6 md:p-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Book your MOT or service in minutes</h2>
            <p className="mt-3 text-gray-700">
              Family-run garage in Worthing with 30+ years’ experience. DVSA MOT testing, servicing, diagnostics & tyres.
            </p>
            <ul className="mt-4 text-sm text-gray-700 space-y-1">
              <li>✓ Two branches in Worthing (Station Rd & Willowbrook Rd)</li>
              <li>✓ Opening hours: Mon–Fri 8:00–17:00</li>
              <li>✓ Cars, vans, motorhomes, hybrids & EVs</li>
            </ul>

            {/* Trust strip */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-2 py-1 rounded-full bg-white shadow">DVSA MOT</span>
              <span className="px-2 py-1 rounded-full bg-white shadow">Bosch Car Service</span>
              <span className="px-2 py-1 rounded-full bg-white shadow">Local · Independent</span>
              <span className="px-2 py-1 rounded-full bg-white shadow">Est. 1994</span>
            </div>
          </div>

          {/* Booking widget */}
          <form
            id="booking"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              mailtoBooking(fd);
            }}
            className="bg-white p-6 rounded-2xl shadow grid gap-3"
          >
            <h3 className="text-xl font-semibold">Quick booking</h3>
            <input className="p-3 border rounded" name="name" placeholder="Your name" required />
            <input className="p-3 border rounded" name="phone" placeholder="Phone" required />
            <input className="p-3 border rounded uppercase" name="reg" placeholder="Vehicle reg (e.g. AB12 CDE)" required />
            <select className="p-3 border rounded" name="service" defaultValue="MOT">
              <option>MOT</option>
              <option>Interim Service</option>
              <option>Full Service</option>
              <option>Diagnostics</option>
              <option>Tyres</option>
              <option>Air Con</option>
            </select>
            <input className="p-3 border rounded" name="when" placeholder="Preferred date/time (optional)" />
            <textarea className="p-3 border rounded min-h-24" name="notes" placeholder="Notes (optional)" />
            <button type="submit" className="bg-yellow-500 text-black py-3 rounded-xl font-bold">
              Send booking by email
            </button>
            <div className="text-xs text-gray-500">
              Or call: <a href="tel:+441903237137" className="underline">01903 237137</a>
            </div>
          </form>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto p-6 md:p-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Services</h3>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { t: "MOT Testing", d: "Class 4, 5 & 7 MOTs with free retest window." },
            { t: "Servicing", d: "Interim & full services to manufacturer spec." },
            { t: "Diagnostics", d: "Modern diagnostics for all makes & models." },
            { t: "Tyres", d: "Supply, fit, balance and puncture repairs." },
          ].map((s) => (
            <div key={s.t} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-bold">{s.t}</h4>
              <p className="text-gray-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple pricing */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-center">Straightforward pricing</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "MOT (Class 4)", p: "£54.85", note: "DVSA max price" },
              { t: "Interim Service", p: "from £149", note: "Oil & filter, checks" },
              { t: "Full Service", p: "from £199", note: "Manufacturer schedule" },
            ].map((c) => (
              <div key={c.t} className="bg-white p-6 rounded-2xl shadow text-center">
                <h4 className="text-lg font-bold">{c.t}</h4>
                <div className="text-3xl font-extrabold mt-2">{c.p}</div>
                <div className="text-xs text-gray-600 mt-1">{c.note}</div>
                <a href="#booking" className="mt-4 inline-block px-4 py-2 rounded-xl border font-medium">Book now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews (static samples for demo) */}
      <section className="max-w-6xl mx-auto p-6 md:p-10">
        <h3 className="text-2xl font-bold mb-6 text-center">What customers say</h3>
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          {[
            { n: "Lisa", q: "Great service, friendly staff, booking was easy." },
            { n: "Ian", q: "Excellent service from the team at Swift Motors." },
            { n: "Richard", q: "Decent. Would recommend." },
          ].map((r) => (
            <div key={r.n} className="bg-white p-6 rounded-2xl shadow">
              <div className="font-semibold">{r.n}</div>
              <p className="mt-2 text-gray-700">“{r.q}”</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">
          Based on public reviews; illustrative snippets for demo.
        </p>
      </section>

      {/* Branches & map */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-center">Find us</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold">Willowbrook Road (Swift 2)</h4>
              <p>Unit 22, Ham Bridge Trading Estate, Willowbrook Road, Worthing BN14 8NA</p>
              <p className="text-sm text-gray-600">Mon–Fri 8:00–17:00</p>
              <div className="mt-2 flex gap-2">
                <a href="tel:+441903237137" className="px-3 py-2 bg-yellow-500 text-black rounded-xl font-medium">Call 01903 237137</a>
                <a href="#booking" className="px-3 py-2 border rounded-xl font-medium">Book MOT</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold">Station Road (Swift 1)</h4>
              <p>74–76 Station Road, Worthing BN11 1JY</p>
              <div className="mt-2 flex gap-2">
                <a href="tel:+441903230017" className="px-3 py-2 bg-yellow-500 text-black rounded-xl font-medium">Call 01903 230017</a>
                <a href="#booking" className="px-3 py-2 border rounded-xl font-medium">Book MOT</a>
              </div>
            </div>
          </div>

          {/* Google Maps embed for Willowbrook */}
          <div className="mt-6 aspect-video rounded-2xl overflow-hidden shadow">
            <iframe
              title="Swift Motor Services Willowbrook"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Unit+22,+Willowbrook+Road,+Worthing+BN14+8NA&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <a
        href="tel:+441903237137"
        className="fixed md:hidden bottom-4 right-4 px-5 py-3 rounded-full bg-yellow-500 text-black font-bold shadow-xl"
      >
        Call to book
      </a>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-8">
        © {new Date().getFullYear()} Swift Motor Services · Demo microsite by TorqueSites
      </footer>
    </div>
  );
}
