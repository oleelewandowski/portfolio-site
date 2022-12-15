import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full text-white bg-gradient-to-b from-gray-900 via-black to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full md:h-full px-3">
        <div className="font-bold uppercase text-2xl sm:text-3xl py-3">
          <p className="mt-10"> About </p>
        </div>
        <div className="text-xl">
          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptates laudantium aspernatur error adipisci expedita,
            repudiandae harum necessitatibus vel fugit recusandae tenetur aut
            obcaecati, sapiente in, distinctio laboriosam doloribus cum? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Qui officiis
            praesentium deleniti voluptatum earum impedit temporibus doloremque
            autem nihil. Quod explicabo reiciendis sit fugiat voluptatibus ipsa
            dolorum quibusdam cum nisi!
          </p>
          <br />
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ut
            animi suscipit quidem facere nam eveniet et odio cupiditate minus
            est accusamus expedita accusantium, dolore ipsum reprehenderit
            reiciendis error quia? Qui officiis praesentium deleniti voluptatum
            earum impedit temporibus doloremque autem nihil. Quod explicabo
            reiciendis sit fugiat voluptatibus ipsa dolorum quibusdam cum nisi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
