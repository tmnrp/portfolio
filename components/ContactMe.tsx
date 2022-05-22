import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { Title } from "./Title";

export const Contact = () => {
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  //
  return (
    <div id="contactme" className={`bg-stone-50`}>
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <Title text="Contact me" />

        <section>
          <NameEmail
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
          />
          <TA desc={desc} setDesc={setDesc} />

          <div className="flex justify-end mt-2 ">
            <button
              className={`
                flex space-x-2 border border-gray-500 px-2 py-1 rounded-md bg-gray-900 text-gray-200
                hover:scale-105 transition-all duration-100 ease-out
              `}
              onClick={() => {
                const nm = name ? `Hi, I'm ${name}. ` : "";
                const sub = `${nm}Let's catch up and discuss business.`;
                window.open(`mailto:${email}?subject=${sub}&body=${desc}`);
              }}
            >
              <GoogleMaterialIcons className="text-sm" iconName="send" />
              <p className="text-sm">Send</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

//
const NameEmail = ({
  name,
  setName,
  email,
  setEmail,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) => (
  <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-2 md:gap-8">
    <div>
      <label htmlFor="name" className="text-sm text-gray-600">
        name
      </label>

      <input
        type="text"
        id="name"
        name="name"
        className={`
          w-full bg-white rounded
          border border-gray-300
          focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
          text-base outline-none text-gray-700 py-1 px-3
          transition-colors duration-200 ease-in-out
        `}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="name" className="text-sm text-gray-600">
        email
      </label>

      <input
        type="email"
        id="name"
        name="name"
        className={`
          w-full bg-white rounded
          border border-gray-300
          focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
          text-base outline-none text-gray-700 py-1 px-3
          transition-colors duration-200 ease-in-out
        `}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
);

//
const TA = ({
  desc,
  setDesc,
}: {
  desc: string;
  setDesc: Dispatch<SetStateAction<string>>;
}) => (
  <div className="mt-2">
    <label htmlFor="name" className="text-sm text-gray-600">
      message
    </label>

    <textarea
      id="name"
      name="name"
      className={`
        w-full bg-white rounded
        border border-gray-300
        focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
        text-base outline-none text-gray-700 py-1 px-3
        transition-colors duration-200 ease-in-out
      `}
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
    />
  </div>
);
