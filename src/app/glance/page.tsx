
import GlanceData from "./GlanceData";

async function page() {
  return (
    <div className='glance-content mx-auto max-w-6xl'>
      <div className='mb-10'><p className='eyebrow mb-3'>Behind the scenes</p><h1 className='text-5xl font-black tracking-tight'>A quick glance.</h1><p className='mt-3 max-w-xl text-lg text-[var(--muted)]'>A live snapshot of my open-source activity and the numbers behind it.</p></div>
      <GlanceData />
    </div>
  );
}

export default page;
