import React from "react";

const InfoSection = ({ styles }) => {
  return (
    <section className={styles.section}>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
        <div className="relative lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="/images/profile/profilepic.jpg"
              alt="Indoors house"
            />
          </div>
        </div>
        <div className="relative flex items-center bg-gray-100">
          <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16" />
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
