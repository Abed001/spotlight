

const About = () => {
    return (
        <section className=" bg-white dark:bg-gray-900" id="about">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-white">
                        Join The Solar Revolution
                    </h2>
                    <p className="mb-4">
                        Spot Light is your trusted partner in solar energy. We provide
                        comprehensive solar solutions, from initial consultation to
                        post-installation support. Our dedicated team of experts will guide
                        you through the entire process, ensuring a seamless and efficient
                        experience. Join the solar revolution and reduce your carbon
                        footprint today.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"
                    />
                    <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="office content 2"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
