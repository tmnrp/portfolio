import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Image from "next/image";
import { CardTechStack } from "./CardTechStack";
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
          <fieldset
            id="education"
            className="border border-solid border-gray-300 p-3"
          >
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="school"
              />
              <h2 className="uppercase tracking-widest">Education</h2>
            </legend>

            <div className="grid grid-rows-[auto_1fr] gap-5 md:grid-rows-none md:grid-cols-2">
              <Masters />
              <Graduation />
            </div>
          </fieldset>

          <fieldset
            id="experience"
            className="border border-solid border-gray-300 p-3"
          >
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="business_center"
              />
              <h2 className="uppercase tracking-widest">Experience</h2>
            </legend>

            <div className="grid grid-rows-[auto_1fr] gap-5 md:grid-rows-none md:grid-cols-2">
              <DoyenTA />

              <DoyenSSE />

              <IxiaSE />

              <VistaarSE />

              <VistaarIntern />
            </div>
          </fieldset>

          <fieldset
            id="tech-stack"
            className="border border-solid border-gray-300 p-3"
          >
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="business_center"
              />
              <h2 className="uppercase tracking-widest">Tech stack</h2>
            </legend>

            <div className="grid grid-rows-[auto_1fr] gap-5 md:grid-rows-none md:grid-cols-2">
              <TSJSTS />
              <TSFE />
              <TSUIUX />
              <TSDB />
              <TSCTools />
              <TSTools />
              <TSBE />
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
      <h3 className="font-semibold tracking-widest text-gray-800">Masters</h3>
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
      <h3 className="font-semibold tracking-widest text-gray-800">
        Graduation
      </h3>

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
      <h3 className="font-semibold tracking-widest text-gray-800">
        Technical analyst
      </h3>
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
      <h3 className="font-semibold tracking-widest text-gray-800">
        Senior software engineer
      </h3>
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
      <h3 className="font-semibold tracking-widest text-gray-800">
        Software engineer
      </h3>
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
      <h3 className="font-semibold tracking-widest text-gray-800">
        Software engineer
      </h3>
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
      <h3 className="font-semibold tracking-widest text-gray-800">Intership</h3>
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
const TSJSTS = () => (
  <CardTechStack>
    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);

//
const TSFE = () => (
  <CardTechStack>
    <div className="relative h-10 w-10">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="relative h-10 w-20">
      <Image
        src="https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="relative h-10 w-10">
      <Image
        src="https://create-react-app.dev/img/logo.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="relative h-10 w-10">
      <Image
        src="https://brandslogos.com/wp-content/uploads/images/sencha-logo.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);

//
const TSUIUX = () => (
  <CardTechStack>
    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);

//
const TSBE = () => (
  <CardTechStack>
    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-24">
      <Image
        src="https://user-images.githubusercontent.com/12243763/40760176-7f92ceb8-6463-11e8-9c4b-f65907c613ae.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-24">
      <Image
        src="https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://jwt.io/img/pic_logo.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-24">
      <Image
        src="https://seeklogo.com/images/S/splunk-technology-logo-15BAA370ED-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);

//
const TSDB = () => (
  <CardTechStack>
    <div className="relative h-10 w-24">
      <Image
        src="https://seeklogo.com/images/M/mongodb-logo-4A71340576-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-20">
      <Image
        src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/P/postqresql-logo-AD0E066492-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);

//
const TSCTools = () => (
  <CardTechStack>
    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/P/prettier-logo-D5C5197E37-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/E/eslint-logo-4B5C528034-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-28">
      <Image
        src="https://seeklogo.com/images/S/sonarqube-logo-B421B8304D-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);

//
const TSTools = () => (
  <CardTechStack>
    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/J/jira-logo-FD39F795A7-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/B/bitbucket-logo-D072214725-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/B/bamboo-logo-B412762239-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://logodix.com/logo/637183.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className="relative h-10 w-10">
      <Image
        src="https://seeklogo.com/images/D/docker-logo-6D6F987702-seeklogo.com.png"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </div>
  </CardTechStack>
);
