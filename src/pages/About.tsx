import {
  IconTemplateOutline,
  IconColorSwitchOutline,
  IconDatabaseOutline,
  IconServerOutline,
} from "../components/Icons";

//Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/software?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
export const About = () => (
  <section className="my-2 bg-white rounded-lg">
    <div className="relative flex items-center w-full h-40">
      <img
        className="object-fill w-full h-24 filter blur-none"
        src="/banner.jpg"
        alt="Shot by Markus Spiske on Unsplash"
      />
      <img
        className="absolute ml-5 border-4 border-white rounded-full backdrop-filter backdrop-blur-lg"
        src="/profilepic.jfif"
        alt="Parammal Harsh Harish"
        height={150}
        width={150}
      />
    </div>

    <div className="px-5 pb-2 space-y-1 tracking-wider border-b border-gray-200">
      <div className="-space-y-1">
        <div className="text-2xl font-semibold">Parammal Harsh Harish</div>
        <div className="text-lg font-semibold">Technical Analyst</div>
      </div>
      <div className="text-sm">
        <div>Doyen Infosolutions Pvt. Ltd.</div>
        <div>Vivekanand Education Society's Institute of Technology</div>
      </div>
    </div>

    <p className="px-5 py-2 text-sm tracking-widest">
      Technical analyst with 5+ years of experience in full stack development. I
      am persistent, quick learner and intereted in troubleshoot problems and
      identify solution that is simple and scalable.
    </p>

    <div className="px-5 pb-4 tracking-widest">
      <div className="pb-1 font-semibold">What I offer</div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="tm-card">
          <div>
            <div className="tm-card-body">
              <div className="tm-card-icon">
                <IconTemplateOutline />
              </div>
              <div className="tm-card-body-header">Frontend Development</div>
            </div>
          </div>
          <div className="tm-card-body-description">
            Attractive and scalable SPA using HTML, CSS, Javascript React,
            NextJs, Typescript, Tailwind.
          </div>
        </div>

        <div className="tm-card">
          <div>
            <div className="tm-card-body">
              <div className="tm-card-icon">
                <IconColorSwitchOutline />
              </div>
              <div className="tm-card-body-header">UI/UX Development</div>
            </div>
          </div>
          <div className="tm-card-body-description">
            Minimalistic and user-friendly user interface.
          </div>
        </div>

        <div className="tm-card">
          <div>
            <div className="tm-card-body">
              <div className="tm-card-icon">
                <IconServerOutline />
              </div>
              <div className="tm-card-body-header">API Development</div>
            </div>
          </div>
          <div className="tm-card-body-description">
            REST API using Express and Springboot.
          </div>
        </div>

        <div className="tm-card">
          <div>
            <div className="tm-card-body">
              <div className="tm-card-icon">
                <IconDatabaseOutline />
              </div>
              <div className="tm-card-body-header">Backend Development</div>
            </div>
          </div>
          <div className="tm-card-body-description">
            Database management using SQL and NoSQL.
          </div>
        </div>
      </div>
    </div>
  </section>
);
