import Button from "../UI/Button";
import { dataCol_1, dataCol_2 } from "../BoilerplateData/faq";
import { JSX, useEffect, useRef } from "react";

//@ts-ignore
import Faq from "react-faq-component";

const styles = {
    bgColor: "transparent",
    rowTitleColor: "var(--white)",
    rowContentColor: "var(--gray-5)",
    arrowColor: "var(--white)",
    rowTitleTextSize: "1.25rem",
    rowContentPaddingBottom: "1.5rem",
};

const FAQ: React.FC = () => {

    const questionsWrapper = useRef<HTMLDivElement | null>(null);

    const seedQuestionRowIndexes = (): void => {
        const questionColumns =
            questionsWrapper.current?.querySelectorAll(".faq-body");

        console.log(questionsWrapper.current);

        questionColumns!.forEach((col, i) => {
            const rows = col.querySelectorAll(".row-title");

            console.log(col);

            rows!.forEach((row, j) => {
                row.setAttribute(
                    "style",
                    `--question-index: '0${i === 0 ? j + 1 : j + 5}';`
                );
            });
        });
    };

    useEffect(seedQuestionRowIndexes, []);


    return (
        <section id="faq" className="py-24">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="h2">
                            Explore our wide variety of categories
                        </h2>
                        <p className="mt-8 text-gray-5">
                            Whether you're looking for a comedy to make you
                            laugh, a drama to make you think, or a documentary
                            to learn something new
                        </p>
                    </div>

                    <Button text="Ask a Question" />
                </div>

                <div ref={questionsWrapper} className="mt-16 flex gap-12">
                    <div className="px-8">
                        <Faq data={dataCol_1} styles={styles} />
                    </div>
                    <div className="px-8">
                        <Faq data={dataCol_2} styles={styles} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
