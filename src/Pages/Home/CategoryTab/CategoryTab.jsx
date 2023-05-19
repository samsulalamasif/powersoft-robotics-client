import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';



const CategoryTab = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    return (

        <div data-aos="zoom-in-up"
            data-aos-duration="2000">
            <Tabs>
                <TabList className="w-1/2 text-xl mx-auto text-orange-600 font-serif font-bold text-center">
                    <Tab >Humanoid Robotics</Tab>
                    <Tab>Wheeled Robotics</Tab>
                    <Tab>Legged Robotics</Tab>
                </TabList>

                <TabPanel>
                    <div className='w-1/2 lg:mx-auto gap-20 mt-20 grid sm:grid-cols-1 md:grid-cols-2 '>
                        {
                            toys.slice(0, 2).map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}>
                            </CategoryCard>)

                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='w-1/2 lg:mx-auto gap-20 mt-20 grid sm:grid-cols-1 md:grid-cols-2 '>
                        {
                            toys.slice(2, 4).map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}>
                            </CategoryCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='w-1/2 lg:mx-auto gap-20 mt-20 grid sm:grid-cols-1 md:grid-cols-2 '>
                        {
                            toys.slice(4, 6).map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}>
                            </CategoryCard>)

                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;