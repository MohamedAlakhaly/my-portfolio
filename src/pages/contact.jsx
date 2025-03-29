import Navbar from "../components/navbar";
import {
  faPhone,
  faEnvelope,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import PersonalInfoCard from "../components/personal_info_card";

export default function Contact() {
  return (
    <div className="container mx-auto h-screen">
      {/* //! start navbar section */}
      <Navbar />
      {/* //! end navbar section */}

      {/* //? start main section */}

      {/* //* start contact form section */}

      <div className="p-3 md:flex pt-24">
        <div className="bg-zinc-800 md:w-2/3 p-6 rounded-lg">
          <h1 className="text-3xl text-primary animate__animated animate__fadeInDown">
            Let`&apos;`s work together
          </h1>
          <p className="text-slate-300 py-7 animate__animated animate__fadeInLeft">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            corrupti eius, corporis mollitia totam recusandae veniam neque
            ratione non natus amet quidem dolores officia id sed praesentium
            officiis impedit? Necessitatibus.
          </p>

          {/* //! form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 animate__animated animate__fadeInDown">
            <input
              type="text"
              className="bg-dark rounded-md py-3 border border-gray-600 px-2 text-zinc-300"
              placeholder="First Name"
            />
            <input
              type="text"
              className="bg-dark rounded-md py-3 border border-gray-600 px-2 text-zinc-300"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="bg-dark rounded-md py-3 border border-gray-600 px-2 text-zinc-300"
              placeholder="Email"
            />
            <input
              type="text"
              className="bg-dark rounded-md py-3 border border-gray-600 px-2 text-zinc-300"
              placeholder="Phone"
            />
          </div>

          <textarea
            rows={5}
            type="text"
            maxLength={10}
            className="bg-dark block w-full my-6 rounded-md py-3 border border-gray-600 px-2 text-zinc-300 animate__animated animate__fadeInDown"
            placeholder="Message"
          />
          <button className="bg-primary text-dark py-2.5 px-5 rounded-full hover:bg-opacity-80 animate__animated animate__fadeInUp">
            send message
          </button>
        </div>

        {/* //* end contact form section */}

        {/* //* start personal information section */}
        <div className="py-6 md:pl-7 md:place-self-center">
          <PersonalInfoCard
            cardIcon={faPhone}
            cardTitle="phone"
            cardContent="(+32) 466 16 12 89"
            cardAnimation="animate__animated animate__fadeInDown"
          />
          <PersonalInfoCard
            cardIcon={faEnvelope}
            cardTitle="email"
            cardContent="alakhail755@gmail.com"
            cardAnimation="animate__animated animate__fadeInLeft"
          />
          <PersonalInfoCard
            cardIcon={faLocationDot}
            cardTitle="location"
            cardContent="Belgium - Sint-niklas"
            cardAnimation="animate__animated animate__fadeInUp"
          />
        </div>
        {/* //* end personal information section */}
      </div>

      {/* //? end main section */}
    </div>
  );
}
