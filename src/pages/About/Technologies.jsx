const Technologies = () => {
  return (
    <section className="mb-6 rounded-lg border border-gray-300/50 bg-neutral-100/20 px-4 py-8 shadow-sm">
      <h2 className="text-xl font-bold">Technologies Used</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        <section>
          <h3 className="font-lg font-semibold">Frontend</h3>
          <div className="mt-2 space-y-1 text-sm">
            <p>React</p>
            <p>React Router</p>
            <p>Tailwind CSS</p>
            <p>Vite</p>
          </div>
        </section>
        <section>
          <h3 className="font-lg font-semibold">Backend</h3>
          <div className="mt-2 space-y-1 text-sm">
            <p>Nodejs</p>
            <p>Express</p>
            <p>PostgreSql</p>
            <p>Prisma ORM</p>
          </div>
        </section>
        <section>
          <h3 className="font-lg font-semibold">Authentication</h3>
          <div className="mt-2 space-y-1 text-sm">
            <p>JWT</p>
            <p>Bcrypt</p>
            <p>Http-only cookies</p>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Technologies;
