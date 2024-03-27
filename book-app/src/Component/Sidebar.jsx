import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Sidebar() {
    // Categories
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44372/api/Category');
                setCategories(response.data); // assuming response.data is an array of categories
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [subsubcategories, setSubsubcategories] = useState({});
    const [selectedSubsubcategory, setSelectedSubsubcategory] = useState(null);

    useEffect(() => {
        const fetchSubsubcategories = async () => {
            try {
                const subsubcategoriesData = {};

                // Lấy dữ liệu subsubcategories cho từng category
                await Promise.all(categories.map(async (category) => {
                    const response = await axios.get(`https://localhost:44372/api/Category/subcategories/id=${category.Id}`);
                    subsubcategoriesData[category.Id] = response.data;
                }));

                setSubsubcategories(subsubcategoriesData);
            } catch (error) {
                console.error('Error fetching subsubcategories:', error);
            }
        };

        if (categories.length > 0) {
            fetchSubsubcategories();
        }
    }, [categories]);

    return (
        <div className="col-sm-3">
            <div className="left-sidebar">
                <h2>Category</h2>
                {categories.map(category => (
                    <div className="panel-group category-products" id="accordian">
                        {/*category-productsr*/}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a
                                        data-toggle="collapse"
                                        data-parent="#accordian"
                                        href={`#subsubcategories_${category.Id}`}
                                    >
                                        <span className="badge pull-right">
                                            <i className="fa fa-plus" />
                                        </span>
                                        {category.Name}
                                    </a>
                                </h4>
                            </div>
                            <div id={`subsubcategories_${category.Id}`} className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                        {subsubcategories[category.Id] && subsubcategories[category.Id].map(subsubcategory => (
                                            <li key={subsubcategory.Id}>
                                                <Link to={"/fillCategory/" + subsubcategory.Id} className="categorySub"
                                                style={{ color: selectedSubsubcategory === subsubcategory.Id ? "orange" : "inherit" }}
                                                onClick={() => setSelectedSubsubcategory(subsubcategory.Id)}
                                                >{subsubcategory.Name} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/*/price-range*/}
                <div className="shipping text-center">
                    {/*shipping*/}
                    <img src="/images/home/shipping.jpg" alt="" />
                </div>
                {/*/shipping*/}
            </div>
        </div>
    )
}

export default Sidebar;