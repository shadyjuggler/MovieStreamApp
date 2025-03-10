import ImageGrid from "../UI/ImageGrid";
import Button from "../UI/Button";

const Promo: React.FC = () => {
    return (
        <section id="promo" className="py-24">
            <div className="container mx-auto ">
                <div className="relative card flex justify-between items-center py-16 px-12 overflow-hidden">
                    <div className="z-20">
                        <h3 className="text-4xl font-bold text-white">
                            Start your free trial today!
                        </h3>
                        <p className="mt-4 text-gray-5">
                            This is a clear and concise call to action that
                            encourages users to sign up for a free trial of
                            StreamVibe.
                        </p>
                    </div>
                    <Button
                        className="z-20"
                        btnType="accent"
                        text="Start Free Trial"
                    />
                    <div
                        className="z-10 absolute top-0 -left-20 h-full pointer-events-none"
                        style={{ width: "110%" }}
                    >
                        <ImageGrid width={44} height={18} count={33} />
                        <span className="absolute top-0 left-0 w-full h-full block red-mask"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
