import Image from "next/image";

export const Intro = () => {
  return (
    <section id="intro">
      <article className="clip-container flex lg:justify-center">
        <div className="mt-16 pl-5 w-full lg:w-10/12 md:flex justify-between">
          <div className="space-y-2">
            <div>
              <div className="tracking-widest">{`I'm`}</div>
              <div className="text-3xl uppercase tracking-widest">
                Parammal Harsh
              </div>
            </div>
            <div className="text-xl tracking-widest">Full-stack developer</div>
          </div>

          <div className="flex justify-center mt-4 md:mt-0">
            <div className="w-72 h-72">
              <Image
                className="rounded-3xl object-cover"
                src="https://images.unsplash.com/photo-1648807763220-703398bc459f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Profile pic"
                width={288}
                height={288}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
