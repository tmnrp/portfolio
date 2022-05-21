export const Resume = () => {
  return (
    <div
      id="resume"
      className={`
      bg-stone-50
      `}
    >
      <div className="w-full max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-rows-[auto_1fr] gap-5 md:gap-10 md:grid-rows-none md:grid-cols-2">
          <div className="space-y-4 max-w-lg md:flex md:flex-col">
            <Title />
            <div>section 1</div>
          </div>

          <div>
            <div>section 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

//
const Title = () => (
  <div>
    <p
      className={`
        uppercase tracking-widest text-xl font-semibold
      `}
    >
      Resume
    </p>
    <div className="flex items-center mt-1">
      <div className="h-2 w-[60px] bg-black" />
      <div className="h-[2px] w-[60px] bg-black" />
    </div>
  </div>
);
