import { motion } from "framer-motion";
import {
  IconAcademicCapOutline,
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
} from "../components/Icons";
import { Progressbar } from "../components/Progressbar";
import {
  VStaggerContainer,
  VStaggerItemsFromRight,
} from "../utils/framerMotions";

export const Resume = () => {
  return (
    <motion.section
      className="my-1 bg-white border rounded-lg dark:bg-black md:my-3 dark:border-gray-700"
      {...VStaggerItemsFromRight}
    >
      <motion.div
        className="grid grid-cols-1 gap-4"
        variants={VStaggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="mb-1 text-lg font-bold">Experience</div>
            <div className="grid gap-3">
              <motion.div className="tm-card" variants={VStaggerItemsFromRight}>
                <div>
                  <div className="tm-card-body">
                    <div className="tm-card-icon">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C560BAQFi2EH0lu1ALg/company-logo_100_100/0/1519876432408?e=1644451200&amp;v=beta&amp;t=FkuD29DEJdD29EBRV9XiBhPqCCd9BwAYZZQbna-YDQo"
                        loading="lazy"
                        alt="Doyen Infosolutions Private Limited"
                        width="56"
                        height="56"
                      />
                    </div>
                    <div className="tm-card-body-header">
                      <div className="font-semibold">
                        Doyen Infosolutions Private Limited
                      </div>
                      <div className="text-sm">1y 4m</div>
                    </div>
                  </div>
                </div>
                <div className="flex tm-card-body-description">
                  <div className="grid gap-3 px-4 py-2">
                    <div className="tm-timeline">
                      <div className="font-semibold">
                        Technical Analyst (4m)
                      </div>
                      <div>July 2020 – Present</div>
                    </div>

                    <div className="tm-timeline">
                      <div className="font-semibold">
                        Senior Software Engineer (1y )
                      </div>
                      <div>May 2020 – June 2021</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="tm-card" variants={VStaggerItemsFromRight}>
                <div>
                  <div className="tm-card-body">
                    <div className="tm-card-icon">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C510BAQFzSSVCQS1hdg/company-logo_100_100/0/1552551075552?e=1644451200&amp;v=beta&amp;t=ilC3O5sTSkva82cpB43fMNRe0OJZPl4roaDKiHgPx-Q"
                        loading="lazy"
                        alt="IXIA Solutions LLP"
                        width="56"
                        height="56"
                      />
                    </div>
                    <div className="tm-card-body-header">
                      <div className="font-semibold">IXIA Solutions LPP</div>
                      <div className="text-sm">1y 9m</div>
                    </div>
                  </div>
                </div>
                <div className="flex tm-card-body-description">
                  <div className="grid gap-3 px-4 py-2">
                    <div className="tm-timeline">
                      <div className="font-semibold">
                        Software Engineer (4m)
                      </div>
                      <div>Jul 2018 – Mar 2020</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="tm-card" variants={VStaggerItemsFromRight}>
                <div>
                  <div className="tm-card-body">
                    <div className="tm-card-icon">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C4E0BAQFgGzmousUBlg/company-logo_100_100/0/1530194517065?e=1644451200&amp;v=beta&amp;t=PBW1fEp7n4m2lEaBHU2Rg0K5sPnHKqNTGdpNAI_JfBQ"
                        loading="lazy"
                        alt="Vistaar Technologies"
                        width="56"
                        height="56"
                      />
                    </div>
                    <div className="tm-card-body-header">
                      <div className="font-semibold">Vistaar Technologies</div>
                      <div className="text-sm">2y 7m</div>
                    </div>
                  </div>
                </div>
                <div className="flex tm-card-body-description">
                  <div className="grid gap-3 px-4 py-2">
                    <div className="tm-timeline">
                      <div className="font-semibold">
                        Software Engineer (2y 1m)
                      </div>
                      <div>Jul 2016 – Jul 2018</div>
                    </div>

                    <div className="tm-timeline">
                      <div className="font-semibold">Internship (6m)</div>
                      <div>Jan 2016 – Jun 2016</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="mb-1 text-lg font-bold">Education</div>
            <div>
              <motion.div className="tm-card" variants={VStaggerItemsFromRight}>
                <div>
                  <div className="tm-card-body">
                    <div className="tm-card-icon">
                      <IconAcademicCapOutline className="w-10 h-10" />
                    </div>
                    <div className="pr-5 tm-card-body-header">
                      <div className="font-semibold">
                        Vivekanand Education Society's Institute Of Technology
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex tm-card-body-description">
                  <div className="grid gap-3 px-4 py-2">
                    <div className="tm-timeline">
                      <div className="font-semibold">
                        Master of Computer Applications - MCA
                      </div>
                      <div className="flex items-center pr-2 space-x-2">
                        <div className="text-sm font-semibold">CGPI: </div>
                        <div className="italic">7.36</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
          <motion.div variants={VStaggerItemsFromRight}>
            <div className="mb-1 text-lg font-bold">Languages</div>
            <div>
              <div className="p-2 space-y-2 tm-container">
                <Progressbar
                  widthCLS="w-11/12"
                  label="Javascript"
                  icon={<IconJavascriptFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="Typescript"
                  icon={<IconTypescriptFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="HTML"
                  icon={<IconHTMLFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="CSS"
                  icon={<IconCSSFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-8/12"
                  label="JAVA"
                  icon={<IconJavaOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-9/12"
                  label="SQL"
                  icon={<IconSQLOutline className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={VStaggerItemsFromRight}>
            <div className="mb-1 text-lg font-bold">Library</div>
            <div>
              <div className="p-2 space-y-2 tm-container">
                <Progressbar
                  widthCLS="w-11/12"
                  label="React"
                  icon={<IconReactOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-8/12"
                  label="jQuery"
                  icon={<IconJQueryOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="Ant Design"
                  icon={<IconAntDesignFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-10/12"
                  label="Material UI"
                  icon={<IconMaterialUIFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-8/12"
                  label="Framer"
                  icon={<IconFramerMotionFilled className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={VStaggerItemsFromRight}>
            <div className="mb-1 text-lg font-bold">Framework</div>
            <div>
              <div className="p-2 space-y-2 tm-container">
                <Progressbar
                  widthCLS="w-11/12"
                  label="Next.js"
                  icon={<IconNextjsOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="TailwindCSS"
                  icon={<IconTailwindCSSOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="ExtJs"
                  icon={<IconExtJsOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-8/12"
                  label="Springboot"
                  icon={<IconSpringbootOutline className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={VStaggerItemsFromRight}>
            <div className="mb-1 text-lg font-bold">Databases</div>
            <div>
              <div className="p-2 space-y-2 tm-container">
                <Progressbar
                  widthCLS="w-9/12"
                  label="MySQL"
                  icon={<IconMySqlOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-8/12"
                  label="PostgreSQL"
                  icon={<IconPostgresOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-8/12"
                  label="MongoDB"
                  icon={<IconMongoDBOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-9/12"
                  label="Firebase"
                  icon={<IconFirebaseFilled className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={VStaggerItemsFromRight}>
            <div className="mb-1 text-lg font-bold">{`Tools && Technologies`}</div>
            <div>
              <div className="p-2 space-y-2 tm-container">
                <Progressbar
                  widthCLS="w-11/12"
                  label="GIT"
                  icon={<IconGITFilled className="w-6 h-6" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="GitHub"
                  icon={<IconGithubFilled className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="Bitbucket"
                  icon={<IconBitbucketOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-11/12"
                  label="Jira"
                  icon={<IconJiraOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-10/12"
                  label="Azure DevOps"
                  icon={<IconAzureDevOpsOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-9/12"
                  label="Postman"
                  icon={<IconPostmanOutline className="w-4 h-4" />}
                />

                <Progressbar
                  widthCLS="w-10/12"
                  label="Tortoise SVN"
                  icon={<IconTortoiseOutline className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
