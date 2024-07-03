import React from 'react';
import { useNavigate } from 'react-router-dom';

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
]

const Category = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-auto lg:justify-center hide-scroll-bar">
                    {/* main 2 */}
                    <div className="flex space-x-4 lg:space-x-8 px-4">
                        {/* category */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    {/* Image */}
                                    <div onClick={()=>navigate(`/category/${item.name}`)} className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer flex items-center justify-center mb-2">
                                        {/* Image tag */}
                                        <img src={item.image} alt={item.name} className="w-10 h-10 lg:w-16 lg:h-16" />
                                    </div>

                                    {/* Name Text */}
                                    <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar { display: none;}" }} />
        </div>
    );
}

export default Category;