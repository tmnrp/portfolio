import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import {
  IconAntDesignFilled,
  IconAzureDevOpsOutline,
  IconBitbucketOutline,
  IconCSSFilled,
  IconExtJsOutline,
  IconFirebaseFilled,
  IconFramerMotionFilled,
  IconGITFilled,
  IconGithubFilled,
  IconHTMLFilled,
  IconJavaOutline,
  IconJavascriptFilled,
  IconJiraOutline,
  IconJQueryOutline,
  IconMaterialUIFilled,
  IconMongoDBOutline,
  IconMySqlOutline,
  IconNextjsOutline,
  IconPostgresOutline,
  IconPostmanOutline,
  IconReactOutline,
  IconSpringbootOutline,
  IconSQLOutline,
  IconTailwindCSSOutline,
  IconTortoiseOutline,
  IconTypescriptFilled,
} from "./Icons";
import { Title } from "./Title";

export const Resume = () => {
  return (
    <div
      id="resume"
      className={`
      bg-stone-50
      `}
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <Title text="Resume" />

        <div className="flex flex-col space-y-5">
          <fieldset className="border border-solid border-gray-300 p-3">
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="school"
              />
              <p className="uppercase tracking-widest">Education</p>
            </legend>

            <div className="grid grid-rows-[auto_1fr] gap-5 md:grid-rows-none md:grid-cols-2">
              <Masters />
              <Graduation />
            </div>
          </fieldset>

          <fieldset className="border border-solid border-gray-300 p-3">
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="business_center"
              />
              <p className="uppercase tracking-widest">Experience</p>
            </legend>

            <div className="grid grid-rows-[auto_1fr] gap-5 md:grid-rows-none md:grid-cols-2">
              <DoyenTA />

              <DoyenSSE />

              <IxiaSE />

              <VistaarSE />

              <VistaarIntern />
            </div>
          </fieldset>

          <fieldset className="border border-solid border-gray-300 p-3">
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="business_center"
              />
              <p className="uppercase tracking-widest">Tech stack</p>
            </legend>

            <div className="grid grid-rows-[auto_1fr] gap-5 md:grid-rows-none md:grid-cols-2">
              <TSLanguages />
              <TSLibrary />
              <TSFramework />
              <TSDB />
              <TSTT />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

//
const Masters = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">Masters</p>
      <p className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        {`Vivekanand Education Society's Institute of Technology`}
      </p>
    </div>
    <div className="text-sm space-y-1">
      <p>Minimalistic and user-friendly user interface.</p>
      <p>
        Attractive and scalable SPA using HTML, CSS, Javascript React, NextJs,
        Typescript, Tailwind.
      </p>
    </div>
  </div>
);

//
const Graduation = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">Graduation</p>

      <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        <p>{`Model college`}</p>
        <p>{`Accredited "A" grade by NAAC`}</p>
      </div>

      <p className="text-sm tracking-widest text-gray-800 border-b border-stone-300"></p>
    </div>
    <div className="text-sm space-y-1">
      <p>Minimalistic and user-friendly user interface.</p>
      <p>
        Attractive and scalable SPA using HTML, CSS, Javascript React, NextJs,
        Typescript, Tailwind.
      </p>
    </div>
  </div>
);

//
const DoyenTA = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">
        Technical analyst
      </p>
      <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        <p>{`Doyen Infosolutions Pvt. Ltd.`}</p>
        <p className="text-xs">{`May 2021 - Present · 1y 1m`}</p>
      </div>
    </div>
    <div className="text-sm space-y-1">
      <ul className="list-disc list-inside">
        <li>
          Project planning, requirement gathering, feasibility, estimation,
          design wireframes
        </li>
        <li>Implementation of HATEOAS security</li>
        <li>Access + Refresh token management</li>
        <li>Client subscription handling (SaaS)</li>
        <li>Client demonstration</li>
        <li>Training / Knowledge sharing</li>
        <li>I.I.S. deployment strategy, Sub-directory deployment</li>
        <li>Sub-directory deployment</li>
        <li>NPM packaging</li>
      </ul>
    </div>
  </div>
);

//
const DoyenSSE = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">
        Senior software engineer
      </p>
      <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        <p>{`Doyen Infosolutions Pvt. Ltd.`}</p>
        <p className="text-xs">{`May 2020 - April 2020 · 1y`}</p>
      </div>
    </div>
    <div className="text-sm space-y-1">
      <ul className="list-disc list-inside">
        <li>Full stack project development from scratch.</li>
        <li>GIT branching strategy</li>
        <li>Password management via bcrypt</li>
        <li>Authentication management via JWT + Private/Public keys</li>
        <li>User management (in-house and fusionauth)</li>
        <li>Built in-house reusable framework</li>
        <li>Route / Navigation UI filtering</li>
        <li>CI-CI implementation</li>
        <li>Application end to end testing</li>
        <li>Agile project management with Atlassian</li>
      </ul>
    </div>
  </div>
);

//
const IxiaSE = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">
        Software engineer
      </p>
      <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        <p>{`Ixia solutions L.L.P.`}</p>
        <p className="text-xs">{`July 2018 - March 2020 · 1y 9m`}</p>
      </div>
    </div>
    <div className="text-sm space-y-1">
      <ul className="list-disc list-inside">
        <li>Product maintenance + enhancement + polyfilling to support I.E.</li>
        <li>Full stack development stack</li>
        <li>Migration Struts to Spring</li>
        <li>Upgrade ExtJs from version 4 to 6</li>
        <li>Upgrade recaptcha from v1 to v2 Implementation : SendGrid</li>
        <li>
          Version controlling GIT Agile project management with microsoft Azure
        </li>
        <li>Application end to end testing Recaptcha v3</li>
        <li>M.E.R.N. stack</li>
      </ul>
    </div>
  </div>
);

//
const VistaarSE = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">
        Software engineer
      </p>
      <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        <p>{`Vistaar technologies`}</p>
        <p className="text-xs">{`July 2016 - March 2018 · 1y 1m`}</p>
      </div>
    </div>
    <div className="text-sm space-y-1">
      <ul className="list-disc list-inside">
        <li>Ticket resolutions</li>
        <li>Creation of custom components to reduce code redundancy</li>
        <li>Component testing, documentation and demonstration</li>
        <li>P.O.C. ElasticSearch, Ext-React, ReactjsTicket</li>
      </ul>
    </div>
  </div>
);

//
const VistaarIntern = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800">Intership</p>
      <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
        <p>{`Vistaar technologies`}</p>
        <p className="text-xs">{`July 2016 - March 2018 · 1y 1m`}</p>
      </div>
    </div>
    <div className="text-sm space-y-1">
      <ul className="list-disc list-inside">
        <li>
          Documentation, pull request, code base, internal framework, version
          controlling (SVN) analysis/study
        </li>
        <li>Sencha ExtJs javascript framework study</li>
        <li>Internal framework testing</li>
      </ul>
    </div>
  </div>
);

//
const TSLanguages = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
        Languages
      </p>
    </div>

    <div className="text-sm flex flex-wrap gap-4">
      <IconJavascriptFilled className="h-8 w-8 text-yellow-500 flex-shrink-0" />
      <IconTypescriptFilled className="h-8 w-8 text-blue-500 flex-shrink-0" />
      <IconHTMLFilled className="h-8 w-8 text-orange-500 flex-shrink-0" />
      <IconCSSFilled className="h-8 w-8 text-sky-500 flex-shrink-0" />
      <IconJavaOutline className="h-8 w-8 text-red-500 flex-shrink-0" />
      <IconSQLOutline className="h-8 w-8 text-orange-700 flex-shrink-0" />
    </div>
  </div>
);

//
const TSLibrary = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
        Library
      </p>
    </div>

    <div className="text-sm flex flex-wrap gap-4">
      <IconReactOutline className="h-8 w-8 text-blue-500 flex-shrink-0" />
      <IconJQueryOutline className="h-8 w-8 text-indigo-500 flex-shrink-0" />
      <IconAntDesignFilled className="h-8 w-8 text-blue-400 flex-shrink-0" />
      <IconMaterialUIFilled className="h-8 w-8 text-sky-500 flex-shrink-0" />
      <IconFramerMotionFilled className="h-8 w-8 text-purple-500 flex-shrink-0" />
    </div>
  </div>
);

//
const TSFramework = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
        Framework
      </p>
    </div>

    <div className="text-sm flex flex-wrap gap-4">
      <IconNextjsOutline className="h-8 w-8 text-gray-800 flex-shrink-0" />
      <IconTailwindCSSOutline className="h-8 w-8 text-blue-500 flex-shrink-0" />
      <IconExtJsOutline className="h-8 w-8 text-green-500 flex-shrink-0" />
      <IconSpringbootOutline className="h-8 w-8 text-emerald-500 flex-shrink-0" />
    </div>
  </div>
);

//
const TSDB = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
        Databases
      </p>
    </div>

    <div className="text-sm flex flex-wrap gap-4">
      <IconMySqlOutline className="h-8 w-8 text-blue-600 flex-shrink-0" />
      <IconPostgresOutline className="h-8 w-8 text-blue-400 flex-shrink-0" />
      <IconMongoDBOutline className="h-8 w-8 text-green-500 flex-shrink-0" />
      <IconFirebaseFilled className="h-8 w-8 text-yellow-500 flex-shrink-0" />
    </div>
  </div>
);

//
const TSTT = () => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-white shadow-md rounded-lg
    `}
  >
    <div>
      <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
        {`Tools && Technologies`}
      </p>
    </div>

    <div className="text-sm flex flex-wrap gap-4">
      <IconGITFilled className="h-8 w-8 text-orange-500 flex-shrink-0" />
      <IconGithubFilled className="h-8 w-8 text-gray-500 flex-shrink-0" />
      <IconBitbucketOutline className="h-8 w-8 text-blue-500 flex-shrink-0" />
      <IconJiraOutline className="h-8 w-8 text-blue-700 flex-shrink-0" />
      <IconAzureDevOpsOutline className="h-8 w-8 text-sky-500 flex-shrink-0" />
      <IconPostmanOutline className="h-8 w-8 text-orange-500 flex-shrink-0" />
      <IconTortoiseOutline className="h-8 w-8 text-cyan-500 flex-shrink-0" />
    </div>
  </div>
);
