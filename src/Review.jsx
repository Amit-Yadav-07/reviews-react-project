import { useState } from "react";
import reviews from "./data";
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from "react-icons/fa";


const Review = () => {

    let [index, setIndex] = useState(0);

    let { name, id, img, designation, about } = reviews[index];

    let prevHandler = () => {

        setIndex((currentIndex) => {

            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                return reviews.length - 1
            }
            return newIndex
        })

    }

    let nextHandler = () => {

        setIndex((currentIndex) => {
            let newIndex = currentIndex + 1;

            if (newIndex > reviews.length - 1) {
                return 0;
            }

            return newIndex;

        })
    }

    let randomClick = () => {

        let randomNumber = Math.floor(Math.random() * reviews.length);

        if (randomNumber === index) {
            return randomNumber = index + 1;
        }
        setIndex(randomNumber)
    }

    return (

        <>
            <article className="parent">
                <h1>Our Review</h1>

                <div className="card-container">
                    <FaQuoteRight className="quote" />
                    <figure>
                        <img id="user-img"
                            src={img}
                            alt={name} />
                    </figure>
                    <strong id="user-name">{name}</strong>
                    <span id="user-designation">{designation}</span>
                    <p id="about-user">
                        {about}
                    </p>
                    <div className="icon-container">
                        <FaChevronCircleLeft className="left-icon" onClick={prevHandler} />
                        <FaChevronCircleRight className="right-icon" onClick={nextHandler} />
                    </div>
                    <button onClick={randomClick} className="btn">surprise me</button>
                </div>
            </article>
        </>

    )
}


export default Review;