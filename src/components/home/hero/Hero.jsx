import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'
import Header from "../../common/header/Header";

const Hero = () => {
  return (
    <>
    <Header />
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle = 'WELCOME TO SHEMAH' title='Best Online Education' />
                    <p> ShamaH, is an e-learning application designed to meet the evolving needs of high school students in Côte d'Ivoire and Africa. The main objective of ShamaH is to provide students with access to a comprehensive platform offering exercises and courses, enabling them to better prepare for their studies, homework and exams.
</p>
                    <div className="button">
                        <button>
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"></div>
    </>
  );
};

export default Hero